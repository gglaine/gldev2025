<template>
    <span ref="textElement" class="crypto-text"></span>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const props = defineProps({
    targetText: { type: String, required: true }, // The final revealed text
    speed: { type: Number, default: 100 }, // Speed of decryption
    scrambleChars: { type: String, default: "@#$%&?!*+" }, // Characters used in scrambling
  });
  
  const textElement = ref(null);
  let frame = 0;
  let interval = null;
  
  // More subtle scramble effect
  const decryptText = (progress) => {
    let finalText = props.targetText;
    let scrambled = finalText
      .split("")
      .map((char, index) => {
        const revealFactor = index / finalText.length;
        
        // Subtle randomness before revealing correct letter
        if (progress < revealFactor) {
          return Math.random() > progress // Reduces randomness as progress increases
            ? props.scrambleChars[Math.floor(Math.random() * props.scrambleChars.length)]
            : char;
        }
        return char;
      })
      .join("");
  
    textElement.value.innerHTML = scrambled;
  };
  
  // Scroll-triggered smooth decryption
  const handleScroll = () => {
    const rect = textElement.value.getBoundingClientRect();
    const scrollProgress = 1 - Math.max(0, Math.min(1, rect.top / window.innerHeight));
  
    if (scrollProgress > 0) {
      if (!interval) {
        interval = setInterval(() => {
          frame += 0.05; // Slower, more natural reveal
          if (frame >= 1) {
            clearInterval(interval);
            interval = null;
          }
          decryptText(frame);
        }, props.speed);
      }
    } else {
      // Partially reset (keeps some revealed letters)
      frame = Math.max(0, frame - 0.05);
      decryptText(frame);
    }
  };
  
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    decryptText(0); // Initialize scrambled text
  });
  
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    if (interval) clearInterval(interval);
  });
  </script>
  
  <style scoped>
  .crypto-text {
    display: inline-block;
    transition: color 0.3s ease-in-out;
  }
  </style>
  