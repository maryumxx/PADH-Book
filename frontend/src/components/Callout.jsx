import React from 'react';
import clsx from 'clsx';

/**
 * Callout component for highlighting important information
 * Types: info, warning, danger, success
 */
export default function Callout({ children, type = 'info', title }) {
  const types = {
    info: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      icon: '\u2139\ufe0f',
      titleColor: 'text-blue-900 dark:text-blue-100',
    },
    warning: {
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      icon: '\u26a0\ufe0f',
      titleColor: 'text-yellow-900 dark:text-yellow-100',
    },
    danger: {
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-800',
      icon: '\ud83d\uded1',
      titleColor: 'text-red-900 dark:text-red-100',
    },
    success: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      icon: '\u2705',
      titleColor: 'text-green-900 dark:text-green-100',
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
