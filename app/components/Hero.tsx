import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] md:min-h-[965px] w-full">
      <div className="max-w-full overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ opacity: 1 }}>
          <Image
            src="/pattern-footer.png"
            alt="Pattern"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col px-4 mt-8 sm:mt-6 md:px-10">
          <div className="flex flex-col justify-between gap-2 lg:flex-row sm:gap-3">
            <div className="flex flex-col">
              <h1 
                className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] xl:text-[130px] 2xl:text-[142px] font-black uppercase font-onest text-[#F5601B] leading-tight"
                style={{ opacity: 1, transform: 'none' }}
              >
                Gacha
              </h1>
              <h1 
                className="mb-4 sm:pt-[50px] lg:pt-[100px] text-5xl sm:text-6xl md:text-8xl lg:text-[142px] font-black uppercase font-onest text-[#F5601B] leading-tight tracking-tight block sm:hidden"
                style={{ opacity: 1, transform: 'none' }}
              >
                penguins
              </h1>

              <div 
                className="max-w-full sm:max-w-[355px]"
                style={{ opacity: 1, transform: 'none' }}
              >
                <p className="text-lg sm:text-xl font-bold uppercase font-onest text-[#222222]">
                  98% Revenue for Buyback
                </p>
                <div className="flex flex-col items-start gap-2 mt-3 sm:flex-row sm:items-center sm:gap-0">
                  <p className="text-sm sm:text-base font-normal font-onest text-[#222222]">
                    Power by Abstract
                  </p>
                  <div className="relative flex gap-2 sm:gap-3 sm:ml-3 z-1">
                    <a 
                      href="https://discord.com/invite/rsF74nt2Ga" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex gap-1 items-center border border-[#18181C] rounded-full px-2 py-1 cursor-pointer hover:bg-primary transition-all"
                    >
                      <i className="fab fa-discord text-lg sm:text-xl"></i>
                      <span className="text-xs sm:text-sm font-normal text-[#222222]">Discord</span>
                    </a>
                    <a 
                      href="https://twitter.com/gacha_peng" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center border border-[#18181C] rounded-full px-2 py-1 cursor-pointer hover:bg-primary transition-all"
                    >
                      <i className="fab fa-twitter text-lg sm:text-xl"></i>
                      <span className="text-xs sm:text-sm font-normal text-[#222222]">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <h1 
              className="pt-2 sm:pt-[50px] lg:pt-[110px] text-5xl sm:text-6xl md:text-8xl lg:text-[100px] xl:text-[130px] 2xl:text-[142px] font-black uppercase font-onest text-[#F5601B] leading-tight tracking-tight hidden sm:block"
              style={{ opacity: 1, transform: 'none' }}
            >
              penguins
            </h1>
          </div>
        </div>

        <div 
          className="flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-start sm:translate-x-[10%] md:translate-x-[20%] translate-y-[20px] sm:translate-y-[-40px] md:translate-y-[-80px] md:mt-8 sm:mt-0"
          style={{ opacity: 1, transform: 'none' }}
        >
          <div className="sm:translate-y-5 sm:translate-x-14">
            <div className="relative" style={{ width: '224px', height: '280px', transform: 'translate(0px, 0px)' }}>
              <div style={{ width: '224px', height: '280px', overflow: 'hidden' }}>
                <div style={{ width: '1792px', height: '280px', transform: 'translateX(-1120px)' }}>
                  <Image 
                    src="/pattern-footer.png" 
                    alt="Sprite Animation" 
                    width={1792}
                    height={280}
                    className="object-cover"
                    style={{ imageRendering: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-12">
            <div style={{ opacity: 1, transform: 'none' }}>
              <button className="inline-flex items-center justify-center font-poppins transition-colors focus-visible:outline-none disabled:opacity-50 cursor-pointer disabled:pointer-events-none hover:bg-primary text-base min-w-[261px] rounded-2xl bg-[#18181C] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 h-12 sm:h-16 w-[220px] sm:w-[261px] border border-[#F5601B] shadow-[3px_8px_16px_0px_rgba(250,116,54,0.24)]">
                Join Whitelist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 