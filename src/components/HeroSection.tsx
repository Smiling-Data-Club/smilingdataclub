import { useEffect, useRef, useState, useCallback } from "react";
import sdcLogo from "@/assets/sdc-logo.png";
import SynthwaveBackground from "@/components/SynthwaveBackground";

const FlickerTagline = ({ text }: { text: string }) => {
  const [flickerIndices, setFlickerIndices] = useState<Set<number>>(new Set());

  useEffect(() => {
    const triggerFlicker = () => {
      const count = 2 + Math.floor(Math.random() * 2);
      const indices = new Set<number>();
      const validIndices = [...text].reduce<number[]>((acc, ch, i) => {
        if (ch !== ' ' && ch !== '.') return [...acc, i];
        return acc;
      }, []);
      while (indices.size < count && indices.size < validIndices.length) {
        indices.add(validIndices[Math.floor(Math.random() * validIndices.length)]);
      }
      setFlickerIndices(indices);
      setTimeout(() => setFlickerIndices(new Set()), 300);
    };

    const interval = setInterval(triggerFlicker, 10000);
    const initial = setTimeout(triggerFlicker, 4000);
    return () => { clearInterval(interval); clearTimeout(initial); };
  }, [text]);

  return (
    <span>
      {[...text].map((ch, i) => (
        <span
          key={i}
          className={flickerIndices.has(i) ? 'opacity-20 transition-opacity duration-150' : 'transition-opacity duration-150'}
        >
          {ch}
        </span>
      ))}
    </span>
  );
};

