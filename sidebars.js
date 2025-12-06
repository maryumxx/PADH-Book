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
    'intro',
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System',
      items: [
        'module-01-robotic-nervous-system/ros-middleware',
        'module-01-robotic-nervous-system/nodes-topics-services',
        'module-01-robotic-nervous-system/python-rclpy-bridge',
        'module-01-robotic-nervous-system/urdf-humanoids',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin',
      items: [
        'module-02-digital-twin/module-02-digital-twin',
        'module-02-digital-twin/gazebo-physics-simulation',
        'module-02-digital-twin/building-environments',
        'module-02-digital-twin/unity-rendering-interaction',
        'module-02-digital-twin/sensor-simulation',
      ],
      collapsed: false,
    },
  ],
};

module.exports = sidebars;
