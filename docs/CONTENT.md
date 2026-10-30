# Editing content

Paths in this guide are relative to the application directory (`photo-minor-info/`), unless stated otherwise.

## Quick reference

| Content | File or directory |
| --- | --- |
| Welcome sentence | `src/content/pages/intro.md` |
| Green program information disclosure | `src/content/pages/disclosure.md` |
| New-course approval disclosure | `src/content/pages/course-disclosure.md` |
| Announcement posts | `src/content/announcements/*.md` |
| Course entries | `src/content/courses/*.md` |
| Contents navigation labels and section links | `src/data/site.json` (`tableOfContentsLabel`, `tableOfContents`) |
| Current semester and cover settings | `src/data/site.json` |
| Photos, animated GIFs, and posters | `public/images/` |
| Blank starting files | `content-templates/` |

## Edit through GitHub

1. Open a file in the repository, choose the pencil icon, and make your change.
2. Use **Commit changes**. A change merged or committed to `main` triggers deployment automatically.
3. Open the repository’s **Actions** tab and confirm **Deploy Photography Minor to GitHub Pages** finishes successfully. A commit is not proof that deployment succeeded.
4. Check the live page after deployment. Hard refresh if necessary.

For a new file, use **Add file → Create new file** in the appropriate directory and paste the corresponding template. Upload images into `public/images/` first. For a set of related changes, use a branch and merge them together to avoid publishing an incomplete intermediate state.

## Announcements

Copy `content-templates/announcement.md` into `src/content/announcements/` with a unique filename, for example `2027-01-10-registration.md`.

```yaml
---
title: Registration reminder
date: 2027-01-10
draft: false
sample: false
---
```

Write the announcement below the second `---`. Markdown supports paragraphs, headings, lists, emphasis, and links. Quote a title if it contains a colon, for example `title: "Reminder: registration"`.

- `draft: true` hides a post from the homepage and archive.
- The homepage shows the three newest published announcements, newest first. Dates are ordering fields, not scheduled publication: a future date publishes immediately if `draft` is false.
- On the homepage, long announcement bodies show a 300px preview with a soft fade (no blur) and an **Expand announcement** button over the bottom of the preview. Expanding reveals the full post in place; the button at the end becomes **Collapse announcement**. Several posts can be expanded independently. Short posts need no button. The archive shows full posts, and without JavaScript homepage posts remain fully readable.
- `latestAnnouncementsCount`, `announcementPreviewHeight`, `announcementsHeading`, `expandAnnouncementLabel`, and `collapseAnnouncementLabel` in `src/data/site.json` control the preview count, height in pixels, heading, and button labels. Descriptions, images, and other post content stay in Markdown.
- The archive includes all published posts, newest first. The homepage’s **Previous announcements** link appears only when there is more than one published post.
- `sample: true` adds an example label. Use `false` for actual posts.
- To keep only one announcement, remove older post files or mark them as drafts.

Add an image with a relative public image path:

```md
![Describe the image](./images/my-poster.jpg)
```

The build rewrites `./images/` paths for GitHub Pages, including on the archive. Keep GIF files as GIFs to preserve animation. Prefer lowercase, hyphenated filenames without spaces.

A catalog link that opens in a new tab can use HTML inside Markdown:

```html
<a href="https://courses.newschool.edu/courses/PSAM3805/" target="_blank" rel="noopener noreferrer">View the course in the catalog</a>
```

## Poster gallery announcements

Announcements can include an optional `gallery` list in their frontmatter. See `src/content/announcements/2026-10-30-new-courses-spring-2027.md` for the eight-poster example. Each item has `image` (full-size public image path), `thumbnail` (smaller public image path), `alt` (descriptive text), and numeric `width` and `height` for the original aspect ratio. Paths start with `images/`, without a leading slash; the site adds its hosting prefix automatically. The Markdown body can be empty for a gallery-only post.

Gallery posts use the same expandable homepage preview as other announcements; expand the announcement to interact with the posters. The grid uses three columns on desktop and two on mobile. Selecting a poster opens a centered image sized to fit within 90% of the viewport, with a transparent backdrop. Use Left/Right arrows or the previous/next buttons to browse; Escape, Close, or clicking outside closes it and returns focus to the selected thumbnail. Without JavaScript, thumbnails link directly to full-size images.

For poster assets, retain the source PNGs and use WebP files for the gallery: the Spring 2027 set uses full-resolution WebPs at quality 90 and 480px-wide thumbnails at quality 85. Check small text when converting new posters.

## Courses

Each course is one Markdown file; the filename is normally the lowercase code with a hyphen, e.g. `psam-1050.md`. Copy `content-templates/course.md` to add a course.

```yaml
---
code: PSAM 1050
title: Intro to Photography
subjectArea: Introduction to Main Concepts
offered: true
new: false
semester: Spring 2027
catalogUrl: https://courses.newschool.edu/courses/PSAM1050/
order: 1
draft: false
sample: false
---
```

