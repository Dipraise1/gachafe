import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import WhitelistModal from './WhitelistModal';

const SimpleHero = () => {
  const penguin1Ref = useRef<HTMLDivElement>(null);
  const penguin2Ref = useRef<HTMLDivElement>(null);
  const [showWhitelistModal, setShowWhitelistModal] = useState(false);
  const [activePenguin, setActivePenguin] = useState(1);
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a small delay for animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Enhanced animation for the penguins
    const animatePenguins = () => {
      let speed = 1.2; // Increased speed for better animation
      let maxDistance = 20; // Increased distance for more noticeable movement
      
      const animate = () => {
        // Update position
        setPosition(prevPosition => {
          const newPosition = prevPosition + speed * direction;
          
          // Change direction when reaching bounds
          if (newPosition > maxDistance) {
            setDirection(-1);
            setActivePenguin(2); // Switch to second penguin when moving left
            return maxDistance;
          }
          if (newPosition < -maxDistance) {
            setDirection(1);
            setActivePenguin(1); // Switch to first penguin when moving right
            return -maxDistance;
          }
          
          return newPosition;
        });
        
        requestAnimationFrame(animate);
      };
      
      animate(); // Call the inner animate function to start animation
    };
    
    animatePenguins(); // Call the outer function
  }, [direction]);

  // Apply styles based on current position and active penguin
  useEffect(() => {
    if (penguin1Ref.current && penguin2Ref.current) {
      // First penguin moves right to left and is visible when active
      penguin1Ref.current.style.transform = `translateX(${position}px)`;
      penguin1Ref.current.style.opacity = activePenguin === 1 ? '1' : '0';
      
      // Second penguin moves left to right and is visible when active
      penguin2Ref.current.style.transform = `translateX(${-position}px)`;
      penguin2Ref.current.style.opacity = activePenguin === 2 ? '1' : '0';
    }
  }, [position, activePenguin]);

  const openWhitelistModal = () => {
    setShowWhitelistModal(true);
  };

  const closeWhitelistModal = () => {
    setShowWhitelistModal(false);
  };

  const animationClass = isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4';

  return (
    <div className="relative min-h-[85vh] pt-4 pb-12 md:pt-6 md:pb-20">
      <div className="container mx-auto mobile-container">
        {/* Header/Nav */}
        <div className={`flex justify-between items-center mb-6 md:mb-12 transition-all duration-700 ${animationClass}`}>
          <div className="flex items-center">
            <Image 
              src="/favicon.ico" 
              alt="GachaPeng Logo" 
              width={36} 
              height={36} 
              className="mr-2 w-8 h-8 md:w-9 md:h-9"
            />
            <span className="font-bold text-base md:text-xl">GACHA PENG</span>
          </div>
          <div className="flex space-x-2">
            <a 
              href="https://gacha-peng-docs.gitbook.io/gacha-peng-docs"
              target="_blank"
              rel="noopener noreferrer" 
              className="btn btn-outline text-xs md:text-sm py-1.5 px-3 md:py-2 md:px-4"
            >
              Docs
            </a>
            <button 
              onClick={openWhitelistModal}
              className="btn btn-black text-xs md:text-sm py-1.5 px-3 md:py-2 md:px-4"
            >
              Join Whitelist
            </button>
          </div>
        </div>

        {/* Mobile design (stacked) */}
        <div className="block lg:hidden">
          <div className="text-center stagger-fade-in">
            <h1 className="text-[3.5rem] sm:text-[5rem] font-bold text-gradient leading-none tracking-tight">
              GACHA
            </h1>
            <h1 className="text-[3.5rem] sm:text-[5rem] font-bold text-gradient leading-none tracking-tight mt-2">
              PENGUINS
            </h1>
            
            <div className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-3">98% REVENUE FOR BUYBACK</h2>
              <div className="flex flex-wrap justify-center text-gray-600 text-sm md:text-base">
                <span className="mr-2">Power by Abstract</span>
                <div className="flex space-x-2 mt-2 sm:mt-0">
                  <a 
                    href="https://discord.com/invite/rsF74nt2Ga" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center px-2.5 py-1 bg-gray-100 rounded-full text-xs sm:text-sm hover-lift"
                  >
                    <i className="fab fa-discord mr-1.5"></i>
                    <span>Discord</span>
                  </a>
                  <a 
                    href="https://twitter.com/gacha_peng" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center px-2.5 py-1 bg-gray-100 rounded-full text-xs sm:text-sm hover-lift"
                  >
                    <i className="fab fa-twitter mr-1.5"></i>
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Centered image for mobile - animated with sliding effect */}
            <div className="mt-10 relative h-[220px] fade-in" style={{ animationDelay: '0.5s' }}>
              {/* First pattern image - moves right to left */}
              <div 
                ref={penguin1Ref} 
                className="absolute left-1/2 top-0 transform -translate-x-1/2 transition-all duration-300 ease-in-out"
              >
                <div className="relative w-[220px] h-[220px]">
                  <Image 
                    src="/pattern-footer.png" 
                    alt="Pattern Design" 
                    fill
                    className="object-cover scale-150 rounded-full shadow-lg"
                    priority
                  />
                </div>
              </div>
              
              {/* Second pattern image - moves left to right */}
              <div 
                ref={penguin2Ref} 
                className="absolute left-1/2 top-0 transform -translate-x-1/2 transition-all duration-300 ease-in-out opacity-0"
              >
                <div className="relative w-[220px] h-[220px]">
                  <Image 
                    src="/pattern-footer.png" 
                    alt="Pattern Design" 
                    fill
                    className="object-cover scale-150 rounded-full transform rotate-45 shadow-lg"
                    priority
                  />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <button 
                  onClick={openWhitelistModal}
                  className="btn btn-primary py-2.5 px-6 text-sm sm:text-base font-medium"
                >
                  Join Whitelist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop design (side by side) */}
        <div className="hidden lg:block">
          <div className="flex items-center stagger-fade-in">
            <div className="w-1/2">
              <h1 className="text-[6rem] xl:text-[8rem] font-bold text-gradient leading-none">
                GACHA
              </h1>
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">98% REVENUE FOR BUYBACK</h2>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">Power by Abstract</span>
                  <div className="flex space-x-2">
                    <a 
                      href="https://discord.com/invite/rsF74nt2Ga" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm hover-lift"
                    >
                      <i className="fab fa-discord mr-2"></i>
                      <span>Discord</span>
                    </a>
                    <a 
                      href="https://twitter.com/gacha_peng" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm hover-lift"
                    >
                      <i className="fab fa-twitter mr-2"></i>
                      <span>Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-1/2 flex items-center justify-end">
              <h1 className="text-[6rem] xl:text-[8rem] font-bold text-gradient leading-none">
                PENGUINS
              </h1>
            </div>
          </div>
          
          {/* Centered pattern animation for desktop */}
          <div className="flex justify-center mt-8 relative h-[300px] fade-in" style={{ animationDelay: '0.5s' }}>
            {/* First pattern - moves right to left */}
            <div 
              ref={penguin1Ref} 
              className="absolute transform transition-all duration-300 ease-in-out"
            >
              <div className="relative w-[280px] h-[280px]">
                <Image 
                  src="/pattern-footer.png" 
                  alt="Pattern Design" 
                  fill
                  className="object-cover scale-150 rounded-full shadow-lg"
                  priority
                />
              </div>
            </div>
            
            {/* Second pattern - moves left to right */}
            <div 
              ref={penguin2Ref} 
              className="absolute transform transition-all duration-300 ease-in-out opacity-0"
            >
              <div className="relative w-[280px] h-[280px]">
                <Image 
                  src="/pattern-footer.png" 
                  alt="Pattern Design" 
                  fill
                  className="object-cover scale-150 rounded-full transform rotate-45 shadow-lg"
                  priority
                />
              </div>
            </div>
            
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <button 
                onClick={openWhitelistModal}
                className="btn btn-primary py-3 px-6 font-semibold"
              >
                Join Whitelist
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Whitelist Modal */}
      <WhitelistModal isOpen={showWhitelistModal} onClose={closeWhitelistModal} />
    </div>
  );
};

export default SimpleHero; 