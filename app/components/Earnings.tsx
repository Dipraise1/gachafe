import Image from 'next/image';

const Earnings = () => {
  return (
    <section className="py-12 sm:py-10 bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between max-w-full mx-auto md:flex-row">
          <div className="mb-10 text-center md:text-left md:w-1/2 md:mb-0 md:pr-2">
            <div className="max-w-full mx-auto md:mx-0 md:max-w-[514px]">
              <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase font-onest text-secondary-800 leading-tight tracking-tight">
                Stable Earnings
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-onest text-secondary-800 max-w-[90%] mx-auto md:max-w-full md:mx-0">
                Your earnings are USD-pegged. Token amounts adjust with price, preventing inflation and securing stable rewards
              </p>
            </div>
          </div>
          
          <div className="relative w-full md:w-1/2">
            <div className="relative left-[20%] md:left-[calc(50%)] w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
              <div className="absolute top-[-100px] md:right-[300px] z-1">
                <div className="relative" style={{ width: '388px', height: '320px', transform: 'translate(0px, 0px)' }}>
                  <div style={{ width: '388px', height: '320px', overflow: 'hidden' }}>
                    <div style={{ width: '6596px', height: '320px', transform: 'translateX(-776px)' }}>
                      <Image 
                        src="/pattern-footer.png"
                        alt="Sprite Animation"
                        width={6596}
                        height={320}
                        className="object-cover"
                        style={{ imageRendering: 'auto' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Earnings; 