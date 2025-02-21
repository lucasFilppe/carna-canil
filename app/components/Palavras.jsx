import React from "react";

const CarnavalMarquee = ({ palavras = [], className = "" }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap py-4 relative ${className}`}>
      <div className="flex gap-8 animate-marquee">
        {/* Criamos duas cópias das palavras para um efeito contínuo */}
        {[...palavras, ...palavras].map((palavra, index) => (
          <span key={index} className="text-2xl font-bold">
            {palavra}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CarnavalMarquee;
