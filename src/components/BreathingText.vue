<template>
    <span ref="textElement" class="breathing-text"></span>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const props = defineProps({
    targetText: { type: String, required: true }, // The final revealed text
    speed: { type: Number, default: 50 }, // Speed of letter appearance
    fadeSpeed: { type: Number, default: 1000 }, // Speed of the breathing fade effect
  });
  
  const textElement = ref(null);
  let interval = null;
  
  // More natural letter-by-letter appearance
  const revealText = (progress) => {
    let finalText = props.targetText;
    let revealed = finalText
      .split("")
      .map((char, index) => {
        return progress > index / finalText.length ? char : "•"; // Dots reveal into letters
      })
      .join("");
  
    textElement.value.innerHTML = revealed;
  };
  
  // Scroll-triggered smooth reveal
  const handleScroll = () => {
    const rect = textElement.value.getBoundingClientRect();
    const scrollProgress = 1 - Math.max(0, Math.min(1, rect.top / window.innerHeight));
  
    if (scrollProgress > 0) {
      if (!interval) {
        interval = setInterval(() => {
          let progress = Math.min(1, scrollProgress); // Controlled progressive reveal
          revealText(progress);
        }, props.speed);
      }
    } else {
      revealText(0);
    }
  };
  
  // "Breathing" subtle fade effect
  const startBreathing = () => {
    setInterval(() => {
      if (textElement.value) {
        textElement.value.style.opacity = Math.random() * (0.9 - 0.7) + 0.7; // Subtle fade fluctuations
      }
    }, props.fadeSpeed);
  };
  
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    revealText(0); // Initialize with hidden text
    startBreathing(); // Begin the gentle breathing effect
  });
  
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    if (interval) clearInterval(interval);
  });
  </script>
  
  <style scoped>
  .breathing-text {
    display: inline-block;
    opacity: 0.8;
    transition: opacity 1.5s ease-in-out;
  }
  </style>
  