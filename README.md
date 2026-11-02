# Ceci Garcia — Portfolio

Responsive professional portfolio for `cecigarcia.uk`, built with Next.js and TypeScript and exported statically for GitHub Pages.

## What the site presents

- Software engineering and technical delivery profile.
- Selected career evidence and capabilities.
- Product case study: **CG Shield**.
- Product case study: **Delivery Lens**.
- Responsive product-interface reconstructions that demonstrate the applications without exposing private project data or source.

Career claims are based on Ceci Garcia's current CV. Product claims are grounded in the corresponding private repositories.

## Local development

```bash
npm install
npm run dev
```

Typecheck and build:

```bash
npm run typecheck
npm run build
```

The production build uses `output: "export"` and writes the static site to `out/`.

## Deployment

`.github/workflows/deploy.yml` builds and deploys `main` to GitHub Pages. `public/CNAME` preserves the custom domain `cecigarcia.uk` in the exported artifact.

GitHub Pages must be configured to deploy with **GitHub Actions** for this workflow.

## Oxford-network-only access

Static site code cannot securely restrict visitors by IP. The intended architecture is Cloudflare in front of the GitHub Pages custom domain, with a WAF rule blocking source IPs outside the approved Oxford network ranges.

See [`docs/oxford-access.md`](docs/oxford-access.md) before enabling access restriction.

## Privacy

- No phone number is published.
- No private repository URLs, credentials, project records or University operational data are published.
- Interface previews contain illustrative/non-live data only.
- Search indexing is discouraged with `robots.txt` and `noindex` metadata; these are not access controls.
