# Web Inventions

Portfolio and marketing website for Web Inventions — a web development agency based in Warsaw.

Built with [Astro](https://astro.build), styled with [Tailwind CSS v4](https://tailwindcss.com), deployed to [GitHub Pages](https://webinv.github.io).

## Development

```sh
npm install        # Install dependencies
npm run dev        # Start dev server at localhost:4321
npm run build      # Build production site to ./dist/
npm run preview    # Preview production build locally
```

Requires Node.js >=22.12.0.

## Deployment

The site is deployed to [GitHub Pages](https://webinv.github.io) via a GitHub Actions workflow (`.github/workflows/pages.yml`).

Deployment is triggered by pushing a version tag:

```sh
git tag v1.0.0
git push origin v1.0.0
```

Any tag matching `v*` will start the pipeline, which installs dependencies, builds the site, and deploys the `./dist/` output to GitHub Pages. Deployments can also be triggered manually via `workflow_dispatch` in the Actions tab.
