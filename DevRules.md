# Development Rules

## Purpose
This repository is Ceci Garcia's professional portfolio and selected-project showcase.

## Architecture
- Use Next.js with the App Router and TypeScript.
- The production build must be a static export suitable for GitHub Pages.
- Keep the site dependency-light and avoid runtime services that GitHub Pages cannot provide.
- Preserve the custom domain `cecigarcia.uk`.

## Design
- Mobile-first and fully responsive from small phones through wide desktop screens.
- Maintain a polished product-design standard: clear hierarchy, accessible contrast, generous spacing, and purposeful motion.
- Project case studies should show product UI/interaction visually, not read like a plain CV.
- Respect `prefers-reduced-motion` and maintain keyboard-visible focus states.

## Content integrity
- Career claims must be grounded in Ceci's CV or verified project repositories.
- Project claims must be grounded in the relevant repository; do not invent customers, adoption numbers, security guarantees, deployment status, or outcomes.
- Do not publish Ceci's phone number.
- Do not expose private repository URLs as if they are publicly accessible.

## Security and access
- Never add secrets, API keys, PATs, credentials, private Azure DevOps data, or production data.
- Do not implement IP restriction in client-side JavaScript. Browser-side checks are not access control.
- Oxford-network-only access must be enforced at the edge (for example Cloudflare) in front of the GitHub Pages custom domain.
- Keep `docs/oxford-access.md` aligned with the chosen edge-access approach.

## Delivery
- Changes land directly on `main` after explicit approval; do not open pull requests for this repository.
- Keep GitHub Pages deployment automated through GitHub Actions.
- Before landing significant visual changes, verify desktop and mobile layouts conceptually and keep static export compatibility.
