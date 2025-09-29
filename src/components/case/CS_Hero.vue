<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  kicker?: string
  title: string
  subtitle?: string
  media?: string        // image or video URL
  alt?: string
  poster?: string       // video poster (optional)
  align?: 'left' | 'center' | 'right'
  overlay?: boolean     // gradient overlay
  darken?: boolean      // simple dark overlay (use if overlay=false)
  contain?: boolean     // object-contain instead of cover
}>(), {
  align: 'left',
  overlay: true,
  darken: false,
  contain: false,
})

const isVideo = computed(() => !!props.media && /\.(mp4|webm|ogg)$/i.test(props.media))
const objectFit = computed(() => props.contain ? 'object-contain' : 'object-cover')
const contentAlign = computed(() => ({
  left: 'items-start text-left',
  center: 'items-center text-center',
  right: 'items-end text-right',
}[props.align!]))
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- Background media -->
    <div v-if="media" class="absolute inset-0 -z-10">
      <video
        v-if="isVideo"
        :src="media"
        :poster="poster"
        :aria-label="alt || title"
        playsinline
        muted
        loop
        autoplay
        class="w-full h-full object-cover"
      />
      <img
        v-else
        :src="media"
        :alt="alt || title"
        loading="lazy"
        class="w-full h-full rounded-2xl"
        :class="objectFit"
      />
      <div v-if="overlay" class="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white" />
      <div v-else-if="darken" class="absolute inset-0 bg-black/30" />
    </div>

    <!-- Text block -->
    <div class="relative max-w-5xl mx-auto px-6 py-16 sm:py-20">
      <div :class="['flex flex-col gap-3', contentAlign]">
        <p v-if="kicker" class="uppercase text-xs tracking-[0.22em] text-cyan-700 font-semibold">
          {{ kicker }}
        </p>
        <h1 class="text-4xl sm:text-5xl font-black leading-tight text-balance">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="text-slate-600">
          {{ subtitle }}
        </p>

        <!-- Optional CTAs -->
        <div v-if="$slots.actions" class="mt-6">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </section>
</template>
