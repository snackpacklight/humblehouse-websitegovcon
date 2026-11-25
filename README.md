# Humble House, LLC website

Next.js App Router and TypeScript website for Humble House, LLC. The public domain is https://humblehouseusa.com. Netlify serves the site.

## Development and verification

Use a supported Node.js 22 or 24 LTS runtime. Run these commands from the directory containing package.json.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Before releasing, run npm run lint, npm audit and npm run build. Use npm start to test the production build locally.

## Pages and business information

The five main pages are Home, About, Services, Experience and Contact. The footer links to an accessible HTML overview at /capability-statement. The sitemap and robots file are served at /sitemap.xml and /robots.txt.

Replace public/HumbleHouse_CapabilityStatement.pdf to update the download while preserving existing links. Keep the HTML overview, metadata, company credentials, services and project examples aligned with the approved statement. Public brand assets are in public/brand.

## Contact delivery

The form posts to /api/contact. Required fields are name, organization, email and message. The server validates the fields and sends plain text through Resend. The visitor receives confirmation only after Resend returns a message ID. On failure, the form retains the inquiry.

Configure RESEND_API_KEY in .env.local for local use and in the Netlify environment for production. CONTACT_TO_EMAIL optionally overrides the destination. The default recipient and verified sender address are riccardo@humblehouseusa.com. Keep credentials outside Git and public assets. Confirm final mailbox delivery in Resend or the receiving inbox after a release test.
