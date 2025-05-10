"use client";

import SimpleHero from '@/app/components/SimpleHero';
import SimpleTokenomics from '../components/SimpleTokenomics';
import RevenueDiagram from '../components/RevenueDiagram';
import FreeMintNFT from '../components/FreeMintNFT';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SimpleHero />
      <SimpleTokenomics />
      <RevenueDiagram />
      <FreeMintNFT />
      <Footer />
    </main>
  );
} 