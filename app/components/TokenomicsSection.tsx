import Image from 'next/image';

const TokenomicsSection = () => {
  return (
    <section className="relative translate-y-[0px] md:translate-y-[-80px]">
      <div className="relative z-10 w-full max-w-[1540px] px-10 mx-auto">
        <div className="mx-auto">
          <div 
            className="bg-card relative border border-card-border/50 rounded-[24px] sm:rounded-[30px] md:rounded-[36px] p-4 sm:p-6 md:p-10 lg:p-12 lg:px-20 shadow-lg" 
            style={{ opacity: 1, transform: 'none' }}
          >
            <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-12">
              <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5">
                <div className="flex flex-col items-center gap-4 sm:gap-6">
                  <h2 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase font-onest text-center leading-tight text-secondary-800 tracking-tight"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    <span className="block" style={{ opacity: 1, transform: 'none' }}>A unique tokenomic</span>
                    <span className="block text-primary" style={{ opacity: 1, transform: 'none' }}>pumping $PENG</span>
                  </h2>
                  
                  <div className="mt-2 sm:mt-4" style={{ opacity: 1, transform: 'none' }}>
                    <div tabIndex={0}>
                      <button 
                        className="inline-flex items-center justify-center transition-colors focus-visible:outline-none disabled:opacity-50 cursor-pointer disabled:pointer-events-none bg-black hover:bg-primary text-white font-poppins font-semibold px-6 sm:px-8 py-2 sm:py-3 h-[45px] sm:h-[50px] min-w-[140px] sm:min-w-[160px] text-sm sm:text-base rounded-[10px] sm:rounded-[13px]" 
                        disabled
                      >
                        Buy PENG (Coming Soon)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div 
                className="flex md:flex-row flex-col items-center w-full max-w-[1090px] max-h-[500px] overflow-hidden rounded-3xl" 
                style={{ opacity: 1, transform: 'none' }}
              >
                <div className="rounded-[10px] sm:rounded-[14px] md:rounded-[17px] overflow-hidden bg-white flex-grow">
                  <Image 
                    src="/pattern-footer.png"
                    alt="PENG Chart"
                    width={775}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <div className="max-h-[500px] hidden md:block">
                  <Image 
                    src="/pattern-footer.png"
                    alt="PENG Chart"
                    width={315}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            <div className="absolute right-[20px] bottom-[250px] md:bottom-10 md:block hidden">
              <div className="relative" style={{ width: '64px', height: '80px', transform: 'translate(0px, 0px)' }}>
                <div style={{ width: '64px', height: '80px', overflow: 'hidden' }}>
                  <div style={{ width: '512px', height: '80px', transform: 'translateX(-320px) scaleX(-1)' }}>
                    <Image 
                      src="/pattern-footer.png"
                      alt="Sprite Animation"
                      width={512}
                      height={80}
                      className="object-cover"
                      style={{ imageRendering: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection; 