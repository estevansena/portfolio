<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const canvas = ref(null);
let ctx, w, h;

// CONFIG
const mainParticles = [];
const cornerParticles = [];

const MAIN_COUNT = 120;
const CORNER_COUNT = 12;

const MAX_DIST = 120;

// CORES
const CYAN = [0, 255, 255];
const PINK = [255, 0, 102];

let mouse = { x: -9999, y: -9999 };
let animationFrame;

// resize
function resize() {
  w = canvas.value.width = window.innerWidth;
  h = canvas.value.height = window.innerHeight;
}

// 🔥 LIMITE CURVO (ajuste fino aqui se quiser)
function getLimitX(y) {
  const t = y / h;
  return w * (0.55 + 0.15 * Math.sin(t * Math.PI));
}

// init
function init() {
  mainParticles.length = 0;
  cornerParticles.length = 0;

  // direita (já nasce respeitando o limite)
  for (let i = 0; i < MAIN_COUNT; i++) {
    const y = Math.random() * h;
    const minX = getLimitX(y);

    mainParticles.push({
      x: minX + Math.random() * (w - minX),
      y,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      t: Math.random()
    });
  }

  // canto inferior esquerdo
  for (let i = 0; i < CORNER_COUNT; i++) {
    cornerParticles.push({
      x: Math.random() * (w * 0.12),
      y: h * 0.88 + Math.random() * (h * 0.12),
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      t: Math.random()
    });
  }
}

// update MAIN com limite curvo
function updateMain(group) {
  group.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    const limitX = getLimitX(p.y);

    // respeita curva
    if (p.x < limitX) {
      p.x = limitX;
      p.vx *= -1;
    }

    if (p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;

    p.t += 0.001;
    if (p.t > 1) p.t = 0;
  });
}

// update canto
function update(group, bounds) {
  group.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < bounds.minX || p.x > bounds.maxX) p.vx *= -1;
    if (p.y < bounds.minY || p.y > bounds.maxY) p.vy *= -1;

    p.t += 0.001;
    if (p.t > 1) p.t = 0;
  });
}

// linhas
function drawLines(group) {
  for (let i = 0; i < group.length; i++) {
    for (let j = i + 1; j < group.length; j++) {
      const dx = group[i].x - group[j].x;
      const dy = group[i].y - group[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MAX_DIST) {
        const alpha = 1 - dist / MAX_DIST;
        const color = (group[i].t + group[j].t) / 2 > 0.7 ? PINK : CYAN;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(${color[0]},${color[1]},${color[2]},${alpha * 0.6})`;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgb(${color[0]},${color[1]},${color[2]})`;

        ctx.moveTo(group[i].x, group[i].y);
        ctx.lineTo(group[j].x, group[j].y);
        ctx.stroke();
      }
    }
  }
}

// pontos
function drawPoints(group) {
  group.forEach(p => {
    const color = p.t > 0.7 ? PINK : CYAN;

    const dx = p.x - mouse.x;
    const dy = p.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    const glow = dist < 120 ? 30 : 12;

    ctx.beginPath();
    ctx.fillStyle = `rgb(${color[0]},${color[1]},${color[2]})`;
    ctx.shadowBlur = glow;
    ctx.shadowColor = `rgb(${color[0]},${color[1]},${color[2]})`;

    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();
  });
}

// loop
function draw() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);

  ctx.globalCompositeOperation = "lighter";

  updateMain(mainParticles);

  update(cornerParticles, {
    minX: 0,
    maxX: w * 0.12,
    minY: h * 0.88,
    maxY: h
  });

  drawLines(mainParticles);
  drawLines(cornerParticles);

  drawPoints(mainParticles);
  drawPoints(cornerParticles);

  ctx.globalCompositeOperation = "source-over";

  animationFrame = requestAnimationFrame(draw);
}

// lifecycle
onMounted(() => {
  ctx = canvas.value.getContext("2d");

  resize();
  init();

  window.addEventListener("resize", () => {
    resize();
    init();
  });

  window.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  draw();
});

onBeforeUnmount(() => {
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