import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import WhitelistModal from './WhitelistModal';

const Navbar = () => {
  const [showWhitelistModal, setShowWhitelistModal] = useState(false);

  const openWhitelistModal = () => {
    setShowWhitelistModal(true);
  };

  const closeWhitelistModal = () => {
    setShowWhitelistModal(false);
  };

  return (
    <>
      <header className="flex flex-row items-center justify-between gap-6 px-4 py-3 md:py-8 sm:gap-0 md:px-10" style={{ opacity: 1, transform: 'none' }}>
        <Link href="/" className="flex items-center gap-1.5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#FFC163] to-[#E78873] opacity-90 flex items-center justify-center overflow-hidden">
            <div 
              className="w-full h-full bg-center bg-cover" 
              style={{ backgroundImage: 'url("/background-image.png")' }}
            ></div>
          </div>
          <span className="text-md sm:text-2xl font-extrabold uppercase font-onest text-[#222222] hidden md:block">Pingu</span>
        </Link>
        
        <div className="flex items-center gap-3 sm:gap-4">
          <a href="https://gacha-peng-docs.gitbook.io/gacha-peng-docs" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center justify-center font-poppins transition-colors focus-visible:outline-none disabled:opacity-50 cursor-pointer disabled:pointer-events-none border hover:bg-primary rounded-2xl border-[#1F1E22] bg-transparent text-[#222222] font-semibold px-4 sm:px-6 py-2 sm:py-3 h-[40px] sm:h-[50px] text-sm sm:text-base">
              Docs
            </button>
          </a>
          <button 
            onClick={openWhitelistModal}
            className="inline-flex items-center justify-center font-poppins transition-colors focus-visible:outline-none disabled:opacity-50 cursor-pointer disabled:pointer-events-none border border-secondary-800 hover:bg-primary rounded-2xl bg-[#18181C] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 h-[40px] sm:h-[50px] text-sm sm:text-base"
          >
            Join Whitelist
          </button>
        </div>
      </header>
      
      {/* Whitelist Modal */}
      <WhitelistModal isOpen={showWhitelistModal} onClose={closeWhitelistModal} />
    </>
  );
};

export default Navbar; 