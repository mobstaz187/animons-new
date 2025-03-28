import React, { useState } from 'react';
import gosuVideo from '../Assets/HeroSection/SayHelloToGosu.mp4';
import kumamoVideo from '../Assets/HeroSection/Kumamo! I choose you!.mp4';
import battleP2pImage from '../Assets/HeroSection/BattleP2p.png';
import newJourneyImage from '../Assets/HeroSection/New Journey.png';
import { HeroContentModal } from './HeroContentModal';
import { DailyDrawModal } from './DailyDrawModal';

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
  const [isDrawModalOpen, setIsDrawModalOpen] = useState(false);

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
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-95"
        />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="w-full space-y-4 py-24 md:py-0">
          {/* Top Row - Combined Gosu & Kumamo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Gosu Video */}
            <div 
              className="relative w-full h-[300px] md:h-[400px] border-2 border-game-cyan/30 bg-game-dark/60 backdrop-blur-sm pixel-corners overflow-hidden cursor-pointer hover:border-game-cyan/60 transition-colors duration-300"
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
                <h3 className="text-lg md:text-xl font-bold text-game-yellow glow-text-yellow animate-fade-in-up tracking-wider">
                  Say Hello to Gosu
                </h3>
                <p className="text-white text-xs leading-relaxed animate-fade-in-up line-clamp-2 md:line-clamp-none" style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                }}>
                  A legendary warrior whose mastery of ancient combat techniques makes them one of the most formidable fighters in Animon.
                </p>
              </div>
            </div>

            {/* Kumamo Video */}
            <div 
              className="relative w-full h-[300px] md:h-[400px] border-2 border-game-cyan/30 bg-game-dark/60 backdrop-blur-sm pixel-corners overflow-hidden cursor-pointer hover:border-game-cyan/60 transition-colors duration-300"
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
                <h3 className="text-lg md:text-xl font-bold text-game-yellow glow-text-yellow animate-fade-in-up tracking-wider">
                  Kumamo Awakens
                </h3>
                <p className="text-white text-xs leading-relaxed animate-fade-in-up line-clamp-2 md:line-clamp-none" style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                }}>
                  A mystical bear guardian whose ancient wisdom and elemental powers bring balance to the chaotic world of Animon.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row - P2P, Daily Draw, Journey */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* P2P Battles */}
            <div 
              className="relative w-full h-[250px] md:h-[300px] border-2 border-game-cyan/30 bg-game-dark/60 backdrop-blur-sm pixel-corners overflow-hidden cursor-pointer hover:border-game-cyan/60 transition-colors duration-300"
              onClick={() => setSelectedContent(contentItems.battles)}
            >
              <img
                src={battleP2pImage}
                alt="Battle P2P"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 space-y-2 border-t-2 border-game-cyan/30 bg-game-dark/80 backdrop-blur-sm">
                <h3 className="text-lg md:text-xl font-bold text-game-yellow glow-text-yellow animate-fade-in-up tracking-wider">
                  P2P Battles
                </h3>
                <p className="text-white text-xs leading-relaxed animate-fade-in-up line-clamp-2" style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                }}>
                  Challenge other trainers in intense real-time battles.
                </p>
              </div>
            </div>

            {/* Daily Draw */}
            <div 
              className="relative w-full h-[250px] md:h-[300px] border-2 border-game-cyan/30 bg-game-dark/60 backdrop-blur-sm pixel-corners overflow-hidden cursor-pointer hover:border-game-cyan/60 transition-colors duration-300"
              onClick={() => setIsDrawModalOpen(true)}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 px-4">
                  <h3 className="text-lg md:text-xl font-bold text-game-yellow glow-text-yellow animate-fade-in-up tracking-wider">
                    Daily Draw
                  </h3>
                  <p className="text-white text-xs leading-relaxed animate-fade-in-up" style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                  }}>
                    Try your luck daily to win rare Animon cards!
                  </p>
                  <button className="game-button-primary text-xs md:text-sm">
                    Draw Now
                  </button>
                </div>
              </div>
            </div>

            {/* New Journey */}
            <div 
              className="relative w-full h-[250px] md:h-[300px] border-2 border-game-cyan/30 bg-game-dark/60 backdrop-blur-sm pixel-corners overflow-hidden cursor-pointer hover:border-game-cyan/60 transition-colors duration-300"
              onClick={() => setSelectedContent(contentItems.journey)}
            >
              <img
                src={newJourneyImage}
                alt="New Journey"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 space-y-2 border-t-2 border-game-cyan/30 bg-game-dark/80 backdrop-blur-sm">
                <h3 className="text-lg md:text-xl font-bold text-game-yellow glow-text-yellow animate-fade-in-up tracking-wider">
                  Begin Your Journey
                </h3>
                <p className="text-white text-xs leading-relaxed animate-fade-in-up line-clamp-2" style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                }}>
                  Embark on an epic adventure through the digital realm.
                </p>
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

      <DailyDrawModal 
        isOpen={isDrawModalOpen}
        onClose={() => setIsDrawModalOpen(false)}
      />
    </div>
  );
}