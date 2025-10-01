/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{ts,tsx,mdx}', './src/components/**/*.{ts,tsx,mdx}', './src/pages/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        accent: { DEFAULT: 'var(--color-accent)', hover: 'var(--color-accent-hover)' },
        border: 'var(--color-border)',
        muted: 'var(--color-muted)',
        focus: 'var(--color-focus)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)'
      }
    },
  },
  plugins: [],
}

