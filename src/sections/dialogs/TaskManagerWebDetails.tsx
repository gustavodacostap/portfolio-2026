import { FiExternalLink } from "react-icons/fi";

export default function TaskManagerWebDetails() {
  const desktopImages = [
    { src: "/images/tarefas/tarefas_vazio.png", alt: "Tarefas Vazio" },
    { src: "/images/tarefas/tarefas_novo.png", alt: "Tarefas Novo" },
    { src: "/images/tarefas/tarefas_editar.png", alt: "Tarefas Editar" },
    { src: "/images/tarefas/tarefas_excluir.png", alt: "Tarefas Excluir" },
  ];

  const mobileImages = [
    {
      src: "/images/tarefas/tarefas_vazio_mobile.png",
      alt: "Tarefas Vazio Mobile",
    },
    {
      src: "/images/tarefas/tarefas_novo_mobile.png",
      alt: "Tarefas Novo Mobile",
    },
    {
      src: "/images/tarefas/tarefas_editar_mobile.png",
      alt: "Tarefas Editar Mobile",
    },
    {
      src: "/images/tarefas/tarefas_excluir_mobile.png",
      alt: "Tarefas Excluir Mobile",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-3">
        <p className="text-base sm:text-lg text-[#94a3b8]">
          Sistema web para gerenciamento de tarefas desenvolvido com ASP.NET
          Core, inicialmente criado com Razor Pages para praticar o padrão MVC e
          CRUD básico. Na sequência, evoluí o projeto para uma SPA (Single Page
          Application) moderna, utilizando API REST, AJAX e JavaScript
          modularizado (ES Modules), com atualizações dinâmicas e sem recarregar
          a página. O projeto foi criado para aprimorar minhas habilidades em
          ASP.NET Core full stack. Usa SQLite como banco de dados local, por
          isso não possui versão online, mas é possível conferir o funcionamento
          da aplicação nas imagens abaixo.
        </p>
      </div>

      <a
        href="https://github.com/gustavodacostap/TaskManagerWeb"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-55 gap-2 rounded-full bg-linear-to-r from-[#f97316] to-[#e9bc40] text-white font-semibold px-5 py-3 transition"
      >
        Ver repositório
        <FiExternalLink className="w-5 h-5" />
      </a>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
          Tecnologias
        </h2>
        <ul className="flex flex-wrap space-x-8 text-base sm:text-lg list-disc marker:text-[#f97316] pl-6 space-y-2 text-[#94a3b8]">
          <li>ASP.NET Core 9</li>
          <li>Razor Pages</li>
          <li>API REST</li>
          <li>C#</li>
          <li>Entity Framework Core</li>
          <li>SQLite</li>
          <li>AJAX (jQuery)</li>
          <li>JavaScript ES Modules</li>
          <li>jQuery Validation</li>
          <li>Bootstrap 5</li>
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
