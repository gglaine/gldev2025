<template>
  <canvas ref="particleCanvas" class="particle-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const particleCanvas = ref(null);
let particles = [];
const particleCount = 32; // Density of particles
const speedFactor = 1; // Speed adjustment
let animationFrameId;

const initParticles = () => {
  const canvas = particleCanvas.value;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5, // Subtle particle size
      speedX: (Math.random() - 0.5) * speedFactor,
      speedY: (Math.random() - 0.5) * speedFactor,
      opacity: Math.random() * 0.5 + 0.3,
      color: `rgba(173, 216, 230, ${Math.random() * 0.5 + 0.3})` // Light blue particles
    });
  }
};

const animateParticles = () => {
  const canvas = particleCanvas.value;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    p.x += p.speedX;
    p.y += p.speedY;

    // Bounce off edges
    if (p.x > canvas.width || p.x < 0) p.speedX *= -1;
    if (p.y > canvas.height || p.y < 0) p.speedY *= -1;

    // Draw particle
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    ctx.closePath();
  });

  animationFrameId = requestAnimationFrame(animateParticles);
};

const resizeCanvas = () => {
  if (!particleCanvas.value) return;
  const canvas = particleCanvas.value;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
};

onMounted(() => {
  initParticles();
  animateParticles();
  window.addEventListener('resize', resizeCanvas);
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener('resize', resizeCanvas);
});
</script>

<style scoped>
.particle-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
}


</style>