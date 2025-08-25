import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../context/themeContext";
import { SectionsRefsContext } from "../context/sectionsRefsContext";

export const useSectionsRefs = () => {
  const context = useContext(SectionsRefsContext);
  if (!context) {
    throw new Error('useSectionRefs must be used within a SectionRefsProvider');
  }
  return context;
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeContextProvider");
  }
  return context;
};