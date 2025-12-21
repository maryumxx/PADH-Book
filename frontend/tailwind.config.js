/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './docs/**/*.{md,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffffff',
          dark: '#f5f5f5',
          darker: '#e5e5e5',
          darkest: '#d4d4d4',
          light: '#ffffff',
          lighter: '#ffffff',
          lightest: '#ffffff',
        },
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      borderRadius: {
        'xl': '16px',
        'lg': '12px',
        'md': '8px',
        'sm': '6px',
        'full': '9999px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'tight': '-0.011em',
      },
      lineHeight: {
        'tight': '1.2',
        'snug': '1.3',
        'normal': '1.5',
        'relaxed': '1.75',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.03)',
        'hover': '0 4px 12px rgba(0, 0, 0, 0.06)',
        'focus': '0 0 0 3px rgba(115, 115, 115, 0.1)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
