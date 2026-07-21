import React, { useEffect, useRef } from 'react';

type FallingLinesProps = {
  reducedMotion: boolean;
};

// Katakana + Kanji mix
const GLYPHS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン零一二三四五六七八九十百千万風雷火水木金土月日空星海山川雪花鳥魚龍夢光闇影幻';

// Only render columns in the left and right edge strips
const EDGE_WIDTH = 120; // px width of each side strip

export const FallingLines = ({ reducedMotion }: FallingLinesProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === 'undefined') return undefined;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return undefined;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let frameId = 0;
    let lastTime = 0;

    const FONT_SIZE = 20;
    const COL_GAP = 36;
    const FRAME_INTERVAL = 90;

    let leftCols = 0;
    let rightCols = 0;
    let totalCols = 0;
    let drops: number[] = [];
    let trailLens: number[] = [];
    let colX: number[] = []; // actual x position for each column
    let glyphCache: string[][] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = (width * dpr) | 0;
      canvas.height = (height * dpr) | 0;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Calculate columns for left and right edges only
      leftCols = Math.floor(EDGE_WIDTH / COL_GAP);
      rightCols = Math.floor(EDGE_WIDTH / COL_GAP);
      const newTotal = leftCols + rightCols;

      if (newTotal !== totalCols) {
        totalCols = newTotal;
        drops = [];
        trailLens = [];
        colX = [];
        glyphCache = [];

        const rows = Math.ceil(height / FONT_SIZE) + 30;

        // Left side columns
        for (let i = 0; i < leftCols; i++) {
          colX.push(i * COL_GAP + 8);
          drops.push(-Math.floor(Math.random() * 25));
          trailLens.push(6 + Math.floor(Math.random() * 10));
          glyphCache.push(
            Array.from({ length: rows }, () => GLYPHS[(Math.random() * GLYPHS.length) | 0])
          );
        }

        // Right side columns
        for (let i = 0; i < rightCols; i++) {
          colX.push(width - EDGE_WIDTH + i * COL_GAP + 8);
          drops.push(-Math.floor(Math.random() * 25));
          trailLens.push(6 + Math.floor(Math.random() * 10));
          glyphCache.push(
            Array.from({ length: rows }, () => GLYPHS[(Math.random() * GLYPHS.length) | 0])
          );
        }
      } else {
        // Update right side x positions on resize
        for (let i = leftCols; i < totalCols; i++) {
          colX[i] = width - EDGE_WIDTH + (i - leftCols) * COL_GAP + 8;
        }
      }
    };

    const animate = (time: number) => {
      if (time - lastTime < FRAME_INTERVAL) {
        frameId = window.requestAnimationFrame(animate);
        return;
      }
      lastTime = time;

      // Fade trail
      ctx.fillStyle = 'rgba(9, 9, 11, 0.14)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${FONT_SIZE}px "Noto Sans JP", "Hiragino Kaku Gothic Pro", monospace`;
      ctx.textBaseline = 'top';

      for (let i = 0; i < totalCols; i++) {
        const x = colX[i];
        const dropPos = drops[i];
        const trailLen = trailLens[i];

        for (let t = 0; t < trailLen; t++) {
          const row = dropPos - t;
          if (row < 0) continue;

          const y = row * FONT_SIZE;
          if (y > height + FONT_SIZE) continue;

          const fade = t / trailLen;

          if (t === 0) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
            ctx.shadowColor = 'rgba(196, 167, 231, 0.5)';
            ctx.shadowBlur = 8;
          } else if (t === 1) {
            ctx.fillStyle = 'rgba(196, 167, 231, 0.6)';
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
          } else {
            const alpha = (1 - fade) * 0.3;
            ctx.fillStyle = `rgba(196, 167, 231, ${alpha})`;
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
          }

          const glyphRow = row % glyphCache[i].length;
          if (t === 0 && Math.random() < 0.06) {
            glyphCache[i][glyphRow] = GLYPHS[(Math.random() * GLYPHS.length) | 0];
          }
          ctx.fillText(glyphCache[i][glyphRow], x, y);
        }

        drops[i]++;

        // Reset
        const tailY = (dropPos - trailLen) * FONT_SIZE;
        if (tailY > height + 50) {
          drops[i] = -Math.floor(Math.random() * 15);
          trailLens[i] = 6 + Math.floor(Math.random() * 10);
        }
      }

      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;

      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);

    if (!reducedMotion) {
      ctx.fillStyle = 'rgba(9, 9, 11, 1)';
      ctx.fillRect(0, 0, width, height);
      frameId = window.requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener('resize', resize);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] h-[100dvh] w-screen opacity-45"
    />
  );
};
