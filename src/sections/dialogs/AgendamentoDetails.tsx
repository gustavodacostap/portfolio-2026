export default function AgendamentoDetails() {
  const desktopImages = [
    {
      src: "/images/agendamento/agendamento_atendimento.png",
      alt: "Agendamento Atendimento",
    },
    {
      src: "/images/agendamento/agendamento_novo.png",
      alt: "Agendamento Novo",
    },
    {
      src: "/images/agendamento/agendamento_servico.png",
      alt: "Agendamento Serviço",
    },
    {
      src: "/images/agendamento/agendamento_expediente.png",
      alt: "Agendamento Expediente",
    },
  ];

  const mobileImages = [
    {
      src: "/images/agendamento/agendamento_atendimento_mobile.png",
      alt: "Agendamento Atendimento Mobile",
    },
    {
      src: "/images/agendamento/agendamento_novo_mobile.png",
      alt: "Agendamento Novo Mobile",
    },
    {
      src: "/images/agendamento/agendamento_servico_mobile.png",
      alt: "Agendamento Serviço Mobile",
    },
    {
      src: "/images/agendamento/agendamento_expediente_mobile.png",
      alt: "Agendamento Expediente Mobile",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-3">
        <p className="text-base sm:text-lg text-[#94a3b8]">
          Projeto de melhoria e implementação de nova funcionalidade em um
          sistema interno do CREA-SP, utilizado pelos colaboradores para
          gerenciamento de agendamentos de atendimento presencial nas unidades
          físicas. A aplicação é uma SPA desenvolvida em Angular 19 com NgRx
          para gerenciamento de estado, e minha atuação envolveu a criação de
          uma nova seção denominada “Atendimentos”, responsável pelo registro de
          encaixes de atendimento profissional.
        </p>

        <p className="text-base sm:text-lg text-[#94a3b8]">
          Para a implementação da feature, desenvolvi um CRUD completo integrado
          à API do CREA, garantindo consistência de dados, tratamento de estados
          assíncronos e organização do fluxo da aplicação.
        </p>

        <p className="text-base sm:text-lg text-[#94a3b8]">
          A interface foi construída utilizando componentes do Angular Material,
          seguindo os padrões visuais adotados pelo sistema e mantendo a
          coerência com a arquitetura existente. Além da nova funcionalidade,
          também realizei melhorias estruturais e visuais em todas as seções da
          aplicação, com foco em aprimorar a responsividade em dispositivos
          menores e elevar a qualidade do design e da experiência do usuário.
        </p>
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
