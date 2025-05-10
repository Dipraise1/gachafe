import Image from 'next/image';

const Revenue = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center max-w-3xl mx-auto mb-8 text-center sm:mb-12 md:mb-16">
          <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase font-onest text-secondary-800 leading-tight tracking-tight">
            <span className="text-primary">50%</span> Buyback, <span className="text-primary">48%</span> add LP
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-onest text-secondary-800 max-w-[90%] sm:max-w-full">
            Each Gacha transaction in ETH will be instantly used to buy and add liquidity for $PENG, fueling significant price growth.
          </p>
        </div>
        
        <div className="border-card-border border rounded-[12px] sm:rounded-[16px] md:rounded-[20px] max-w-[951px] mx-auto p-3 sm:p-4 md:p-6 lg:px-[56px] lg:py-[42px]">
          <Image 
            src="/pattern-footer.png"
            alt="Revenue"
            width={839}
            height={466}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Revenue; 