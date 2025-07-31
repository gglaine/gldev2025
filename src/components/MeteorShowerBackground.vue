<template>
  <canvas ref="canvas" class="meteor-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let ctx
let meteors = []
let animationFrameId

const METEOR_COUNT = 40
const SPEED = 3.2
const ANGLE = Math.PI / 2 // 45°

const createMeteor = () => {
  const velocity = SPEED * (Math.random() * 1.4 + 0.8) // petite variation
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: Math.cos(ANGLE) * velocity,
    vy: Math.sin(ANGLE) * velocity,
    length: Math.random() * 180 + 20,
    opacity: Math.random() * 0.4 + 0.4,
    color: getColor()
  }
}

const getColor = () => {
  const colors = ['#38bdf8', '#6366f1', '#a855f7']
  return colors[Math.floor(Math.random() * colors.length)]
}

const initCanvas = () => {
  if (!canvas.value) return
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
  ctx = canvas.value.getContext('2d')
  meteors = Array.from({ length: METEOR_COUNT }, createMeteor)
}

const draw = () => {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  meteors.forEach((m) => {
    ctx.beginPath()
    ctx.moveTo(m.x, m.y)
    ctx.lineTo(m.x - m.vx * m.length, m.y - m.vy * m.length)
    ctx.strokeStyle = m.color
    ctx.globalAlpha = m.opacity
    ctx.lineWidth = 1.2
    ctx.stroke()
    ctx.globalAlpha = 1

    m.x += m.vx
    m.y += m.vy

    // Si le météore sort de l’écran, on le replace en haut à gauche
    if (m.x > canvas.value.width + 100 || m.y > canvas.value.height + 100) {
      m.x = Math.random() * canvas.value.width - 200
      m.y = Math.random() * -100
    }
  })

  animationFrameId = requestAnimationFrame(draw)
}

const resize = () => {
  initCanvas()
}

onMounted(() => {
  initCanvas()
  draw()
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId)
  window.removeEventListener('resize', resize)
})
</script>

<style scoped>
.meteor-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
</style>
