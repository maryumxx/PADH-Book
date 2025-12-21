import React from 'react';
import clsx from 'clsx';

/**
 * Card components based on shadcn/ui design
 * Flexible card component for displaying content
 */

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(
      'relative rounded-xl overflow-hidden',
      'bg-white/80 dark:bg-gray-900/80',
      'backdrop-blur-lg',
      'border border-white/30 dark:border-white/10',
      'shadow-lg hover:shadow-2xl',
      'transition-all duration-300',
      'hover:scale-[1.02] hover:border-white/50',
      'text-gray-900 dark:text-gray-100',
      'before:absolute before:inset-0 before:rounded-xl',
      'before:bg-gradient-to-br before:from-[#7befff]/10 before:via-[#9c5ffc]/10 before:to-[#d49bc9]/10',
      'before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',
      'before:pointer-events-none',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('relative z-10 flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={clsx(
      'text-2xl font-bold leading-none tracking-tight',
      'bg-gradient-to-r from-[#7befff] via-[#9c5ffc] to-[#d49bc9]',
      'bg-clip-text text-transparent',
      'dark:from-[#7befff] dark:via-[#9c5ffc] dark:to-[#ffcda8]',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={clsx(
      'text-sm text-gray-700 dark:text-gray-300',
      'font-medium',
      className
    )}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(
      'relative z-10 p-6 pt-0',
      'text-gray-800 dark:text-gray-200',
      className
    )}
    {...props}
  />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(
      'relative z-10 flex items-center p-6 pt-0',
      className
    )}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
