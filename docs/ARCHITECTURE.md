# Project structure and design decisions

```text
photo-minor-info/ (repository root)
  .github/workflows/deploy.yml
  AGENTS.md
  README.md
  docs/
  content-templates/
  public/images/
  src/
    content.config.ts
    content/{announcements,courses,pages}/
    data/site.json
    lib/content.ts
    components/Announcement.astro
    components/CourseRow.astro
    components/CourseFilter.astro
    components/TableOfContents.astro
    components/ImageGallery.astro
    layouts/Layout.astro
    pages/{index,announcements}.astro
    styles/global.css
```

## Rendering and content

Astro generates two static pages: the homepage and `/announcements/`. Markdown collections are loaded at build time. Schemas in `src/content.config.ts` validate course and announcement fields. Course links are restricted to HTTPS on `courses.newschool.edu`.

`src/lib/content.ts` sorts published announcements, formats dates in UTC to avoid day shifts, and prefixes internal URLs with the configured base path. The homepage establishes subject-area order from `order`, then sorts courses within each group by code using a numeric, case-insensitive English collator. Matching course/site semesters determine whether availability can be displayed. The optional boolean `new` defaults to false and adds a small yellow monospace NEW badge with a thin outline and 3px corner radius immediately after the title when true.

`astro.config.mjs` uses the unified Markdown processor. Its small image-path plugin rewrites `./images/...` URLs to include the deployment base path before Astro handles assets. This keeps public images working on both pages. The animated poster is served unchanged as a GIF. The cover uses a converted JPEG with a centered CSS crop.

Course descriptions are rendered from each course's Markdown body at build time. A small script in `CourseRow.astro` adds independent disclosure buttons with `aria-expanded` and `aria-controls`, hiding or showing the associated full-width description row. Descriptions remain visible without JavaScript. There is no client framework or runtime catalog fetch. Astro’s development toolbar and reload code exist only in the development preview.

Announcements may also define a `gallery` array in their frontmatter. `ImageGallery.astro` renders linked WebP thumbnails and a native modal dialog with a transparent backdrop, viewport-constrained full-size images, previous/next controls, and Left/Right keyboard navigation. The native dialog handles focus containment and Escape; closing restores scroll and thumbnail focus. Gallery announcements use the same expandable homepage preview as other posts. Public image paths pass through `pathTo` for both the homepage and archive.

## Visual decisions

The intended reference is a plain Notion/Craft document, not a marketing landing page.

- A homepage contents list stays in the left margin at widths of 1280px and above, without changing the 800px content panel width. Below that breakpoint, a sticky native details menu provides the same anchors. `TableOfContents.astro` marks the current section with bold text and closes the menu on selection, outside click, or Escape. Section scroll offsets account for the mobile bar; reduced-motion preferences disable smooth scrolling. Labels and anchors live in `src/data/site.json`.
- Native system sans-serif typography and restrained heading sizes.
- Full-viewport-width photographic cover, 240px tall on desktop and 180px on mobile, centered and cropped.
- Content panels at a maximum total width of 800px, including 32px internal desktop padding, leaving 736px usable width.
- Separate white introduction, announcement, and course panels on light gray, with 24px gaps, rounded corners, and a gentle shadow.
- On mobile, 12px outer side margins, 20px internal side padding, and 16px gaps.
- Welcome sentence outside and above a pale green program information disclosure with a circled information icon. The course approval disclosure uses a pale yellow warning callout.
- One surrounding announcement panel: no nested announcement border or extra announcement padding.
- The homepage shows up to three newest announcements separated by thin rules. Long bodies are clipped to a 300px preview with a soft fade and no blur, then expand independently in place. The Expand button overlays the bottom of the preview; the Collapse button follows the full body. A resize observer updates overflow detection when images load or widths change. Clipped bodies are inert until expanded so hidden links cannot receive focus. The archive and no-JavaScript fallback show full posts.
- Each course group has a single table header row: the subject-area heading spans the code and title columns, and the last column reads “Running in [semester]”. Code and Title are not separate visible labels.
- Course tables have thin gray internal lines, no outer outline, and no vertical dividers or background on the header row. The line below the header separates it from the body.
- Green rows and labels for Yes; soft red rows and darker red labels for No. Retain text labels so color is not the only indication. Unreviewed semesters show Not updated with neutral styling.
- Catalog titles link directly to `/courses/CODE/` in a new tab with `noopener noreferrer`.
- A right-aligned checkbox with switch semantics and its text label to the left above the course tables shows only courses running in the configured semester when enabled. It defaults to off (all courses), uses a blue track when on, and sits close to the first visible table. CSS hides both rows of excluded courses while preserving description expansion state; the script hides empty groups and announces the result count. Without JavaScript, all courses remain visible.
- A triangle before each course code toggles its description. Multiple descriptions can remain open. Fixed table columns and a reserved scrollbar gutter prevent horizontal movement; expansion adds height below the selected row without animation or automatic scrolling.

Avoid adding branding bars, decorative artwork, oversized display typography, section numbering, filters, or additional interface elements unless requested.
