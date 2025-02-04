import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
  
      // Limpieza al desmontar
      return () => window.removeEventListener("resize", handleResize);
    }
   
  }, []);

  return width;
}
