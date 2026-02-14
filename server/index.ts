import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import https from "https";
import { patchPrerenderHtml, injectSeoIntoHtml } from "./ssrInjection";
import { refreshPrerenderCache } from "./prerenderRefresh";
import { submitIndexNow } from "./indexNow";

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

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    version: "2026-02-14-v5",
    prerender: !!process.env.PRERENDER_TOKEN,
    env: process.env.NODE_ENV || "development",
    deploy: process.env.FORCE_DEPLOY || "none",
    uptime: Math.floor(process.uptime()),
  });
});

app.use((req, res, next) => {
  res.setHeader('X-Build-Version', '2026-02-14-v5');
  res.setHeader('X-Prerender-Enabled', process.env.PRERENDER_TOKEN ? 'yes' : 'no');
  next();
});

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

const STATIC_EXTENSIONS = ['js', 'css', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'ico', 'woff', 'woff2', 'ttf', 'webp', 'mp4', 'webm', 'xml', 'txt', 'json', 'map'];

function isStaticAsset(path: string): boolean {
  const ext = path.split('.').pop()?.toLowerCase();
  return !!(ext && STATIC_EXTENSIONS.includes(ext));
}

function hasSsrContent(html: string): boolean {
  if (html.includes('<div id="root">') || html.includes('<div id="root" ')) {
    const rootStart = html.indexOf('<div id="root"');
    const afterRoot = html.substring(rootStart);
    const rootTagEnd = afterRoot.indexOf('>');
    if (rootTagEnd < 0) return false;
    const contentAfterTag = afterRoot.substring(rootTagEnd + 1);
    const nextClosingDiv = contentAfterTag.indexOf('</div>');
    if (nextClosingDiv < 0) return false;
    const inner = contentAfterTag.substring(0, nextClosingDiv).trim();
    if (inner.length >= 50) return true;
  }
  const textContent = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return textContent.length > 500;
}

app.use((req: Request, res: Response, next: NextFunction) => {
  const prerenderToken = process.env.PRERENDER_TOKEN;
  if (!prerenderToken) return next();

  const ua = req.headers['user-agent'] || '';
  if (!isCrawler(ua)) return next();
  if (req.method !== 'GET' && req.method !== 'HEAD') return next();
  if (req.path.startsWith('/api/')) return next();
  if (isStaticAsset(req.path)) return next();

  const prerenderUrl = `https://service.prerender.io/https://089bayern.com${req.url}`;

  let handled = false;
  function fallback(reason: string) {
    if (handled) return;
    handled = true;
    console.warn(`[Prerender] ${reason} for ${req.url} - falling back to SSR injection`);
    prerenderReq.destroy();
    res.setHeader('X-SSR-Source', 'own-fallback');
    res.setHeader('X-Prerender-Fail', reason);
    (req as any)._prerenderFailed = true;
    next();
  }

  const prerenderReq = https.get(prerenderUrl, {
    headers: {
      'X-Prerender-Token': prerenderToken,
      'User-Agent': ua,
      'Accept': 'text/html',
    },
    timeout: 25000,
  }, (prerenderRes: any) => {
    if (prerenderRes.statusCode === 200) {
      const chunks: Buffer[] = [];
      prerenderRes.on('data', (chunk: Buffer) => { if (!handled) chunks.push(chunk); });
      prerenderRes.on('end', () => {
        if (handled) return;
        let body = Buffer.concat(chunks).toString('utf-8');
        const hasContent = body.length > 500 && hasSsrContent(body);
        console.log(`[Prerender] Response for ${req.url}: ${body.length} bytes, hasContent: ${hasContent}`);
        if (hasContent) {
          handled = true;
          body = patchPrerenderHtml(body, req.path);
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.setHeader('X-SSR-Source', 'prerender');
          res.setHeader('X-Prerender', 'true');
          res.setHeader('X-Prerender-Size', String(body.length));
          res.setHeader('X-SSR-Safety-Net', body.includes('application/ld+json') ? 'present' : 'injected');
          res.status(200).send(body);
        } else {
          fallback(body.length <= 500 ? `Empty response (${body.length} bytes)` : 'No rendered content detected');
        }
      });
      prerenderRes.on('error', () => fallback('Response stream error'));
    } else {
      prerenderRes.destroy();
      fallback(`HTTP ${prerenderRes.statusCode}`);
    }
  });

  prerenderReq.on('error', (err: Error) => fallback(`Network: ${err.message}`));
  prerenderReq.on('timeout', () => fallback('Timeout (25s)'));
});

console.log(`[Prerender] Crawler detection active for ${CRAWLER_USER_AGENTS.length} bot types (runtime token check)`);

app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return next();
  if (req.path.startsWith('/api/')) return next();
  if (isStaticAsset(req.path)) return next();

  const originalSend = res.send;
  const originalEnd = (res as any).end as Function;
  let alreadyInjected = false;

  function injectIfHtml(body: any): any {
    if (alreadyInjected) return body;
    if (typeof body === 'string' && (body.includes('<!DOCTYPE html') || body.includes('<html'))) {
      alreadyInjected = true;
      const urlPath = req.originalUrl.split('?')[0].split('#')[0];
      const injected = injectSeoIntoHtml(body, urlPath);
      res.setHeader('X-SSR-Injected', 'true');
      if (!res.getHeader('X-SSR-Source')) {
        res.setHeader('X-SSR-Source', 'own-fallback');
      }
      return injected;
    }
    return body;
  }

  res.send = function (body: any) {
    return originalSend.call(this, injectIfHtml(body));
  };

  (res as any).end = function (chunk: any, encoding?: BufferEncoding, callback?: () => void) {
    if (chunk && typeof chunk === 'string') {
      chunk = injectIfHtml(chunk);
    }
    return originalEnd.call(this, chunk, encoding, callback);
  };

  next();
});

console.log('[SSR] Server-side SEO injection active for all visitors');

export { injectSeoIntoHtml };

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

  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);

      if (process.env.NODE_ENV === "production") {
        if (process.env.PRERENDER_TOKEN) {
          setTimeout(() => {
            refreshPrerenderCache(process.env.PRERENDER_TOKEN!);
          }, 5000);
        }
        setTimeout(() => {
          submitIndexNow();
        }, 10000);
      }
    },
  );

  httpServer.keepAliveTimeout = 120000;
  httpServer.headersTimeout = 120000;
})();
