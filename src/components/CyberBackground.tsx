import React, { useEffect, useRef, useState } from 'react';

interface CyberBackgroundProps {
  rainEnabled?: boolean;
}

export const CyberBackground: React.FC<CyberBackgroundProps> = ({ rainEnabled = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (reducedMotion || !rainEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Matrix characters: mix of hex, binary, and cyber glyphs
    const chars = '01ANKUSHSONIAIMLPYTHONC++DEV0123456789ABCDEFλπΩΨΣ';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    // Y-coordinate drops for each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    let lastTime = 0;
    const fpsInterval = 1000 / 24; // 24 FPS for low CPU footprint

    const render = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(render);

      const elapsed = currentTime - lastTime;
      if (elapsed < fpsInterval) return;
      lastTime = currentTime - (elapsed % fpsInterval);

      // Semi-transparent fade layer to create character trail
      ctx.fillStyle = 'rgba(5, 8, 7, 0.12)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#00FF88';
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Faint opacity so background never overwhelms text
        ctx.fillStyle = Math.random() > 0.85 ? 'rgba(57, 255, 20, 0.45)' : 'rgba(0, 255, 136, 0.18)';
        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.985) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion, rainEnabled]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Base deep dark gradient */}
      <div className="absolute inset-0 bg-[#050807]" />

      {/* 2. Technical Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-75" />

      {/* 3. Subtle Matrix Rain Canvas */}
      {!reducedMotion && rainEnabled && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 opacity-40 mix-blend-screen"
        />
      )}

      {/* 4. Ambient Floating Radial Green Orbs */}
      <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[130px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-[45%] right-[-5%] w-[600px] h-[600px] rounded-full bg-emerald-400/8 blur-[160px] animate-pulse" style={{ animationDuration: '11s' }} />
      <div className="absolute bottom-[-10%] left-[25%] w-[550px] h-[550px] rounded-full bg-[#39FF14]/6 blur-[150px] animate-pulse" style={{ animationDuration: '13s' }} />

      {/* 5. Minimal Scanlines layer */}
      <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
    </div>
  );
};
