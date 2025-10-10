"use client";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ConfettiBurstProps {
  durationMs?: number;
  onDone?: () => void;
}

export default function ConfettiBurst({ durationMs = 2000, onDone }: ConfettiBurstProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let start = performance.now();

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    const onResize = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      resize();
    };
    window.addEventListener("resize", onResize);

    const colors = ["#2dd4bf", "#22d3ee", "#ffffff", "#a78bfa", "#f59e0b"];

    type P = { x: number; y: number; vx: number; vy: number; size: number; rot: number; spin: number; color: string; life: number; };
    const particles: P[] = Array.from({ length: window.innerWidth < 640 ? 80 : 140 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: -20 + Math.random() * -100,
      vx: (Math.random() - 0.5) * 4,
      vy: 2 + Math.random() * 4,
      size: 4 + Math.random() * 6,
      rot: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1,
    }));

    const gravity = 0.08;
    const drag = 0.998;

    const tick = (t: number) => {
      const elapsed = t - start;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach((p) => {
        p.vy += gravity;
        p.vx *= drag;
        p.vy *= drag;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.spin;
        // fade near end
        p.life = Math.max(0, 1 - elapsed / durationMs);
        ctx.save();
        ctx.globalAlpha = 0.9 * p.life;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });

      if (elapsed < durationMs) {
        raf = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", onResize);
        onDone?.();
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [durationMs, onDone]);

  return createPortal(
    <div className="pointer-events-none fixed inset-0 z-[80]">
      <canvas ref={canvasRef} />
    </div>,
    document.body
  );
}


