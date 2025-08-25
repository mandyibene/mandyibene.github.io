import { RefObject, useCallback, useEffect, useRef, useState } from "react";

type IsVisibleResult<T extends HTMLElement> = {
  ref: React.RefObject<T | null>;
  isVisible: boolean;
};

/**
 * A custom hook to track if a HTML element is currently visible in the viewport.
 * It uses the IntersectionObserver API to detect visibility changes.
 *
 * @template T - The type of the HTMLElement being observed.
 * @returns {IsVisibleResult<T>} - An object containing a `ref` to attach to the target element, and `isVisible` to indicate if the element is in the viewport.
 *
 * @example
 * const { ref, isVisible } = useIsVisible<HTMLDivElement>();
 * 
 * return (
 *   <div ref={ref}>
 *     {isVisible ? 'I am visible!' : 'I am not visible.'}
 *   </div>
 * );
 */
export const useIsVisible = <T extends HTMLElement>(): IsVisibleResult<T> => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true); // will be visible
      }  
    });
    observer.observe(ref.current!);
    
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return {ref, isVisible};
}

type AppearOnScrollResult<T extends HTMLElement> = {
  ref: React.RefObject<T | null>;
  animationClass: string;
};

/**
 * A custom hook that returns a ref and animation class to animate an element's appearance when it scrolls into view.
 *
 * @template T - The type of the HTMLElement being observed.
 * @returns {AppearOnScrollResult<T>} An object containing a `ref` to attach to the target element, and `animationClass` to animate the element appearance.
 */
export const useAppearOnScroll = <T extends HTMLElement>(): AppearOnScrollResult<T> => {
  const { ref, isVisible } = useIsVisible<T>();
  const animationClass = getAppearOnScrollClass(isVisible);

  return { ref, animationClass };
};


type AppearOnScrollClass  = string;

/**
 * Returns a CSS class string for fade-in animation based on visibility state.
 * 
 * Applies a smooth opacity transition that makes an element fade in when it becomes visible.
 * 
 * @param {boolean} isVisible - Whether the element is currently visible in the viewport.
 * @returns {string} - A string of CSS classes to control the element's transition and opacity.
 *
 * @example
 * const className = getAppearOnScrollClass(true); // "transition opacity ease-in duration-1000 opacity-100"
 * const className = getAppearOnScrollClass(false); // "transition opacity ease-in duration-1000 opacity-0"
 */
export const getAppearOnScrollClass = (isVisible: boolean): AppearOnScrollClass => {
  return `transition-all duration-700 ease-in-out
    transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`;
}

export const useScrolledY = (y: number | null) => {

  const [scrolledY, setScrolledY] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolledY(!y ? false : offset > y);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrolledY;
}

export const useAnyElementOverlap = (
  refA: RefObject<HTMLElement | null>,
  refList: RefObject<HTMLElement | null>[],
  refsReady: boolean
): boolean => {
  const [isOverlapping, setIsOverlapping] = useState(false);

  // useCallback to keep stable reference, avoids stale closures in event listeners
  const checkOverlap = useCallback(() => {
    // console.log('refA.current:', refA.current);
    // refList.forEach((ref, i) => console.log(`refList[${i}].current:`, ref.current));

    if (!refsReady) {
      setIsOverlapping(false);
      return;
    }

    const rectA = refA.current?.getBoundingClientRect();
    if (!rectA) {
      setIsOverlapping(false);
      return;
    }

    const overlapping = refList.some((refB) => {
      const rectB = refB.current?.getBoundingClientRect();
      if (!rectB) return false;

      return !(
        rectA.bottom < rectB.top ||
        rectA.top > rectB.bottom ||
        rectA.right < rectB.left ||
        rectA.left > rectB.right
      );
    });

    setIsOverlapping(overlapping);
  }, [refA, refList, refsReady]);

  useEffect(() => {
    // Run once initially
    if (refA.current && refList.every(ref => ref.current)) {
      checkOverlap();
    }

    // Add listeners
    window.addEventListener('scroll', checkOverlap, true);
    window.addEventListener('resize', checkOverlap);

    return () => {
      window.removeEventListener('scroll', checkOverlap, true);
      window.removeEventListener('resize', checkOverlap);
    };
  }, [checkOverlap]);

  return isOverlapping;
};


/**
 * A custom hook to track if a media query matches.
 * 
 * @param query - CSS media query string, e.g. '(min-width: 768px)'
 * @returns boolean - true if query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueryList = window.matchMedia(query);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", listener);

    // Set initial value
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}