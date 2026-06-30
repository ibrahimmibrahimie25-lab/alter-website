class Particle {
  constructor(width, height, speed) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = 0;
    this.vy = 0;
    this.age = 0;
    this.life = Math.random() * 400 + 200;
    this.speed = speed;
    this.size = Math.random() * 3 + 2;
    this.pulse = Math.random() * Math.PI * 2;
    this.pulseSpeed = Math.random() * 0.03 + 0.015;
  }

  update(width, height, mouseX, mouseY) {
    const angle = (Math.cos(this.x * 0.003 + this.y * 0.002) + Math.sin(this.y * 0.003 + this.x * 0.002)) * Math.PI;

    this.vx += Math.cos(angle) * 0.12 * this.speed;
    this.vy += Math.sin(angle) * 0.12 * this.speed;

    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 200) {
      const force = (200 - dist) / 200;
      this.vx -= dx * force * 0.03;
      this.vy -= dy * force * 0.03;
    }

    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.96;
    this.vy *= 0.96;

    this.age++;
    this.pulse += this.pulseSpeed;
    if (this.age > this.life) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = 0;
      this.vy = 0;
      this.age = 0;
      this.life = Math.random() * 400 + 200;
    }

    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }
}

class ParticleBackground {
  constructor(canvas, opts = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.color = opts.color || '#FF3333';
    this.trailOpacity = opts.trailOpacity || 0.04;
    this.particleCount = opts.particleCount || 300;
    this.speed = opts.speed || 0.6;
    this.mouseX = -1000;
    this.mouseY = -1000;
    this.particles = [];
    this.width = 0;
    this.height = 0;
    this.time = 0;

    this.onResize = this.onResize.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.animate = this.animate.bind(this);

    this.init();
    window.addEventListener('resize', this.onResize);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseleave', this.onMouseLeave);
  }

  init() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.scale(dpr, dpr);
    this.canvas.style.width = this.width + 'px';
    this.canvas.style.height = this.height + 'px';

    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(new Particle(this.width, this.height, this.speed));
    }
  }

  onResize() {
    this.init();
  }

  onMouseMove(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  onMouseLeave() {
    this.mouseX = -1000;
    this.mouseY = -1000;
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.time += 0.01;

    this.ctx.fillStyle = `rgba(0, 0, 0, ${this.trailOpacity})`;
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.ctx.shadowColor = '#FF5555';
    this.ctx.shadowBlur = 20;

    const particles = this.particles;

    for (let i = 0; i < particles.length; i += 2) {
      const a = particles[i];
      a.update(this.width, this.height, this.mouseX, this.mouseY);

      for (let j = i + 2; j < particles.length; j += 2) {
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const a1 = (1 - dist / 140) * 0.3;
          const pulse = Math.sin(this.time * 2 + i * 0.1) * 0.3 + 0.7;
          this.ctx.globalAlpha = a1 * pulse;
          this.ctx.shadowBlur = 10;
          this.ctx.strokeStyle = '#FF3333';
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(a.x, a.y);
          this.ctx.lineTo(b.x, b.y);
          this.ctx.stroke();
        }
      }
    }

    this.ctx.shadowBlur = 15;
    for (const p of particles) {
      const lifeAlpha = 1 - Math.abs((p.age / p.life) - 0.5) * 2;
      const pulseGlow = Math.sin(p.pulse) * 0.4 + 0.6;
      const alpha = lifeAlpha * pulseGlow;

      this.ctx.globalAlpha = alpha;
      this.ctx.fillStyle = '#FF4444';
      const s = p.size * (Math.sin(p.pulse) * 0.4 + 1);
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, s, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.globalAlpha = alpha * 0.5;
      this.ctx.fillStyle = '#FFFFFF';
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, s * 0.4, 0, Math.PI * 2);
      this.ctx.fill();
    }

    this.ctx.globalAlpha = 1;
    this.ctx.shadowBlur = 0;
  }

  destroy() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseleave', this.onMouseLeave);
  }
}
