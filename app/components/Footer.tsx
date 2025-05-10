import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('footer-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <footer id="footer-section" className="py-12 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
      {/* Background pattern on the left */}
      <div className="absolute left-0 top-0 bottom-0 w-1/4 md:w-1/3 lg:w-1/4">
        <div className="relative w-full h-full">
          <Image 
            src="/pattern-footer.png" 
            alt="Background Pattern" 
            fill
            className={`object-cover object-left scale-150 transition-all duration-1000 ${
              isVisible ? 'opacity-15 filter blur-[1px]' : 'opacity-0 filter blur-[3px]'
            }`}
            priority
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col items-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="mb-6">
            <div className="flex items-center justify-center mb-8">
              <Image 
                src="/favicon.ico" 
                alt="Pingu Logo" 
                width={40} 
                height={40}
                className="mr-3 hover-lift"
              />
              <h3 className="text-xl font-bold text-gradient">GOTCHA PINGU</h3>
            </div>
            
            <div className="max-w-md text-center mb-8">
              <p className="text-sm text-gray-600 mb-4">
                Join our community to stay updated with the latest news, announcements, and special events.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 stagger-fade-in">
                <a 
                  href="https://twitter.com/gacha_peng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-social"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                  <span>Twitter</span>
                </a>
                <a 
                  href="https://discord.com/invite/pingu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-social"
                  aria-label="Discord"
                >
                  <i className="fab fa-discord"></i>
                  <span>Discord</span>
                </a>
                <a 
                  href="https://gacha-peng-docs.gitbook.io/gacha-peng-docs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-social"
                  aria-label="Documentation"
                >
                  <i className="fas fa-book"></i>
                  <span>Docs</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-3xl border-t border-gray-200 pt-6 mt-2">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
              <p>
                © {currentYear} Gotcha Pingu. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0 flex space-x-6">
                <Link href="/" className="hover:text-primary transition-colors">Terms</Link>
                <Link href="/" className="hover:text-primary transition-colors">Privacy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 