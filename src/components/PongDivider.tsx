import { useEffect, useRef, useState } from "react";

const HEIGHT = 80;
const P = 3; // pixel block size

const PongDivider = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseY = useRef<number | null>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = wrap.clientWidth;
    const setSize = () => {
      width = wrap.clientWidth;
      canvas.width = width;
      canvas.height = HEIGHT;
    };
    setSize();

    const paddleH = Math.round(HEIGHT * 0.6);
    const state = {
      ball: { x: width / 2, y: HEIGHT / 2, vx: 0.6, vy: 0.35 },
      left: HEIGHT / 2 - paddleH / 2,
      right: HEIGHT / 2 - paddleH / 2,
      scoreL: 0,
      scoreR: 0,
      flashL: 0,
      flashR: 0,
    };

    const px = (x: number, y: number, w: number, h: number) => {
      ctx.fillRect(Math.round(x / P) * P, Math.round(y / P) * P, w, h);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, HEIGHT);
      const cyan = "hsl(172 100% 45%)";
      const bright = "hsl(172 100% 75%)";

      ctx.fillStyle = state.flashL > 0 ? bright : cyan;
      px(12, state.left, 4, paddleH);
      ctx.fillStyle = state.flashR > 0 ? bright : cyan;
      px(width - 16, state.right, 4, paddleH);

      ctx.fillStyle = cyan;
      px(state.ball.x, state.ball.y, 6, 6);

      ctx.fillStyle = "hsl(172 100% 45% / 0.5)";
      ctx.font = "10px 'Space Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText(`${state.scoreL} : ${state.scoreR}`, width / 2, 14);
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      draw();
      const onResizeStatic = () => {
        setSize();
        draw();
      };
      window.addEventListener("resize", onResizeStatic);
      return () => window.removeEventListener("resize", onResizeStatic);
    }

    const step = () => {
      const b = state.ball;
      b.x += b.vx;
      b.y += b.vy;
      if (b.y <= 0) {
        b.y = 0;
        b.vy *= -1;
      }
      if (b.y >= HEIGHT - 6) {
        b.y = HEIGHT - 6;
        b.vy *= -1;
      }

      if (b.x <= 16 && b.vx < 0) {
        if (b.y + 6 >= state.left && b.y <= state.left + paddleH) {
          b.vx *= -1;
          state.flashL = 2;
        }
      }
      if (b.x + 6 >= width - 16 && b.vx > 0) {
        if (b.y + 6 >= state.right && b.y <= state.right + paddleH) {
          b.vx *= -1;
          state.flashR = 2;
        }
      }

      if (b.x < -10) {
        state.scoreR = (state.scoreR + 1) % 10;
        b.x = width / 2;
        b.y = HEIGHT / 2;
        b.vx = 0.6;
      }
      if (b.x > width + 10) {
        state.scoreL = (state.scoreL + 1) % 10;
        b.x = width / 2;
        b.y = HEIGHT / 2;
        b.vx = -0.6;
      }

      const target = b.y + 3 - paddleH / 2;
      const my = mouseY.current;
      const humanIsLeft = my !== null && b.x < width / 2;
      const humanIsRight = my !== null && b.x >= width / 2;

      const leftTarget = humanIsLeft && my !== null ? my - paddleH / 2 : target;
      const rightTarget = humanIsRight && my !== null ? my - paddleH / 2 : target;
      const leftLerp = humanIsLeft ? 0.12 : 0.03;
      const rightLerp = humanIsRight ? 0.12 : 0.03;

      state.left += (leftTarget - state.left) * leftLerp;
      state.right += (rightTarget - state.right) * rightLerp;
      state.left = Math.max(0, Math.min(HEIGHT - paddleH, state.left));
      state.right = Math.max(0, Math.min(HEIGHT - paddleH, state.right));

      if (state.flashL > 0) state.flashL--;
      if (state.flashR > 0) state.flashR--;

      draw();
    };

    let raf = 0;
    let running = false;
    const loop = () => {
      step();
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(wrap);

    const onResize = () => setSize();
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      onPointerMove={(e) => {
        if (e.pointerType === "touch") return;
        const rect = e.currentTarget.getBoundingClientRect();
        mouseY.current = e.clientY - rect.top;
        setHover(true);
      }}
      onPointerLeave={() => {
        mouseY.current = null;
        setHover(false);
      }}
      style={{
        width: "100%",
        height: HEIGHT,
        position: "relative",
        overflow: "hidden",
        background: "var(--sw-bg-deep)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "hsl(var(--neon-cyan) / 0.25)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "hsl(var(--neon-cyan) / 0.25)",
        }}
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          display: "block",
          width: "100%",
          height: HEIGHT,
          imageRendering: "pixelated",
          opacity: hover ? 0.65 : 0.4,
          transition: "opacity 300ms",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.11) 0, rgba(0,0,0,0.11) 1px, transparent 1px, transparent 4px)",
        }}
      />
    </div>
  );
};

export default PongDivider;
