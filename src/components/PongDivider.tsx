import { useEffect, useRef, useState } from "react";

const HEIGHT = 110;
const FIELD_W = 520;
const P = 3; // pixel block size
const BALL = 10;

const PongDivider = () => {
  const fieldRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseY = useRef<number | null>(null);
  const [hover, setHover] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const field = fieldRef.current;
    if (!canvas || !field) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = field.clientWidth || FIELD_W;
    const setSize = () => {
      width = field.clientWidth || FIELD_W;
      canvas.width = width;
      canvas.height = HEIGHT;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${HEIGHT}px`;
    };
    setSize();

    const paddleH = Math.round(HEIGHT * 0.45);
    const PADDLE_W = 5;
    const LEFT_X = 12;
    const state = {
      ball: { x: width / 2, y: HEIGHT / 2, vx: 0.6, vy: 0.4 },
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
      const rightX = width - LEFT_X - PADDLE_W;

      ctx.fillStyle = "hsl(172 100% 45% / 0.35)";
      const cx = Math.round(width / 2) - 1;
      for (let y = 4; y < HEIGHT - 4; y += 12) {
        ctx.fillRect(cx, y, 3, 6);
      }

      ctx.fillStyle = state.flashL > 0 ? bright : cyan;
      px(LEFT_X, state.left, PADDLE_W, paddleH);
      ctx.fillStyle = state.flashR > 0 ? bright : cyan;
      px(rightX, state.right, PADDLE_W, paddleH);

      ctx.fillStyle = cyan;
      ctx.shadowColor = "hsl(172 100% 45%)";
      ctx.shadowBlur = 12;
      px(state.ball.x, state.ball.y, BALL, BALL);
      ctx.shadowBlur = 0;

      ctx.fillStyle = "hsl(172 100% 45% / 0.65)";
      ctx.font = "12px 'Space Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText(`${state.scoreL} : ${state.scoreR}`, width / 2, 20);
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
      const rightX = width - LEFT_X - PADDLE_W;
      b.x += b.vx;
      b.y += b.vy;
      if (b.y <= 0) {
        b.y = 0;
        b.vy *= -1;
      }
      if (b.y >= HEIGHT - BALL) {
        b.y = HEIGHT - BALL;
        b.vy *= -1;
      }

      if (b.x <= LEFT_X + PADDLE_W && b.vx < 0) {
        if (b.y + BALL >= state.left && b.y <= state.left + paddleH) {
          b.x = LEFT_X + PADDLE_W;
          b.vx *= -1;
          state.flashL = 2;
        }
      }
      if (b.x + BALL >= rightX && b.vx > 0) {
        if (b.y + BALL >= state.right && b.y <= state.right + paddleH) {
          b.x = rightX - BALL;
          b.vx *= -1;
          state.flashR = 2;
        }
      }

      if (b.x < -BALL - 10) {
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

      const target = b.y + BALL / 2 - paddleH / 2;
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
    io.observe(field);

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
      style={{
        width: "100%",
        background: "transparent",
        padding: "56px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        ref={fieldRef}
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
          width: FIELD_W,
          maxWidth: "100%",
          height: HEIGHT,
          position: "relative",
          overflow: "hidden",
          border: "1px solid hsl(var(--neon-cyan) / 0.45)",
          borderRadius: 10,
          background: "hsl(var(--neon-cyan) / 0.05)",
          boxShadow: hover
            ? "0 0 30px hsl(var(--neon-cyan) / 0.3)"
            : "0 0 22px hsl(var(--neon-cyan) / 0.14), inset 0 0 18px hsl(var(--neon-cyan) / 0.05)",
          transition: "box-shadow 300ms",
        }}
      >
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          style={{
            display: "block",
            imageRendering: "pixelated",
            opacity: hover ? 1 : 0.85,
            transition: "opacity 300ms",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            borderRadius: 10,
            background:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.11) 0, rgba(0,0,0,0.11) 1px, transparent 1px, transparent 4px)",
          }}
        />
      </div>
      {canHover && (
        <div
          style={{
            fontFamily: "var(--font-mono-sw)",
            fontSize: 11,
            letterSpacing: ".04em",
            color: hover ? "var(--sw-cyan)" : "var(--sw-text-4)",
            marginTop: 14,
            transition: "color 300ms",
            textAlign: "center",
          }}
        >
          Maus ins Feld — dann spielst du mit
        </div>
      )}
    </div>
  );
};

export default PongDivider;
