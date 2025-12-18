# Quickstart: Module 2 Content Authoring

**Feature**: Module 2 - The Digital Twin (Gazebo & Unity)
**For**: Content creators and technical writers
**Goal**: Quickly create high-quality MDX content for Module 2 chapters

## Prerequisites

- Module 1 infrastructure is complete and functioning
- Docusaurus development environment is set up (`npm install` completed)
- Familiarity with MDX syntax (Markdown + JSX)
- Understanding of Gazebo, Unity, and ROS 2 concepts (for accurate technical writing)

## Quick Start (5 Minutes)

### 1. Create Module 2 Directory Structure

```bash
# From repository root
mkdir -p docs/module-02-digital-twin
mkdir -p static/img/module-02
```

### 2. Create Module 2 Landing Page

Create `docs/module-02-digital-twin/index.mdx`:

```mdx
---
id: module-02-digital-twin
title: "Module 2: The Digital Twin (Gazebo & Unity)"
sidebar_label: "Module 2: Digital Twin"
description: "Learn physics simulation, environment building, and sensor modeling for robotics using Gazebo and Unity."
keywords: ["gazebo", "unity", "simulation", "digital twin", "physics", "sensors"]
---

# Module 2: The Digital Twin (Gazebo & Unity)

Welcome to Module 2! In this module, you'll learn how to create realistic digital twins of robotic systems using physics simulation and high-fidelity rendering.

## What You'll Learn

- **Chapter 1**: Simulating physics, gravity, and collisions in Gazebo
- **Chapter 2**: Building simulation environments and worlds
- **Chapter 3**: High-fidelity rendering and human-robot interaction in Unity
- **Chapter 4**: Simulating sensors (LiDAR, Depth Cameras, IMUs)

## Prerequisites

Before starting Module 2, you should have completed **Module 1: The Robotic Nervous System** and understand:
- ROS 2 fundamentals (nodes, topics, services)
- URDF robot descriptions
- Basic ROS 2 command-line tools

## Learning Outcomes

By the end of this module, you will be able to:
- Set up Gazebo simulations with realistic physics properties
- Configure gravity, friction, and collision detection
- Integrate Unity for photorealistic rendering
- Simulate and visualize LiDAR, depth cameras, and IMUs
- Connect simulation environments to ROS 2 systems

Let's get started with [Chapter 1: Gazebo Physics Simulation](./01-gazebo-physics-simulation)!
```

### 3. Create Your First Chapter

Create `docs/module-02-digital-twin/01-gazebo-physics-simulation.mdx`:

```mdx
---
id: gazebo-physics-simulation
title: "Chapter 1: Simulating Physics, Gravity, and Collisions in Gazebo"
sidebar_label: "Ch 1: Gazebo Physics"
description: "Learn how Gazebo simulates physics, configure gravity and friction, and implement collision detection for robotic systems."
keywords: ["gazebo", "physics engine", "collision", "gravity", "friction", "ODE", "simulation"]
---

# Chapter 1: Simulating Physics, Gravity, and Collisions in Gazebo

## Introduction

[Your introduction here - explain what learners will understand and why it matters]

## Understanding Physics Engines

[Your content here]

### Supported Physics Engines

Gazebo Classic supports multiple physics engines:

- **ODE (Open Dynamics Engine)**: Default, fast, stable for most applications
- **Bullet**: High-fidelity collision detection, suitable for grasping
- **Simbody**: Accurate dynamics, ideal for biomechanics
- **DART**: Advanced features, constraint-based dynamics

```xml
<!-- Example: Configuring physics engine in world file -->
<world name="default">
  <physics type="ode">
    <max_step_size>0.001</max_step_size>
    <real_time_factor>1</real_time_factor>
    <real_time_update_rate>1000</real_time_update_rate>
  </physics>
</world>
```

[Continue with more sections...]

## Summary

[Recap key concepts and preview next chapter]
```

### 4. Update Sidebar Configuration

Edit `sidebars.js` to add Module 2:

