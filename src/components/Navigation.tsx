import React, { useState } from 'react';
import { Home, Users, Trophy, Menu, X } from 'lucide-react';
import { SOCIAL_LINKS, FEATURE_FLAGS, UI_CONFIG } from '../config';
import { DailyDrawModal } from './DailyDrawModal';

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

function NavItem({ icon, text, active = false, disabled = false, onClick }: NavItemProps) {
  return (
    <div className="relative group">
      <a
        href={disabled ? "#" : "#"}
        onClick={onClick}
        className={`flex items-center space-x-2 px-4 py-2 rounded ${
          active 
            ? 'bg-game-blue text-game-light' 
            : 'text-game-light hover:bg-game-blue/20'
        } ${disabled ? 'cursor-not-allowed' : ''} transition-all duration-300`}
      >
        <div className="flex items-center space-x-2 relative">
          {icon}
          <span className="tracking-wider text-sm">{text}</span>
          {disabled && (
            <span className="absolute inset-0 flex items-center justify-center text-[10px] text-game-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-game-darker/80">
              Coming Soon
            </span>
          )}
        </div>
      </a>
    </div>
  );
}

export function Navigation() {
  const [isDrawModalOpen, setIsDrawModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        {/* Background with blur effect */}
        <div className="absolute inset-0 bg-game-darker/95 backdrop-blur-sm"></div>
        <div className="absolute inset-0 scanlines"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo Container */}
            <div className="absolute -left-15 -top-7 z-50">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 -top-4 -bottom-4 -left-6 -right-6 bg-gradient-radial from-game-darker via-game-darker/80 to-transparent blur-lg"></div>
              
              {/* Logo Text */}
              <span 
                className="relative font-['Pokemon_Solid'] text-[#FFCB05]" 
                style={{
                  fontSize: UI_CONFIG.logo.fontSize,
                  textShadow: `
                    -3px -3px 0 #2A75BB,
                    3px -3px 0 #2A75BB,
                    -3px 3px 0 #2A75BB,
                    3px 3px 0 #2A75BB,
                    0 0 16px rgba(42, 117, 187, 0.8),
                    0 0 32px rgba(42, 117, 187, 0.5)
                  `,
                  letterSpacing: '0.1em',
                  transform: 'scale(1, 1.1)'
                }}
              >
                ANIMON
              </span>
            </div>

            {/* Navigation Items - Centered */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-2">
              <NavItem icon={<Home size={18} />} text="HOME" active />
              <NavItem 
                icon={<Users size={18} />} 
                text="ALLIANCE" 
                disabled={!FEATURE_FLAGS.allianceEnabled} 
              />
              <NavItem 
                icon={<Trophy size={18} />} 
                text="BATTLES" 
                disabled={!FEATURE_FLAGS.battlesEnabled} 
              />
            </div>

            {/* Right Side Items */}
            <div className="ml-auto flex items-center space-x-4">
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-button-x group relative flex items-center justify-center w-10 h-10 bg-game-dark border-2 border-game-cyan/30 hover:border-game-cyan transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
                <div className="absolute inset-0 bg-game-cyan/0 group-hover:bg-game-cyan/10 transition-colors duration-300"></div>
                <div className="flex items-center justify-center w-full h-full">
                  <span className="text-lg font-bold text-game-cyan group-hover:text-game-cyan/90 transition-colors duration-300 transform group-hover:scale-110 -translate-y-[1px]" style={{
                    textShadow: `
                      -1px -1px 0 #000,
                      1px -1px 0 #000,
                      -1px 1px 0 #000,
                      1px 1px 0 #000,
                      0 0 10px rgba(0, 229, 255, 0.5)
                    `
                  }}>𝕏</span>
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-game-cyan/30 transition-colors duration-300"></div>
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-game-cyan"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-game-cyan"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-game-cyan"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-game-cyan"></div>
                </div>
              </a>
              <button 
                onClick={() => setIsDrawModalOpen(true)}
                className="group relative px-6 py-2 bg-game-dark border-2 border-game-cyan/30 hover:border-game-cyan transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
                <div className="absolute inset-0 bg-game-cyan/0 group-hover:bg-game-cyan/10 transition-colors duration-300"></div>
                <span className="relative text-sm tracking-wider text-game-cyan group-hover:text-game-cyan/90 transition-colors duration-300" style={{
                  textShadow: '2px 2px 0px rgba(0, 0, 0, 0.5)'
                }}>Daily Draw</span>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-game-cyan/30 transition-colors duration-300"></div>
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-game-cyan"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-game-cyan"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-game-cyan"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-game-cyan"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <DailyDrawModal 
        isOpen={isDrawModalOpen}
        onClose={() => setIsDrawModalOpen(false)}
      />
    </>
  );
}