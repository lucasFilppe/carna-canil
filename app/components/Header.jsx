import React from "react";


const Header = () => {
  return (
    <div className="w-full px-4 text-center mx-auto min-h-screen flex flex-col justify-center items-center font-">
      <div className="flex justify-center items-center mt-16 w-full">
        <video
          src="/after-movie-principal.MP4"
          autoPlay
          muted
          loop
          controls
          className="w-full rounded-lg shadow-lg md:max-w-3xl md:aspect-video"
        />
      </div>

      <ul className="w-full  px-4 font-Ovo mt-8 max-w-md mx-auto">
        <h2 className="text-center text-xl font-Ovo mb-4">
          <strong>Todos pacotes incluem:</strong>
        </h2>
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
