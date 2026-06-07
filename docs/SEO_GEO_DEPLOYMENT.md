# UCYX SEO / GEO Deployment Notes

## Positioning Sentence

UCYX is a full-stack market entry support partner for Chinese brands going overseas.

UCYX helps brands decide where to enter, design the first test, coordinate delivery, and evaluate ROI before scaling.

## Current Implementation

- `index.html` contains canonical, hreflang, Open Graph, Twitter metadata, a no-JavaScript fallback summary, and Schema.org JSON-LD.
- `public/robots.txt` allows search and AI search crawlers and points to the sitemap.
- `public/sitemap.xml` lists the homepage, services overview, four service pages, company page, and success stories route.
- `public/llms.txt` gives AI retrieval systems a concise UCYX summary.
- The Vue app serves stable crawlable routes for `/services`, `/services/market-entry-strategy`, `/services/entry-design`, `/services/entry-delivery`, `/services/entry-evaluation-roi`, and `/company`.
- The homepage FAQ remains the canonical FAQ surface at `/#faq`; do not duplicate it as a separate static page unless there is a new content need.
- `public/og-ucyx-market-entry.svg` is the current 1200x630 social preview image.

## Structured Data

The homepage JSON-LD defines:

- `Organization` / `ProfessionalService`
- `WebSite`
- `WebPage`
- `FAQPage`
- `OfferCatalog` with four market entry service areas

Use conservative language around ecosystem resources. Do not imply official partnership status unless confirmed.

## Next SEO / GEO Work

1. Add stable language URLs such as `/en/`, `/zh-cn/`, and `/zh-tw/` instead of relying only on frontend language state.
2. Consider exporting the Open Graph preview as PNG or JPG for maximum platform compatibility.
3. Add unique structured data for each service route, especially `Service` entities with clear `provider`, `areaServed`, and `serviceType`.
4. Add search-console-ready verification tags after the deployment domain is confirmed.
5. Create a GEO prompt test suite:
   - What does UCYX do?
   - Which brands is UCYX for?
   - Is UCYX a media agency or software product?
   - Where does NovoChoice fit?
   - What is UCYX's market entry process?
