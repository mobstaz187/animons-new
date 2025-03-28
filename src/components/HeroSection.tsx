import React, { useState } from 'react';
import gosuVideo from '../Assets/HeroSection/SayHelloToGosu.mp4';
import kumamoVideo from '../Assets/HeroSection/Kumamo! I choose you!.mp4';
import battleP2pImage from '../Assets/HeroSection/BattleP2p.png';
import newJourneyImage from '../Assets/HeroSection/New Journey.png';
import { HeroContentModal } from './HeroContentModal';

interface HeroSectionProps {
  backgroundImage: string;
}

interface ContentItem {
  title: string;
  description: string;
  videoSrc?: string;
  imageSrc?: string;
}

export function HeroSection({ backgroundImage }: HeroSectionProps) {
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);

  const contentItems: Record<string, ContentItem> = {
    gosu: {
      title: 'Say Hello to Gosu',
      description: 'A legendary warrior whose mastery of ancient combat techniques makes them one of the most formidable fighters in Animon. With years of training in the mystical arts, Gosu has developed unique abilities that combine traditional martial prowess with supernatural power.',
      videoSrc: gosuVideo
    },
    kumamo: {
      title: 'Kumamo Awakens',
      description: 'A mystical bear guardian whose ancient wisdom and elemental powers bring balance to the chaotic world of Animon. Kumamo\'s presence alone can calm the most turbulent battles, while its unleashed power can reshape the very battlefield itself.',
      videoSrc: kumamoVideo
    },
    battles: {
      title: 'P2P Battles',
      description: 'Challenge other trainers in intense real-time battles. Test your strategy and skills against players from around the world in our advanced peer-to-peer battle system. Every match is a unique opportunity to prove your worth as an Animon master.',
      imageSrc: battleP2pImage
    },
    journey: {
      title: 'Begin Your Journey',
      description: 'Embark on an epic adventure through the digital realm. Discover new Animon, forge alliances, and write your own legend in this vast and ever-expanding world. Your journey to becoming an Animon master starts here.',
      imageSrc: newJourneyImage
    }
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-95"
        />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          {/* Left Column - Gosu */}
          <div 
            className="relative w-full h-[500px] border-2 border-game-cyan/30 bg-game-dark/60 backdrop-blur-sm pixel-corners overflow-hidden cursor-pointer hover:border-game-cyan/60 transition-colors duration-300"
            onClick={() => setSelectedContent(contentItems.gosu)}
          >
            <video
              src={gosuVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 p-3 space-y-2 border-t-2 border-game-cyan/30 bg-game-dark/80 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-game-yellow glow-text-yellow animate-fade-in-up tracking-wider">
                Say Hello to Gosu
              </h3>
              <p className="text-white text-xs leading-relaxed animate-fade-in-up" style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
              }}>
                A legendary warrior whose mastery of ancient combat techniques makes them one of the most formidable fighters in Animon.
              </p>
            </div>
          </div>

          {/* Right Column - Kumamo with P2P and Journey */}
          <div className="grid grid-cols-2 gap-4">
            {/* Kumamo Video Container */}
            <div 
              className="relative w-full h-[500px] border-2 border-game-cyan/30 bg-game-dark/60 backdrop-blur-sm pixel-corners overflow-hidden cursor-pointer hover:border-game-cyan/60 transition-colors duration-300"
              onClick={() => setSelectedContent(contentItems.kumamo)}
            >
              <video
                src={kumamoVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 space-y-2 border-t-2 border-game-cyan/30 bg-game-dark/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-game-yellow glow-text-yellow animate-fade-in-up tracking-wider">
                  Kumamo Awakens
                </h3>
                <p className="text-white text-xs leading-relaxed animate-fade-in-up" style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                }}>
                  A mystical bear guardian whose ancient wisdom and elemental powers bring balance to the chaotic world of Animon.
                </p>
              </div>
            </div>

            {/* Right side stack */}
            <div className="space-y-4">
              {/* P2P Battles */}
              <div 
                className="relative w-full h-[242px] border-2 border-game-cyan/30 bg-game-dark/60 backdrop-blur-sm pixel-corners overflow-hidden cursor-pointer hover:border-game-cyan/60 transition-colors duration-300"
                onClick={() => setSelectedContent(contentItems.battles)}
              >
                <img
                  src={battleP2pImage}
                  alt="Battle P2P"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-3 space-y-2 border-t-2 border-game-cyan/30 bg-game-dark/80 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-game-yellow glow-text-yellow animate-fade-in-up tracking-wider">
                    P2P Battles
                  </h3>
                  <p className="text-white text-xs leading-relaxed animate-fade-in-up" style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                  }}>
                    Challenge other trainers in intense real-time battles.
                  </p>
                </div>
              </div>

              {/* New Journey */}
              <div 
                className="relative w-full h-[242px] border-2 border-game-cyan/30 bg-game-dark/60 backdrop-blur-sm pixel-corners overflow-hidden cursor-pointer hover:border-game-cyan/60 transition-colors duration-300"
                onClick={() => setSelectedContent(contentItems.journey)}
              >
                <img
                  src={newJourneyImage}
                  alt="New Journey"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-3 space-y-2 border-t-2 border-game-cyan/30 bg-game-dark/80 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-game-yellow glow-text-yellow animate-fade-in-up tracking-wider">
                    Begin Your Journey
                  </h3>
                  <p className="text-white text-xs leading-relaxed animate-fade-in-up" style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                  }}>
                    Embark on an epic adventure through the digital realm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroContentModal
        isOpen={selectedContent !== null}
        onClose={() => setSelectedContent(null)}
        title={selectedContent?.title || ''}
        description={selectedContent?.description || ''}
        videoSrc={selectedContent?.videoSrc}
        imageSrc={selectedContent?.imageSrc}
      />
    </div>
  );
}