import About from "./components/About";
import Blocos from "./components/Blocos";
import ButtonFloating from "./components/ButtonFloating";
import Faq from "./components/Faq";
import Festas from "./components/Festas";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CarnavalMarquee from "./components/Palavras";

export default function Home() {
  const palavrasPersonalizadas = ["Pacotes", "CarnaCanil", "Festa", "Samba", "Alegria", "Folia", "Fantasia", "Bloco", "Marchinha", "Emoção", "Axé"];
  return (
    <>
      <Navbar/>
      
      <Header/>

      <Blocos/>
      
      <Festas/>
      
      <About/>

      <div className="flex justify-center items-center">
      <CarnavalMarquee palavras={palavrasPersonalizadas} className="pb-[150px]" />
    </div>
      <ButtonFloating/>
      <Faq/>
    </>
  );
}
