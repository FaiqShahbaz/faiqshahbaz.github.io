# Faiq Shahbaz

Source for [faiqshahbaz.github.io](https://faiqshahbaz.github.io), built with Jekyll and deployed from `main` to GitHub Pages.

## Update Content

| Change                                         | File or directory          |
| ---------------------------------------------- | -------------------------- |
| Biography, current research, and opportunities | `_pages/about.md`          |
| Employment, education, skills, and CV details  | `_data/resume.json`        |
| Email and professional profiles                | `_data/socials.yml`        |
| Publications and submitted manuscripts         | `_bibliography/papers.bib` |
| Research project pages                         | `_projects/`               |
| Curated GitHub repositories                    | `_data/repositories.yml`   |
| Short announcements                            | `_news/`                   |
| Site-wide settings                             | `_config.yml`              |

The web CV is the canonical public CV. Its downloadable counterpart is `assets/pdf/Faiq_Shahbaz_CV.pdf`, linked from `_pages/cv.md`; keep both versions and their manuscript statuses synchronized.

## Add A Project

Create a descriptive Markdown file under `_projects/`, for example `_projects/geko-ahmed-body.md`:

```yaml
---
layout: page
title: Project title
description: One-sentence summary used on the project card and in search.
img: assets/img/projects/project-slug/thumbnail.png
img_alt: Concise description of the thumbnail
github: https://github.com/owner/repository
importance: 1
category: research
related_publications: false
math: false
---
```

Put its images under `assets/img/projects/project-slug/`. Add meaningful `alt` text whenever using `_includes/figure.liquid`.

## Add A Publication

Add a BibTeX entry to `_bibliography/papers.bib`. Keep the status explicit for work that is not published, such as `Submitted` or `Manuscript in preparation`. Publication PDFs belong in `assets/pdf/`; previews belong in `assets/img/publication_preview/`.

## Run Locally

Use Ruby 3.3.5 and Node.js 22:

```bash
bundle install
npm ci
bundle exec jekyll serve
```

Alternatively:

```bash
docker compose up --build
```

Build the production output with:

```bash
JEKYLL_ENV=production bundle exec jekyll build
npm run purge
```

## Deployment

`.github/workflows/deploy.yml` validates every push and pull request to `main`. Successful pushes are deployed to the `gh-pages` branch.

To enable private Cloudflare Web Analytics, create a Web Analytics site for `faiqshahbaz.github.io` and set `cloudflare_web_analytics_token` in `_config.yml`. Leaving it blank sends no analytics requests.
