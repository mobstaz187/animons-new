import React, { useState, useEffect } from 'react';
import { Map } from 'lucide-react';

interface RoadmapItem {
  title: string;
  items: string[];
}

const ROADMAP_DATA: Record<string, RoadmapItem[]> = {
  "1st Quarter 2025": [
    {
      title: "Token Launch",
      items: ["Token Generation Event of $ANIMON on pump.fun"]
    },
    {
      title: "Beta Access",
      items: ["Beta access to Animon game application", "First 1000 beta roles in discord server"]
    }
  ],
  "2nd Quarter 2025": [
    {
      title: "NFT Launch",
      items: [
        "Animon NFT cards free mint for token holders",
        "Physical card launch on Shopify"
      ]
    }
  ],
  "3rd Quarter 2025": [
    {
      title: "Online Tournaments",
      items: ["Host Online Animon Tournaments"]
    }
  ],
  "4th Quarter 2025": [
    {
      title: "IRL Events",
      items: [
        "Host IRL Animon Tournaments",
        "More to be announced..."
      ]
    }
  ]
};

const GAME_INFO = {
  title: "Animon Game Application",
  description: "Users are able to draw cards randomly for 0.02 SOL. All funds collected from drawn cards will be used to buy back tokens for burning.",
  features: [
    "Cards will be mintable on site",
    "Tradeable on MagicEden, Tensor and other Solana NFT Marketplace"
  ]
};

export function RoadmapTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Delay the visibility for animation
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  return (
    <>
      {/* Tab Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-game-dark/90 backdrop-blur-sm border-2 border-l-0 border-game-cyan/30 px-3 py-4 rounded-r-xl hover:bg-game-dark transition-all duration-300 flex flex-col items-center gap-2"
      >
        <Map 
          size={24} 
          className="text-game-cyan"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.5))'
          }}
        />
        <span className="text-game-cyan text-[10px] tracking-wider glow-text-cyan uppercase">
          Roadmap
        </span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Roadmap Panel */}
      <div
        className={`fixed left-0 top-0 bottom-0 w-full max-w-md bg-game-darker border-r-2 border-game-cyan/30 z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className={`h-full overflow-y-auto px-6 py-8 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold text-game-yellow glow-text-yellow mb-8">
            Roadmap
          </h2>

          {/* Quarters */}
          <div className="space-y-8">
            {Object.entries(ROADMAP_DATA).map(([quarter, items]) => (
              <div key={quarter} className="relative">
                <div className="absolute left-0 top-0 w-[2px] h-full bg-game-cyan/30">
                  <div className="absolute inset-0 animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-b from-game-cyan via-game-cyan/50 to-transparent"></div>
                  </div>
                </div>

                <div className="pl-6">
                  <h3 className="text-xl font-bold text-game-cyan glow-text-cyan mb-4">
                    {quarter}
                  </h3>

                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <div key={index} className="bg-game-dark/50 backdrop-blur-sm border border-game-cyan/20 rounded-lg p-4">
                        <h4 className="text-white font-bold mb-2">{item.title}</h4>
                        <ul className="space-y-2">
                          {item.items.map((subItem, subIndex) => (
                            <li key={subIndex} className="text-white/80 text-sm">
                              • {subItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Game Info Section */}
          <div className="mt-12 bg-game-dark/50 backdrop-blur-sm border border-game-cyan/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-game-yellow glow-text-yellow mb-4">
              {GAME_INFO.title}
            </h3>
            <p className="text-white/80 text-sm mb-4">
              {GAME_INFO.description}
            </p>
            <ul className="space-y-2">
              {GAME_INFO.features.map((feature, index) => (
                <li key={index} className="text-white/80 text-sm">
                  • {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}