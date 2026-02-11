import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

function cleanupSsrTags() {
  const ssrContent = document.getElementById("ssr-content");
  if (ssrContent) ssrContent.remove();

  const head = document.head;
  const ssrSelectors = [
    'meta[name="description"]:not([data-rh])',
    'meta[property^="og:"]:not([data-rh])',
    'meta[name^="twitter:"]:not([data-rh])',
    'meta[name^="geo."]:not([data-rh])',
    'meta[name="ICBM"]:not([data-rh])',
    'meta[http-equiv="content-language"]:not([data-rh])',
    'meta[name="content-language"]:not([data-rh])',
    'link[rel="canonical"]:not([data-rh])',
    'link[rel="alternate"][hreflang]:not([data-rh])',
    'script[type="application/ld+json"]',
  ];
  for (const sel of ssrSelectors) {
    head.querySelectorAll(sel).forEach(el => el.remove());
  }
}

cleanupSsrTags();

createRoot(document.getElementById("root")!).render(<App />);
