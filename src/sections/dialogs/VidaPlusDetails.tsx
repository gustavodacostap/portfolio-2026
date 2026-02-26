import { FiExternalLink } from "react-icons/fi";

export default function VidaPlusDetails() {
  const desktopImages = [
    { src: "/images/vidaplus/vidaplus_login.png", alt: "VidaPlus Login" },
    {
      src: "/images/vidaplus/vidaplus_sidebar.png",
      alt: "VidaPlus Menu Lateral",
    },
    {
      src: "/images/vidaplus/vidaplus_pacientes.png",
      alt: "VidaPlus Pacientes",
    },
    {
      src: "/images/vidaplus/vidaplus_profissionais.png",
      alt: "VidaPlus Profissionais",
    },
    {
      src: "/images/vidaplus/vidaplus_consultas.png",
      alt: "VidaPlus Consultas",
    },
  ];

  const mobileImages = [
    {
      src: "/images/vidaplus/vidaplus_login_mobile.png",
      alt: "VidaPlus Login Mobile",
    },
    {
      src: "/images/vidaplus/vidaplus_sidebar_mobile.png",
      alt: "VidaPlus Menu Lateral Mobile",
    },
    {
      src: "/images/vidaplus/vidaplus_pacientes_mobile.png",
      alt: "VidaPlus Pacientes Mobile",
    },
    {
      src: "/images/vidaplus/vidaplus_profissionais_mobile.png",
      alt: "VidaPlus Profissionais Mobile",
    },
    {
      src: "/images/vidaplus/vidaplus_consultas_mobile.png",
      alt: "VidaPlus Consultas Mobile",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-3">
        <p className="text-base sm:text-lg text-[#94a3b8]">
          Sistema web SPA desenvolvido como Trabalho de Conclusão de Curso, com
          proposta de solução front-end para um Sistema de Gestão Hospitalar e
          de Serviços de Saúde (SGHSS). O projeto envolveu análise de
          requisitos, definição de arquitetura e implementação da camada de
          apresentação, com foco em organização modular, escalabilidade e
          experiência do usuário.
        </p>

        <p className="text-base sm:text-lg text-[#94a3b8]">
          A aplicação foi estruturada com arquitetura feature-based, segmentada
          por domínios, e utiliza NgRx para gerenciamento de estado previsível e
          escalável. Conta com autenticação baseada em perfil, rotas com lazy
          loading e guards para controle de acesso.
        </p>
        <p className="text-base sm:text-lg text-[#94a3b8]">
          As interfaces foram prototipadas no Figma com base no Material Design
          3 e implementadas com Angular Material e Tailwind CSS. Para simulação
          de persistência, foi utilizado Local Storage com reidratação
          automática de estado. O projeto foi publicado na Vercel e versionado
          no GitHub.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <a
          href="https://vidaplus-sistema-hospitalar.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-45 gap-2 rounded-full bg-linear-to-r from-[#f97316] to-[#e9bc40] text-white font-semibold px-5 py-3 transition"
        >
          Ver projeto
          <FiExternalLink className="w-5 h-5" />
        </a>
        <a
          href="https://www.figma.com/design/WYFDUDOZuR1R30iv62vXib/Sistema-M%C3%A9dico?node-id=61610-9388&p=f"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-50 gap-2 rounded-full bg-white text-black font-semibold px-5 py-3 transition"
        >
          Ver protótipo
          <FiExternalLink className="w-5 h-5" />
        </a>
      </div>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
          Tecnologias
        </h2>
        <ul className="flex flex-wrap space-x-8 text-base sm:text-lg list-disc marker:text-[#f97316] pl-6 space-y-2 text-[#94a3b8]">
          <li>Angular 19</li>
          <li>TypeScript</li>
          <li>NgRx</li>
          <li>Angular Material</li>
          <li>Tailwind CSS</li>
          <li>Lazy Loading e Route Guards</li>
          <li>Figma (Material Design 3 Kit)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
          Imagens
        </h2>

        <div className="flex justify-center">
          <h3 className="inline-block text-lg sm:text-xl bg-clip-text font-semibold text-transparent mb-2 bg-linear-to-r from-[#f97316] to-[#e9bc40]">
            Design Desktop
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-5 mb-5">
          {desktopImages.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="rounded-md lg:rounded-xl shadow-lg w-full object-cover"
            />
          ))}
        </div>

        <div className="flex justify-center">
          <h3 className="inline-block text-lg sm:text-xl bg-clip-text font-semibold text-transparent bg-linear-to-r from-[#f97316] to-[#e9bc40] mb-2">
            Design Mobile
          </h3>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-5">
          {mobileImages.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="rounded-md lg:rounded-xl shadow-lg max-h-[80vh] object-contain"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
