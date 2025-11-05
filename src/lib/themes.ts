export interface TerminalThemeDefinition {
  id: string;
  label: string;
  mode: "light" | "dark";
}

export const TERMINAL_THEME_STORAGE_KEY = "terminal-theme-preference";

export const TERMINAL_THEMES: TerminalThemeDefinition[] = [
  { id: "terminal-amber-dark", label: "Amber (Dark)", mode: "dark" },
  { id: "terminal-amber-light", label: "Amber (Light)", mode: "light" },
  { id: "terminal-magenta-dark", label: "Magenta (Dark)", mode: "dark" },
  { id: "terminal-magenta-light", label: "Magenta (Light)", mode: "light" },
  { id: "terminal-ocean-dark", label: "Ocean (Dark)", mode: "dark" },
  { id: "terminal-ocean-light", label: "Ocean (Light)", mode: "light" },
];

export const isValidTerminalThemeId = (value: string | null | undefined) =>
  typeof value === "string" &&
  TERMINAL_THEMES.some((theme) => theme.id === value);
