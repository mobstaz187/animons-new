import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { cards } from '../data/cards';
import cardLoadingVideo from '../Assets/Lottery/CardLoading.mp4';

interface DailyDrawModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DailyDrawModal({ isOpen, onClose }: DailyDrawModalProps) {
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawnCard, setDrawnCard] = useState<typeof cards[0] | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<string>('');
  const [canDraw, setCanDraw] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && drawnCard) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [drawnCard]);

  useEffect(() => {
    const checkDrawAvailability = () => {
      const lastDrawTime = localStorage.getItem('lastDrawTime');
      if (!lastDrawTime) {
        setCanDraw(true);
        return;
      }

      const now = new Date().getTime();
      const lastDraw = parseInt(lastDrawTime);
      const timeDiff = now - lastDraw;
      const timeLeft = 24 * 60 * 60 * 1000 - timeDiff;

      if (timeLeft <= 0) {
        setCanDraw(true);
        setTimeRemaining('');
        setDrawnCard(null);
      } else {
        setCanDraw(false);
        const hours = Math.floor(timeLeft / (60 * 60 * 1000));
        const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);
        setTimeRemaining(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      }
    };

    if (isOpen) {
      checkDrawAvailability();
      const timer = setInterval(checkDrawAvailability, 1000);
      return () => clearInterval(timer);
    }
  }, [isOpen]);

  const drawCard = () => {
    if (!canDraw) return;

    setIsDrawing(true);
    localStorage.setItem('lastDrawTime', new Date().getTime().toString());
    setCanDraw(false);
    
    const randomChance = Math.random();
    const drawTimeout = setTimeout(() => {
      if (randomChance <= 0.4) {
        const randomCardIndex = Math.floor(Math.random() * cards.length);
        setDrawnCard(cards[randomCardIndex]);
      } else {
        setDrawnCard(null);
      }
      setIsDrawing(false);
    }, 3000);

    return () => clearTimeout(drawTimeout);
  };

  const getMessage = () => {
    if (canDraw) return "Try your luck!";
    if (!canDraw && !drawnCard) return `Try again in:\n${timeRemaining}`;
    return "";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 animate-fade-in">
      <div 
        className="absolute inset-0 bg-game-darker/95 backdrop-blur-md" 
        onClick={onClose} 
      />
      <div className="relative w-full h-full max-w-2xl mx-auto animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 game-button-secondary z-10 p-2 pixel-corners"
        >
          <X size={24} />
        </button>
        
        <div className="h-full flex flex-col items-center justify-center p-4 space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-wider text-white glow-text">
              Daily Draw
            </h2>
            
            {/* Discord Banner */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#5865F2]/10 blur-xl animate-pulse"></div>
              <div className="relative bg-game-dark/80 backdrop-blur-sm border-2 border-[#5865F2]/30 rounded-xl px-6 py-3">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#5865F2]/20 via-[#5865F2]/10 to-transparent rounded-xl"></div>
                <div className="flex flex-col items-center space-y-1">
                  <p className="text-[#5865F2] text-sm tracking-wider font-bold glow-text">
                    Coming Soon
                  </p>
                  <p className="text-[10px] text-white/80">
                    Link your Discord profile for exclusive rewards
                  </p>
                </div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#5865F2] rounded-tl"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#5865F2] rounded-tr"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#5865F2] rounded-bl"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#5865F2] rounded-br"></div>
              </div>
            </div>
          </div>
          
          <div className="relative w-full aspect-[3/4] max-w-md pixel-corners overflow-hidden bg-game-dark/60 backdrop-blur-sm">
            {isDrawing ? (
              <video
                src={cardLoadingVideo}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : drawnCard ? (
              <div className="relative h-full animate-fade-in">
                <video
                  ref={videoRef}
                  src={drawnCard.video}
                  className="absolute inset-0 w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-game-darker via-game-darker/80 to-transparent">
                  <p className="text-white text-center glow-text text-xl animate-fade-in-up">
                    {drawnCard.name}
                  </p>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-radial from-game-darker via-game-dark to-game-darker">
                <p className="text-white/80 text-center px-4 glow-text whitespace-pre-line">
                  {getMessage()}
                </p>
              </div>
            )}
          </div>
          
          <button
            onClick={drawCard}
            disabled={isDrawing || !canDraw}
            className={`game-button-primary w-48 text-sm ${(isDrawing || !canDraw) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isDrawing ? 'Drawing...' : 'Draw Card'}
          </button>
        </div>
      </div>
    </div>
  );
}