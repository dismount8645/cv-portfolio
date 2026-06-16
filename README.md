# CV & Portfolio Website

A clean, minimal, static portfolio and CV site built with [Astro](https://astro.build). Designed for GitHub Pages hosting.

## Quick Start

```bash
# Install dependencies
npm install

# Run locally (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## How to Edit Content

### Your personal details

Open `src/data/site.js` and edit your name, headline, bio, links, and about section. Comments in the file explain each field.

### CV

Open `src/data/cv.js` and edit the arrays for education, experience, skills, tools, certifications, and languages. Add or remove entries as needed.

### Projects

Open `src/data/projects.js` and edit the project objects. Each project becomes a card on the Projects page. Fields:

- `title` — Project name
- `description` — Short summary
- `role` — Your role (e.g. "Lead Developer (3-person team)")
- `period` — When you worked on it
- `technologies` — Array of tech/tools used
- `links` — Object with URLs (`github`, `report`, `demo`)

### Adding your CV PDF

1. Export your CV as a PDF file
2. Name it `cv.pdf`
3. Place it in the `public/` folder
4. The download button on the site will link to `/cv.pdf`

### Changing the site title in browser tabs

In `src/layouts/BaseLayout.astro`, change `"Your Name"` in the `siteTitle` variable.

## Project Structure

```
cv-portfolio/
├── public/
│   ├── cv.pdf           ← Replace with your actual CV PDF
│   └── favicon.ico
├── src/
│   ├── components/      ← Reusable UI pieces (Layout, Button, Card, Section)
│   ├── data/            ← All your content in JS files (edit these!)
│   ├── layouts/         ← HTML shell
│   ├── pages/           ← One file per page
│   └── styles/          ← Global CSS
├── .github/workflows/   ← GitHub Actions deployment
├── astro.config.mjs
└── package.json
```

## Deploy to GitHub Pages

### Option 1: Automatic (recommended)

1. Push this repo to GitHub
2. Go to your repo **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to the `main` branch — deployment happens automatically

### Option 2: Manual

```bash
npm run build
```

Then upload the `dist/` folder to GitHub Pages manually.

### Important: Base path

This project automatically detects whether you are deploying as a **user site** (`yourusername.github.io`) or a **project site** (`yourusername.github.io/cv-portfolio`).

- ✅ **User site** (`yourusername/yourusername.github.io`): works out of the box
- ✅ **Project site** (`yourusername/cv-portfolio`): works out of the box

The GitHub Actions workflow (`deploy.yml`) handles both cases automatically.

If deploying manually or to a custom domain, set the `BASE` environment variable before building:

```bash
# For a project site at username.github.io/my-site
BASE=/my-site npm run build

# For a user site at username.github.io
BASE=/ npm run build
```

## Custom Domain (optional)

Add a `CNAME` file to the `public/` folder with your domain (e.g., `myname.com`), then configure DNS and the GitHub Pages settings.

## Design

Nordic/minimal color palette: off-white background, charcoal text, warm gray borders, muted blue accent. System font stack. No JavaScript dependencies on the client side.
