import { useEffect, useState } from "react";

type Position = {
  x: number;
  y: number;
};

export default function CustomCursor() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const [isDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  });

  useEffect(() => {
    if (!isDesktop) return;

    const moveHandler = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-9999"
      style={{
        transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
      }}
    >
      <div className="w-20 h-20 rounded-full bg-linear-to-r from-[#38bdf8] to-[#f97316] blur-3xl opacity-70"></div>
    </div>
  );
}
