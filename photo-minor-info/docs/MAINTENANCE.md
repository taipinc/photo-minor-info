# Maintenance and deployment

## Local development

Use Node.js 24. In the app directory, run `npm ci`, then `npm run dev`. Use the URL Astro prints, including the `/photo-minor-info/` path. Save content or CSS to update the preview automatically.

Before publication:

```sh
npm run check
npm run build
```

For a production preview, run `npm run preview` after the build. Inspect the homepage and archive, confirm images load, and check the course links and semester labels. Check a narrow mobile viewport when changing layout.

Keep a preview running when a collaborator is reviewing it. If a restart is required after a content schema change, restart it on the same port and verify the new data appears. Avoid running builds against the same generated cache while diagnosing a stale dev server. Generated `.astro/` data can be deleted with the server stopped; source content must be preserved.

## Publishing

- Repository: `taipinc/photo-minor-info`
- Branch: `main`
- Site: `https://taipinc.github.io/photo-minor-info/`
- Workflow: `.github/workflows/deploy.yml` at the repository root

The repository’s Pages source must be **GitHub Actions** in **Settings → Pages**. Setup is required only once. With authenticated GitHub CLI, the equivalent initial setup is:

```sh
gh api --method POST repos/taipinc/photo-minor-info/pages -f build_type=workflow
```

If a Pages site already exists, inspect its configuration before changing it.

Push app changes to `main` to deploy. The workflow runs on changes under `photo-minor-info/**` or to its root workflow file. Documentation-only changes at the repository root do not need a site rebuild. The workflow can also be run manually through **Actions → Deploy Photography Minor to GitHub Pages → Run workflow**.

The build job installs the lockfile with Node.js 24, runs Astro checks, builds, and uploads `photo-minor-info/dist`. The deploy job publishes that artifact with GitHub Pages. The workflow uses the repository’s normal `GITHUB_TOKEN`; no personal token or Notion credentials are required by the site.

Example commands from the repository root:

```sh
git status --short
git add photo-minor-info .github/workflows/deploy.yml README.md
git diff --cached --stat
git commit -m "Update Photography Minor information"
git push origin main
gh run list --workflow deploy.yml --limit 5
gh run view RUN_ID
```

Stage only files belonging to this project. The original checkout also contains unrelated `my-slides/` and `my-tools/` directories. Do not stage those or use `git add .` without inspecting the repository.

Verify the workflow’s final result and the live site before reporting deployment complete.

## Recovering from a failed deployment

Read the failing job’s logs under **Actions**. Common causes:

- **Content validation failure:** fix missing fields or invalid YAML/JSON. Quote titles containing colons; keep boolean fields unquoted.
- **Pages not configured:** set its source to GitHub Actions.
- **Missing assets:** confirm public files are committed and Markdown images use `./images/filename`.
- **404 under the repository path:** preserve `base: '/photo-minor-info'` in Astro configuration and the matching `BASE_PATH` in the workflow.
- **Dependency installation failure:** keep `package.json` and `package-lock.json` in sync; use Node.js 24 and `npm ci`.

If a deployment fails, the previously published site usually remains online. Fix the failure and push another commit, or rerun an unchanged build after resolving an external configuration problem.

## Rollback

Use `git revert` on the problematic commit, then push the revert to `main`. This preserves history and triggers another deployment. If the reverted commit includes important unrelated changes, restore only the relevant app files from a known-good revision in a new commit. Do not force-push shared history.

## Changing the hosting address

Update `SITE_URL` and `BASE_PATH` in the workflow and the corresponding defaults in `astro.config.mjs`. `SITE_URL` is the origin; `BASE_PATH` is the path prefix. A root-domain site uses `/`. Also update README links and any literal internal asset URLs in content. Test both homepage and archive assets under the actual path.

## Handover

Give the new coordinator repository access and point them to the content guide. No additional CMS account is needed. If a visual editor becomes necessary, a future Notion integration can supply the same collection fields at build time. That would require a stored integration secret, a block renderer, image downloads, and a pull/rebuild process. It is not currently implemented. Keep the public website static unless requirements change.
