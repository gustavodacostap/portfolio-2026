import { FiExternalLink } from "react-icons/fi";

export default function ConversorMoedasDetails() {
  const desktopImages = [
    { src: "/images/conversor/conversor_inicio.png", alt: "Conversor Início" },
    {
      src: "/images/conversor/conversor_real.png",
      alt: "Conversor Real para Dólar",
    },
    {
      src: "/images/conversor/conversor_dolar.png",
      alt: "Conversor Dólar para Euro",
    },
  ];

  const mobileImages = [
    {
      src: "/images/conversor/conversor_inicio_mobile.png",
      alt: "Anuidades Login Mobile",
    },
    {
      src: "/images/conversor/conversor_real_mobile.png",
      alt: "Conversor Real para Dólar Mobile",
    },
    {
      src: "/images/conversor/conversor_dolar_mobile.png",
      alt: "Conversor Dólar para Euro Mobile",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-3">
        <p className="text-base sm:text-lg text-[#94a3b8]">
          Projeto completo de conversor de moedas criado para aprimorar meus
          conhecimentos em desenvolvimento full stack com Next.js e ASP.NET
          Core. A aplicação consiste em um frontend moderno, responsivo e
          acessível, que consome dados de câmbio de uma API própria desenvolvida
          separadamente. O backend está hospedado gratuitamente no Render, o que
          pode causar uma pequena lentidão na primeira requisição devido ao modo
          de hibernação automática da plataforma quando a API está inativa.
        </p>
      </div>

      <a
        href="https://currency-converter-frontend-ruddy.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-55 gap-2 rounded-full bg-linear-to-r from-[#f97316] to-[#e9bc40] text-white font-semibold px-5 py-3  transition"
      >
        Ver projeto
        <FiExternalLink className="w-5 h-5" />
      </a>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
          Tecnologias
        </h2>
        <ul className="flex flex-wrap space-x-8 text-base sm:text-lg list-disc marker:text-[#f97316] pl-6 space-y-2 text-[#94a3b8]">
          <li>ASP.NET Core 9</li>
          <li>C#</li>
          <li>Swagger</li>
          <li>HttpClient</li>
          <li>Injeção de dependência</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
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
