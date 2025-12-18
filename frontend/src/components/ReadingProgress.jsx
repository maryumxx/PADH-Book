import React, { useEffect, useState } from 'react';

/**
 * Reading Progress component
 * Displays a progress bar showing how far the user has scrolled through the page
 */
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div
      className="reading-progress fixed top-[60px] left-0 w-full h-[3px] z-[1000] bg-transparent"
      style={{
        background: `linear-gradient(to right, var(--ifm-color-primary) ${progress}%, transparent ${progress}%)`,
      }}
    />
  );
}