```javascript
module.exports = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 1: Robotic Nervous System',
      items: [
        'module-01-robotic-nervous-system/01-ros-middleware',
        'module-01-robotic-nervous-system/02-nodes-topics-services',
        'module-01-robotic-nervous-system/03-python-rclpy-bridge',
        'module-01-robotic-nervous-system/04-urdf-humanoids',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: Digital Twin',
      items: [
        'module-02-digital-twin/index',
        'module-02-digital-twin/01-gazebo-physics-simulation',
        'module-02-digital-twin/02-building-environments',
        'module-02-digital-twin/03-unity-rendering-interaction',
        'module-02-digital-twin/04-sensor-simulation',
      ],
    },
    'about',
  ],
};
```

### 5. Test Locally

```bash
npm start
```

Navigate to `http://localhost:3000/docs/module-02-digital-twin` to see your content.

## Content Development Workflow

### Step-by-Step Process

1. **Draft Content**: Write chapter content in MDX using your preferred editor
2. **Add Code Examples**: Include XML, YAML, Python, and C# examples with syntax highlighting
3. **Create Diagrams**: Design technical diagrams and save to `static/img/module-02/`
4. **Test Locally**: Run `npm start` and review formatting, links, and responsiveness
5. **Review**: Check for technical accuracy, clarity, and consistency with Module 1
6. **Build**: Run `npm run build` to ensure static generation works
7. **Iterate**: Refine based on review feedback

### Chapter Template

Use this template for each chapter:

```mdx
---
id: [chapter-id]
title: "[Chapter Title]"
sidebar_label: "Ch [N]: [Short Title]"
description: "[1-2 sentence summary]"
keywords: ["keyword1", "keyword2", "keyword3"]
---

# [Chapter Title]

## Introduction

[1-2 paragraphs: What learners will understand, why it matters, prerequisites]

## [Main Section 1]

[Content with explanations, examples, diagrams]

### [Subsection 1.1]

[Detailed content]

```[language]
// Code example with comments
```

## [Main Section 2]

[More content]

## Practical Application

[Real-world use case or step-by-step example]

## Summary

[Recap key concepts, preview next chapter]

---

**Next**: [Link to next chapter]
```

## MDX Components Reference

### Code Blocks

Use fenced code blocks with language identifiers:

````mdx
```xml
<!-- Gazebo world file example -->
<world name="my_world">
  <physics type="ode">
    <gravity>0 0 -9.81</gravity>
  </physics>
</world>
```
````

Supported languages: `xml`, `yaml`, `python`, `csharp`, `bash`

### Callouts (If Implemented)

```mdx
<Callout type="tip">
This is a helpful tip for learners.
</Callout>

<Callout type="warning">
Watch out for this common mistake!
</Callout>

<Callout type="info">
Additional context or background information.
</Callout>
```

### Images

```mdx
![Gazebo Architecture Diagram](/img/module-02/gazebo-architecture.svg)
*Figure 1: Gazebo architecture showing physics engine, rendering, and ROS integration*
```

### Internal Links

```mdx
See [Chapter 3](./03-unity-rendering-interaction) for Unity integration details.

Review [Module 1, Chapter 4](/docs/module-01-robotic-nervous-system/04-urdf-humanoids) for URDF basics.
```

### External Links

```mdx
Refer to the official [Gazebo documentation](http://gazebosim.org/tutorials) for advanced topics.
```

## Style Guide

### Writing Style

- **Tone**: Professional, educational, encouraging
- **Tense**: Present tense for descriptions, imperative for instructions
- **Person**: Second person ("you") when addressing learners
- **Length**: 2,000-4,000 words per chapter
- **Code Examples**: 5-10 per chapter, well-commented

### Formatting Conventions

- **Headings**: Use H2 (`##`) for main sections, H3 (`###`) for subsections
- **Emphasis**: Use **bold** for important terms on first use, *italics* for emphasis
- **Code**: Use `backticks` for inline code, file names, and commands
- **Lists**: Use bullet points for non-sequential items, numbered lists for steps

### Technical Terms

- Define acronyms on first use: "IMU (Inertial Measurement Unit)"
- Be consistent with Module 1 terminology (e.g., "learner" not "student")
- Specify software versions: "Gazebo Classic 11", "Unity 2021.3 LTS"

### Code Example Best Practices

1. **Context Before Code**: Explain what the code does and when to use it
2. **Comments**: Add inline comments for key parameters and concepts
3. **Complete Examples**: Provide runnable code when possible, not just snippets
4. **File Paths**: Include filenames or locations where relevant

