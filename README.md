# Business SP Website

A responsive static website for Business SP, built with HTML, CSS and a small amount of JavaScript. The site's visual assets are stored locally in `assets/`, so project images do not rely on temporary download links.

## Files

- `index.html` — page structure and content
- `style.css` — layout, colours, typography and responsive styling
- `script.js` — mobile navigation and email-based project enquiry form
- `assets/` — Business SP logo and selected creative samples

## Preview locally

Open `index.html` in a modern browser. Keep the `assets` folder beside the HTML file.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload every file and the complete `assets` folder, preserving the folder structure.
3. Open the repository's **Settings → Pages**.
4. Under the build/deployment source, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to provide the site URL.

## Before publishing

- In `script.js`, update `businessEmail` if you want enquiries sent to a different inbox.
- The contact form uses a `mailto:` link, which opens a visitor's email application; it does not send or store form data on a server.
- Replace any portfolio sample image with a final approved version if you update your creative work.

No build tools or package installation are required.
