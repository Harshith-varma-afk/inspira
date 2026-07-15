/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
        },
        slate: {
          ink: '#0F172A',
          deep: '#1E293B',
          soft: '#F8FAFC',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'accent-gradient':
          'linear-gradient(135deg, #2563EB 0%, #4F46E5 50%, #7C3AED 100%)',
        'accent-gradient-soft':
          'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(79,70,229,0.1) 50%, rgba(124,58,237,0.08) 100%)',
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(15, 23, 42, 0.08)',
        card: '0 8px 30px -8px rgba(15, 23, 42, 0.1)',
      },
    },
  },
  plugins: [],
}
