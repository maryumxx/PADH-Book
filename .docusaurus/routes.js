import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about',
    component: ComponentCreator('/about', '954'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact', 'abe'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '6d5'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '4e0'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '6c9'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-01-robotic-nervous-system/nodes-topics-services',
                component: ComponentCreator('/docs/module-01-robotic-nervous-system/nodes-topics-services', '1db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-01-robotic-nervous-system/python-rclpy-bridge',
                component: ComponentCreator('/docs/module-01-robotic-nervous-system/python-rclpy-bridge', '123'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-01-robotic-nervous-system/ros-middleware',
                component: ComponentCreator('/docs/module-01-robotic-nervous-system/ros-middleware', '48f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-01-robotic-nervous-system/urdf-humanoids',
                component: ComponentCreator('/docs/module-01-robotic-nervous-system/urdf-humanoids', '2a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-02-digital-twin/',
                component: ComponentCreator('/docs/module-02-digital-twin/', 'cd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-02-digital-twin/building-environments',
                component: ComponentCreator('/docs/module-02-digital-twin/building-environments', '935'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-02-digital-twin/gazebo-physics-simulation',
                component: ComponentCreator('/docs/module-02-digital-twin/gazebo-physics-simulation', '091'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-02-digital-twin/sensor-simulation',
                component: ComponentCreator('/docs/module-02-digital-twin/sensor-simulation', 'b46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-02-digital-twin/unity-rendering-interaction',
                component: ComponentCreator('/docs/module-02-digital-twin/unity-rendering-interaction', '823'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-03-ai-robot-brain/',
                component: ComponentCreator('/docs/module-03-ai-robot-brain/', 'd26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-03-ai-robot-brain/isaac-ros-perception',
                component: ComponentCreator('/docs/module-03-ai-robot-brain/isaac-ros-perception', '11a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-03-ai-robot-brain/isaac-sim-synthetic-data',
                component: ComponentCreator('/docs/module-03-ai-robot-brain/isaac-sim-synthetic-data', 'a68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-03-ai-robot-brain/nav2-bipedal-planning',
                component: ComponentCreator('/docs/module-03-ai-robot-brain/nav2-bipedal-planning', '835'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-03-ai-robot-brain/visual-slam-navigation',
                component: ComponentCreator('/docs/module-03-ai-robot-brain/visual-slam-navigation', '4b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-04-vision-language-action/',
                component: ComponentCreator('/docs/module-04-vision-language-action/', '7ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-04-vision-language-action/capstone-autonomous-humanoid',
                component: ComponentCreator('/docs/module-04-vision-language-action/capstone-autonomous-humanoid', '4ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-04-vision-language-action/chapter1-completion',
                component: ComponentCreator('/docs/module-04-vision-language-action/chapter1-completion', '669'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-04-vision-language-action/cognitive-planning-llms',
                component: ComponentCreator('/docs/module-04-vision-language-action/cognitive-planning-llms', '541'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-04-vision-language-action/computer-vision-object-recognition',
                component: ComponentCreator('/docs/module-04-vision-language-action/computer-vision-object-recognition', '964'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-04-vision-language-action/voice-to-action-whisper',
                component: ComponentCreator('/docs/module-04-vision-language-action/voice-to-action-whisper', '008'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
