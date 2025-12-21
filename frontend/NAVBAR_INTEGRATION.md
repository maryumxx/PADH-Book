# Custom Navbar Integration Guide

## Overview
A clean, modern navbar component built with Tailwind CSS has been created for your project.

## Files Created
- `src/components/Navbar.tsx` - Main navbar component
- `src/components/CustomLayout.tsx` - Layout wrapper with navbar and footer
- `src/pages/custom-home.tsx` - Example page using the custom navbar

## Features
✅ Responsive design (mobile hamburger menu)
✅ Clean, modern styling with Tailwind CSS
✅ Gradient logo with "PA" initials
✅ Dark mode support
✅ Sticky navigation
✅ Smooth transitions and hover effects
✅ "Get Started" CTA button
✅ Mobile-friendly

## How to Use

### Option 1: Use in Custom Pages (Recommended for Testing)
Visit `/custom-home` to see the navbar in action. You can create new pages using the `CustomLayout`:

```tsx
import CustomLayout from '@site/src/components/CustomLayout';

export default function MyPage() {
  return (
    <CustomLayout>
      <h1>Your content here</h1>
    </CustomLayout>
  );
}
```

### Option 2: Use Navbar Standalone
Import the navbar directly into any component:

```tsx
import Navbar from '@site/src/components/Navbar';

export default function MyComponent() {
  return (
    <>
      <Navbar />
      {/* Your content */}
    </>
  );
}
```

### Option 3: Replace Docusaurus Default Navbar (Site-wide)
To use this navbar instead of Docusaurus's default navbar:

1. **Hide the Docusaurus navbar** in `docusaurus.config.js`:
```js
themeConfig: {
  navbar: {
    hideOnScroll: true,
    items: [], // Empty items
  },
}
```

2. **Swizzle and customize the Layout**:
```bash
npm run swizzle @docusaurus/theme-classic Layout -- --wrap
```

3. **Import the custom Navbar** in the swizzled Layout component.

### Option 4: Update Existing Pages
Replace the Docusaurus `Layout` import with `CustomLayout` in any page:

```tsx
// Before
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout>
      {/* content */}
    </Layout>
  );
}

// After
import CustomLayout from '@site/src/components/CustomLayout';

export default function Home() {
  return (
    <CustomLayout>
      {/* content */}
    </CustomLayout>
  );
}
```

## Customization

### Update Navigation Links
Edit `src/components/Navbar.tsx` and modify the `navigationLinks` array:

```tsx
const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Documentation', href: '/docs/intro' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];
```

### Change Logo
Replace the gradient logo section in `Navbar.tsx`:

```tsx
<div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
  <span className="text-white text-xl font-bold">PA</span>
</div>
```

Or use an image:

```tsx
<img src="/img/logo.svg" alt="Logo" className="w-10 h-10" />
```

### Adjust Colors
Modify Tailwind classes in `Navbar.tsx`:
- Background: `bg-white dark:bg-gray-900`
- Text: `text-gray-700 dark:text-gray-300`
- Hover: `hover:text-blue-600 dark:hover:text-blue-400`
- Button: `bg-blue-600 hover:bg-blue-700`

## Testing
1. Start the dev server: `npm start`
2. Visit `http://localhost:3000/custom-home` to see the navbar in action
3. Test mobile responsiveness by resizing your browser
4. Toggle dark/light mode to ensure proper styling

## Next Steps
1. Preview the navbar at `/custom-home`
2. Customize navigation links and logo
3. Decide on integration method (custom pages vs site-wide replacement)
4. Update styling to match your brand colors
