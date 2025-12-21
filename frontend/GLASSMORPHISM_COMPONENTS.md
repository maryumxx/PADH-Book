# Glassmorphism Components Guide

## Overview
All card and button components have been customized with beautiful glassmorphism effects using your gradient color palette.

## Color Palette
- **#7befff** - Light Blue (Cyan)
- **#9c5ffc** - Purple
- **#d49bc9** - Pink
- **#ffcda8** - Peach/Orange

## 🎨 Card Component Updates

### Card Container
✅ **Glassmorphism Background**
- Semi-transparent white: `bg-white/80` (light mode)
- Semi-transparent dark: `bg-gray-900/80` (dark mode)
- Backdrop blur: `backdrop-blur-lg`

✅ **Border Effects**
- Light border with transparency: `border-white/30`
- Stronger border on hover: `hover:border-white/50`

✅ **Shadow & Animations**
- Large shadow: `shadow-lg`
- Extra large shadow on hover: `hover:shadow-2xl`
- Scale animation: `hover:scale-[1.02]` (2% scale up)
- Smooth transitions: `duration-300`

✅ **Gradient Overlay**
- Gradient appears on hover using `::before` pseudo-element
- Colors: `from-[#7befff]/10 via-[#9c5ffc]/10 to-[#d49bc9]/10`
- Opacity transitions from 0 to 100% on hover

### Card Title
✅ **Gradient Text**
- Text with gradient colors using `bg-clip-text`
- Light mode: Blue → Purple → Pink
- Dark mode: Blue → Purple → Peach
- Bold font weight for emphasis

### Card Description
✅ **Enhanced Typography**
- Medium font weight
- Better contrast colors
- Dark mode support

### Card Content & Footer
✅ **Proper Z-Index**
- Content appears above gradient overlay
- Better text contrast

## 🔘 Button Component Updates

### Base Styles
✅ **Glassmorphism Effects**
- Backdrop blur: `backdrop-blur-md`
- Rounded corners: `rounded-xl`
- Shadows: `shadow-lg` → `hover:shadow-2xl`
- Scale animations: `hover:scale-105`, `active:scale-95`
- Focus ring with purple color

### Button Variants

#### 1. Default Button
- **Gradient background**: Blue → Purple → Pink
- **Dark mode**: Purple → Pink → Peach
- **Border**: Semi-transparent white
- **Perfect for**: Primary actions, CTAs

```jsx
<Button>Click Me</Button>
<Button variant="default">Primary Action</Button>
```

#### 2. Outline Button
- **Border**: 2px purple border
- **Background**: Semi-transparent white with blur
- **Hover**: Purple tint overlay
- **Perfect for**: Secondary actions

```jsx
<Button variant="outline">Secondary Action</Button>
```

#### 3. Ghost Button
- **Background**: Semi-transparent white
- **Border**: Transparent → white on hover
- **Perfect for**: Tertiary actions, navigation

```jsx
<Button variant="ghost">Tertiary Action</Button>
```

#### 4. Link Button
- **Style**: Underline on hover
- **No glassmorphism**: Simple text style
- **Perfect for**: Text links, inline actions

```jsx
<Button variant="link">Learn More</Button>
```

### Button Sizes

```jsx
<Button size="sm">Small Button</Button>
<Button size="default">Default Button</Button>
<Button size="lg">Large Button</Button>
<Button size="icon">🔍</Button>
```

## 📝 Usage Examples

### Basic Card
```jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@site/src/components/shadcn-ui/Card';

<Card>
  <CardHeader>
    <CardTitle>Beautiful Gradient Title</CardTitle>
    <CardDescription>This card has glassmorphism effects</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content here with backdrop blur and gradient overlay on hover!</p>
  </CardContent>
</Card>
```

### Card with Button
```jsx
<Card>
  <CardHeader>
    <CardTitle>Featured Content</CardTitle>
    <CardDescription>Check out this amazing feature</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content description goes here...</p>
    <Button className="mt-4">Learn More →</Button>
  </CardContent>
</Card>
```

### Multiple Cards in Grid
```jsx
<div className="grid md:grid-cols-3 gap-6">
  {features.map((feature, idx) => (
    <Card key={idx}>
      <CardHeader>
        <CardTitle>{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{feature.description}</p>
      </CardContent>
    </Card>
  ))}
</div>
```

## 🎭 Features Overview

### Card Features
- ✅ Glassmorphism with backdrop blur
- ✅ Gradient text for titles
- ✅ Gradient overlay on hover
- ✅ Scale animation (2% growth)
- ✅ Enhanced shadows
- ✅ Border glow effect
- ✅ Full dark mode support
- ✅ Smooth transitions

### Button Features
- ✅ Gradient backgrounds
- ✅ Glassmorphism effects
- ✅ Scale animations (105% on hover, 95% on click)
- ✅ Shadow transitions
- ✅ Backdrop blur
- ✅ 4 style variants
- ✅ 4 size options
- ✅ Full dark mode support

## 🎨 Customization Tips

### Change Card Gradient Overlay
Edit `Card.jsx`:
```jsx
'before:bg-gradient-to-br before:from-[#YOUR-COLOR]/10 before:via-[#YOUR-COLOR]/10 before:to-[#YOUR-COLOR]/10'
```

### Change Button Gradient
Edit `Button.jsx`:
```jsx
default: 'bg-gradient-to-r from-[#YOUR-COLOR] via-[#YOUR-COLOR] to-[#YOUR-COLOR]'
```

### Adjust Glassmorphism Blur
Change `backdrop-blur-lg` to:
- `backdrop-blur-sm` - Subtle blur
- `backdrop-blur-md` - Medium blur
- `backdrop-blur-lg` - Large blur (default for cards)
- `backdrop-blur-xl` - Extra large blur

### Adjust Background Transparency
Change opacity values:
- `bg-white/80` - 80% opacity (default)
- `bg-white/60` - More transparent
- `bg-white/90` - More opaque

## 🌓 Dark Mode Behavior

### Cards
- Background becomes darker and more transparent
- Gradient overlay adjusts colors
- Borders become more subtle

### Buttons
- Default variant uses different gradient (more vibrant)
- Outline variant changes border to blue
- All variants maintain glassmorphism

## 🚀 Performance Notes

- Backdrop blur is GPU-accelerated
- Transitions use CSS transforms (hardware-accelerated)
- Pseudo-elements (`::before`) for overlays are performant
- All animations are 60fps on modern browsers

## 📱 Responsive Design

All components are fully responsive:
- Touch-friendly sizes
- Proper hover states (disabled on touch devices)
- Scale animations work on mobile
- Glassmorphism adapts to screen size

## 🎯 Accessibility

- Proper focus states with visible rings
- Sufficient color contrast
- Keyboard navigation support
- Screen reader friendly
- Disabled states properly styled

Enjoy your beautiful glassmorphism components! 🎨✨
