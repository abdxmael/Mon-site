module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Warm terracotta reflecting traditional clay and spice warmth
        primary: {
          DEFAULT: "#D4741A", // orange-600
          50: "#FEF7ED", // orange-50
          100: "#FDEDD3", // orange-100
          200: "#FCD9A6", // orange-200
          300: "#FBBF24", // orange-300
          400: "#F59E0B", // orange-400
          500: "#D97706", // orange-500
          600: "#D4741A", // orange-600
          700: "#B45309", // orange-700
          800: "#92400E", // orange-800
          900: "#78350F", // orange-900
        },
        // Secondary Colors - Rich earth brown grounding brand in agricultural heritage
        secondary: {
          DEFAULT: "#8B4513", // amber-800
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          200: "#FDE68A", // amber-200
          300: "#FCD34D", // amber-300
          400: "#FBBF24", // amber-400
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
          800: "#8B4513", // amber-800
          900: "#78350F", // amber-900
        },
        // Accent Colors - Golden honey highlighting calls-to-action and success moments
        accent: {
          DEFAULT: "#F4A460", // yellow-400
          50: "#FEFCE8", // yellow-50
          100: "#FEF9C3", // yellow-100
          200: "#FEF08A", // yellow-200
          300: "#FDE047", // yellow-300
          400: "#F4A460", // yellow-400
          500: "#EAB308", // yellow-500
          600: "#CA8A04", // yellow-600
          700: "#A16207", // yellow-700
          800: "#854D0E", // yellow-800
          900: "#713F12", // yellow-900
        },
        // Background Colors - Warm cream providing gentle canvas for content
        background: {
          DEFAULT: "#FDF6E3", // stone-50
          50: "#FAFAF9", // stone-50
          100: "#F5F5F4", // stone-100
          200: "#E7E5E4", // stone-200
        },
        // Surface Colors - Subtle beige creating depth without harsh contrast
        surface: {
          DEFAULT: "#F5F0E8", // stone-100
          50: "#FAFAF9", // stone-50
          100: "#F5F0E8", // stone-100
          200: "#E7E5E4", // stone-200
          300: "#D6D3D1", // stone-300
        },
        // Text Colors - Deep brown ensuring readability while maintaining warmth
        text: {
          primary: "#2C1810", // stone-900
          secondary: "#5D4037", // stone-700
          muted: "#78716C", // stone-500
        },
        // Utility Colors
        success: "#7CB342", // green-600
        warning: "#FF8F00", // orange-500
        error: "#D84315", // red-600
        // Border Colors
        border: {
          DEFAULT: "#E8DDD4", // stone-200
          light: "#F5F0E8", // stone-100
        },
      },
      fontFamily: {
        // Headlines: Playfair Display - Elegant serif for brand storytelling
        headline: ['Playfair Display', 'serif'],
        // Body: Source Sans Pro - Clean, highly legible sans-serif
        body: ['Source Sans Pro', 'sans-serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
        // CTAs: Nunito Sans - Friendly, approachable sans-serif
        cta: ['Nunito Sans', 'sans-serif'],
        // Accents: Crimson Text - Traditional serif for cultural quotes
        accent: ['Crimson Text', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.3' }],
        '6xl': ['3.75rem', { lineHeight: '1.3' }],
      },
      boxShadow: {
        'warm': '0 4px 12px rgba(212, 116, 26, 0.15)',
        'subtle': '0 2px 8px rgba(212, 116, 26, 0.1)',
        'gentle': '0 1px 4px rgba(212, 116, 26, 0.08)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'gentle-bounce': 'gentleBounce 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
    },
  },
  plugins: [],
}