| Property | Meaning |
| --- | --- |
| `code` | Code shown in the table, with a space before its number |
| `title` | Linked course title; quote it if it contains a colon |
| `subjectArea` | Heading of the group containing this course |
| `offered` | Boolean `true` for green **Yes**, `false` for red **No** |
| `new` | Set `true` to show a small yellow monospace **NEW** badge beside the course title; defaults to `false` |
| `semester` | Semester for which this availability was reviewed |
| `catalogUrl` | Direct HTTPS course URL on `courses.newschool.edu` |
| `order` | Determines first appearance of each subject area; courses within each group sort by code alphabetically and numerically |
| `draft` | `true` hides the course |
| `sample` | `true` adds an example label |

Above the tables, a right-aligned switch with the label **Show [semester] courses only** to its left filters the list. It is off by default, showing all courses. The semester comes from `src/data/site.json`. Turning it on shows only courses marked `offered: true` whose semester matches the site semester; empty subject areas disappear. Turning it off restores every course and preserves expanded descriptions. The filter is hidden without JavaScript. Labels and the empty-result message are configurable with the `courseFilter*` settings in `src/data/site.json`.

A course has no internal detail page. Its title opens the catalog in a new tab. Write its description in the Markdown body, below the closing `---`:

```md
---
# Course fields above
---

Explore photographic techniques through studio exercises and an independent project.

You can use **emphasis**, lists, and links in the description.
```

The triangle before the course code expands the description below that row. Each course opens independently, so several can stay open at once. Rows below an expanded description move down, while column widths and the page's horizontal position stay fixed. Buttons support mouse, touch, Enter, and Space; the linked title still opens the catalog. Without JavaScript, descriptions remain visible. Empty bodies show the placeholder configured in `courseDescriptionFallback` in `src/data/site.json` until a description is added.

Catalog links use `/courses/PSAM1050/`, not search query URLs. Use unquoted `true` and `false` for boolean fields.

The subject areas currently used, in order, are:

1. Introduction to Main Concepts
2. Photographic Canon and Primary Texts
3. Technical Practices
4. Conceptual Practices

Spelling must match exactly for courses to appear in the same group. A new subject area is supported without changing the page code.

### Each semester

1. Set `semester` in `src/data/site.json`, e.g. `"semester": "Spring 2027"`. This updates the **Running in Spring 2027** table headers.
2. Review every course against its `catalogUrl`. Set `offered: true` only when the course's own section listing explicitly names the target semester. Set `offered: false` when the page returns 404 or lists only other semesters. A working page alone does not confirm availability, and a full section still counts as running. Set its `semester` to match after review.
3. Keep a course’s old semester if availability has not been reviewed: it will show **Not updated**, with no Yes/No color. Changing the site semester alone does not confirm availability.
4. Preview and publish the changes together.

For this Spring 2027 review, the coordinator requested that initial random values be discarded: only a confirmed Spring 2027 section listing yields `offered: true`. After retrying, pages that remain inaccessible default to `offered: false`. Record access failures and conflicting information in the review; a fallback false is not independent verification that the course is unavailable.

The [October 28, 2026 review](COURSE-REVIEW-SPRING-2027.md) sets all 36 courses: 15 Yes and 21 No, including five No values based on the access-failure fallback. Values remain fixed in Markdown and are never randomized on page load.

## Welcome and disclosure

The welcome paragraph in `intro.md` appears above the green information callout with a circled information icon. The disclosure text and official-program link live in `disclosure.md`. Keep the official program page identified as the authoritative source.

The approval note at the top of the Courses section lives in `course-disclosure.md`. Use `<span class="course-new">NEW</span>` to match the badge in the course listings. Keep the coordinator's email link and official program link current.

## Cover image

Put a web-friendly JPEG, PNG, or WebP in `public/images/`. In `src/data/site.json`, set:

```json
{
  "coverImage": "images/cover.jpg",
  "coverAlt": "Describe the photograph",
  "coverPosition": "50% 50%",
  "coverCredit": ""
}
```

These are selected fields, not a replacement for the entire settings file. Keep valid JSON: double-quoted strings and no trailing commas.

The cover fills the viewport width and crops from the center with `object-fit: cover`. It is 240px high on desktop and 180px on mobile. `coverPosition` controls the crop; leave it at `50% 50%` for a centered crop. A nonempty `coverCredit` adds a caption.

To convert HEIC on macOS, for example:

```sh
sips -s format jpeg -s formatOptions 82 --resampleWidth 2400 input.heic --out public/images/cover.jpg
```

Inspect the result before publishing. Use image description text in `coverAlt` and in Markdown image brackets.

## Contents navigation

The homepage has a sticky contents list in the left margin on screens at least 1280px wide. Smaller screens use a sticky **On this page** menu below the cover; it opens over the page and closes when a link is selected, outside it is clicked, or Escape is pressed. Links jump to the three main sections and mark the current section in bold as you scroll. Smooth scrolling respects reduced-motion preferences.

Edit `tableOfContentsLabel` and the `tableOfContents` array in `src/data/site.json` to change the labels. Each item’s `id` must match a homepage section ID: `photo-minor-info`, `announcements`, or `courses`. The archive has no contents menu.
