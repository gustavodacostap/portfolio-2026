import { motion } from "framer-motion";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaAngular, FaReact, FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiNgrx, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export default function Skills() {
  const skills = [
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

  return (
    <section
      id="skills"
      className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-0 w-75 h-75 rounded-full bg-linear-to-r  from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
        opacity-20 blur-[120px] animate-pulse"
        />
        <div
          className="absolute bottom-1/4 right-0 w-75 h-75 rounded-full bg-linear-to-r  from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
        opacity-20 blur-[120px] animate-pulse delay-500"
        />
      </div>

      <motion.h2 className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r  from-[#1cd8d2] via-[#00bf8f] to-[#302b63]">
        My Skills
      </motion.h2>
    </section>
  );
}
