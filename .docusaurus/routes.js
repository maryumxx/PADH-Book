import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Physical-AI-Humanoids-Robotic-Textbook/about',
    component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/about', '727'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoids-Robotic-Textbook/contact',
    component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/contact', '2f3'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoids-Robotic-Textbook/docs',
    component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs', '71b'),
    routes: [
      {
        path: '/Physical-AI-Humanoids-Robotic-Textbook/docs',
        component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs', '751'),
        routes: [
          {
            path: '/Physical-AI-Humanoids-Robotic-Textbook/docs',
            component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs', '75a'),
            routes: [
              {
                path: '/Physical-AI-Humanoids-Robotic-Textbook/docs/intro',
                component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs/intro', 'c7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoids-Robotic-Textbook/docs/module-01-robotic-nervous-system/nodes-topics-services',
                component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs/module-01-robotic-nervous-system/nodes-topics-services', '1b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoids-Robotic-Textbook/docs/module-01-robotic-nervous-system/python-rclpy-bridge',
                component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs/module-01-robotic-nervous-system/python-rclpy-bridge', '3c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoids-Robotic-Textbook/docs/module-01-robotic-nervous-system/ros-middleware',
                component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs/module-01-robotic-nervous-system/ros-middleware', 'a22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoids-Robotic-Textbook/docs/module-01-robotic-nervous-system/urdf-humanoids',
                component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs/module-01-robotic-nervous-system/urdf-humanoids', '437'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoids-Robotic-Textbook/docs/module-02-digital-twin/',
                component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs/module-02-digital-twin/', '9f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoids-Robotic-Textbook/docs/module-02-digital-twin/building-environments',
                component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs/module-02-digital-twin/building-environments', '6ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoids-Robotic-Textbook/docs/module-02-digital-twin/gazebo-physics-simulation',
                component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs/module-02-digital-twin/gazebo-physics-simulation', 'f0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoids-Robotic-Textbook/docs/module-02-digital-twin/sensor-simulation',
                component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs/module-02-digital-twin/sensor-simulation', '395'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoids-Robotic-Textbook/docs/module-02-digital-twin/unity-rendering-interaction',
                component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/docs/module-02-digital-twin/unity-rendering-interaction', '4fc'),
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
    path: '/Physical-AI-Humanoids-Robotic-Textbook/',
    component: ComponentCreator('/Physical-AI-Humanoids-Robotic-Textbook/', '876'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
