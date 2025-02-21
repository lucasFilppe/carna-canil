import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white py-16">
      {" "}
      {/* Aumentei o padding vertical */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Carna canil. Todos os direitos
          reservados.
        </p>
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">Inicio</a>
          <a
            href="https://www.facebook.com/republica.canil.1/?locale=pt_BR" target="_blank"
            className="hover:underline"
          >
            <Image
              src="/Facebook_icon.svg"
              width={48} // Ajuste a largura conforme necessário
              height={48}
              alt="logo do facebook"
              className="w-10"
            />
          </a>
          <a href="https://www.google.com/search?q=canil&oq=canil&aqs=chrome..69i57j0i402i512i650l2j46i175i199i512j69i60l4.5773j0j7&sourceid=chrome&ie=UTF-8&lqi=CgVjYW5pbEjqoIWzmaqAgAhaCxAAGAAiBWNhbmlskgETcmVzaWRlbnRpYWxfY29sbGVnZaoBQwoJL20vMDUzd3p3EAEqCSIFY2FuaWwoDDIeEAEiGmzYCvPclHH-Y-YuRHoSTUsiLPR5A8qxwqE6MgkQAiIFY2FuaWw#rlimm=17545259878561300083" target="_blank" className="hover:underline">
            <Image
              src="/localizacao.svg"
              width={48} // Ajuste a largura conforme necessário
              height={48}
              alt="logo do facebook"
              className="w-8"
            />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
