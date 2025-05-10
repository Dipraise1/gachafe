import React from 'react';
import Image from 'next/image';

const RevenueDiagram = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto mobile-container">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-primary to-yellow-400 text-transparent bg-clip-text">
            REVENUE DISTRIBUTION
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto font-medium">
            Each Gacha transaction in ETH will be instantly used to buy and add liquidity for $PENG, fueling significant price growth.
          </p>
        </div>
        
        <div className="card max-w-5xl mx-auto overflow-hidden">
          {/* Large image taking most of the space */}
          <div className="relative w-full">
            <div className="aspect-[951/550] relative rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/images/revenue.gif" 
                alt="Revenue Distribution Animated Diagram" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueDiagram; 