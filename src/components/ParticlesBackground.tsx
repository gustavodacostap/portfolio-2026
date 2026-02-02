import { useEffect, useRef } from "react";

class Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;

  constructor(
    private canvas: HTMLCanvasElement,
    private ctx: CanvasRenderingContext2D,
    colors: string[],
  ) {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.radius = Math.random() * 2 + 1;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
  }

  draw() {
    ctx2d.beginPath();
    ctx2d.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx2d.shadowBlur = 10;
    ctx2d.shadowColor = this.color;
    ctx2d.fillStyle = this.color;
    ctx2d.fill();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0) this.x = this.canvas.width;
    if (this.x > this.canvas.width) this.x = 0;
    if (this.y < 0) this.y = this.canvas.height;
    if (this.y > this.canvas.height) this.y = 0;

    this.draw();
  }
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasEl = canvas;
    const ctx2d = ctx;

    const particles: Particle[] = [];
    const particleCount = 50;
    const colors = ["rgba(255, 255, 255, 0.7)"];

    function createParticles() {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function handleResize() {
      canvasEl.width = window.innerWidth;
      canvasEl.height = window.innerHeight;
      createParticles();
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    let animationId: number;

    function animate() {
      ctx2d.clearRect(0, 0, canvasEl.width, canvasEl.height);
      particles.forEach((p) => p.update());
      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    ></canvas>
  );
}
