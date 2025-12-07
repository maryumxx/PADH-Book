import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@site/src/components/shadcn-ui/Card';
import { Button } from '@site/src/components/shadcn-ui/Button';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        <h1 className="hero__title text-5xl font-bold mb-4">{siteConfig.title}</h1>
        <p className="hero__subtitle text-xl mb-8">{siteConfig.tagline}</p>
        <div className="flex gap-4 justify-center">
          <Link to="/docs/intro">
            <Button size="lg">
              Get Started
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function PhysicalAIIntro() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">What is Physical AI?</h2>
        <p className="text-lg text-center mb-6">
          Physical AI represents the convergence of artificial intelligence with the physical world.
          It's where robots don't just compute—they perceive, reason, and act in real environments.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Perceive</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Sensors capture the physical environment: cameras see, LIDAR measures distance, IMUs track orientation.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Process</CardTitle>
            </CardHeader>
            <CardContent>
              <p>AI algorithms interpret sensor data, make decisions, and plan actions using neural networks and ML models.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Act</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Actuators and motors execute commands, moving limbs, gripping objects, and navigating spaces.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ModuleOverview() {
  const modules = [
    {
      title: 'Module 1: The Robotic Nervous System',
      description: 'Master ROS 2, the communication backbone of modern robotics. Learn nodes, topics, services, and robot modeling with URDF.',
      chapters: 4,
      link: '/docs/module-01-robotic-nervous-system/ros-middleware',
      topics: ['ROS 2 Middleware', 'Nodes & Topics', 'Python rclpy', 'URDF Modeling'],
    },
    {
      title: 'Module 2: The Digital Twin',
      description: 'Create realistic digital twins with Gazebo and Unity. Learn physics simulation, environment building, and sensor modeling.',
      chapters: 4,
      link: '/docs/module-02-digital-twin',
      topics: ['Gazebo Physics', 'Building Environments', 'Unity Rendering', 'Sensor Simulation'],
    },
    {
      title: 'Module 3: The AI-Robot Brain',
      description: 'Advanced perception, simulation training, and navigation pipelines for bipedal humanoid robots using NVIDIA Isaac technologies.',
      chapters: 4,
      link: '/docs/module-03-ai-robot-brain',
      topics: ['Isaac Sim & Synthetic Data', 'Isaac ROS Perception', 'Visual SLAM', 'Nav2 Planning'],
    },
    {
      title: 'Module 4: Vision-Language-Action',
      description: 'Integrate voice commands, LLM planning, and computer vision to build autonomous humanoid robots that understand language and interact with the world.',
      chapters: 5,
      link: '/docs/module-04-vision-language-action',
      topics: ['Voice-to-Action (Whisper)', 'Cognitive Planning (LLMs)', 'Computer Vision (CLIP/SAM/DINO)', 'Capstone: Autonomous Humanoid'],
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Available Modules</h2>
        <div className="grid md:grid-cols-1 gap-8">
          {modules.map((module, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">{module.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="font-semibold mb-2">Topics Covered:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {module.topics.map((topic, topicIdx) => (
                      <li key={topicIdx}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {module.chapters} chapters
                  </span>
                  <Link to={module.link}>
                    <Button>Start Module →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: 'Interactive Examples',
      description: 'Copy-paste code samples with syntax highlighting. Run them in your own environment.',
      icon: '💻',
    },
    {
      title: 'Visual Diagrams',
      description: 'Complex concepts explained with clear illustrations, flowcharts, and animations.',
      icon: '📊',
    },
    {
      title: 'Practical Projects',
      description: 'Hands-on exercises reinforce learning. Build real robots, not just theory.',
      icon: '🤖',
    },
    {
      title: 'Best Practices',
      description: 'Industry-standard approaches from professionals building production robots.',
      icon: '✨',
    },
    {
      title: 'Progressive Learning',
      description: 'Start from fundamentals, build to advanced topics. Each chapter prepares you for the next.',
      icon: '📚',
    },
    {
      title: 'Always Updated',
      description: 'Documentation evolves with the field. Latest tools, techniques, and frameworks.',
      icon: '🔄',
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Why This Documentation?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx}>
              <CardHeader>
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="py-16 px-4 bg-primary-light dark:bg-primary-dark text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Intelligent Robots?</h2>
        <p className="text-xl mb-8">
          Start with Module 1 and master the foundation of Physical AI. From ROS 2 basics to robot modeling,
          you'll gain the skills to create sophisticated robotic systems.
        </p>
        <Link to="/docs/intro">
          <Button variant="default" size="lg" className="bg-white text-primary hover:bg-gray-100">
            Begin Your Journey →
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Comprehensive documentation for Physical AI, robotics, and ROS 2 development"
    >
      <HomepageHeader />
      <main>
        <PhysicalAIIntro />
        <ModuleOverview />
        <Features />
        <CallToAction />
      </main>
    </Layout>
  );
}
