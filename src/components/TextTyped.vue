<template>
    <span ref="typing"></span>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Typed from 'typed.js';
  
  const props = defineProps({
    strings: Array, // Sentences to type
    typeSpeed: { type: Number, default: 50 },
    backSpeed: { type: Number, default: 30 },
    backDelay: { type: Number, default: 1500 },
    startDelay: { type: Number, default: 500 },
    fadeOut: { type: Boolean, default: true },
    fadeOutDelay: { type: Number, default: 500 },
    cursorChar: { type: String, default: '|' }, // Custom blinking cursor
    loop: { type: Boolean, default: true },
    shuffle: { type: Boolean, default: false }, // Shuffle sentence order
    autoStart: { type: Boolean, default: true } // Allow manual control
  });
  
  const typing = ref(null);
  let typedInstance = null;
  
  onMounted(() => {
    typedInstance = new Typed(typing.value, {
      strings: props.strings,
      typeSpeed: props.typeSpeed,
      backSpeed: props.backSpeed,
      backDelay: props.backDelay,
      startDelay: props.startDelay,
      fadeOut: props.fadeOut,
      fadeOutDelay: props.fadeOutDelay,
      cursorChar: props.cursorChar,
      loop: props.loop,
      shuffle: props.shuffle,
      showCursor: true,
      smartBackspace: true,
      autoInsertCss: true
    });
  
    if (!props.autoStart) {
      typedInstance.stop(); // Stop by default if autoStart is false
    }
  });
  
  // Cleanup on unmount
  onUnmounted(() => {
    typedInstance.destroy();
  });
  
  // Expose methods for manual control
  defineExpose({
    start: () => typedInstance.start(),
    stop: () => typedInstance.stop(),
    reset: () => typedInstance.reset(true),
    toggle: () => typedInstance.toggle()
  });
  </script>
  