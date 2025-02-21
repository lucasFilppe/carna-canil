"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blocos = [
  {
    titulo: "Bloco Caixão",
    logo: "/bloco-caixao.jpg",
    imagem: "/line-caixao.png",
    camarote: "Cerveja, Vodka Ciroc & KetelOne, Gin Tanqueray, Whisky Red & Blond Label,Red Bull, Isotônico, Refrigerante, Suco, Água + Bebida Surpresa, Bar de Shotz (Exclusivo), Open Food, Entrada & Banheiros Exclusivos, Área Coberta, Vista Privilegiada do Palco, Decoração Temática,Acesso a Pista ",
    pista:"Budweiser, Smirnoff, Energético Fusion, Água, Bebida Surpresa. Acesso a frente do palco"
  },
  {
    titulo: "Bloco Cabróbró",
    logo: "/bloco-cabrobro.jpg",
    imagem: "/line-cabrobro.jpg",
    camarote:  "Cerveja, vodka, whisky, gin, tequila, bebida ice, energético, suco, água e muito mais, Espaço coberto, Entrada e banheiros exclusivos, Surpresas e mimos especiais",
    pista: "Cerveja, vodka, energético, água e muito mais. Acesso a frente do palco",
  },
  {
    titulo: "Bloco da Praia",
    logo: "/bloco-praia.jpg",
    imagem: "/line-praia.jpg",
    camarote:"Cerveja Budweiser, Vodka Ketel One, Whisky Blonde Label, Gin Tanqueray, Energético Fusion, Suco, Água, Skol Beats e muito mais. Entrada & Banheiros exclusivos. Acesso a Área VIP",
    pista: "Cerveja Budweiser, vodka, energético e água.Acesso a frente do palco",
  },
  {
    titulo: "Bloco Chapado",
    logo: "/bloco-chapado.jpg",
    imagem: "/line-chapado.jpg",
    camarote:"CAMAROTE 100% OPEN BAR PREMIUM Cerveja Budwiser, Xeque-mate",
    pista: "100% OPEN BAR - Cerveja Budwiser, Xeque-mate",
  },
];

const Blocos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBloco = () => {
    setCurrentIndex((prevIndex) => (prevIndex === blocos.length - 1 ? 0 : prevIndex + 1));
  };

  const prevBloco = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? blocos.length - 1 : prevIndex - 1));
  };

  const bloco = blocos[currentIndex];

  return (
    <div id="blocos" className=" min-h-screen p-5 flex flex-col items-center justify-center">
      <h2 className="text-center text-xl font-Ovo flex items-center justify-center gap-2">
        {bloco.titulo}
        <Image
          src={bloco.logo}
          width={50}
          height={50}
          alt={`Logo do ${bloco.titulo}`}
          className="w-10 h-10 cursor-pointer"
        />
      </h2>
      <div className="relative flex items-center justify-center mt-2">
      <button onClick={prevBloco} className="absolute left-2 bg-white p-2 rounded-full shadow-md">
          <ChevronLeft size={24} />
        </button>
        <div className="w-full sm:w-[400px] h-[400px] rounded-3xl max-w-none">
          <Image
            src={bloco.imagem}
            alt={`Imagem do ${bloco.titulo}`}
            width={320}
            height={320}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <button onClick={nextBloco} className="absolute right-2 bg-white p-2 rounded-full shadow-md">
          <ChevronRight size={24} />
        </button>
      </div>
      <h3 className="mt-2 text-lg font-semibold">Camarote</h3>
      <p className="text-sm text-center">{bloco.camarote}</p>
      <h3 className="mt-2 text-lg font-semibold">Pista</h3>
      <p className="text-sm text-center">{bloco.pista}</p>
    </div>
  );
};

export default Blocos;


