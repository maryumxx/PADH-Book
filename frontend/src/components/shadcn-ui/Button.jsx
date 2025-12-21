import React from 'react';
import clsx from 'clsx';

/**
 * Button component based on shadcn/ui design
 * A versatile button component with multiple variants
 */
const Button = React.forwardRef(({
  className,
  variant = 'default',
  size = 'default',
  children,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9c5ffc] disabled:pointer-events-none disabled:opacity-50 backdrop-blur-md shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95';

  const variants = {
    default: 'bg-gradient-to-r from-[#7befff] via-[#9c5ffc] to-[#d49bc9] text-white border border-white/30 hover:border-white/50 dark:from-[#9c5ffc] dark:via-[#d49bc9] dark:to-[#ffcda8]',
    outline: 'border-2 border-[#9c5ffc] bg-white/20 backdrop-blur-md text-gray-900 hover:bg-[#9c5ffc]/10 dark:text-white dark:border-[#7befff] dark:hover:bg-[#7befff]/10',
    ghost: 'border border-transparent bg-white/10 backdrop-blur-sm hover:bg-white/20 text-gray-900 dark:text-white hover:border-white/20',
    link: 'border-transparent bg-transparent text-gray-900 underline-offset-4 hover:underline dark:text-white shadow-none hover:shadow-none',
  };

  const sizes = {
    default: 'h-10 px-6 py-2 text-sm',
    sm: 'h-9 px-4 text-xs',
    lg: 'h-12 px-8 text-base',
    icon: 'h-10 w-10',
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
