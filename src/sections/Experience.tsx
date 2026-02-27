import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type ExperienceItemProps = {
  exp: Experience;
  idx: number;
  start: number;
  end: number;
  scrollYProgress: MotionValue<number>;
  layout: "desktop" | "mobile";
};

type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

const experiences: Experience[] = [
  {
    role: "Base em Programação",
    company: "Início da Jornada",
    duration: "2022",
    description:
      "Estudo de lógica, algoritmos e fundamentos da computação, construindo a base para evolução no desenvolvimento web.",
  },
  {
    role: "Desenvolvimento Web",
    company: "Evolução",
    duration: "2023 – 2024",
    description:
      "Criação de aplicações com HTML, CSS e JavaScript, expandindo para React, Next.js e outras tecnologias modernas de front-end.",
  },
  {
    role: "Experiência Profissional",
    company: "Estágio e Graduação",
    duration: "2025 – 2026",
    description:
      "Atuação com Angular, NgRx, Tailwind, C# e .NET em sistemas. Conclusão da graduação e foco em novos desafios.",
  },
];

function ExperienceItem({
  exp,
  idx,
  start,
  end,
  scrollYProgress,
  layout,
}: ExperienceItemProps) {
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
          className="z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(56,189,248,0.25)]"
          style={{ scale, opacity }}
        ></motion.div>
        <motion.div
          className={`absolute ${idx % 2 === 0 ? "-top-8" : "-bottom-8"} w-0.75 bg-white/40`}
          style={{ height: 40, opacity }}
        ></motion.div>
        <motion.article
          className={`absolute ${idx % 2 === 0 ? "bottom-12" : "top-12"} bg-[#111827]/80 backdrop-blur border border-[#1f2933] rounded-xl p-7 w-[320px] shadow-lg`}
          style={{ opacity, y, maxWidth: "90vw" }}
          transition={{ duration: 0.4, delay: idx * 0.15 }}
        >
          <h3 className="text-xl font-semibold">{exp.role}</h3>
          <p className="text-base text-[#94a3b8] mb-3">
            {exp.company} | {exp.duration}
          </p>
          <p className="text-base text-[#94a3b8] wrap-break-word">
            {exp.description}
          </p>
        </motion.article>
      </div>
    );
  }

  return (
    <div className="relative flex items-start">
      <motion.div
        className="absolute -left-3.5 top-3 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(56,189,248,0.25)]"
        style={{ scale, opacity }}
      ></motion.div>
      <motion.article
        className="backdrop-blur bg-[#111827]/80 border border-[#1f2933] rounded-xl px-5 py-3 w-[90vw] max-w-sm ml-6 shadow-lg"
        style={{ opacity, x }}
        transition={{ duration: 0.4, delay: idx * 0.15 }}
      >
        <h3 className="text-lg font-semibold wrap-break-word">{exp.role}</h3>
        <p className="text-sm text-[#94a3b8] mb-2 wrap-break-word">
          {exp.company} | {exp.duration}
        </p>
        <p className="text-sm text-[#94a3b8] wrap-break-word">
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
    const checkMobile = () => setIsMobile(window.innerWidth < 1000);
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
    <section id="experience" className="relative bg-[#020617] text-[#f8fafc]">
      <div
        ref={sceneRef}
        style={{
          height: `${SCENE_HEIGHT_VH}vh`,
          minHeight: "120vh",
        }}
        className="relative"
      >
        <div className="sticky top-0 h-screen flex flex-col">
          <h2 className="w-fit mx-auto text-4xl sm:text-5xl font-semibold mt-5 text-center bg-clip-text text-transparent bg-linear-to-r from-[#f97316] to-[#e9bc40]">
            Experiência
          </h2>
          <div className="flex flex-1 items-center justify-center px-6 pb-10">
            {!isMobile && (
              <div className="relative w-full max-w-7xl">
                <div className="relative h-1.5 bg-[#1f2933] rounded">
                  <motion.div
                    className="absolute left-0 top-0 h-1.5 bg-[#7dd8ff] rounded origin-left"
                    style={{ width: lineSize }}
                  ></motion.div>
                </div>
                <div className="relative flex justify-between mt-0">
                  {experiences.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="desktop"
                    />
                  ))}
                </div>
              </div>
            )}

            {isMobile && (
              <div className="relative w-full max-w-md">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1f2933] rounded">
                  <motion.div
                    className="absolute top-0 left-0 w-1.5 bg-[#7dd8ff] rounded origin-top"
                    style={{ height: lineSize }}
                  ></motion.div>
                </div>
                <div className="relative flex flex-col gap-4 ml-8 mt-3 pb-7">
                  {experiences.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="mobile"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
