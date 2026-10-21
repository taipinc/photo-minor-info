# Parsons Photography Minor info page

A small, static information site for the Photography Minor at Parsons. Built with Astro, Markdown, and GitHub Pages. It has no CMS, database, visitor accounts, or client-side application framework.

Live site: [taipinc.github.io/photo-minor-info](https://taipinc.github.io/photo-minor-info/).

The [official Photography Minor program page](https://www.newschool.edu/undergrad-minors/photography/) is the authoritative source for requirements and program information. Preserve the linked disclosure on this site.

## For editors

Read [Editing content](docs/CONTENT.md) for announcements, courses, semester updates, the welcome message, and images. You can edit Markdown directly on GitHub without installing anything.

**Current content:** the site has one announcement for Remixing the Camera. The 36 courses were imported from the official minor page on October 20, 2026. Spring 2027 availability is demonstration data: 25 Yes and 11 No values selected once at the coordinator’s request. These values have not been verified against the catalog.

## For developers

Use Node.js 24 and npm. From the repository root:

```sh
cd photo-minor-info
npm ci
npm run dev
```

Open the URL printed by Astro, including `/photo-minor-info/`.

```sh
npm run check
npm run build
npm run preview
```

The build produces static files in `dist/`. Dependencies are locked in `package-lock.json`; commit that file when changing dependencies.

- [Maintenance and deployment](docs/MAINTENANCE.md)
- [Project structure and design decisions](docs/ARCHITECTURE.md)
- [Instructions for coding agents](AGENTS.md)

## Repository layout

The Astro application lives in the `photo-minor-info/` directory inside the Git repository. On the original machine, the repository checkout happens to be named `teaching-docs`; that local directory name is not the GitHub repository name. The remote is `taipinc/photo-minor-info`.

The active deployment workflow is **`../.github/workflows/deploy.yml`**, at the Git repository root. GitHub does not discover workflows inside the app subdirectory.
