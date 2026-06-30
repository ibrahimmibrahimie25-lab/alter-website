class CursorGlow {
  constructor(opts = {}) {
    this.color = opts.color || '#D72323';
    this.size = opts.size || 300;
    this.blur = opts.blur || 120;
    this.opacity = opts.opacity || 0.15;
    this.speed = opts.speed || 0.08;

    this.x = -500;
    this.y = -500;
    this.targetX = -500;
    this.targetY = -500;

    this.el = document.createElement('div');
    this.el.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: ${this.size}px;
      height: ${this.size}px;
      border-radius: 50%;
      background: radial-gradient(circle, ${this.color} 0%, transparent 70%);
      filter: blur(${this.blur}px);
      opacity: ${this.opacity};
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(this.el);

    this.onMouse = this.onMouse.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.animate = this.animate.bind(this);

    window.addEventListener('mousemove', this.onMouse);
    document.addEventListener('mouseleave', this.onLeave);

    this.animate();
  }

  onMouse(e) {
    this.targetX = e.clientX;
    this.targetY = e.clientY;
    this.el.style.opacity = this.opacity;
  }

  onLeave() {
    this.targetX = -500;
    this.targetY = -500;
  }

  animate() {
    this.x += (this.targetX - this.x) * this.speed;
    this.y += (this.targetY - this.y) * this.speed;
    this.el.style.transform = `translate(${this.x - this.size / 2}px, ${this.y - this.size / 2}px)`;
    requestAnimationFrame(this.animate);
  }

  destroy() {
    window.removeEventListener('mousemove', this.onMouse);
    document.removeEventListener('mouseleave', this.onLeave);
    this.el.remove();
  }
}
