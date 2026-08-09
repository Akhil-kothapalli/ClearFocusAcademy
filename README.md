# ClearFocus Academy

Premium React + Vite + TypeScript website for CLEARFOCUS ACADEMY.

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Lucide React
- Framer Motion

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Editable Site Content

Update contact details, WhatsApp number, fees, program durations, social URLs and CTA messages in:

```text
src/config/siteConfig.ts
```

No personal data is stored. The enquiry form validates fields and opens WhatsApp with a generated message, with an email fallback.

## Deploy Free With Cloudflare Pages

1. Push this project to a GitHub repository.
2. Open Cloudflare Dashboard.
3. Go to **Workers & Pages**.
4. Select **Create application**.
5. Choose **Pages**.
6. Connect your GitHub account and select the repository.
7. Use these build settings:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`
8. Click **Save and Deploy**.
9. After deployment, update any custom domain settings in Cloudflare if needed.

## Deploy Free With GitHub Pages

1. Push this project to GitHub.
2. Install the deploy helper:

```bash
npm install --save-dev gh-pages
```

3. Add these scripts to `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

4. If deploying to `https://USERNAME.github.io/REPO_NAME/`, set `base: '/REPO_NAME/'` in `vite.config.ts`.
5. Run:

```bash
npm run deploy
```

6. In GitHub, open **Settings → Pages** and confirm the `gh-pages` branch is selected.

Cloudflare Pages is recommended because it does not require changing Vite base paths for most custom-domain deployments.
