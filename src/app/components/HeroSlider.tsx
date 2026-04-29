import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSliderProps {
  images: { src: string; alt: string; caption?: string; subcaption?: string }[];
}

export function HeroSlider({ images }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  const goToPrev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#E87722]/10 to-[#0B1F3F]/10 z-0"></div>
      <div className="container mx-auto px-4 max-w-[1320px] relative z-10">
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white/10">
          <button
            aria-label="Previous slide"
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow z-20"
          >
            <ChevronLeft className="w-6 h-6 text-orange-500" />
          </button>

          <div className="relative w-full">
              <img
              src={images[current].src}
              alt={images[current].alt}
              className="rounded-[1.75rem] w-full h-[410px] object-cover shadow-lg"
            />
          </div>

          <button
            aria-label="Next slide"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow z-20"
          >
            <ChevronRight className="w-6 h-6 text-orange-500" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3.5 h-3.5 rounded-full ${current === idx ? 'bg-orange-500' : 'bg-white/80'} transition-all`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {(images[current].caption || images[current].subcaption) && (
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 max-w-3xl rounded-3xl bg-white/90 px-6 py-5 shadow-lg text-center z-10">
              {images[current].caption && (
                <h2 className="text-2xl md:text-4xl font-bold mb-2 text-slate-900">{images[current].caption}</h2>
              )}
              {images[current].subcaption && (
                <p className="text-base md:text-lg text-slate-700">{images[current].subcaption}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
