import React from 'react';
import Link from '@docusaurus/Link';
import CustomLayout from '@site/src/components/CustomLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@site/src/components/shadcn-ui/Card';
import { Button } from '@site/src/components/shadcn-ui/Button';

function HomepageHeader() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Physical AI Documentation Book</h1>
          <p className="text-xl mb-8 text-blue-100">Master the Robotic Nervous System</p>
          <div className="flex gap-4 justify-center">
            <Link to="/docs/intro">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Started
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function PhysicalAIIntro() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">What is Physical AI?</h2>
        <p className="text-lg text-center mb-6 text-gray-700 dark:text-gray-300">
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

export default function CustomHome() {
  return (
    <CustomLayout>
      <HomepageHeader />
      <PhysicalAIIntro />
    </CustomLayout>
  );
}
