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
    <section className="relative min-h-screen overflow-hidden">
      <SynthwaveBackground variant="full" />

      <div className="relative z-10 h-screen flex flex-col">
        <div className="flex items-center justify-center px-6" style={{ flex: '0 0 60%' }}>
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

        <div
          className="flex-1 flex flex-col items-center px-6 text-center max-w-4xl mx-auto w-full"
          style={{ paddingTop: 'clamp(16px, 3.5vh, 44px)' }}
        >
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
          className="sw-lead text-base md:text-xl tracking-wider sw-animate-up"
          style={{ animationDelay: '0.2s', marginBottom: 'clamp(24px, 4vh, 48px)' }}
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
          <span>KRISEN SIMULATOR</span>
          <span
            style={{
              marginLeft: 10,
              fontFamily: 'var(--font-mono-sw)',
              fontSize: '1.1em',
              lineHeight: 1,
              display: 'inline-block',
              transform: hovered ? 'translateX(4px)' : 'translateX(0)',
              transition: 'transform 300ms',
            }}
          >
            →
          </span>
        </a>

        <p
          className="sw-animate-up"
          style={{
            fontFamily: 'var(--font-mono-sw)',
            fontSize: 15,
            color: 'var(--sw-text-2)',
            marginTop: 18,
            textAlign: 'center',
            letterSpacing: '.02em',
            textShadow: '0 0 14px hsl(var(--neon-cyan) / .3), 0 1px 6px rgba(5,5,16,.9)',
            animationDelay: '0.4s',
          }}
        >
          Mach den Krisentest für dein Unternehmen
        </p>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