const PixelBomb = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const explodingRef = useRef(false);
  const timerRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const S = 48; // canvas size
    const P = 3;  // pixel size for that chunky look

    // Draw a pixel-art bomb centered in canvas (16x16 grid at P=3)
    const OX = 4; // offset to center the 8-wide bomb in 16-wide canvas
    const OY = 4;
    const drawBomb = () => {
      ctx.clearRect(0, 0, S, S);
      const bombPixels = [
        // fuse spark (yellow)
        { x: 5, y: 0, c: '#ffff00' }, { x: 6, y: 1, c: '#ffaa00' },
        // fuse
        { x: 5, y: 2, c: '#888' }, { x: 4, y: 1, c: '#888' },
        // body (dark)
        { x: 3, y: 3, c: '#333' }, { x: 4, y: 3, c: '#333' }, { x: 5, y: 3, c: '#333' },
        { x: 2, y: 4, c: '#333' }, { x: 3, y: 4, c: '#222' }, { x: 4, y: 4, c: '#222' }, { x: 5, y: 4, c: '#222' }, { x: 6, y: 4, c: '#333' },
        { x: 2, y: 5, c: '#333' }, { x: 3, y: 5, c: '#222' }, { x: 4, y: 5, c: '#222' }, { x: 5, y: 5, c: '#222' }, { x: 6, y: 5, c: '#333' },
        { x: 2, y: 6, c: '#333' }, { x: 3, y: 6, c: '#222' }, { x: 4, y: 6, c: '#222' }, { x: 5, y: 6, c: '#222' }, { x: 6, y: 6, c: '#333' },
        { x: 3, y: 7, c: '#333' }, { x: 4, y: 7, c: '#333' }, { x: 5, y: 7, c: '#333' },
        // highlight
        { x: 3, y: 4, c: '#555' },
      ];
      for (const p of bombPixels) {
        ctx.fillStyle = p.c;
        ctx.fillRect((p.x + OX) * P, (p.y + OY) * P, P, P);
      }
    };

    // Explosion: blocky expanding squares
    const drawExplosion = (t: number) => {
      ctx.clearRect(0, 0, S, S);
      const colors = ['#ff0000', '#ff4400', '#ffaa00', '#ffff00', '#ff6600', '#ffffff'];
      // Frame-based blocky explosion
      const frame = Math.floor(t * 5); // 0-4 frames
      const rng = (seed: number) => ((seed * 9301 + 49297) % 233280) / 233280;

      if (frame === 0) {
        // small center flash
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(6, 6, 4, 4);
        ctx.fillStyle = '#ffff00';
        ctx.fillRect(5, 5, 6, 6);
      } else if (frame <= 2) {
        // expanding pixel blocks
        for (let i = 0; i < 20; i++) {
          const angle = (i / 20) * Math.PI * 2;
          const dist = frame * 3 + rng(i * 7) * 3;
          const bx = Math.floor(8 + Math.cos(angle) * dist) * P;
          const by = Math.floor(8 + Math.sin(angle) * dist) * P;
          ctx.fillStyle = colors[Math.floor(rng(i * 13) * colors.length)];
          ctx.fillRect(bx, by, P, P);
        }
        // center glow
        ctx.fillStyle = '#ffaa00';
        ctx.fillRect(6, 6, 4, 4);
      } else {
        // fading debris pixels
        for (let i = 0; i < 16; i++) {
          const angle = (i / 16) * Math.PI * 2;
          const dist = frame * 4 + rng(i * 11) * 4;
          const bx = Math.floor(8 + Math.cos(angle) * dist) * P;
          const by = Math.floor(8 + Math.sin(angle) * dist) * P;
          ctx.globalAlpha = Math.max(0, 1 - t);
          ctx.fillStyle = colors[Math.floor(rng(i * 17) * 3)];
          ctx.fillRect(bx, by, P, P);
        }
        ctx.globalAlpha = 1;
      }
    };

    let explodeStart = 0;
    const EXPLODE_DURATION = 1000;

    const animate = () => {
      const now = performance.now();

      if (explodingRef.current) {
        const t = Math.min((now - explodeStart) / EXPLODE_DURATION, 1);
        drawExplosion(t);
        if (t >= 1) {
          explodingRef.current = false;
          drawBomb();
        }
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    drawBomb();
    frameRef.current = requestAnimationFrame(animate);

    const startExplode = () => {
      explodingRef.current = true;
      explodeStart = performance.now();
    };

    const initial = setTimeout(startExplode, 3000);
    const interval = setInterval(startExplode, 10000);
    timerRef.current = interval as unknown as number;

    return () => {
      cancelAnimationFrame(frameRef.current);
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={48}
      height={48}
      className="inline-block align-middle mx-auto"
      style={{ imageRendering: 'pixelated', width: 32, height: 32 }}
    />
  );
};

const PixelateCanvas = ({
  imageSrc,
  width,
  height,
  active,
}: {
  imageSrc: string;
  width: number;
  height: number;
  active: boolean;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const phaseRef = useRef<'idle' | 'pixelate' | 'depixelate'>('idle');
  const progressRef = useRef(0);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;
    img.onload = () => {
      imgRef.current = img;
    };
  }, [imageSrc]);

  useEffect(() => {
    if (active && phaseRef.current === 'idle') {
      phaseRef.current = 'pixelate';
      progressRef.current = 0;
    }
  }, [active]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const drawPixelated = (pixelSize: number) => {
      if (!imgRef.current) return;
      const small = document.createElement('canvas');
      const sw = Math.max(1, Math.floor(width / pixelSize));
      const sh = Math.max(1, Math.floor(height / pixelSize));
      small.width = sw;
      small.height = sh;
      const sctx = small.getContext('2d')!;
      sctx.imageSmoothingEnabled = false;
      sctx.drawImage(imgRef.current, 0, 0, sw, sh);
      ctx.clearRect(0, 0, width, height);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(small, 0, 0, sw, sh, 0, 0, width, height);
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      if (phaseRef.current === 'idle') {
        if (imgRef.current) {
          ctx.imageSmoothingEnabled = true;
          ctx.drawImage(imgRef.current, 0, 0, width, height);
        }
      } else if (phaseRef.current === 'pixelate') {
        progressRef.current += 0.02;
        const t = Math.min(progressRef.current, 1);
        // pixel size goes from 1 (sharp) to 32 (very blocky)
        const pixelSize = 1 + Math.floor(t * t * 31);
        drawPixelated(pixelSize);

        if (t >= 1) {
          phaseRef.current = 'depixelate';
          progressRef.current = 0;
        }
      } else if (phaseRef.current === 'depixelate') {
        progressRef.current += 0.025;
        const t = Math.min(progressRef.current, 1);
        // pixel size goes from 32 (blocky) back to 1 (sharp)
        const pixelSize = 1 + Math.floor((1 - t) * (1 - t) * 31);
        drawPixelated(pixelSize);

        if (t >= 1) {
          phaseRef.current = 'idle';
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        imageRendering: 'pixelated',
        width,
        height,
      }}
    />
  );
};

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [glitchKey, setGlitchKey] = useState(0);
  const [glitching, setGlitching] = useState(false);
  const [drifting, setDrifting] = useState(false);
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const isMd = typeof window !== 'undefined' && window.innerWidth >= 768;
  const logoSize = isMd ? 256 : 192;

  const triggerGlitch = () => {
    setGlitchKey((k) => k + 1);
    setGlitching(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setGlitching(false), 400);
  };

  const triggerDrift = useCallback(() => {
    setDrifting(true);
    setTimeout(() => setDrifting(false), 3000);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(triggerGlitch, 8000);
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const initial = setTimeout(triggerDrift, 5000);
    const interval = setInterval(triggerDrift, 12000);
    return () => { clearTimeout(initial); clearInterval(interval); };
  }, [triggerDrift]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <SynthwaveBackground variant="full" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" style={{ paddingBottom: 'clamp(48px, 11vh, 150px)' }}>
        <div className="mb-6">
          <div
            className={`inline-block relative ${glitching ? 'glitch-active' : ''}`}
            onMouseEnter={triggerGlitch}
            style={{ width: logoSize, height: logoSize }}
          >
            <div
              className="absolute pointer-events-none"
              style={{
                inset: '-30%',
                background: 'radial-gradient(circle, rgba(5,5,16,.55) 0%, transparent 70%)',
              }}
            />
            <div
              className={`relative drop-shadow-[0_0_40px_hsl(172,100%,45%,0.55)] ${
                loaded ? 'animate-fade-in' : 'opacity-0'
              }`}
            >
              <PixelateCanvas
                imageSrc={sdcLogo}
                width={logoSize}
                height={logoSize}
                active={drifting}
              />
            </div>
          </div>
        </div>

        <h1
          className="font-pixel text-xl md:text-3xl lg:text-4xl mb-6 leading-relaxed sw-animate-up"
          style={{
            color: 'var(--sw-text)',
            textShadow:
              '0 0 28px hsl(var(--neon-cyan) / .85), 5px 5px 0 hsl(var(--neon-pink) / .42)',
            animationDelay: '0.1s',
          }}
        >
          SMILING DATA CLUB
        </h1>

        <p
          className="sw-lead text-base md:text-xl mb-12 tracking-wider sw-animate-up"
          style={{ animationDelay: '0.2s' }}
        >
          <FlickerTagline text="Today's complexity. Retro simplicity." />
        </p>

        <a
          href="/game"
          className="font-pixel text-[11px] md:text-sm py-3 px-5 transition-all duration-300 inline-flex items-center justify-center sw-animate-up"
          style={{
            animationDelay: '0.32s',
            border: '2px solid hsl(var(--neon-pink) / .75)',
            background: hovered
              ? 'linear-gradient(160deg, rgba(5,5,16,.92), hsl(var(--neon-pink) / .22))'
              : 'linear-gradient(160deg, rgba(5,5,16,.88), hsl(var(--neon-pink) / .12))',
            boxShadow: hovered
              ? '0 0 40px hsl(var(--neon-pink) / .5), inset 0 0 22px hsl(var(--neon-pink) / .1)'
              : '0 0 26px hsl(var(--neon-pink) / .28), inset 0 0 18px hsl(var(--neon-pink) / .06)',
            borderRadius: '10px',
            color: 'var(--sw-text)',
            textShadow: '0 0 12px hsl(var(--neon-pink) / .8)',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span className="flex-shrink-0 w-8 flex justify-center"><PixelBomb /></span>
          <span className="mx-1">KRISEN SIMULATOR</span>
          <span className="flex-shrink-0 w-8 flex justify-center"><PixelBomb /></span>
        </a>
      </div>

    </section>
  );
};

export default HeroSection;
