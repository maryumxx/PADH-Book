# Quickstart: Physical AI Documentation Book

This guide will help you set up and run the Physical AI Documentation Book project locally.

## Prerequisites

Ensure you have the following installed on your system:

-   **Node.js**: LTS version (e.g., v18.x or v20.x). You can download it from [nodejs.org](https://nodejs.org/).
-   **npm** (Node Package Manager): Comes with Node.js.

## 1. Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone [repository-url]
cd docusaurus-physical-ai-book
```

## 2. Install Dependencies

Navigate to the project root directory and install all required Node.js dependencies, including Docusaurus, Tailwind CSS, and shadcn/ui components.

```bash
npm install
```

## 3. Configure Tailwind CSS and shadcn/ui

This project integrates Tailwind CSS and shadcn/ui. After installing dependencies, ensure Tailwind CSS is correctly set up with Docusaurus, and shadcn/ui components are added as needed.

**Tailwind CSS Integration**:

Tailwind CSS is configured via `tailwind.config.js` and `postcss.config.js`. The main stylesheet `src/css/index.css` imports Tailwind directives.

**shadcn/ui Components**:

shadcn/ui components are intended to be copied directly into your `src/components/shadcn-ui/` directory using their CLI. For example, to add a Button component:

```bash
npx shadcn-ui@latest add button
```

This will add the necessary React component and its styling to your project.

## 4. Run the Development Server

Start the Docusaurus development server to view the site locally. This will open the site in your browser at `http://localhost:3000` (or another available port).

```bash
npm start
```

The development server features hot-reloading, so changes to MDX content, React components, or styles will automatically reflect in the browser.

## 5. Build for Production

To generate a static production build of the website, run:

```bash
npm run build
```

This command will create a `build/` directory containing all static assets (HTML, CSS, JavaScript, images) ready for deployment.

## 6. Serve Production Build Locally (Optional)

To test the production build locally before deployment, you can use:

```bash
npm run serve
```

This command serves the content from the `build/` directory.