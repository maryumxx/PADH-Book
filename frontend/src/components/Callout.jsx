import React from 'react';
import clsx from 'clsx';

/**
 * Callout component for highlighting important information
 * Types: info, warning, danger, success
 */
export default function Callout({ children, type = 'info', title }) {
  const types = {
    info: {
      bg: 'bg-gray-100 dark:bg-gray-800',
      border: 'border-gray-300 dark:border-gray-600',
      icon: '\u2139\ufe0f',
      titleColor: 'text-gray-900 dark:text-gray-100',
    },
    warning: {
      bg: 'bg-gray-100 dark:bg-gray-800',
      border: 'border-gray-400 dark:border-gray-500',
      icon: '\u26a0\ufe0f',
      titleColor: 'text-gray-900 dark:text-gray-100',
    },
    danger: {
      bg: 'bg-gray-200 dark:bg-gray-900',
      border: 'border-gray-500 dark:border-gray-400',
      icon: '\ud83d\uded1',
      titleColor: 'text-gray-900 dark:text-gray-100',
    },
    success: {
      bg: 'bg-gray-50 dark:bg-gray-800',
      border: 'border-gray-300 dark:border-gray-600',
      icon: '\u2705',
      titleColor: 'text-gray-900 dark:text-gray-100',
    },
  };

  const config = types[type] || types.info;

  return (
    <div
      className={clsx(
        'my-4 rounded-lg border-l-4 p-4',
        config.bg,
        config.border
      )}
    >
      {title && (
        <div className={clsx('flex items-center gap-2 mb-2 font-semibold', config.titleColor)}>
          <span>{config.icon}</span>
          <span>{title}</span>
        </div>
      )}
      <div className="text-sm">{children}</div>
    </div>
  );
}
