# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Create a premium, structured, Docusaurus-powered book-style documentation website for the capstone topic Physical AI, beginning with Module 1: The Robotic Nervous System (ROS 2). The site will use Docusaurus as the primary framework, integrated with Tailwind CSS for styling and shadcn/ui for reusable components within MDX content. The goal is a clean, book-like reading experience with a persistent sidebar, smooth scrolling, mobile-first layout, and fully MDX-editable content.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: JavaScript (ES6+), React 18+, Docusaurus (latest), Node.js (LTS)
**Primary Dependencies**: Docusaurus, React, MDX, Tailwind CSS, shadcn/ui (Radix UI, React Hook Form, etc.)
**Storage**: Browser LocalStorage (for contact form submissions and theme preference)
**Testing**: Jest/React Testing Library (for custom components), Playwright/Cypress (for E2E, future consideration), Docusaurus built-in link checker
**Target Platform**: Web (modern browsers, responsive design for mobile and desktop)
**Project Type**: Web application (documentation site)
**Performance Goals**: Initial page load < 3 seconds on 3G, TTI < 5 seconds on mobile, Lighthouse Performance score ≥ 90, Core Web Vitals all "Good" ratings
**Constraints**: No backend systems, no authentication/user accounts, no payments, no comment systems, no robotics simulations/code execution (per non-goals)
**Scale/Scope**: Multi-module documentation site, starting with Module 1 (4 chapters). Designed for easy scalability to additional modules and content versions.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Constitution Principles Adherence:**

*   **I. Docusaurus-First Architecture**: **PASS**. The plan explicitly uses Docusaurus as the primary framework, integrating Tailwind CSS for styling and shadcn/ui for components. This aligns with the principle's intent to leverage Docusaurus fully while enhancing its capabilities with modern styling and UI libraries.
*   **II. Book-Like Content Organization**: **PASS**. The plan specifies a clear module-chapter structure, with Module 1 containing four MDX chapters, directly adhering to the content organization principles.
*   **III. Mobile-First, Reading-Optimized Design**: **PASS**. The plan emphasizes a premium, mobile-first, book-like reading experience with persistent sidebar, responsive mobile drawer, and smooth scrolling, which directly supports this principle.
*   **IV. Performance and Progressive Enhancement**: **PASS**. The technical context sets clear performance goals (Lighthouse scores, load times) and mentions static site generation (Docusaurus SSG), aligning with the performance requirements.
*   **V. Component Reusability and MDX Integration**: **PASS**. The plan includes reusable components, MDX-based chapters, and specifically mentions shadcn/ui components, which aligns with the goal of rich content without HTML pollution and using a standard component library.
*   **VI. SEO and Discoverability**: **PASS**. The plan outlines SEO-optimized design and mentions search functionality, which aligns with the need for proper metadata and discoverability.
*   **VII. Versioning and Future-Proofing**: **PASS**. The plan specifies a multi-module-ready structure and Docusaurus's built-in versioning capabilities are implicitly supported by the framework choice, aligning with future-proofing.
*   **VIII. Analytics and Continuous Improvement**: **PASS**. While not explicitly detailed in the prompt, the Docusaurus framework supports analytics integration (e.g., GA4), and the constitution allows for this. This will be addressed in further planning phases.

## Project Structure

### Documentation (this feature)

```text
specs/001-physical-ai-book/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (N/A for this plan, no clarifications needed)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command - to be created)
├── contracts/           # Phase 1 output (N/A for this plan, no backend APIs)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
docusaurus-physical-ai-book/
├── docs/                          # All MDX documentation content
│   ├── intro.mdx                  # Main introduction to the book
│   ├── about.mdx                  # About page content
│   └── module-01-robotic-nervous-system/
│       ├── 01-ros-middleware.mdx
│       ├── 02-nodes-topics-services.mdx
│       ├── 03-python-rclpy-bridge.mdx
│       └── 04-urdf-humanoids.mdx
├── src/
│   ├── components/                # Custom React components (e.g., ReadingProgress, Callout)
│   │   ├── shadcn-ui/             # shadcn/ui components (automatically generated/copied)
│   │   ├── Callout.js
│   │   ├── ContactForm.js
│   │   ├── ReadingProgress.js
│   │   └── VideoEmbed.js
│   ├── css/
│   │   ├── index.css              # Tailwind CSS directives and custom styles
│   │   └── print.css              # Print-specific styles
│   ├── pages/                     # Custom Docusaurus pages (e.g., index.js for Home)
│   │   ├── index.js               # Homepage React component
│   │   └── contact.js             # Contact page (if not MDX)
│   └── theme/                     # Docusaurus theme customizations
│       └── MDXComponents.js       # Register custom and shadcn/ui components for MDX
├── static/
│   ├── img/                       # Images, diagrams, favicons
│   └── fonts/                     # Custom fonts
├── docusaurus.config.js           # Main Docusaurus configuration
├── sidebars.js                    # Sidebar configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration for Tailwind
├── package.json                   # Project dependencies and scripts
├── tsconfig.json                  # TypeScript configuration (if using TS)
└── babel.config.js                # Babel configuration
```

**Structure Decision**: The project will follow a standard Docusaurus structure, augmented to integrate Tailwind CSS and shadcn/ui. MDX files will reside in the `docs/` directory, organized by modules. Custom React components, including shadcn/ui components, will be in `src/components/`. Tailwind CSS will be configured via `tailwind.config.js` and `postcss.config.js`, with global styles in `src/css/index.css`. Docusaurus theme customizations and MDX component registration will be in `src/theme/`. This approach ensures Docusaurus handles core documentation features while providing flexibility for modern UI development. No `backend/`, `api/`, `ios/`, or `android/` directories are needed as the project is a static documentation site with no backend components.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
