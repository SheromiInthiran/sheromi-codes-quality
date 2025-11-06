import { useEffect, useRef } from 'react';

interface FloatingShape {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  type: 'circle' | 'square' | 'triangle';
}

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const shapes: FloatingShape[] = [];
    const shapeCount = 15;

    // Initialize floating shapes
    for (let i = 0; i < shapeCount; i++) {
      const types: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 40,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        type: types[Math.floor(Math.random() * types.length)],
      });
    }

    const drawShape = (shape: FloatingShape) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, shape.size);
      gradient.addColorStop(0, 'rgba(236, 72, 153, 0.15)');
      gradient.addColorStop(1, 'rgba(236, 72, 153, 0)');
      
      ctx.fillStyle = gradient;
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.3)';
      ctx.lineWidth = 2;

      if (shape.type === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      } else if (shape.type === 'square') {
        ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
        ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
      } else if (shape.type === 'triangle') {
        ctx.beginPath();
        ctx.moveTo(0, -shape.size / 2);
        ctx.lineTo(shape.size / 2, shape.size / 2);
        ctx.lineTo(-shape.size / 2, shape.size / 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((shape) => {
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        shape.rotation += shape.rotationSpeed;

        // Wrap around screen
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;

        drawShape(shape);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-50"
      style={{ zIndex: 0 }}
    />
  );
};
