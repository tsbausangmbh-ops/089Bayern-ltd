import https from "https";
import { getAllCacheUrls } from "./seo";

const INDEXNOW_KEY = "51ac0cc5860c9195bdc4fc7e4a736ccb";
const HOST = "089bayern.com";

function submitToEngine(engine: string, urls: string[]): void {
  const postData = JSON.stringify({
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  });

  const options = {
    hostname: engine,
    path: "/indexnow",
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": Buffer.byteLength(postData),
    },
    timeout: 15000,
  };

  const req = https.request(options, (res) => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log(`[IndexNow] ${engine}: ${urls.length} URLs submitted successfully`);
    } else {
      console.warn(`[IndexNow] ${engine}: Status ${res.statusCode}`);
    }
    res.resume();
  });

  req.on("error", (err: Error) => {
    console.warn(`[IndexNow] ${engine}: Error - ${err.message}`);
  });

  req.on("timeout", () => {
    console.warn(`[IndexNow] ${engine}: Timeout`);
    req.destroy();
  });

  req.write(postData);
  req.end();
}

export function submitIndexNow(): void {
  const urls = getAllCacheUrls();
  console.log(`[IndexNow] Submitting ${urls.length} URLs to Bing & Yandex...`);

  const batchSize = 100;
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    submitToEngine("api.indexnow.org", batch);
    submitToEngine("yandex.com", batch);
  }
}
