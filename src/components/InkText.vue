<template>
  <span ref="textElement" class="ink-text">
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
  fadeSpeed: { type: Number, default: 100 }, // Speed of the fade-in effect (ms)
  delay: { type: Number, default: 0 }, // Delay before the animation starts (ms)
  gradientClass: { type: String, default: '' }, // Gradient text class
});

const textElement = ref(null);
let timeoutId = null;

// Function to check visibility and apply reveal effect
const handleScroll = () => {
  const rect = textElement.value.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

  if (isVisible) {
    // Clear any existing timeout to avoid multiple triggers
    if (timeoutId) clearTimeout(timeoutId);

    // Apply reveal effect after the specified delay
    timeoutId = setTimeout(() => {
      textElement.value.classList.add("reveal-active"); // Apply smooth appearance
    }, props.delay);
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check visibility on load
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  if (timeoutId) clearTimeout(timeoutId); // Cleanup timeout
});
</script>

<style scoped>
.ink-text {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.text-content {
  opacity: 0;
  transition: opacity v-bind('props.fadeSpeed + "ms"') ease-out;
}

.reveal-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, transparent 0%, rgb(18, 50, 179) 80%, transparent 100%);
  transform: translateX(-100%);
  transition: transform v-bind('props.fadeSpeed + "ms"') ease-in-out;
  border-radius: 44px;
  padding: 2em;
}

.reveal-active .text-content {
  opacity: 1;
}

.reveal-active .reveal-mask {
  transform: translateX(100%);
}
</style>