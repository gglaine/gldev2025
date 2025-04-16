<template>
    <section ref="section" class="fullpage-section">
      <div class="content">
        <slot></slot>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const section = ref(null);

  </script>
  
  <style scoped>
  .fullpage-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #111827; /* FIX: Force dark background */
    color: rgb(216, 208, 208); /* FIX: Ensure text is visible */
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    opacity: 0;
    transform: translateY(50px);
  }
  

  </style>
  