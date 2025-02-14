// components/CarnavalMarquee.js
import React from 'react';

// O componente agora recebe `palavras` como uma prop
const CarnavalMarquee = ({ palavras = [], className = '' }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap py-4 ${className}`}>
      {/* Primeira linha */}
      <div className="animate-marquee inline-block">
        {palavras.map((palavra, index) => (
          <span key={index} className="text-2xl font-bold mx-8">
            {palavra}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CarnavalMarquee;