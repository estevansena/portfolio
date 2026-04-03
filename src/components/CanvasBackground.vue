<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const canvas = ref(null);
let ctx;

let w, h;

function resize() {
  w = canvas.value.width = window.innerWidth;
  h = canvas.value.height = window.innerHeight;
}

// CONFIG
const particles = [];
const PARTICLE_COUNT = 120;
const MAX_DIST = 120;
const AREA_START = 0.6;

let mouse = { x: -9999, y: -9999 };

function handleMouseMove(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

let animationFrame;
let time = 0;

function initParticles() {
  particles.length = 0;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: w * AREA_START + Math.random() * (w * (1 - AREA_START)),
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      hueShift: Math.random()
    });
  }
}

function draw() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);

  ctx.globalCompositeOperation = "lighter";

  time += 0.01;

  // atualizar partículas
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    let minX = w * AREA_START;
    let maxX = w;

    if (p.x < minX) {
      p.x = minX;
      p.vx *= -1;
    }
    if (p.x > maxX) {
      p.x = maxX;
      p.vx *= -1;
    }

    if (p.y < 0 || p.y > h) p.vy *= -1;

    p.hueShift += 0.001;
    if (p.hueShift > 1) p.hueShift = 0;
  });

  // conexões
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {

      let dx = particles[i].x - particles[j].x;
      let dy = particles[i].y - particles[j].y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MAX_DIST) {
        let alpha = 1 - dist / MAX_DIST;

        let mix = (particles[i].hueShift + particles[j].hueShift) / 2;

        let r = mix > 0.7 ? 255 : 0;
        let g = mix > 0.7 ? 0 : 255;
        let b = 255;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha * 0.7})`;
        ctx.lineWidth = 1;

        ctx.shadowBlur = 20;
        ctx.shadowColor = `rgb(${r},${g},${b})`;

        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  // partículas
  particles.forEach(p => {
    let isPink = p.hueShift > 0.7;

    let r = isPink ? 255 : 0;
    let g = isPink ? 0 : 255;
    let b = 255;

    let dx = p.x - mouse.x;
    let dy = p.y - mouse.y;
    let dist = Math.sqrt(dx * dx + dy * dy);

    let glow = dist < 120 ? 35 : 15;

    ctx.beginPath();
    ctx.fillStyle = `rgb(${r},${g},${b})`;

    ctx.shadowBlur = glow;
    ctx.shadowColor = `rgb(${r},${g},${b})`;

    ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.globalCompositeOperation = "source-over";

  animationFrame = requestAnimationFrame(draw);
}

onMounted(() => {
  ctx = canvas.value.getContext("2d");

  resize();
  initParticles();

  window.addEventListener("resize", () => {
    resize();
    initParticles();
  });

  window.addEventListener("mousemove", handleMouseMove);

  draw();
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  cancelAnimationFrame(animationFrame);
});
</script>

<style scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  z-index: -1;
  pointer-events: none;
}
</style>