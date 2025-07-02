import React, { useState, useEffect } from 'react';
import Images from '../constant/image';

const caroussel = [
  {
    src: Images.fc,
    title: 'WOMEN COLLECTION 2018',
    btn: 'Shop Now',
    caption: 'NEW ARRIVAL',
  },
  {
    src: Images.scc,
    caption: 'NEW ARRIVAL',
    title: 'WOMEN COLLECTION 2018',
    btn: 'Shop Now',
  },
  {
    src: Images.thr,
    caption: 'NEW ARRIVAL',
    title: 'WOMEN COLLECTION 2018',
    btn: 'Shop Now',
  },
];

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const Next = () => {
    setActiveIndex((prev) => (prev === caroussel.length - 1 ? 0 : prev + 1));
  };

  const sld = (index) => setActiveIndex(index);

  const Prev = () => {
    setActiveIndex((prev) => (prev === 0 ? caroussel.length - 1 : prev - 1));
  };

  useEffect(() => {
    const int = setInterval(Next, 3000);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="w-full relative overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-64 sm:h-80 md:h-[500px]">
        {caroussel.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img src={slide.src} className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-white text-sm sm:text-base mb-2 uppercase tracking-wide">{slide.title}</p>
              <span className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white block mb-4">
                {slide.caption}
              </span>
              <button className="px-6 py-2 bg-white text-black font-semibold uppercase text-sm rounded-[20px] hover:bg-gray-200 transition">
                {slide.btn}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {caroussel.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-white' : 'bg-white/60'
            }`}
            onClick={() => sld(index)}
          ></button>
        ))}
      </div>

      <button
        onClick={Prev}
        className="absolute top-1/2 left-3 z-30 -translate-y-1/2 bg-gray-200/70 hover:bg-gray-300 rounded-full p-2"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={Next}
        className="absolute top-1/2 right-3 z-30 -translate-y-1/2 bg-gray-200/70 hover:bg-gray-300 rounded-full p-2"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7 " />
        </svg>
      </button>
    </div>
  );
}

