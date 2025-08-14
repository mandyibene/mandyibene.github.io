import { useEffect, useState } from "react";

/**
 * Makes reffered element appear only when intersecting with viewport
 */
export const useIsVisible = (ref: React.RefObject<HTMLDivElement | HTMLHeadingElement | null>) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true); // will be visible
        setHasAppeared(true); // will not disappear
      }  
    });
    observer.observe(ref.current!);
    
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting || hasAppeared;
}