const morphTime = 1.5;
const cooldownTime = 0.5;

class MorphingText {
  constructor(container, texts) {
    this.container = container;
    this.texts = texts;
    this.textIndex = 0;
    this.morph = 0;
    this.cooldown = 0;
    this.time = new Date();

    this.text1 = document.createElement('span');
    this.text2 = document.createElement('span');

    this.text1.className = 'morphing-text-el morphing-text-el-1';
    this.text2.className = 'morphing-text-el morphing-text-el-2';

    this.container.appendChild(this.text1);
    this.container.appendChild(this.text2);

    this.setStyles(0);
    this.animate = this.animate.bind(this);
    this.animate();
  }

  setStyles(fraction) {
    if (!this.texts.length) return;

    this.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    this.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    const inverted = 1 - fraction;
    this.text1.style.filter = `blur(${Math.min(8 / inverted - 8, 100)}px)`;
    this.text1.style.opacity = `${Math.pow(inverted, 0.4) * 100}%`;

    this.text1.textContent = this.texts[this.textIndex % this.texts.length];
    this.text2.textContent = this.texts[(this.textIndex + 1) % this.texts.length];
  }

  doMorph() {
    this.morph -= this.cooldown;
    this.cooldown = 0;

    let fraction = this.morph / morphTime;
    if (fraction > 1) {
      this.cooldown = cooldownTime;
      fraction = 1;
    }
    this.setStyles(fraction);
    if (fraction === 1) this.textIndex++;
  }

  doCooldown() {
    this.morph = 0;
    this.text2.style.filter = 'none';
    this.text2.style.opacity = '100%';
    this.text1.style.filter = 'none';
    this.text1.style.opacity = '0%';
  }

  animate() {
    requestAnimationFrame(this.animate);

    const now = new Date();
    const dt = (now - this.time) / 1000;
    this.time = now;

    this.cooldown -= dt;
    if (this.cooldown <= 0) this.doMorph();
    else this.doCooldown();
  }
}
