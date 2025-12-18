import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import { Button } from '@site/src/components/shadcn-ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@site/src/components/shadcn-ui/Card';
import Callout from '@site/src/components/Callout';
import VideoEmbed from '@site/src/components/VideoEmbed';

/**
 * Register custom components for use in MDX files
 * These components can be used directly in .mdx files without importing
 */
export default {
  ...MDXComponents,
  // shadcn/ui components
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  // Custom components
  Callout,
  VideoEmbed,
};
