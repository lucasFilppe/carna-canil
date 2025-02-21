"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]"></div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex 
      itens-center justify-between z-50 ${
        isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
      }`}
      >
        <a href="top">
          <Image
            src="/logo-carnacanil.jpg"
            width={100}
            height={100}
            alt="Logo"
            className="rounded-full w-12 cursor-pointer mr-14 "
          />
        </a>

        {/*a opção hidden é para que o elemnto não apareça em dispositivos menores */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-black shadow-sm bg-opacity-50"
          }  `}
        >
          <li>
            <a href="#top" className="font-Ovo">
              <strong>Inicio</strong>
            </a>
          </li>
          <li>
            <a href="#blocos" className="font-Ovo">
              <strong>Blocos</strong>
            </a>
          </li>
          <li>
            <a href="#festas" className="font-Ovo">
              <strong>Festas</strong>
            </a>
          </li>
          <li>
            <a href="#pacotes" className="font-Ovo">
              <strong>Pacotes</strong>
            </a>
          </li>
          <li>
            <a href="#fotos" className="font-Ovo">
              <strong>Fotos</strong>
            </a>
          </li>
          <li>
            <a href="#faq" className="font-Ovo">
              <strong>FAQ</strong>
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <a href="https://www.instagram.com/carnacanil/" target="_blanck">
            <Image
              src="/instagram.svg"
              width={48} // Ajuste a largura conforme necessário
              height={48}
              alt="logo do instagram"
              className="w-8"
            />
            </a>
          </button>

          <a
            href="https://wa.me/553192961063"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 bg-bluePrimeiro rounded-full ml-4 font-Ovo"
          >
            Contato{" "}
            <Image
              src={assets.arrow_icon}
              alt="Imagem de contato"
              className="w-3"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_white} alt="" className="w-6" />
          </button>
        </div>

        {/*Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md-hidden flex-col gap-4 py-20 fixed -right-64 top-0 bottom-0 w-64 h-screen bg-bluePrimeiro text-white transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_white}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li className="pl-5">
            <a href="#top" className="font-Ovo" onClick={closeMenu}>
              <strong>Inicio</strong>
            </a>
          </li>
          <li className="pl-5">
            <a href="#blocos" className="font-Ovo" onClick={closeMenu}>
              <strong>Blocos</strong>
            </a>
          </li>
          <li className="pl-5">
            <a href="#festas" className="font-Ovo" onClick={closeMenu}>
              <strong>Festas</strong>
            </a>
          </li>
          <li className="pl-5">
            <a href="#pacotes" className="font-Ovo" onClick={closeMenu}>
              <strong>Pacotes</strong>
            </a>
          </li>
          <li className="pl-5">
            <a href="#fotos" className="font-Ovo" onClick={closeMenu}>
              <strong>Fotos</strong>
            </a>
          </li>
          <li className="pl-5">
            <a href="#faq" className="font-Ovo" onClick={closeMenu}>
              <strong>FAQ</strong>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
