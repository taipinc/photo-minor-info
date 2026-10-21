# Editing content

Paths in this guide are relative to the application directory (`photo-minor-info/`), unless stated otherwise.

## Quick reference

| Content | File or directory |
| --- | --- |
| Welcome sentence | `src/content/pages/intro.md` |
| Yellow warning disclosure | `src/content/pages/disclosure.md` |
| Announcement posts | `src/content/announcements/*.md` |
| Course entries | `src/content/courses/*.md` |
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
- The newest published date determines the homepage announcement. Dates are ordering fields, not scheduled publication: a future date publishes immediately if `draft` is false.
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

## Courses

Each course is one Markdown file; the filename is normally the lowercase code with a hyphen, e.g. `psam-1050.md`. Copy `content-templates/course.md` to add a course.

```yaml
---
code: PSAM 1050
title: Intro to Photography
subjectArea: Introduction to Main Concepts
offered: true
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
| `semester` | Semester for which this availability was reviewed |
| `catalogUrl` | Direct HTTPS course URL on `courses.newschool.edu` |
| `order` | Lower numbers display first; also determines first appearance of each subject area |
| `draft` | `true` hides the course |
| `sample` | `true` adds an example label |

A course has no internal detail page. Its title opens the catalog in a new tab, and its Markdown body is unused. Catalog links use `/courses/PSAM1050/`, not search query URLs. Use unquoted `true` and `false` for boolean fields.

The subject areas currently used, in order, are:

1. Introduction to Main Concepts
2. Photographic Canon and Primary Texts
3. Technical Practices
4. Conceptual Practices

Spelling must match exactly for courses to appear in the same group. A new subject area is supported without changing the page code.

### Each semester

1. Set `semester` in `src/data/site.json`, e.g. `"semester": "Spring 2027"`. This updates the semester display and **Running in Spring 2027** table headers.
2. Review every course against its catalog entry. Set its `semester` to match and its `offered` value appropriately.
3. Keep a course’s old semester if availability has not been reviewed: it will show **Not updated**, with no Yes/No color. Changing the site semester alone does not confirm availability.
4. Preview and publish the changes together.

The initial Spring 2027 availability values are demonstration data, not verified offerings. They are fixed in Markdown and never randomized on page load.

## Welcome and disclosure

The welcome paragraph in `intro.md` appears above the yellow warning callout. The disclosure text and official-program link live in `disclosure.md`. Keep the official program page identified as the authoritative source.

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
