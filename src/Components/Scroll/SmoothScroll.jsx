import { useEffect, useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import Lenis from "lenis";

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.08, //
    });

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  useAnimationFrame((time) => {
    lenisRef.current?.raf(time);
  });

  return <>{children}</>;
};

export default SmoothScroll;
