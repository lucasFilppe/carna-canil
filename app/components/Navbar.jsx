'use client'

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, {useRef, useEffect, useState} from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef();

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if(scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
  }, [])
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex 
      itens-center justify-between z-50 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm' : ''}`}>
        <a href="top">
          <Image
            src="/logo-carnacanil.jpg"
            width={100}
            height={100}
            alt="Logo"
            className="w-12 cursor-pointer mr-14"
          />
        </a>

        {/*a opção hidden é para que o elemnto não apareça em dispositivos menores */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll? "": "bg-white shadow-sm bg-opacity-50"}  `}>
          <li>
            <a href="#top" className="font-Ovo">
              Inicio
            </a>
          </li>
          <li>
            <a href="#fotos" className="font-Ovo">
              Fotos
            </a>
          </li>
          <li>
            <a href="#pacotes" className="font-Ovo">
              Pacotes
            </a>
          </li>
          <li>
            <a href="#trabalho" className="font-Ovo">
              Meu trabalho
            </a>
          </li>
          <li>
            <a href="#contato" className="font-Ovo">
              Contate me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>

          <a
            href="#contato"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contato{" "}
            <Image
              src={assets.arrow_icon}
              alt="Imagem de contato"
              className="w-3"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/*Mobile menu */}
        <ul ref={sideMenuRef} className="flex md-hidden flex-col gap-4 py-20 fixed -right-64 top-0 bottom-0 w-64 h-screen bg-canilThemeRoxo text-white transition duration-500">
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close_white} alt='' className="w-5 cursor-pointer"/>
          </div>
          <li className="pl-5">
            <a href="#top" className="font-Ovo" onClick={closeMenu}>
              Inicio
            </a>
          </li>
          <li className="pl-5">
            <a href="#festas" className="font-Ovo" onClick={closeMenu}>
              Festas
            </a>
          </li>
          <li className="pl-5">
            <a href="#pacotes" className="font-Ovo" onClick={closeMenu}>
              Pacotes
            </a>
          </li>
          <li className="pl-5">
            <a href="#fotos" className="font-Ovo" onClick={closeMenu}>
              Fotos
            </a>
          </li>
          <li className="pl-5">
            <a href="#faq" className="font-Ovo" onClick={closeMenu}>
              FAQ
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;