"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "Qual é a faixa etária permitida?",
    answer: "Por se tratar de um evento 100% Open Bar, só é permitida a entrada de maiores de 18 anos, sem exceções.",
  },
  {
    question: "Qual é a data do evento?",
    answer: "O evento acontecerá entre os dias 28 de fevereiro a 04 de março de 2025.",
  },
  {
    question: "Onde será o evento?",
    answer: "República Canil (Ouro Preto-MG).",
  },
  {
    question: "Posso personalizar meu abadá?",
    answer: "Sim, claro! Desde que seja mantida a logo do Bloco no abadá.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className="px-4 ">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-8 text-customBlue">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-customBlue text-sm font-semibold text-left focus:outline-none"
                aria-expanded={activeIndex === index}
                role="button"
              >
                {item.question}
                <span
                  className={`ml-2 text-sm transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-white text-sm">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
