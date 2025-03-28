import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { CardCarousel } from './components/CardCarousel';
import { CardModal } from './components/CardModal';

// Import background images
import gifAnimonBg from './Assets/Home/Background/Gif Animon.gif';
import animonBannerBg from './Assets/Home/Background/Animon-Latest-Banner copy.png';

const backgrounds = [gifAnimonBg, animonBannerBg];
const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

function App() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-light">
      <Navigation />
      
      <main className="relative pt-20">
        <HeroSection backgroundImage={randomBackground} />

        {/* Separator Line with Collection Label */}
        <div className="relative py-2">
          {/* Collection Label */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
            <div className="relative inline-flex items-center">
              {/* Decorative Line Left */}
              <div className="absolute right-full mr-4 w-24 h-[2px]">
                <div className="absolute inset-0 bg-game-cyan/30"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-game-cyan to-transparent"></div>
                <div className="absolute inset-0 animate-pulse" style={{ animationDelay: '0.5s' }}>
                  <div className="absolute inset-0 bg-gradient-to-l from-game-cyan/50 to-transparent"></div>
                </div>
              </div>

              {/* Label Text */}
              <div className="relative px-6 py-2">
                <div className="absolute inset-0 bg-game-dark/80 backdrop-blur-sm border-2 border-game-cyan/30 rounded-xl"></div>
                <h2 className="relative text-2xl font-bold tracking-wider text-white glow-text">
                  COLLECTION
                </h2>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-game-cyan rounded-tl"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-game-cyan rounded-tr"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-game-cyan rounded-bl"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-game-cyan rounded-br"></div>
              </div>

              {/* Decorative Line Right */}
              <div className="absolute left-full ml-4 w-24 h-[2px]">
                <div className="absolute inset-0 bg-game-cyan/30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-game-cyan to-transparent"></div>
                <div className="absolute inset-0 animate-pulse" style={{ animationDelay: '0.5s' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-game-cyan/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px]">
            {/* Base glow layer */}
            <div className="absolute inset-0 bg-game-cyan/10 blur-sm animate-pulse"></div>
            
            {/* Center gradient with pulse */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-game-cyan/30 to-transparent animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-game-cyan/20 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            {/* Edge gradients with alternating pulse */}
            <div className="absolute left-0 w-24 h-[2px]">
              <div className="absolute inset-0 bg-gradient-to-r from-game-cyan/30 to-transparent animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-game-cyan/20 to-transparent animate-pulse" style={{ animationDelay: '0.75s' }}></div>
            </div>
            <div className="absolute right-0 w-24 h-[2px]">
              <div className="absolute inset-0 bg-gradient-to-l from-game-cyan/30 to-transparent animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-game-cyan/20 to-transparent animate-pulse" style={{ animationDelay: '0.75s' }}></div>
            </div>
          </div>
        </div>

        {/* Carousel Section with Glowing Background */}
        <div className="relative">
          {/* Glowing Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-game-cyan/5"></div>
            <div className="absolute inset-0 bg-gradient-radial from-game-cyan/20 via-game-cyan/5 to-transparent"></div>
            <div className="absolute inset-0 animate-pulse">
              <div className="absolute inset-0 bg-gradient-radial from-game-cyan/10 via-transparent to-transparent blur-xl"></div>
            </div>
          </div>

          <CardCarousel 
            selectedCard={selectedCard}
            onCardSelect={setSelectedCard}
          />
        </div>
      </main>

      {selectedCard !== null && (
        <CardModal 
          selectedCard={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </div>
  );
}

export default App;