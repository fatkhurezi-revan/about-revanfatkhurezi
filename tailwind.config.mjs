/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#3B82F6",
        "primary-hover": "#2563EB",
        "surface-white": "#FFFFFF",
        "surface-bright": "#F8FAFC",
        "border-subtle": "#E2E8F0",
        "on-surface": "#191c1e",
        "on-surface-variant": "#424754",
        "outline": "#727785",
        "accent-purple": "#5022ED",
        "accent-pink": "#E9C0E9",
        
        // Dark mode colors
        "dark-bg": "#0F172A",
        "dark-surface": "#1E293B",
        "dark-border": "#334155",
        "dark-on-surface": "#F1F5F9",
        "dark-on-surface-variant": "#94A3B8"
      },
      fontFamily: {
        "sans": ["Inter", "sans-serif"],
      },
      boxShadow: {
        'ambient': '0px 4px 20px rgba(0, 0, 0, 0.04)',
        'hover': '0px 8px 30px rgba(0, 0, 0, 0.08)',
        'ambient-dark': '0px 4px 20px rgba(0, 0, 0, 0.4)',
        'hover-dark': '0px 8px 30px rgba(0, 0, 0, 0.6)'
      }
    },
  },
  plugins: [],
}
