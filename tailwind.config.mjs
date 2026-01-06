export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "muted-text": "var(--muted-text)",
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
        border: "var(--border-color)",
        "border-strong": "var(--border-color-strong)",
        "card-bg": "var(--card-bg)",
        "card-border": "var(--card-border)",
      },
      fontFamily: {
        mono: [
          "Fira Code",
          "JetBrains Mono",
          "Monaco",
          "Consolas",
          "Ubuntu Mono",
          "monospace",
        ],
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
