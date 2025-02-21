"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

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
  "/images/foto-31.jpg",
  "/images/foto-32.jpg",
  "/images/foto-33.jpg",
  "/images/foto-34.jpg",
  "/images/foto-35.jpg",
  "/images/foto-31.jpg",
  "/images/foto-32.jpg",
  "/images/foto-33.jpg",
  "/images/foto-34.jpg",
  "/images/foto-35.jpg",
  "/images/foto-36.jpg",
  "/images/foto-37.jpg",
  "/images/foto-38.jpg",
  "/images/foto-39.jpg",
  "/images/foto-40.jpg",
  "/images/foto-41.jpg",
  "/images/foto-42.jpg",
  "/images/foto-43.jpg",
  "/images/foto-44.jpg",
  "/images/foto-45.jpg",
  "/images/foto-46.jpg",
  "/images/foto-47.jpg",
  "/images/foto-48.jpg",
  "/images/foto-49.jpg",
  "/images/foto-50.jpg",
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Troca de imagem a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
  }, []);

  return (
    <div className="flex flex-col sm:flex-row lg:items-start items-center justify-center">
      <div id="pacotes" className="max-w-2xl scroll-mt-20  p-4 mt-4 ">
        <h2 className="text-center text-xl font-Ovo">
          <strong>Garanta ja seu pacote 🎉</strong>
        </h2>
        <p className="mb-10  font-Ovo text-center">
          Conheça nossas linhas de pacotes:{" "}
          <span className="text-primary">Confort</span> e{" "}
          <span className="text-secondary">Classic </span>
          Escolha a melhor opção para você e aproveite a experiência sem
          preocupações.
        </p>
        <p className="font-Ovo"> </p>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
          <li className="border-[0.5px] border-black rounded-xl p-6 cursor-pointer hover:bg-blueSegundo hover:translate-y-1 duration-500 hover:shadow-black">
            {/*<Image src={icon} alt={title} className="w-7 mt-3" />*/}
            <h3 className="my-4 font-semibold"><strong>Linha Confort</strong></h3>
            <h5 className=" font-semibold">Confort prata</h5>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
                className="bg-textCanil"
              />
              <p className="text-sm"> Hospedagem em colchao</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
                className="bg-textCanil"
              />
              <p className=" text-sm"> 2 blocos</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
                className="bg-textCanil"
              />
              <p className=" text-sm"> 5 festas</p>
            </div>

            <h5 className=" font-semibold ">Confort ouro</h5>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
                className="bg-textCanil"
              />
              <p className=" text-sm"> Hospedagem em colchao</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
                className="bg-textCanil"
              />
              <p className=" text-sm"> 3 blocos</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
                className="bg-textCanil"
              />
              <p className=" text-sm"> 5 festas</p>
            </div>

            <h5 className=" font-semibold ">Confort diamante</h5>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
                className="bg-textCanil"
              />
              <p className=" text-sm"> Hospedagem em colchao</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
                className="bg-textCanil"
              />
              <p className=" text-sm"> 4 blocos</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
                className="bg-textCanil"
              />
              <p className=" text-sm"> 5 festas</p>
            </div>
          </li>

          <li className="border-[0.5px] border-black rounded-xl p-6 cursor-pointer  hover:bg-blueSegundo hover:translate-y-1 duration-500 hover:shadow-black">
            {/*<Image src={icon} alt={title} className="w-7 mt-3" />*/}
            <h3 className="my-4 font-semibold "><strong>Linha Classic</strong></h3>
            <h5 className=" font-semibold ">Classic prata</h5>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
                className="bg-textCanil"
              />
              <p className=" text-sm"> Hospedagem em colchonete</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
                className="bg-textCanil"
              />
              <p className=" text-sm"> 2 blocos</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
                className="bg-textCanil"
              />
              <p className=" text-sm"> 5 festas</p>
            </div>

            <h5 className=" font-semibold ">Classic Ouro</h5>

            <div className="flex items-center gap-2 ">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
                className="bg-textCanil"
              />
              <p className=" text-sm"> Hospedagem em colchonete</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
                className="bg-textCanil"
              />
              <p className=" text-sm"> 3 blocos</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
                className="bg-textCanil"
              />
              <p className=" text-sm"> 5 festas</p>
            </div>

            <h5 className=" font-semibold ">Classic Diamante</h5>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
                className="bg-textCanil"
              />
              <p className=" text-sm"> Hospedagem em colchonete</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
                className="bg-textCanil"
              />
              <p className=" text-sm"> 4 blocos</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/incluido.svg"
                alt="Ícone de hospedagem"
                width={20}
                height={20}
                className="bg-textCanil"
              />
              <p className=" text-sm"> 5 festas</p>
            </div>
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row items-center gap-2 mt-5">
          <a
            href="https://wa.me/553192961063"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 border hover:translate-y-1 duration-500 hover:shadow-black rounded-full bg-bluePrimeiro hover:bg-blueSegundo text-white flex items-center gap-2"
          >
           <strong>Comprar agora</strong> 
            <Image src={assets.right_arrow_white } alt="" className="w-4" />
          </a>
        </div>
      </div>

      <div id="fotos" className="scroll-mt-20 min-h-screen p-4 mt-4">
        <h2 className="text-center text-xl mt-5 font-Ovo">
         <strong>Veja como é a experiência! 📸</strong> 
        </h2>
        <div className="relative flex items-center justify-center mt-6">
         
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
        </div>
      </div>
    </div>
  );
};

export default About;
