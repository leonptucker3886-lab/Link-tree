"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

export type ThemeId = "dark-neon" | "light-minimal" | "cyber-purple" | "earthy-green";

export interface Theme {
  id: ThemeId;
  name: string;
  icon: string;
}

export const themes: Theme[] = [
  { id: "dark-neon", name: "Dark Neon", icon: "🌙" },
  { id: "light-minimal", name: "Light Minimal", icon: "☀️" },
  { id: "cyber-purple", name: "Cyber Purple", icon: "💜" },
  { id: "earthy-green", name: "Earthy Green", icon: "🌿" },
];

function readStoredTheme(): ThemeId {
  try {
    const stored = localStorage.getItem("leon-theme");
    if (stored && themes.some((t) => t.id === stored)) return stored as ThemeId;
  } catch {
    // localStorage unavailable (SSR or private browsing)
  }
  return "dark-neon";
}

interface ThemeContextValue {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark-neon",
  setTheme: () => {},
  themes,
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(readStoredTheme);

  const setTheme = useCallback((id: ThemeId) => {
    setThemeState(id);
    localStorage.setItem("leon-theme", id);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}
