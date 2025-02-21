import Image from 'next/image';

export default function ButtonFloating() {
  return (
    <a
      href=""
      target="_blank"
      className="fixed bottom-4 right-4  rounded-full p-4 shadow-lg hover:bg-customBlue transition-colors"
      aria-label="Go to link"
    >
       <Image 
        src="/WhatsApp.svg" 
        alt="Ícone do Instagram" 
        className="h-15 w-15"  
        width={48} // Ajuste a largura conforme necessário
        height={48} // Ajuste a altura conforme necessário
      />
    </a>
  );
}