Example:

```mdx
Here's how to configure gravity in a Gazebo world file:

```xml
<!-- File: my_world.world -->
<world name="my_world">
  <physics type="ode">
    <!-- Set gravity to Earth standard (9.81 m/s²) -->
    <gravity>0 0 -9.81</gravity>

    <!-- Simulation step size (1ms) -->
    <max_step_size>0.001</max_step_size>
  </physics>
</world>
```

This configuration uses the ODE physics engine with Earth-like gravity. Adjust the `gravity` vector to simulate different planetary environments (e.g., Moon: `0 0 -1.62`).
```

## Diagram Guidelines

### Creating Diagrams

- **Tool Recommendations**: draw.io, Figma, Inkscape (for SVG)
- **Format**: SVG preferred (scalable, theme-friendly), PNG for screenshots
- **Size**: Maximum 1200px width, optimize file size
- **Style**: Clean, minimal, professional (consistent with Module 1 if applicable)

### Dark Mode Considerations

Ensure diagrams are visible in both light and dark themes:

1. Use transparent backgrounds for SVGs
2. Use high-contrast colors that work in both modes
3. OR provide theme-specific versions (e.g., `gazebo-arch-light.svg` and `gazebo-arch-dark.svg`)

### Diagram Types for Module 2

- **Architecture Diagrams**: Gazebo components, Unity-ROS bridge
- **Data Flow Diagrams**: Sensor data from Gazebo to ROS topics
- **Concept Illustrations**: Ray-casting for LiDAR, collision detection
- **Screenshots**: Gazebo GUI, Unity scenes (annotated with arrows/labels)

## Common Pitfalls & Troubleshooting

### MDX Syntax Errors

- **Problem**: Build fails with "Unexpected character" error
- **Solution**: Ensure JSX components are properly closed, check for unescaped special characters

### Broken Links

- **Problem**: Links to other chapters don't work
- **Solution**: Use relative paths (`./01-gazebo-physics-simulation`) not absolute paths

### Images Not Displaying

- **Problem**: Images show broken icon
- **Solution**: Verify file path (should be `/img/module-02/filename.svg`), ensure file exists in `static/img/module-02/`

### Sidebar Not Updating

- **Problem**: New chapter doesn't appear in sidebar
- **Solution**: Check `sidebars.js` syntax, ensure chapter ID matches frontmatter `id` field

## Checklist for Each Chapter

Before marking a chapter as complete:

- [ ] Frontmatter is complete (id, title, sidebar_label, description, keywords)
- [ ] Introduction explains what learners will understand and why it matters
- [ ] Content is organized into 3-5 main sections with clear H2 headings
- [ ] 5-10 code examples are included with proper syntax highlighting and comments
- [ ] Technical diagrams are included with alt text and captions
- [ ] Acronyms and technical terms are defined on first use
- [ ] Summary section recaps key concepts and previews next chapter
- [ ] All internal links work (test locally)
- [ ] All external links are valid and open in new tabs (if configured)
- [ ] Content is 2,000-4,000 words (appropriate depth)
- [ ] Code examples are tested and accurate
- [ ] Spelling and grammar are correct (use automated tools)
- [ ] Consistent with Module 1 style and terminology
- [ ] Accessible (heading hierarchy, alt text, keyboard navigable)

## Performance Checklist

- [ ] Images are optimized (SVG or compressed PNG, <500KB each)
- [ ] No unnecessary large media files (videos should be linked externally, not embedded)
- [ ] Code blocks are reasonably sized (<100 lines, use collapsible if longer)
- [ ] Local build completes in <5 minutes
- [ ] Lighthouse Performance score ≥ 90 for sample chapter

## Resources

- **Docusaurus Documentation**: https://docusaurus.io/docs
- **MDX Documentation**: https://mdxjs.com/docs/
- **Gazebo Tutorials**: http://gazebosim.org/tutorials
- **Unity Robotics Hub**: https://github.com/Unity-Technologies/Unity-Robotics-Hub
- **ROS 2 Documentation**: https://docs.ros.org/

## Need Help?

- Review Module 1 chapters for reference examples
- Check Docusaurus documentation for MDX syntax questions
- Test locally frequently (`npm start`) to catch issues early
- Refer to this guide's template and checklist for each chapter
