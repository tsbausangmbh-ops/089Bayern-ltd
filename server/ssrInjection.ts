import { resolveRoute, buildSeoPayload, type SeoPayload } from "./seo";

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildHeadTags(seo: SeoPayload): string {
  const tags: string[] = [];

  tags.push(`<title>${escapeHtml(seo.title)}</title>`);
  tags.push(`<meta name="description" content="${escapeHtml(seo.description)}" />`);
  tags.push(`<meta http-equiv="content-language" content="${seo.inLanguage}" />`);
  tags.push(`<meta name="content-language" content="${seo.inLanguage}" />`);

  tags.push(`<meta property="og:title" content="${escapeHtml(seo.title)}" />`);
  tags.push(`<meta property="og:description" content="${escapeHtml(seo.description)}" />`);
  tags.push(`<meta property="og:site_name" content="${seo.language === "tr" ? "089 Bayern Enerji Sistemleri" : "089 Bayern Energiesysteme"}" />`);
  tags.push(`<meta property="og:type" content="website" />`);
  tags.push(`<meta property="og:locale" content="${seo.locale}" />`);
  tags.push(`<meta property="og:locale:alternate" content="tr_TR" />`);
  tags.push(`<meta property="og:locale:alternate" content="de_DE" />`);
  tags.push(`<meta property="og:locale:alternate" content="en_US" />`);
  tags.push(`<meta property="og:country-name" content="TR" />`);
  tags.push(`<meta property="og:image" content="${seo.ogImage}" />`);
  tags.push(`<meta property="og:image:alt" content="${escapeHtml(seo.description.substring(0, 120))}" />`);
  tags.push(`<meta property="og:image:width" content="1200" />`);
  tags.push(`<meta property="og:image:height" content="630" />`);
  tags.push(`<meta property="og:image:type" content="image/webp" />`);
  tags.push(`<meta property="og:url" content="${seo.canonical}" />`);

  tags.push(`<meta name="twitter:card" content="summary_large_image" />`);
  tags.push(`<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`);
  tags.push(`<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`);
  tags.push(`<meta name="twitter:image" content="${seo.ogImage}" />`);

  tags.push(`<meta name="geo.region" content="${seo.geoData.region}" />`);
  tags.push(`<meta name="geo.placename" content="${seo.geoData.placename}" />`);
  tags.push(`<meta name="geo.position" content="${seo.geoData.lat};${seo.geoData.lng}" />`);
  tags.push(`<meta name="geo.country" content="TR" />`);
  tags.push(`<meta name="ICBM" content="${seo.geoData.lat}, ${seo.geoData.lng}" />`);

  tags.push(`<link rel="canonical" href="${seo.canonical}" />`);
  for (const hl of seo.hreflangLinks) {
    tags.push(`<link rel="alternate" hreflang="${hl.lang}" href="${hl.href}" />`);
  }

  tags.push(`<script type="application/ld+json">${seo.jsonLd}</script>`);

  return tags.join("\n    ");
}

function buildSsrBody(seo: SeoPayload): string {
  return `<div id="ssr-content" style="position:absolute;left:-9999px;overflow:hidden;width:1px;height:1px"><h1>${escapeHtml(seo.title)}</h1><p>${escapeHtml(seo.description)}</p></div>`;
}

export function injectSeoIntoHtml(html: string, urlPath: string): string {
  const route = resolveRoute(urlPath);
  if (!route) return html;

  const seo = buildSeoPayload(route.page, route.language);
  if (!seo) return html;

  const headTags = buildHeadTags(seo);
  const ssrBody = buildSsrBody(seo);

  let result = html;

  if (result.includes('<html')) {
    result = result.replace(/<html([^>]*)lang="[^"]*"/, `<html$1lang="${seo.language}"`);
    if (!result.includes('lang=')) {
      result = result.replace('<html', `<html lang="${seo.language}"`);
    }
    if (seo.language === 'ar') {
      if (result.includes('dir="')) {
        result = result.replace(/dir="[^"]*"/, 'dir="rtl"');
      } else {
        result = result.replace(`lang="${seo.language}"`, `lang="${seo.language}" dir="rtl"`);
      }
    }
  }

  const existingTitle = result.match(/<title>[^<]*<\/title>/);
  if (existingTitle) {
    result = result.replace(existingTitle[0], `<title>${escapeHtml(seo.title)}</title>`);
  }

  result = result.replace('</head>', `    ${headTags}\n  </head>`);

  if (!result.includes('id="ssr-content"')) {
    result = result.replace('<div id="root">', `${ssrBody}\n    <div id="root">`);
  }

  return result;
}

export function patchPrerenderHtml(html: string, urlPath: string): string {
  const hasJsonLd = html.includes('application/ld+json');
  const hasMetaDesc = html.includes('name="description"');
  const hasCanonical = html.includes('rel="canonical"');

  if (hasJsonLd && hasMetaDesc && hasCanonical) {
    return html;
  }

  const route = resolveRoute(urlPath);
  if (!route) return html;
  const seo = buildSeoPayload(route.page, route.language);
  if (!seo) return html;

  let result = html;
  const patchTags: string[] = [];

  if (!hasJsonLd) {
    patchTags.push(`<script type="application/ld+json">${seo.jsonLd}</script>`);
  }
  if (!hasMetaDesc) {
    patchTags.push(`<meta name="description" content="${escapeHtml(seo.description)}" />`);
  }
  if (!hasCanonical) {
    patchTags.push(`<link rel="canonical" href="${seo.canonical}" />`);
    for (const hl of seo.hreflangLinks) {
      patchTags.push(`<link rel="alternate" hreflang="${hl.lang}" href="${hl.href}" />`);
    }
  }

  if (patchTags.length > 0) {
    result = result.replace('</head>', `    ${patchTags.join("\n    ")}\n  </head>`);
  }

  if (!result.includes('id="ssr-content"')) {
    const ssrBody = buildSsrBody(seo);
    if (result.includes('<body')) {
      result = result.replace(/<body([^>]*)>/, `<body$1>${ssrBody}`);
    }
  }

  return result;
}
