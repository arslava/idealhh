# IdealHH Next.js v2

This is a corrected visual build, not the earlier placeholder.

Included:
- 131 non-CDPAP migrated pages from the WordPress SQL
- WordPress uploads copied under `public/wp-content/uploads`
- Current IdealHH logo and theme assets
- Multilingual routing preserved
- CDPAP references filtered from imported blocks/content
- CDPAP redirects in `next.config.js`
- Header/footer and React section components styled to match IdealHH branding more closely

Run:
```bash
npm install
npm run build
npm run dev
```

Important: forms are visual placeholders. Wiring email/CRM submission is the next step.
