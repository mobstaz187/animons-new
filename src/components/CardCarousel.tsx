import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { cards } from '../data/cards';

interface CardCarouselProps {
  selectedCard: number | null;
  onCardSelect: (id: number) => void;
}

export function CardCarousel({ selectedCard, onCardSelect }: CardCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative w-screen -mx-[50vw] left-1/2 right-1/2 overflow-hidden">
      {/* Cards Container */}
      <div className="relative overflow-hidden py-8" ref={emblaRef}>
        <div className="flex">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative flex-[0_0_200px] mx-2"
            >
              <div
                onClick={() => onCardSelect(card.id)}
                className={`card-frame group ${
                  selectedCard === card.id 
                    ? 'card-frame-active' 
                    : ''
                }`}
              >
                <div className="relative h-[280px] pixel-corners overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-contain p-2"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-game-dark/90 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-game-cyan text-xs text-center glow-text-cyan tracking-wider">
                      {card.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 game-button-secondary pixel-corners"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 game-button-secondary pixel-corners"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}