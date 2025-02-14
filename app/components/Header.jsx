import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import CarnavalMarquee from "./Palavras";

const Header = () => {
  return (
    <div className="w-full px-4 text-center mx-auto min-h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center items-center mt-16 w-full">
        <video
          src="/after-movie-principal.MP4"
          autoPlay
          muted
          loop
          controls
          className="w-full md:max-w-3xl rounded-lg shadow-lg"
        />
      </div>
      <ul className="w-full max-w-2xl px-4 font-Ovo mt-8">
        <h2 className="text-center text-xl font-Ovo mb-4">Todos pacotes incluem:</h2>
        <li className="text-center ">
          ✔️ <strong>5 dias de hospedagem</strong> em um local confortável e
          pertinho da folia
        </li>
        <li className="text-center ">
          ✨ <strong>Café da manhã</strong> reforçado para recarregar as
          energias
        </li>
        <li className="text-center">
          🍻 <strong>120 horas de open bar</strong> insano para você curtir sem
          limites
        </li>
        <li className="text-center">
          🎶 <strong>Festas e blocos inesquecíveis</strong> no melhor Carnaval
          de Ouro Preto
        </li>
        <li className="text-center ">
          🛡️ <strong>Equipe de limpeza e segurança</strong> para sua
          tranquilidade
        </li>
      </ul>
    </div>
  );
};

export default Header;
