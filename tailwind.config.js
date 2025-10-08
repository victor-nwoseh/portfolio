/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{ts,tsx,mdx}', './src/components/**/*.{ts,tsx,mdx}', './src/pages/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      fontSize: {
        display: ['56px', { lineHeight: '60px', fontWeight: '700', letterSpacing: '-0.01em' }],
        h1: ['40px', { lineHeight: '44px', fontWeight: '700' }],
        h2: ['32px', { lineHeight: '36px', fontWeight: '700' }],
        h3: ['24px', { lineHeight: '30px', fontWeight: '600' }],
        h4: ['20px', { lineHeight: '28px', fontWeight: '600' }],
        bodyLg: ['18px', { lineHeight: '28px', fontWeight: '400' }],
        bodyMd: ['16px', { lineHeight: '26px', fontWeight: '400' }],
        bodySm: ['14px', { lineHeight: '22px', fontWeight: '400' }],
      },
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

