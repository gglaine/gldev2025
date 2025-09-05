<template>
  <main class="bg-gradient-to-b from-white to-slate-50">
    <article v-zoom class="max-w-5xl mx-auto px-6 py-16 space-y-12">
      <header class="text-center space-y-3">
        <p class="uppercase text-xs text-slate-500">Étude de cas</p>
        <h1 class="text-4xl md:text-5xl font-black">Antishirt</h1>
        <p class="text-slate-600">Identité → e-commerce : design, Stripe, prod</p>
        <div class="text-sm text-slate-500">Antishirt · 2025</div>
        <div class="mt-4 flex flex-col items-center gap-3">
          <img src="/previews/antishirt-960x600.jpg" alt="Antishirt" class="rounded-xl border w-full max-w-3xl" loading="lazy" />
          <div class="flex gap-2">
            <a href="https://antishirt.fr" target="_blank" rel="noopener"
               class="px-3 py-1.5 rounded-md bg-slate-900 text-white hover:bg-slate-800">Voir le site ↗</a>
            <RouterLink to="/" class="px-3 py-1.5 rounded-md border bg-white hover:bg-slate-50">← Retour</RouterLink>
          </div>
        </div>
      </header>

      <section class="space-y-3">
        <h2 class="text-2xl font-extrabold">🎯 Objectifs</h2>
        <p class="text-slate-700">…</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-extrabold">🛒 Parcours & checkout</h2>
        <figure class="rounded-xl overflow-hidden border bg-white">
          <img src="/cs/antishirt/checkout.png" alt="Checkout" data-zoom data-caption="Checkout Stripe — friction minimale"
               class="w-full h-auto" loading="lazy" />
          <figcaption class="p-3 text-xs text-slate-600 border-t">Checkout</figcaption>
        </figure>
      </section>
    </article>
  </main>

  <dialog ref="dlg" class="backdrop:bg-black/70 p-0 rounded-xl overflow-hidden">
    <div v-if="activeSrc" class="relative bg-white">
      <img :src="activeSrc" :alt="activeAlt" class="max-h-[86vh] max-w-[92vw] object-contain" />
      <div v-if="activeCaption" class="p-3 text-center text-xs text-slate-600">{{ activeCaption }}</div>
      <button class="absolute top-2 right-2 px-2 py-1 text-xs border bg-white/90 rounded" @click="close">Fermer</button>
    </div>
  </dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
useHead({
  title: 'Antishirt – Étude de cas',
  meta: [
    { name: 'description', content: 'Identité, design, Stripe, production.' },
    { property: 'og:image', content: '/cs/antishirt/og.jpg' }
  ],
  link: [{ rel: 'canonical', href: `${location.origin}/case-studies/antishirt` }]
})
const dlg = ref(null), activeSrc = ref(''), activeAlt = ref(''), activeCaption = ref('')
const vZoom = {
  mounted(el){ el.addEventListener('click',e=>{ const t=e.target; if(!(t instanceof HTMLImageElement)||!t.hasAttribute('data-zoom')) return;
    activeSrc.value=t.currentSrc||t.src; activeAlt.value=t.alt||''; activeCaption.value=t.getAttribute('data-caption')||''; dlg.value?.showModal?.() }) }
}
function close(){ dlg.value?.close?.(); activeSrc.value=''; activeAlt.value=''; activeCaption.value='' }
</script>
