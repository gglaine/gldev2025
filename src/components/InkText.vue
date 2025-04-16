<template>
  <span
    ref="textElement"
    class="ink-text"
    :style="{ '--fade-speed': fadeSpeed + 'ms' }"
  >
    <span class="text-content" :class="gradientClass">
      {{ targetText }}
    </span>
    <span class="reveal-mask"></span>
  </span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  targetText: { type: String, required: true }, // The final revealed text
  fadeSpeed: { type: Number, default: 300 },      // Speed of the fade-in effect (ms)
  delay: { type: Number, default: 0 },            // Delay before the animation starts (ms)
  gradientClass: { type: String, default: '' },     // Additional gradient text class
});

const textElement = ref(null);
let timeoutId = null;

// When the component is in view, add "reveal-active" for the transition
const handleScroll = () => {
  const rect = textElement.value.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
  if (isVisible) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      textElement.value.classList.add("reveal-active");
    }, props.delay);
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger check on load
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  if (timeoutId) clearTimeout(timeoutId);
});
</script>

<style scoped>
.ink-text {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

/* The text starts slightly translated downward with zero opacity */
.text-content {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity var(--fade-speed) ease-out,
              transform var(--fade-speed) ease-out;
}

/* The mask, with a smooth sliding gradient, covers the text */
.reveal-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgb(18, 50, 179) 80%,
    transparent 100%
  );
  transform: translateX(-100%);
  transition: transform var(--fade-speed) ease-in-out;
  border-radius: 4px;
}

/* When in view, the text fades and slides into place */
.reveal-active .text-content {
  opacity: 1;
  transform: translateY(0);
}

/* The mask slides all the way to the right, revealing the text underneath */
.reveal-active .reveal-mask {
  transform: translateX(100%);
}
</style>
