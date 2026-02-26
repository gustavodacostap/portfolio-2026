export default function AnuidadesDetails() {
  const desktopImages = [
    { src: "/images/anuidade/anuidades_login.png", alt: "Anuidades Login" },
    { src: "/images/anuidade/anuidades_home.png", alt: "Anuidades Home" },
    { src: "/images/anuidade/anuidades_dialog.png", alt: "Anuidades Dialog" },
    {
      src: "/images/anuidade/anuidades_parcelamento.png",
      alt: "Anuidades Parcelamento",
    },
    {
      src: "/images/anuidade/anuidades_protesto.png",
      alt: "Anuidades Protesto",
    },
  ];

  const mobileImages = [
    {
      src: "/images/anuidade/anuidades_login_mobile.png",
      alt: "Anuidades Login Mobile",
    },
    {
      src: "/images/anuidade/anuidades_home_mobile.png",
      alt: "Anuidades Home Mobile",
    },
    {
      src: "/images/anuidade/anuidades_dialog_mobile.png",
      alt: "Anuidades Dialog Mobile",
    },
    {
      src: "/images/anuidade/anuidades_parcelamento_mobile.png",
      alt: "Anuidades Parcelamento Mobile",
    },
    {
      src: "/images/anuidade/anuidades_protesto_mobile.png",
      alt: "Anuidades Protesto Mobile",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-3">
        <p className="text-base sm:text-lg text-[#94a3b8]">
          Sistema web SPA desenvolvido em Angular 19 para a modernização do
          sistema de pagamento de anuidade do CREA-SP. O projeto foi
          reconstruído do zero a partir de uma versão anterior desenvolvida em
          Flutter, migrando toda a lógica e regras de negócio para uma
          arquitetura moderna baseada em Angular + NgRx para gerenciamento de
          estado previsível e escalável.
        </p>

        <p className="text-base sm:text-lg text-[#94a3b8]">
          A aplicação possui integração com API oficial do CREA para consulta de
          dados financeiros, autenticação baseada em token e fluxo seguro de
          requisições. O profissional pode consultar débitos em aberto, emitir
          boletos e realizar parcelamentos de débitos diretamente pela
          plataforma.
        </p>

        <p className="text-base sm:text-lg text-[#94a3b8]">
          O projeto foi desenvolvido com foco em arquitetura escalável,
          organização de estado global e experiência do usuário. Conta com
          design responsivo, interface moderna baseada em um Design System
          criado no Figma para padronização visual dos sistemas do CREA, além de
          implementar estratégia de reidratação de estado com persistência no
          localStorage para manter a consistência dos dados da aplicação.
        </p>
      </div>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
          Tecnologias
        </h2>
        <ul className="flex flex-wrap space-x-8 text-base sm:text-lg list-disc marker:text-[#f97316] pl-6 space-y-2 text-[#94a3b8]">
          <li>Angular 20</li>
          <li>TypeScript</li>
          <li>NgRx</li>
          <li>API REST</li>
          <li>Tailwind CSS</li>
          <li>Design System (Figma)</li>
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
