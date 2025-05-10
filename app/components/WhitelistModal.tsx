import React, { useState } from 'react';
import Image from 'next/image';

interface WhitelistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhitelistModal: React.FC<WhitelistModalProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden relative">
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="p-6 md:p-8">
          {/* Modal header */}
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold">FreeMint Whitelist</h2>
            <p className="text-gray-700 mt-2">
              1,000 winners get Penguin NFTs earning <span className="text-primary font-bold">$10/day</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Left side - NFT preview */}
            <div className="bg-gray-900 rounded-xl p-4 flex flex-col items-center">
              <div className="text-primary font-bold flex items-center mb-3">
                <svg className="w-5 h-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                $10/day
              </div>
              
              <div className="relative w-24 h-24 mb-4">
                <Image 
                  src="/images/penguin.png" 
                  alt="Penguin NFT" 
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="text-white mb-2">$550/$550</div>
              
              <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                <div className="bg-primary h-2 rounded-full w-full"></div>
              </div>
              
              <div className="flex justify-between w-full text-white text-sm">
                <span>Value</span>
                <div className="flex items-center">
                  $550 in 
                  <svg className="w-4 h-4 ml-1 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Right side - Mission tasks */}
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-4">Mission:</h3>
              
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-700">0 joined</div>
              </div>
              
              <div className="space-y-3">
                {/* Twitter login */}
                <div className="flex items-center justify-between border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center">
                    <div className="bg-gray-200 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                      </svg>
                    </div>
                    <span>Log in to your Twitter</span>
                  </div>
                  <button className="bg-gray-900 text-white px-3 py-1 rounded-md text-sm">Log in</button>
                </div>
                
                {/* Follow account */}
                <div className="flex items-center justify-between border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center">
                    <div className="bg-gray-200 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                      </svg>
                    </div>
                    <span>Follow @gacha_peng</span>
                  </div>
                  <button className="bg-gray-900 text-white px-3 py-1 rounded-md text-sm">Go</button>
                </div>
                
                {/* Like & RT */}
                <div className="flex items-center justify-between border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center">
                    <div className="bg-gray-200 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                    <span>Like & RT this tweet</span>
                  </div>
                  <button className="bg-gray-900 text-white px-3 py-1 rounded-md text-sm">Go</button>
                </div>
                
                {/* Share referral */}
                <div className="flex items-center justify-between border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center">
                    <div className="bg-gray-200 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                      </svg>
                    </div>
                    <span>Share referral link</span>
                  </div>
                  <button className="bg-gray-400 text-white px-3 py-1 rounded-md text-sm">Please login first</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitelistModal; 