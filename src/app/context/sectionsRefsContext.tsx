"use client";

import {createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';

export type SectionRef = React.RefObject<HTMLElement | null>;

interface SectionsRefsContextType {
  sectionsRefs: SectionRef[];
  registerSections: (ref: SectionRef) => void;
  refsReady: boolean;
}

export const SectionsRefsContext = createContext<SectionsRefsContextType | undefined>(undefined);

type SectionsRefsProviderProps = {
  children: React.ReactNode;
};

export const SectionsRefsProvider = ({ children }: SectionsRefsProviderProps) => {
    const refsArray = useRef<React.RefObject<HTMLElement | null>[]>([]);
    const [refsReady, setRefsReady] = useState(false);

    const registerSections = useCallback((ref: React.RefObject<HTMLElement | null>) => {
      if (!refsArray.current.includes(ref)) {
        refsArray.current.push(ref);
      }
    }, []);

    // Check if all refs have current (i.e., attached to DOM)
    useEffect(() => {
      const allMounted = refsArray.current.length > 0 && refsArray.current.every(ref => ref.current !== null);
      setRefsReady(allMounted);
    }, [refsArray.current.length]); // Run when refs length changes

    // Memoize so consumers get stable array reference unless length changes
    const sectionsRefs = useMemo(() => [...refsArray.current], [refsArray.current.length]);

    const contextValue: SectionsRefsContextType = useMemo(() => ({
      sectionsRefs,
      registerSections,
      refsReady,
    }), [sectionsRefs, registerSections, refsReady]);

    return (
      <SectionsRefsContext.Provider value={contextValue}>
        {children}
      </SectionsRefsContext.Provider>
    );
}