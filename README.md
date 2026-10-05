# The Flowhost Gallery

Static booking gallery for The Flowhost. It uses relative asset paths, so it works on GitHub Pages project URLs as well as at a domain root.

## Publish free with GitHub Pages

1. Create a **public** GitHub repository and upload these project files with `index.html` at the repository root.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. Push to the `main` branch. The included workflow publishes the site automatically; its URL is `https://<github-username>.github.io/<repository-name>/`.

GitHub Pages is free for public repositories. The first deployment starts after the repository has a commit and Pages is enabled.

## Before publishing

- Gallery photos are optimized WebP files. Keep their filenames and letter case in sync with the paths in `js/gallery.js`.
- Update the WhatsApp number and any booking or review links in `js/gallery.js` if they change.
- The booking form opens WhatsApp; it does not process payments or store reservations.
