import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';

interface HeroContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  videoSrc?: string;
  imageSrc?: string;
}

export function HeroContentModal({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  videoSrc,
  imageSrc 
}: HeroContentModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && isOpen && videoSrc) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [isOpen, videoSrc]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 animate-fade-in">
      <div 
        className="absolute inset-0 bg-game-darker/95 backdrop-blur-md" 
        onClick={onClose} 
      />
      <div className="relative w-full h-full max-w-7xl mx-auto p-4 animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 game-button-secondary z-10 p-2 pixel-corners"
        >
          <X size={24} />
        </button>
        
        <div className="h-full flex flex-col items-center justify-center space-y-4">
          <div className="relative w-full max-h-[70vh] aspect-video rounded-xl overflow-hidden pixel-corners">
            <div className="absolute inset-0 flex items-center justify-center bg-game-darker">
              {videoSrc ? (
                <video
                  ref={videoRef}
                  src={videoSrc}
                  className="w-full h-full object-contain"
                  loop
                  muted
                  playsInline
                />
              ) : imageSrc ? (
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-contain"
                />
              ) : null}
            </div>
          </div>

          <div className="w-full max-w-3xl mx-auto bg-game-dark/80 backdrop-blur-sm p-4 rounded-lg pixel-corners animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-lg font-bold tracking-wider text-game-yellow glow-text-yellow mb-2">
              {title}
            </h2>
            <p className="text-game-light text-xs leading-relaxed" style={{
              textShadow: '1px 1px 0px rgba(0, 0, 0, 0.5)'
            }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}