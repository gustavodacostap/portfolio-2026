import { motion } from "framer-motion";

export default function About() {
  // const stats = [
  //   { label: "Experience", value: "1+ years" },
  //   { label: "Speciality", value: "Full Stack" },
  //   { label: "Focus", value: "Performance & UX" },
  // ];

  const stats = [
    { label: "Experiência", value: "1+ anos" },
    { label: "Especialidade", value: "Full Stack" },
    { label: "Foco", value: "Performance & UX" },
  ];

  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative
      bg-[#020617] text-[#f8fafc] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-linear-to-r from-[#38bdf8] 
          via-[#0ea5e9] to-[#f97316] animate-pulse opacity-10 blur-[160px] ${c}`}
          ></div>
        ))}
      </div>

      <div
        className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 
      py-20 flex flex-col gap-12"
      >
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            className="relative w-40 h-40 md:w-50 md:h-50
              rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br 
            from-[#38bdf8]/10 to-[#f97316]/10 border border-[#1f2933]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <img
              src="/images/foto-gu.jpg"
              alt="profile"
              className="absolute inset-0 -translate-y-15"
            />
          </motion.div>

          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2
              className="w-fit mx-auto md:mx-0 text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text
            text-transparent bg-linear-to-r from-[#f97316] to-[#e9bc40]"
            >
              Gustavo da Costa
            </h2>
            {/* <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              Full-Stack Developer
            </p> */}
            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              Desenvolvedor Full-Stack
            </p>
            {/* <p className="mt-4 text-[#94a3b8] leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              Building modern, scalable applications with Angular, React and
              .NET. Focused on performance, usability and real-world impact.
            </p> */}
            <p className="mt-4 text-[#94a3b8] leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              Construindo aplicações modernas e escaláveis com Angular, React e
              .NET. Focado em performance, usabilidade e impacto no mundo real.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl sm:max-md:max-w-full">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-[#1f2933] bg-[#111827] px-4 py-3 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.04 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-sm text-[#94a3b8]">{item.label}</div>
                  <div className="text-base font-semibold">{item.value}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition"
              >
                Ver Projetos
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* <h3 className="text-2xl sm:text-3xl font-bold text-white pb-3">
            About Me
          </h3> */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white pb-3">
            Sobre mim
          </h3>

          {/* <p className="text-[#94a3b8] leading-relaxed text-base sm:text-lg">
            I’m a full-stack developer currently working at CREA-SP,
            contributing to the modernization of internal systems using Angular,
            TypeScript and REST APIs. My experience includes migrating front-end
            architectures, implementing state management with NgRx, improving
            usability of systems and developing backend automations with C# and
            .NET integrated with databases. I focus on writing clean, scalable
            and maintainable code while delivering efficient solutions that
            improve productivity and user experience. Always learning, always
            building.
          </p> */}
          <p className="text-[#94a3b8] leading-relaxed text-base sm:text-lg">
            Sou desenvolvedor full-stack formado em Análise e Desenvolvimento de
            Sistemas, com experiência na modernização de sistemas internos no
            CREA-SP, utilizando Angular, TypeScript e APIs REST. Atuei na
            migração de arquiteturas front-end, implementação de gerenciamento
            de estado com NgRx, melhorias de usabilidade e desenvolvimento de
            soluções com C# e .NET. Tenho foco na escrita de código limpo,
            escalável e de fácil manutenção, sempre buscando entregar soluções
            eficientes que aumentem a produtividade e aprimorem a experiência do
            usuário. Sempre aprendendo, sempre construindo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
