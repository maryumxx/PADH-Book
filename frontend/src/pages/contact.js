import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@site/src/components/shadcn-ui/Card';
import { Button } from '@site/src/components/shadcn-ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissions, setSubmissions] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  // Load previous submissions from localStorage
  useEffect(() => {
    const storedSubmissions = localStorage.getItem('contactSubmissions');
    if (storedSubmissions) {
      try {
        setSubmissions(JSON.parse(storedSubmissions));
      } catch (e) {
        console.error('Error loading submissions:', e);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Message length validation
    if (formData.message.length < 10) {
      alert('Message must be at least 10 characters long');
      return;
    }

    // Create submission object
    const submission = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    // Save to localStorage
    const updatedSubmissions = [submission, ...submissions];
    localStorage.setItem('contactSubmissions', JSON.stringify(updatedSubmissions));
    setSubmissions(updatedSubmissions);

    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear all submission history?')) {
      localStorage.removeItem('contactSubmissions');
      setSubmissions([]);
    }
  };

  return (
    <Layout
      title="Contact"
      description="Get in touch with the Physical AI Documentation team"
    >
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-center mb-4">Get in Touch</h1>
          <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-400">
            Have questions, feedback, or suggestions? We'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {showSuccess && (
                  <div className="mb-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-md">
                    ✅ Message sent successfully! (Saved to your browser's local storage)
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                      placeholder="Your message (minimum 10 characters)..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>

                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <strong>Note:</strong> This is a demo form. Submissions are saved locally in your browser's
                  localStorage and not sent to a server.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information & Previous Submissions */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Other Ways to Reach Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">📧 Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      contact@physicalai-docs.example.com
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">💬 Community Forum</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Join discussions, ask questions, and share your projects
                    </p>
                    <Button variant="outline" className="mt-2">
                      Visit Forum
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">🐛 Bug Reports</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Found an issue? Report it on GitHub
                    </p>
                    <Button variant="outline" className="mt-2">
                      Open Issue
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">💡 Feature Requests</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Suggest improvements and new content
                    </p>
                    <Button variant="outline" className="mt-2">
                      Submit Idea
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Previous Submissions */}
              {submissions.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center justify-between">
                      <span>Your Previous Messages</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleClearHistory}
                        className="text-red-500 hover:text-red-700"
                      >
                        Clear All
                      </Button>
                    </CardTitle>
                    <CardDescription>
                      {submissions.length} message{submissions.length !== 1 ? 's' : ''} stored locally
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {submissions.map((sub, idx) => (
                        <div
                          key={idx}
                          className="p-4 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-semibold">{sub.name}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{sub.email}</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              {new Date(sub.timestamp).toLocaleString()}
                            </p>
                          </div>
                          <p className="text-sm mt-2">{sub.message}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
