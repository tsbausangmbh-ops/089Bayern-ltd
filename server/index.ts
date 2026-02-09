import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import https from "https";

const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

// Health check endpoint for deployment monitoring
app.get("/health", (req, res) => {
  res.status(200).send("ok");
});

// Prerender.io middleware for SEO - renders JS pages for search engine crawlers
const CRAWLER_USER_AGENTS = [
  'googlebot',
  'Google-InspectionTool',
  'AdsBot-Google',
  'APIs-Google',
  'Mediapartners-Google',
  'bingbot',
  'BingPreview',
  'msnbot',
  'yandex',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
  'whatsapp',
  'slackbot',
  'telegrambot',
  'Applebot',
  'duckduckbot',
  'GPTBot',
  'ChatGPT-User',
  'Claude-Web',
  'PerplexityBot',
  'Bytespider',
  'OAI-SearchBot',
  'AhrefsBot',
  'SemrushBot',
  'DotBot',
  'rogerbot',
  'Screaming Frog SEO Spider',
  'MJ12bot',
  'PetalBot'
];

function isCrawler(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return CRAWLER_USER_AGENTS.some(bot => ua.includes(bot.toLowerCase()));
}

if (process.env.PRERENDER_TOKEN) {
  const prerenderToken = process.env.PRERENDER_TOKEN;

  app.use((req: Request, res: Response, next: NextFunction) => {
    const ua = req.headers['user-agent'] || '';
    if (!isCrawler(ua)) return next();
    if (req.method !== 'GET' && req.method !== 'HEAD') return next();
    if (req.path.startsWith('/api/')) return next();
    const ext = req.path.split('.').pop()?.toLowerCase();
    if (ext && ['js', 'css', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'ico', 'woff', 'woff2', 'ttf', 'webp', 'mp4', 'webm'].includes(ext)) return next();

    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers['host'] || 'localhost:5000';
    const prerenderUrl = `https://service.prerender.io/${protocol}://${host}${req.url}`;

    let handled = false;
    function fallback(reason: string) {
      if (handled) return;
      handled = true;
      console.warn(`[Prerender] ${reason} for ${req.url} - serving SPA shell`);
      prerenderReq.destroy();
      next();
    }

    const prerenderReq = https.get(prerenderUrl, {
      headers: {
        'X-Prerender-Token': prerenderToken,
        'User-Agent': ua,
        'Accept': 'text/html',
      },
      timeout: 15000,
    }, (prerenderRes: any) => {
      if (prerenderRes.statusCode === 200) {
        const chunks: Buffer[] = [];
        prerenderRes.on('data', (chunk: Buffer) => { if (!handled) chunks.push(chunk); });
        prerenderRes.on('end', () => {
          if (handled) return;
          const body = Buffer.concat(chunks).toString('utf-8');
          if (body.length > 100) {
            handled = true;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.setHeader('X-Prerender', 'true');
            res.status(200).send(body);
          } else {
            fallback('Empty response');
          }
        });
        prerenderRes.on('error', () => fallback('Response stream error'));
      } else {
        prerenderRes.destroy();
        fallback(`Status ${prerenderRes.statusCode}`);
      }
    });

    prerenderReq.on('error', (err: Error) => fallback(`Network error: ${err.message}`));
    prerenderReq.on('timeout', () => fallback('Timeout'));
  });

  console.log(`[Prerender] SSR activated for ${CRAWLER_USER_AGENTS.length} crawler types (with fallback)`);
} else {
  console.log('[Prerender] Disabled - no PRERENDER_TOKEN set');
}

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );

  // Timeout settings for long-running connections
  httpServer.keepAliveTimeout = 120000;
  httpServer.headersTimeout = 120000;
})();
