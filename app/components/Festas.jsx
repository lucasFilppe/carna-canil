"use client";
import React from "react";
import { useState, useEffect} from "react";
import Image from "next/image";

const imagesFestas = [
  "/images/festas/festa-1.jpeg",
  "/images/festas/festa-2.jpeg",
  "/images/festas/festa-3.jpeg",
  "/images/festas/festa-4.jpeg",
  "/images/festas/festa-5.jpeg",
];

const Festas = () => {
  const [currentIndexFestas, setCurrentIndexFestas] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexFestas((prevIndex) =>
        prevIndex === imagesFestas.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Troca de imagem a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
  }, []);

  return (
    <div id="festas" className="scroll-mt-20  min-h-screen p-5">
      <h2 className="text-center text-xl font-Ovo">
        🌟 Viva momentos inesquecíveis! 🌟
      </h2>
      <p className="font-Ovo text-center">
        Junte-se a nós e mergulhe em festas cheias de energia, cores e alegria!
        </p>
        <p className="font-Ovo text-center">
          Deixe a música te levar, conheça pessoas incríveis e crie memórias que
          vão durar para sempre. Você faz parte da festa. Vem com a gente! 🥳🎉
        
      </p>
      <div className="relative flex items-center justify-center mt-6">
        
        <div className="w-full sm:w-[400px] h-[400px] rounded-3xl max-w-none">
          <Image
            src={imagesFestas[currentIndexFestas]}
            alt="user"
            width={320}
            height={320}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Festas;
