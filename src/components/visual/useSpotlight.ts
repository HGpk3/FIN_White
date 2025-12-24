"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface SpotlightVars {
  "--spot-x": string;
  "--spot-y": string;
  "--spot-x-offset": number;
  "--spot-y-offset": number;
}

const lerp = (start: number, end: number, amount: number) => start + (end - start) * amount;

export function useSpotlight() {
  const prefersReducedMotion = useReducedMotion();
  const frame = useRef(0);
  const target = useRef({ x: 50, y: 35 });
  const current = useRef({ x: 50, y: 35 });
  const [vars, setVars] = useState<SpotlightVars>({
    "--spot-x": "50%",
    "--spot-y": "35%",
    "--spot-x-offset": 0,
    "--spot-y-offset": 0,
  });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMove = (event: MouseEvent) => {
      target.current = {
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      };
    };

    const animate = () => {
      current.current = {
        x: lerp(current.current.x, target.current.x, 0.08),
        y: lerp(current.current.y, target.current.y, 0.08),
      };

      // Lerp keeps spotlight movement smooth and premium without sharp jumps.
      const offsetX = (current.current.x - 50) / 50;
      const offsetY = (current.current.y - 50) / 50;

      setVars({
        "--spot-x": `${current.current.x.toFixed(2)}%`,
        "--spot-y": `${current.current.y.toFixed(2)}%`,
        "--spot-x-offset": Number(offsetX.toFixed(3)),
        "--spot-y-offset": Number(offsetY.toFixed(3)),
      });

      frame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    frame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame.current);
    };
  }, [prefersReducedMotion]);

  return prefersReducedMotion ? undefined : vars;
}
