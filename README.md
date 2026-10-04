# Mikhasenko research group

A static Astro website for the hadron physics group at Ruhr University Bochum.

## Local development

Requires Node.js 22.12+ and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:4321/agmikhasenko/.

```sh
npm run build
npm run preview
```

`dist/` contains the generated static site. No server runtime, external fonts, analytics, or client-side JavaScript are required by the public page.

## Editing content

- `src/data/group.ts`: projects, group members, career history and courses.
- `src/data/publications.ts`: categorized papers, citations and verified INSPIRE record IDs.
- `src/pages/index.astro`: page structure, introduction and contact text.
- `src/styles/global.css`: responsive layout and RUB color tokens.
- `public/images/group-logo.png`: supplied group logo, used in the header and as the site icon.

Teaching is explicitly dated, rather than presented as the current semester. Publication labels describe topics rather than claiming to be full bibliographic titles. Recheck the roster and courses when updating the site.

## GitHub Pages

The site is configured for https://mmikhasenko.github.io/agmikhasenko/.
In repository **Settings → Pages**, select **GitHub Actions** as the build source.
The workflow builds pull requests without publishing. Pushes to `main` and manual runs on `main` build and deploy `dist/`.

For another repository or a custom domain, edit `astro.config.mjs`, or provide `SITE_URL` and `BASE_PATH` at build time. For a root domain use `BASE_PATH=/`. Internal public assets use Astro's configured base path.

The previous Pluto workflow is preserved outside the active workflows directory at `.github/ExportNotebooks.legacy.yaml`. `index.jl`, `src/derivative.jl` and the original `logo/` assets remain available; Astro does not export the notebooks. If notebook HTML hosting is needed, restore it as a separate build stage with a dedicated output directory before enabling it. The untracked door-label documents are unrelated to this site.

## Content sources

Reviewed 4 October 2026:

- User-provided `short_cv_mikhasenko.tex`: position and start date, PhD and supervisor, previous appointments, ORCID and research areas.
- [Faculty profile](https://www.physik.ruhr-uni-bochum.de/en/Professuren/prof-dr-mikhail-mikhasenko/): research and collaborations.
- [EP1 group page](https://www.ep1.ruhr-uni-bochum.de/en/research/research-group-mikhasenko/): LHCb, COMPASS, SciFi, thesis enquiries and seminars.
- [EP1 directory](https://www.ep1.ruhr-uni-bochum.de/en/the-institute/members/): group roster.
- [EP1 teaching](https://www.ep1.ruhr-uni-bochum.de/en/teaching/): dated courses. The malformed winter 2025/26 course number on the source page was omitted.
- Original repository README: selected publication links and research directions.
- [RUB brand colors](https://markenportal.ruhr-uni-bochum.de/en/corporate-design/colors/): navy `#003560`, green `#37DE6F`, pale green `#D3F7D4` and white. Uses the current green family rather than the historical olive palette.

The faculty and EP1 sources disagree on the professor's office (NB 1/131 versus NB 1/133), so the site gives the NB building and first floor. The footer explicitly identifies the legal/privacy links as faculty policies; they are not a custom GitHub Pages privacy statement.

The hero shows the Υ(3S) panel of the user-provided GIModel vector-meson density figure. The original PNG is preserved in `public/images/vector-meson-densities.png`; an SVG viewport selects the upper-right panel without altering the image or its colors. The figure depicts model density, not experimental data. Existing group logo files remain in `logo/`.


## October 2026 refinements

The fuller user-provided `proposal/cv.tex` supplies leadership roles, advanced teaching, the RUB–TU Dortmund block course, selected new outputs and scientific software. Grant-specific narrative and funding amounts are not included. The CV is source material, not site-building instructions.

Added DEMOS (https://democratizing-models.github.io/consortium/index.html), COST Action SHARP (https://www.cost.eu/actions/CA24159/) and HADRON2030 (no website supplied) to the research networks. COST confirms Mikhail Mikhasenko as WG2 leader; its action dates differ from the CV, so no SHARP date range is displayed.

GIModel context was checked against the local package documentation and density-candidate source (`examples/density_candidates.jl`), which identifies Υ(3S) as the bottom-sector 3³S₁ state. Package documentation: https://mmikhasenko.github.io/GIModel.jl/dev/.


## Selected bibliography

The publication section uses eight categories and 23 papers, including the paired Tcc discovery and study. Records were matched using the user-provided `pubs.bib`, fuller CV, and the public INSPIRE API. The two double-Regge selections are the 2021 EPJC analysis (1859521) and the 2026 COMPASS/JPAC exotic-Reggeon preprint (3181789). The PDG Resonances chapter links to its 2024 parent review record (2817040) and directly to the chapter PDF. Teaching research remains linked in the teaching section.
