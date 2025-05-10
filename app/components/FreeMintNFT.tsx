import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import WhitelistModal from './WhitelistModal';

const FreeMintNFT = () => {
  const [showWhitelistModal, setShowWhitelistModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const nftImageRef = useRef<HTMLDivElement>(null);
  const [spritePosition, setSpritePosition] = useState(0);
  const SPRITE_COUNT = 4; // Number of sprites in the image
  const SPRITE_WIDTH = 270; // Width of each sprite
  
  // Check when component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('nft-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  // Animation for the sprite NFT image
  useEffect(() => {
    let frameId: number;
    let currentFrame = 0;
    
    const animateSprite = () => {
      currentFrame = (currentFrame + 1) % SPRITE_COUNT;
      setSpritePosition(currentFrame * -SPRITE_WIDTH);
      
      frameId = requestAnimationFrame(() => {
        setTimeout(animateSprite, 350); // Control animation speed
      });
    };
    
    animateSprite();
    
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);
  
  // Apply sprite animation
  useEffect(() => {
    if (nftImageRef.current) {
      nftImageRef.current.style.transform = `translateX(${spritePosition}px)`;
    }
  }, [spritePosition]);

  const openWhitelistModal = () => {
    setShowWhitelistModal(true);
  };

  const closeWhitelistModal = () => {
    setShowWhitelistModal(false);
  };

  return (
    <section id="nft-section" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto mobile-container">
        <div className={`card max-w-5xl mx-auto overflow-hidden shadow-lg transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 md:p-8 lg:p-10">
            <div className="stagger-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-balance text-gradient">
                FREE MINT NFT
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                Our exclusive NFT collection offers unique benefits and utility within the Pingu ecosystem.
              </p>
              
              <div className="space-y-5">
                <div className="card-hover p-4 md:p-5 rounded-xl border-l-4 border-l-primary bg-gray-50">
                  <h3 className="text-lg font-bold mb-1 flex items-center">
                    <span className="text-primary mr-2 inline-block transform transition-transform duration-300">1</span>
                    Early Access
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    NFT holders get priority access to new features and special gacha rolls.
                  </p>
                </div>
                
                <div className="card-hover p-4 md:p-5 rounded-xl border-l-4 border-l-primary bg-gray-50">
                  <h3 className="text-lg font-bold mb-1 flex items-center">
                    <span className="text-primary mr-2 inline-block transform transition-transform duration-300">2</span>
                    Boosted Rewards
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Increase your chances of winning rare items with boosts exclusive to NFT holders.
                  </p>
                </div>
                
                <div className="card-hover p-4 md:p-5 rounded-xl border-l-4 border-l-primary bg-gray-50">
                  <h3 className="text-lg font-bold mb-1 flex items-center">
                    <span className="text-primary mr-2 inline-block transform transition-transform duration-300">3</span>
                    Community Governance
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Have your say in the future development of Pingu through exclusive voting rights.
                  </p>
                </div>
              </div>
              
              <button 
                onClick={openWhitelistModal}
                className="btn btn-primary mt-8 hover-lift"
              >
                Join Whitelist
              </button>
            </div>
            
            <div className="relative h-[350px] md:h-[400px] w-full rounded-xl overflow-hidden bg-gray-800 fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Sprite animation container */}
                <div className="relative w-[270px] h-[270px] overflow-hidden">
                  {/* Sprite image will slide horizontally */}
                  <div 
                    ref={nftImageRef}
                    className="absolute top-0 left-0 h-full transition-transform duration-150 ease-in-out"
                    style={{ width: `${SPRITE_COUNT * SPRITE_WIDTH}px` }}
                  >
                    <Image 
                      src="/images/nft/lv1-sprite.webp" 
                      alt="Animated NFT Preview" 
                      width={SPRITE_COUNT * SPRITE_WIDTH}
                      height={270}
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
              
              {/* NFT Level Badge */}
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full font-bold text-sm">
                LV1
              </div>
              
              {/* Daily Earnings */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <div className="bg-black/70 text-white py-2 px-4 mx-auto inline-block rounded-full pulse">
                  <span className="text-primary font-bold">$10</span>/day earnings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Whitelist Modal */}
      <WhitelistModal isOpen={showWhitelistModal} onClose={closeWhitelistModal} />
    </section>
  );
};

export default FreeMintNFT; 