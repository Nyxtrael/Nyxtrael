'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  darkMode: true,
  toggleDarkMode: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false); // Default to false to avoid SSR mismatch

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setDarkMode(storedTheme === 'dark');
      } else {
        // Fallback to system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
      }

      // Apply theme class
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    if (typeof window !== 'undefined') {
      setDarkMode((prevMode) => {
        const newMode = !prevMode;
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
        if (newMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return newMode;
      });
    }
  };

  // Initial render uses server-side value, client-side useEffect updates it
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};