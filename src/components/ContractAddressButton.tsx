import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CONTRACT_ADDRESS = "B8LzDgx6Vw72z7UKkSYjQtfcYA5rgQ9odwphAha6pump";

export function ContractAddressButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div 
      className={`fixed right-4 bottom-4 z-50 flex items-center transition-all duration-300 ${
        isExpanded ? 'bg-game-dark/95' : 'bg-game-dark/90'
      } backdrop-blur-sm border-2 border-game-cyan/30 rounded-xl overflow-hidden group hover:border-game-cyan`}
    >
      <button
        onClick={() => {
          if (!isExpanded) {
            setIsExpanded(true);
            copyToClipboard();
          }
        }}
        className="px-4 py-3 flex items-center space-x-2"
      >
        <span className="text-game-cyan font-bold tracking-wider text-sm glow-text-cyan">
          {isExpanded ? 'CA:' : 'CA'}
        </span>
        
        {isExpanded && (
          <>
            <span className="text-game-cyan/80 font-['Press_Start_2P'] text-[10px] ml-2 select-all whitespace-nowrap">
              {CONTRACT_ADDRESS}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                copyToClipboard();
              }}
              className="ml-2 p-1 hover:bg-game-cyan/10 rounded transition-colors"
            >
              {copied ? (
                <Check size={16} className="text-green-400" />
              ) : (
                <Copy size={16} className="text-game-cyan" />
              )}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
              className="ml-2 text-game-cyan/60 hover:text-game-cyan text-xs"
            >
              ×
            </button>
          </>
        )}
      </button>
    </div>
  );
}