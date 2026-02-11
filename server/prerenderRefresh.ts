import https from "https";
import { getAllCacheUrls } from "./seo";

export function refreshPrerenderCache(token: string): void {
  const urls = getAllCacheUrls();
  console.log(`[Prerender-Refresh] Refreshing cache for ${urls.length} pages...`);

  let completed = 0;
  let errors = 0;

  for (const url of urls) {
    const postData = JSON.stringify({ url, priority: 1 });
    const options = {
      hostname: "api.prerender.io",
      path: "/recache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Prerender-Token": token,
        "Content-Length": Buffer.byteLength(postData)
      },
      timeout: 10000
    };

    const req = https.request(options, (res) => {
      completed++;
      if (res.statusCode !== 200) {
        errors++;
      }
      res.resume();
      if (completed === urls.length) {
        console.log(`[Prerender-Refresh] Done: ${completed - errors}/${urls.length} pages refreshed successfully${errors > 0 ? `, ${errors} errors` : ""}`);
      }
    });

    req.on("error", () => {
      completed++;
      errors++;
      if (completed === urls.length) {
        console.log(`[Prerender-Refresh] Done: ${completed - errors}/${urls.length} pages refreshed, ${errors} errors`);
      }
    });

    req.on("timeout", () => {
      req.destroy();
    });

    req.write(postData);
    req.end();
  }
}
