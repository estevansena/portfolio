<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import avatar from '../assets/images/eu_avatar.png'

const textoCompleto =
  "Aqui você pode dar uma olhada nos projetos que desenvolvi recentemente."
const texto = ref("")

const canvasRef = ref(null)
let animationFrameId

onMounted(() => {
  /* =======================
     TYPING EFFECT
  ======================= */
  let i = 0

  function digitar() {
    if (i < textoCompleto.length) {
      texto.value += textoCompleto.charAt(i)
      i++
      setTimeout(digitar, 35)
    }
  }

  digitar()

  /* =======================
     CANVAS PARTICLES
  ======================= */
  const canvas = canvasRef.value
  const ctx = canvas.getContext("2d")

  const resize = () => {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }

  resize()

  let particles = []
  let mouseX = 0
  let mouseY = 0

  const handleMouseMove = (e) => {
    const rect = canvas.getBoundingClientRect()
    mouseX = e.clientX - rect.left
    mouseY = e.clientY - rect.top
  }

  canvas.addEventListener("mousemove", handleMouseMove)

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = Math.random() * 2 + 0.5
      this.speedY = Math.random() * 0.7 + 0.2
      this.speedX = 0
      this.opacity = Math.random() * 0.5 + 0.3
      this.isWhite = Math.random() > 0.7
    }

    update() {
      this.y -= this.speedY

      if (this.y < 0) {
        this.y = canvas.height
        this.x = Math.random() * canvas.width
      }

      const dx = this.x - mouseX
      const dy = this.y - mouseY
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < 100) {
        this.speedX += (dx / dist) * 0.4
      }

      this.speedX *= 0.95
      this.x += this.speedX
    }

    draw() {
      ctx.fillStyle = this.isWhite
        ? `rgba(255,255,255,${this.opacity})`
        : `rgba(149,72,194,${this.opacity})`

      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  function init() {
    particles = []
    for (let i = 0; i < 120; i++) {
      particles.push(new Particle())
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach((p) => {
      p.update()
      p.draw()
    })
    animationFrameId = requestAnimationFrame(animate)
  }

  init()
  animate()

  window.addEventListener("resize", resize)

  onBeforeUnmount(() => {
    window.removeEventListener("resize", resize)
    canvas.removeEventListener("mousemove", handleMouseMove)
    cancelAnimationFrame(animationFrameId)
  })
})
</script>

<template>
  <section class="section-container">
    <div class="content">

      <!-- ===== AVATAR + CANVAS ===== -->
      <div class="avatar-wrapper">
        <canvas ref="canvasRef" class="canvas-bg"></canvas>
        <img :src="avatar" alt="Meu Avatar" class="avatar" />
      </div>

      <!-- ===== TEXTO ===== -->
      <div class="text-box">

        <h2 class="nome">
          ESTEV<span class="letra-a">A</span>N SEN<span class="letra-a">A</span>
        </h2>

        <div class="typing-area">
          <p class="text">
            {{ texto }}<span class="cursor">|</span>
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.section-container {
  padding: 2rem;
  background: #000;
  color: #fff;
}

/* layout */
.content {
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: center;
}

/* =======================
   AVATAR WRAPPER (MASK)
======================= */
.avatar-wrapper {
  position: relative;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  overflow: hidden; /* 🔥 CLIPA O CANVAS NO CÍRCULO */
  flex-shrink: 0;
}

/* canvas atrás */
.canvas-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* imagem na frente */
.avatar {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;

  border: 2px solid #000;
  box-shadow: 6px 6px 20px rgba(149, 72, 194, 0.35);
}

/* =======================
   TEXTO
======================= */
.text-box {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nome {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 2px;
}

.letra-a {
  color: #9548c2;
}

/* área fixa (evita empurrar layout) */
.typing-area {
  height: 120px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.text {
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.6;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}
</style>