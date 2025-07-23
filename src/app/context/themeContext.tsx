"use client";

import {createContext, useState } from 'react';

export type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [darkMode, setDarkMode] = useState(false);
    
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    }

    return (
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
          {children}
        </ThemeContext.Provider>
    )
}