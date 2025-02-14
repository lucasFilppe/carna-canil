"use client";
import React from "react";
import { useState } from "react";
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

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImageFestas = () => {
    setCurrentIndexFestas((prevIndex) =>
      prevIndex === 0 ? imagesFestas.length - 1 : prevIndex - 1
    );
  };

  const nextImageFestas = () => {
    setCurrentIndexFestas((prevIndex) =>
      prevIndex === imagesFestas.length - 1 ? 0 : prevIndex + 1
    );
  };

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
        <button
          onClick={prevImageFestas}
          className="absolute left-0 sm:left-[calc(50%-200px-40px)] bg-black bg-opacity-50 p-2 rounded-full text-white"
        >
          &#10094;
        </button>
        <div className="w-full sm:w-[400px] h-[400px] rounded-3xl max-w-none">
          <Image
            src={imagesFestas[currentIndexFestas]}
            alt="user"
            width={320}
            height={320}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <button
          onClick={nextImageFestas}
          className="absolute right-0 sm:right-[calc(50%-200px-40px)] bg-black bg-opacity-50 p-2 rounded-full text-white"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Festas;
