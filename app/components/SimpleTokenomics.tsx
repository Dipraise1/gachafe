import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const SimpleTokenomics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    const element = document.getElementById('tokenomics-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="tokenomics-section" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto mobile-container">
        <div className={`card max-w-5xl mx-auto p-6 md:p-10 lg:p-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-balance text-gradient">
              A UNIQUE TOKENOMIC
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8">
              PUMPING $PENG
            </h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8 md:mb-12">
              <div className="relative w-full md:w-1/2 aspect-square max-w-md mx-auto">
                <Image 
                  src="/components/revenue-diagram.png" 
                  alt="Revenue Diagram" 
                  fill
                  className="object-contain hover-scale transition-all duration-500"
                />
              </div>
              
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-xl font-bold mb-4 text-gray-800">PENG Chart</h3>
                <ul className="space-y-4 stagger-fade-in" style={{ animationDelay: '0.3s' }}>
                  <li className="flex items-start group card-hover p-3 rounded-lg">
                    <span className="text-primary font-bold text-xl mr-3 group-hover:scale-110 transition-transform duration-300">•</span>
                    <p className="text-sm md:text-base text-gray-600">98% of all revenue is used to buy back $PENG from the market</p>
                  </li>
                  <li className="flex items-start group card-hover p-3 rounded-lg">
                    <span className="text-primary font-bold text-xl mr-3 group-hover:scale-110 transition-transform duration-300">•</span>
                    <p className="text-sm md:text-base text-gray-600">Sustainable growth with constant buying pressure</p>
                  </li>
                  <li className="flex items-start group card-hover p-3 rounded-lg">
                    <span className="text-primary font-bold text-xl mr-3 group-hover:scale-110 transition-transform duration-300">•</span>
                    <p className="text-sm md:text-base text-gray-600">0% buy and sell tax for $PENG</p>
                  </li>
                </ul>
                
                <div className="mt-6 md:mt-8 text-center md:text-left fade-in" style={{ animationDelay: '0.7s' }}>
                  <button className="btn btn-black py-2.5 px-6 font-semibold pulse" disabled>
                    Buy PENG (Coming Soon)
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="card p-5 md:p-6 card-hover border-t-4 border-t-primary">
                <h4 className="text-lg md:text-xl font-bold mb-3">Revenue Buyback</h4>
                <p className="text-sm md:text-base text-gray-600">98% of revenue goes to $PENG buyback</p>
              </div>
              
              <div className="card p-5 md:p-6 card-hover border-t-4 border-t-primary">
                <h4 className="text-lg md:text-xl font-bold mb-3">No Tax</h4>
                <p className="text-sm md:text-base text-gray-600">0% buy and sell tax for $PENG</p>
              </div>
              
              <div className="card p-5 md:p-6 card-hover border-t-4 border-t-primary">
                <h4 className="text-lg md:text-xl font-bold mb-3">Sustainable Growth</h4>
                <p className="text-sm md:text-base text-gray-600">Revenue provides constant buying pressure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleTokenomics; 