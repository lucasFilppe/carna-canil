"use client";

import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const images = [
  "/images/foto-3.jpg",
  "/images/foto-4.jpg",
  "/images/foto-1.jpg", // Substitua pelos nomes dos arquivos na pasta public
  "/images/foto-2.jpg",
  "/images/foto-5.jpg",
  "/images/foto-6.jpg",
  "/images/foto-7.jpg",
  "/images/foto-8.jpg",
  "/images/foto-9.jpg",
  "/images/foto-10.jpg",
  "/images/foto-11.jpg",
  "/images/foto-12.jpg",
  "/images/foto-13.jpg",
  "/images/foto-14.jpg",
  "/images/foto-15.jpg",
  "/images/foto-16.jpg",
  "/images/foto-17.jpg",
  "/images/foto-18.jpg",
  "/images/foto-19.jpg",
  "/images/foto-20.jpg",
  "/images/foto-21.jpg",
  "/images/foto-22.jpg",
  "/images/foto-23.jpg",
  "/images/foto-24.jpg",
  "/images/foto-25.jpg",
  "/images/foto-26.jpg",
  "/images/foto-27.jpg",
  "/images/foto-28.jpg",
  "/images/foto-29.jpg",
  "/images/foto-30.jpg",

];

const imagesFestas = [
  "/images/festas/festa-1.jpeg",
  "/images/festas/festa-2.jpeg",
  "/images/festas/festa-3.jpeg",
  "/images/festas/festa-4.jpeg",
  "/images/festas/festa-5.jpeg",
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
    <div className="flex flex-col sm:flex-row lg:items-start items-center justify-center">
      <div id="pacotes" className="max-w-2xl scroll-mt-20  p-4 mt-4 ">
        <h2 className="text-center text-xl font-Ovo">
          Garanta ja seu pacote 🎉
        </h2>
        <p className="mb-10  font-Ovo">
          Conheça nossas linhas de pacotes:{" "}
          <span className="text-primary">Confort</span> e{" "}
          <span className="text-secondary">Classic </span>
          Escolha a melhor opção para você e aproveite a experiência sem
          preocupações.
        </p>
        <p className="font-Ovo"> </p>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
          <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:translate-y-1 duration-500 hover:shadow-black">
            {/*<Image src={icon} alt={title} className="w-7 mt-3" />*/}
            <h3 className="my-4 font-semibold text-gray-700">Linha Confort</h3>
            <h5 className=" font-semibold text-gray-700">Confort prata</h5>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
              />
              <p className="text-gray-700 text-sm"> Hospedagem em colchao</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
              />
              <p className="text-gray-700 text-sm"> 3 blocos</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
              />
              <p className="text-gray-700 text-sm"> 5 festas</p>
            </div>

            <h5 className=" font-semibold text-gray-700">Confort prata</h5>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
              />
              <p className="text-gray-700 text-sm"> Hospedagem em colchao</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
              />
              <p className="text-gray-700 text-sm"> 3 blocos</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
              />
              <p className="text-gray-700 text-sm"> 5 festas</p>
            </div>
          </li>

          <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:translate-y-1 duration-500 hover:shadow-black">
            {/*<Image src={icon} alt={title} className="w-7 mt-3" />*/}
            <h3 className="my-4 font-semibold text-gray-700">Linha Confort</h3>
            <h5 className=" font-semibold text-gray-700">Confort prata</h5>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
              />
              <p className="text-gray-700 text-sm"> Hospedagem em colchao</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
              />
              <p className="text-gray-700 text-sm"> 3 blocos</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
              />
              <p className="text-gray-700 text-sm"> 5 festas</p>
            </div>

            <h5 className=" font-semibold text-gray-700">Confort prata</h5>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
              />
              <p className="text-gray-700 text-sm"> Hospedagem em colchao</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
              />
              <p className="text-gray-700 text-sm"> 3 blocos</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
              />
              <p className="text-gray-700 text-sm"> 5 festas</p>
            </div>
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row items-center gap-2 mt-5">
          <a
            href="#contato"
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
          >
            Comprar agora
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>
        </div>
      </div>

      <div id="fotos" className="scroll-mt-20 min-h-screen p-4 mt-4">
        <h2 className="text-center text-xl mt-5 font-Ovo">
          Veja como é a experiência! 📸
        </h2>
        <div className="relative flex items-center justify-center mt-6">
          <button
            onClick={prevImage}
            className="absolute left-0 bg-black bg-opacity-50 p-2 rounded-full text-white"
          >
            &#10094;
          </button>
          <div className="w-[370px] h-[487px] rounded-lg overflow-hidden">
            <Image
              src={images[currentIndex]}
              alt="user"
              width={390}
              height={487}
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
          <button
            onClick={nextImage}
            className="absolute right-0 bg-black bg-opacity-50 p-2 rounded-full text-white"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
