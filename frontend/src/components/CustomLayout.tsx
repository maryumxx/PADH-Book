import React from 'react';
import Navbar from './Navbar';
import GlassMorphismFooter from './GlassMorphismFooter';

interface CustomLayoutProps {
  children: React.ReactNode;
}

export default function CustomLayout({ children }: CustomLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7befff]/20 via-[#d49bc9]/20 to-[#ffcda8]/20 dark:from-[#9c5ffc]/30 dark:via-[#7befff]/20 dark:to-[#d49bc9]/30">
      <Navbar />
      <main className="w-full">
        {children}
      </main>
      <GlassMorphismFooter />
    </div>
  );
}
