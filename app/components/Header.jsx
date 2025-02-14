import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import CarnavalMarquee from "./Palavras";


const Header = () => {
  const palavrasPersonalizadas = ["Festa", "Samba", "Alegria", "Fantasia", "Confete", "Serpentina", "Bloco", "Marchinha", "Frevo", "Axé"];
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen items-center flex flex-col justify-center gap-4">
      <div className="flex justify-center items-center ">
        <video
          src="/after-movie_N7SA0Zw6.mp4"
          autoPlay
          muted
          loop
          controls
          className="w-full max-w-3xl rounded-lg shadow-lg"
        />
      </div>

      <ul className="max-w-2xl font-Ovo">
        <h2 className="text-center text-xl font-Ovo">Todos pacotes incluem:</h2>
        <li>
          ✔️ <strong>5 dias de hospedagem</strong> em um local confortável e
          pertinho da folia
        </li>
        <li>
          ✨ <strong>Café da manhã</strong> reforçado para recarregar as
          energias
        </li>
        <li>
          🍻 <strong>120 horas de open bar</strong> insano para você curtir sem
          limites
        </li>
        <li>
          🎶 <strong>Festas e blocos inesquecíveis</strong> no melhor Carnaval
          de Ouro Preto
        </li>
        <li>
          🛡️ <strong>Equipe de limpeza e segurança</strong> para sua
          tranquilidade
        </li>
       
      </ul>
      
    </div>
  );
};

export default Header;
