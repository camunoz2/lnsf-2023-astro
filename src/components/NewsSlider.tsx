import React, { useState } from "react";

interface NewsItem {
  image: string;
  title: string;
  summary: string;
}

interface NewsSliderProps {
  items: NewsItem[];
}

const NewsSlider: React.FC<NewsSliderProps> = ({ items }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  if (!items.length) return null;

  const { image, title, summary } = items[current];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-full max-w-md">
        <img
          src={image}
          alt={title}
          className="rounded-lg w-full h-64 object-cover mb-4"
        />
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow"
          onClick={prevSlide}
          aria-label="Anterior"
        >
          &#8592;
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow"
          onClick={nextSlide}
          aria-label="Siguiente"
        >
          &#8594;
        </button>
      </div>
      <div className="bg-white rounded-lg p-4 shadow w-full max-w-md text-center">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700">{summary}</p>
      </div>
    </div>
  );
};

export default NewsSlider;
