import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

const experiences: Experience[] = [
  {
    role: "Web Developer",
    company: "Brain Mentors",
    duration: "2022",
    description:
      "Built high-performance apps, integrated AI features, improved engagement by 10%",
  },
  {
    role: "Web Developer",
    company: "Brain Mentors",
    duration: "2022",
    description:
      "Built high-performance apps, integrated AI features, improved engagement by 10%",
  },
  {
    role: "Web Developer",
    company: "Brain Mentors",
    duration: "2022",
    description:
      "Built high-performance apps, integrated AI features, improved engagement by 10%",
  },
];

function ExperienceItem({ exp, idx, start, end, scrollYProgress, layout }) {
  const scale = useTransform(scrollYProgress, [start, end], [0, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(
    scrollYProgress,
    [start, end],
    [idx % 2 === 0 ? 30 : -30, 0],
  );
  const x = useTransform(scrollYProgress, [start, end], [-24, 0]);

  if (layout === "desktop") {
    return (
      <div className="relative flex flex-1 justify-center items-center min-w-0">
        <motion.div
          className="z-10 w-7 y-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
          style={{ scale, opacity }}
        >
          <motion.div
            className={`absolute ${idx % 2 === 0 ? "-top-8" : "-bottom-8"} w-0.75 bg-white/40`}
            style={{ height: 40, opacity }}
          ></motion.div>
          <motion.article
            className={`absolute ${idx % 2 === 0 ? "bottom-12" : "top-12"} bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-7 w-[320px] shadow-lg`}
            style={{ opacity, y, maxWidth: "90vw" }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-md text-gray-400 mb-3">
              {exp.company} | {exp.duration}
            </p>
            <p className="text-md text-gray-300 wrap-break-word">
              {exp.description}
            </p>
          </motion.article>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative flex items-start">
      <motion.div
        className="absolute -left-3.5 top-3 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
        style={{ scale, opacity }}
      ></motion.div>
      <motion.article
        className="bg-gray-900/80 backdrop-blur border broder-gray-700/70 rounded-xl p-5 w-[90vw] max-w-sm ml-6 shadow-lg"
        style={{ opacity, x }}
        transition={{ duration: 0.4, delay: idx * 0.15 }}
      >
        <h3 className="text-lg font-semibold wrap-break-word">{exp.role}</h3>
        <p className="text-sm text-gray-400 mb-2 wrap-break-word">{exp.role}</p>
        <p className="text-sm text-gray-300 wrap-break-word">
          {exp.description}
        </p>
      </motion.article>
    </div>
  );
}

export default function Experience() {
  const sceneRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => removeEventListener("resize", checkMobile);
  }, []);

  const SCENE_HEIGHT_VH = isMobile
    ? 160 * experiences.length
    : 120 * experiences.length;

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const thresholds = useMemo(
    () => experiences.map((_, i) => (i + 1) / experiences.length),
    [],
  );
  const lineSize = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  return (
    <section id="experience" className="relative bg-black text-white"></section>
  );
}
