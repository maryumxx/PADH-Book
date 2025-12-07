/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Module 1: The Robotic Nervous System",
      items: [
        "module-01-robotic-nervous-system/ros-middleware",
        "module-01-robotic-nervous-system/nodes-topics-services",
        "module-01-robotic-nervous-system/python-rclpy-bridge",
        "module-01-robotic-nervous-system/urdf-humanoids",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Module 2: The Digital Twin",
      items: [
        "module-02-digital-twin/module-02-digital-twin",
        "module-02-digital-twin/gazebo-physics-simulation",
        "module-02-digital-twin/building-environments",
        "module-02-digital-twin/unity-rendering-interaction",
        "module-02-digital-twin/sensor-simulation",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Module 3: The AI-Robot Brain",
      items: [
        "module-03-ai-robot-brain/module-03-ai-robot-brain",
        "module-03-ai-robot-brain/isaac-sim-synthetic-data",
        "module-03-ai-robot-brain/isaac-ros-perception",
        "module-03-ai-robot-brain/visual-slam-navigation",
        "module-03-ai-robot-brain/nav2-bipedal-planning",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Module 4: Vision-Language-Action",
      items: [
        "module-04-vision-language-action/capstone-autonomous-humanoid",
        "module-04-vision-language-action/chapter1-completion",
        "module-04-vision-language-action/cognitive-planning-llms",
        "module-04-vision-language-action/computer-vision-object-recognition",
        "module-04-vision-language-action/module-04-intro",
        "module-04-vision-language-action/voice-to-action-whisper",
      ],
      collapsed: false,
    },
  ],
};

module.exports = sidebars;
