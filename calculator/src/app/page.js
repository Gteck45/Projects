'use client';
import React, { useState } from 'react';

export default function Home() {
  const [calculations, setCalculations] = useState('');
  const [calhistory, setHistory] = useState([]);

  const handleButtonClick = (event) => {
    const value = event.currentTarget.value;

    if (value === 'C') {
      setCalculations('');
      setHistory([]);
    } else if (value === 'CE') {
      setCalculations(calculations.slice(0, -1));
    } else if (value === '=') {
      try {
        const result = eval(calculations).toString();
        setCalculations(result);
        setHistory([...calhistory, `${calculations} = ${result}`]);
      } catch (error) {
        setCalculations('Error');
      }
    } else {
      setCalculations(calculations + value);
    }
  };

  return (
    <>
      {/* Background only on md and up */}
      <div className=" md:block absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      {/* Calculator container fixed bottom center */}
      <div className="Calculator fixed bottom-9 sm:h-full left-1/2 transform -translate-x-1/2 bg-[#2d2a37] lg:h-[800px] max-w-xl w-full shadow-lg p-8 flex flex-col gap-4 rounded-4xl">
        {/* Calculations display, flex-grow to fill space */}
        <div className="calculations flex-grow overflow-x-auto hide-scrollbar flex flex-col items-end text-4xl text-white p-2">
          <div>{calculations || '0'}</div>
          <div className="text-sm mt-2 text-gray-400 overflow-auto max-h-24 w-full">
            {calhistory.map((entry, index) => (
              <div key={index}>{entry}</div>
            ))}
          </div>
        </div>

        {/* Buttons grid */}
        <div className="buttons grid grid-cols-4 gap-4">
          <button value={'CE'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#3b3a4d] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">CE</button>
          <button value={'C'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#3b3a4d] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">C</button>
          <button value={'%'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#3b3a4d] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">%</button>
          <button value={'/'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#492c78] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">
            <img src="/divison.svg" alt="÷" className="w-[30%] object-contain" />
          </button>

          <button value={'7'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#3b3a4d] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">7</button>
          <button value={'8'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#3b3a4d] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">8</button>
          <button value={'9'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#3b3a4d] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">9</button>
          <button value={'*'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#492c78] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">×</button>

          <button value={'4'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#3b3a4d] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">4</button>
          <button value={'5'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#3b3a4d] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">5</button>
          <button value={'6'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#3b3a4d] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">6</button>
          <button value={'-'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#492c78] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">−</button>

          <button value={'1'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#3b3a4d] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">1</button>
          <button value={'2'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#3b3a4d] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">2</button>
          <button value={'3'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#3b3a4d] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">3</button>
          <button value={'+'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#492c78] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">+</button>

          <button value={'00'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#3b3a4d] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">00</button>
          <button value={'0'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#3b3a4d] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">0</button>
          <button value={'.'} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#3b3a4d] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">.</button>
          <button value={'='} onClick={handleButtonClick} className="button flex items-center justify-center h-20 text-2xl bg-[#492c78] text-white rounded-full border border-[#25232d] p-4 hover:bg-[#4c4b5f] transition-colors">=</button>
        </div>
      </div>
    </>
  );
}
