# OJHA BUILDTECH — Premium Corporate Website

Brief: /mnt/user-uploads/Build_a_Premium_Corporate_Website_for_OJHA_pasted.md

## Tasks
- [x] Enable Lovable Cloud (backend for enquiries)
- [ ] Brand assets: OBT logo (2 concepts), favicon, hero + project imagery
- [ ] Design system (navy/gold tokens, Manrope) in src/styles.css
- [ ] Central site config (src/config/site.ts) — placeholders flagged, nothing hardcoded unverified
- [ ] Shared components: Header (top strip + sticky nav), Footer, buttons, cards, accordion, breadcrumbs, CTA banner
- [ ] Routes: /, /about, /services, /services/waterproofing, /services/civil-work, /services/infrastructure, /projects, /projects/$slug, /industries, /contact, /request-a-quote, /faq, /privacy-policy, /terms
- [ ] Branded 404 (root notFoundComponent) + sitemap.xml route + robots.txt
- [ ] Enquiries table + RLS + validated server function (honeypot spam check, reference code) wired to contact & quote forms
- [ ] SEO: unique head() per route, canonical (when domain configured), OG tags, alt text
- [ ] Tests: route coverage + enquiry validation rules; run vitest
- [ ] Verify in browser: nav, forms, mobile layout, 404
