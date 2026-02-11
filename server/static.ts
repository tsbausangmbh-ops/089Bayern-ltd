import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { injectSeoIntoHtml } from "./ssrInjection";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath, {
    maxAge: '1y',
    etag: true,
    lastModified: true,
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      }
      else if (filePath.endsWith('.xml') || filePath.endsWith('.txt')) {
        res.setHeader('Cache-Control', 'public, max-age=86400');
      }
      else {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
    }
  }));

  const indexHtmlPath = path.resolve(distPath, "index.html");
  let indexHtmlTemplate = "";
  try {
    indexHtmlTemplate = fs.readFileSync(indexHtmlPath, "utf-8");
  } catch (e) {
    console.error("[SSR] Failed to read index.html template:", e);
  }

  app.use("*", (req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (indexHtmlTemplate) {
      const urlPath = req.originalUrl.split("?")[0].split("#")[0];
      const injectedHtml = injectSeoIntoHtml(indexHtmlTemplate, urlPath);
      res.setHeader('X-SSR-Injected', 'true');
      res.status(200).send(injectedHtml);
    } else {
      res.sendFile(indexHtmlPath);
    }
  });
}
