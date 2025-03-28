import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { cards } from '../data/cards';

interface CardModalProps {
  selectedCard: number | null;
  onClose: () => void;
}

export function CardModal({ selectedCard, onClose }: CardModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const selectedCardData = selectedCard !== null ? cards.find(card => card.id === selectedCard) : null;

  useEffect(() => {
    if (videoRef.current && selectedCard !== null) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [selectedCard]);

  if (!selectedCardData) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 animate-fade-in p-4 md:p-8">
      <div className="absolute inset-0 bg-[#b8e3d6]/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-4xl mx-auto animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute -top-4 -right-4 game-button-secondary z-10 p-2 rounded-xl"
        >
          <X size={24} />
        </button>

        <div className="relative w-full aspect-[4/3] bg-[#b8e3d6] rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <video
              ref={videoRef}
              src={selectedCardData.video}
              className="absolute top-0 left-0 w-full h-full object-cover"
              loop
              muted
              playsInline
            />
          </div>
          
          <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-auto md:max-w-sm">
            <h2 className="text-[#FFD700] text-xl md:text-2xl font-bold mb-2 md:mb-4 font-['Press_Start_2P']">
              {selectedCardData.name}
            </h2>
            <div className="bg-[#1a2e35]/90 p-3 md:p-4 rounded-2xl backdrop-blur-sm">
              <p className="text-white text-[10px] md:text-xs leading-relaxed font-['Press_Start_2P']" style={{
                textShadow: '2px 2px 0px rgba(0, 0, 0, 0.5)'
              }}>
                {selectedCardData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}