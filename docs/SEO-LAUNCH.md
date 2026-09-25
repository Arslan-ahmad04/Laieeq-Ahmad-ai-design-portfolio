# SEO launch checklist

## Before launch

1. Confirm the production domain and set NEXT_PUBLIC_SITE_URL to its HTTPS origin without a path. The site uses this one value for canonical URLs, Open Graph URLs, Person URLs, and sitemap entries.
2. Replace reference project images with verified original artwork and update the image captions, alt text, dimensions, and artworkVerified flags. The homepage and portfolio listing require all project previews to be verified before indexing is enabled for them.
3. Keep SITE_INDEXING=false on every preview. Set it to true only for the approved production deployment and rebuild. Inspect rendered HTML, not only environment settings.
4. Confirm each eligible page has its own title, description, absolute canonical, index/follow robots metadata, and social preview. Incomplete case studies must remain noindex and absent from the sitemap. The local preview deliberately has no canonical and an empty sitemap. Next.js may use localhost for local social-image URLs until the domain is configured.
5. Inspect /robots.txt and /sitemap.xml on the production domain. With production indexing enabled, crawlers can reach pages to read noindex tags; blocking a URL in robots.txt alone does not remove it from search.
6. Check /opengraph-image, /icon.svg, contact links, mobile navigation, image loading, and unknown-route 404 responses. Add a CV only when the real PDF is available.

## Google Search Console

Add a Domain property for the chosen domain, then publish the DNS verification record supplied by Search Console and verify ownership. Alternatively, use the supported URL-prefix verification flow. Follow [Google's site ownership instructions](https://support.google.com/webmasters/answer/9008080).

Submit /sitemap.xml in the property's Sitemaps report after it contains the intended public URLs. Google recommends absolute canonical URLs and explains that submission does not guarantee crawling or indexing. See [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

Inspect the homepage and a representative finished case study with URL Inspection. Check the indexed version and live test, verify the canonical and indexing status, and request indexing when the page is ready. Use [Google's URL Inspection guide](https://support.google.com/webmasters/answer/9012289).

After launch, review Search Console's Page indexing and Performance reports for exclusions, impressions, clicks, search queries, and landing pages. Investigate changes against deployment dates and content changes; do not assume a ranking change has one cause. No rankings or traffic levels are guaranteed.

