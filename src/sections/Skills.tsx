import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaAngular, FaReact, FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiNgrx, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

type Skill = {
  icon: IconType;
  name: string;
};

export default function Skills() {
  const skills: Skill[] = [
    { icon: FaAngular, name: "Angular" },
    {
      icon: SiNgrx,
      name: "NgRx",
    },
    {
      icon: SiTypescript,
      name: "Typescript",
    },
    {
      icon: RiTailwindCssFill,
      name: "Tailwind CSS",
    },
    {
      icon: FaSass,
      name: "Sass",
    },
    {
      icon: FaReact,
      name: "React",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
    },
    {
      icon: TbBrandCSharp,
      name: "C#",
    },
    {
      icon: AiOutlineDotNet,
      name: ".NET",
    },
  ];

  const COPIES = 3;
  const repeated = Array.from({ length: COPIES }, () => skills).flat();

  const [dir, setDir] = useState<1 | -1>(-1);
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const touchY = useRef<number | null>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
      },
      { threshold: [0.1] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;

    const onWheel = (e: WheelEvent) => setDir(e.deltaY > 0 ? -1 : 1);
    const onTouchStart = (e: TouchEvent) =>
      (touchY.current = e.touches[0].clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (touchY.current === null) return;
      const delta = e.touches[0].clientY - touchY.current;
      setDir(delta > 0 ? 1 : -1);
      touchY.current = e.touches[0].clientY;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.addEventListener("wheel", onWheel);
      window.addEventListener("touchstart", onTouchStart);
      window.addEventListener("touchmove", onTouchMove);
    };
  }, [active]);

  useEffect(() => {
    let id: number;
    let last = performance.now();
    const SPEED = 90;

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      let next = x.get() + SPEED * dir * dt;

      const track = trackRef.current;
      if (track) {
        const totalWidth = track.scrollWidth;
        const singleLoop = totalWidth / COPIES;

        if (next <= -singleLoop) next += singleLoop;
        if (next >= 0) next -= singleLoop;
      }

      x.set(next);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [dir, x]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-[#020617] text-[#f8fafc] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-0 w-75 h-75 rounded-full bg-linear-to-r  from-[#38bdf8] 
          via-[#0ea5e9] to-[#f97316] opacity-20 blur-[120px] animate-pulse"
        />
        <div
          className="absolute bottom-1/4 right-0 w-75 h-75 rounded-full bg-linear-to-r from-[#38bdf8] 
          via-[#0ea5e9] to-[#f97316] opacity-20 blur-[120px] animate-pulse delay-500"
        />
      </div>

      <motion.h2
        className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#f97316] 
        to-[#e9bc40]"
      >
        My Skills
      </motion.h2>

      <motion.p
        className="mt-5 mb-8 text-[#94a3b8] text-base sm:text-lg z-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Modern Technologies
      </motion.p>

      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex gap-10 text-6xl text-[#7dd8ff]"
          style={{ x, whiteSpace: "nowrap", willChange: "transform" }}
        >
          {repeated.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 min-w-30"
              aria-label={s.name}
              title={s.name}
            >
              <span>
                <s.icon />
              </span>
              <p className="text-sm">{s.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
