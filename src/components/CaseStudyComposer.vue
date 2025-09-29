<!-- src/components/CaseStudyComposer.vue -->
<template>
  <div v-if="blocks.length" class="space-y-16">
    <!-- Iterate blocks and render by type -->
    <section
      v-for="(b, i) in blocks"
      :key="b.id || `${b.type}:${i}`"
      class="scroll-mt-24"
      :id="b.anchor || undefined"
    >
      <!-- COMMON SECTION HEADER -->
      <header v-if="b.title || b.subtitle" class="mb-6">
        <h2 v-if="b.title" class="text-2xl font-bold text-slate-900">{{ b.title }}</h2>
        <p v-if="b.subtitle" class="text-sm text-slate-500 mt-1">{{ b.subtitle }}</p>
      </header>

      <!-- PROBLEM / TEXT BLOCK (FR + EN) -->
      <div v-if="b.type === 'problem' || b.type === 'text'" class="space-y-3">
        <p v-if="b.body_fr" class="leading-relaxed text-slate-800">{{ b.body_fr }}</p>
        <p v-if="b.body_en" class="text-sm text-slate-500">{{ b.body_en }}</p>
        <!-- optional bullets -->
        <ul v-if="b.points?.length" class="mt-3 space-y-2">
          <li v-for="(pt, j) in b.points" :key="j" class="flex items-start gap-2">
            <span aria-hidden>•</span>
            <span class="text-slate-800">{{ pt }}</span>
          </li>
        </ul>
      </div>

      <!-- MOODBOARD GRID -->
      <div v-else-if="b.type === 'moodboard'" class="grid sm:grid-cols-2 gap-6">
        <figure
          v-for="(it, k) in b.items || []"
          :key="k"
          class="rounded-xl overflow-hidden border border-slate-200 bg-white"
        >
          <img
            :src="it.src"
            :alt="it.alt || it.title || 'Moodboard item'"
            class="w-full h-auto"
            loading="lazy"
            decoding="async"
          />
          <figcaption class="p-4">
            <div class="flex items-baseline justify-between gap-3">
              <div class="font-medium text-slate-900">{{ it.title }}</div>
              <div v-if="it.step !== undefined" class="text-xs text-slate-500">Étape {{ it.step }}</div>
            </div>
            <p v-if="it.rationale" class="text-sm text-slate-600 mt-1">{{ it.rationale }}</p>
            <div v-if="it.tags?.length" class="mt-2 flex flex-wrap gap-2">
              <span
                v-for="(tg, tgi) in it.tags"
                :key="tgi"
                class="px-2 py-0.5 rounded-full text-xs border border-slate-200 text-slate-600 bg-slate-50"
              >{{ tg }}</span>
            </div>
          </figcaption>
        </figure>
      </div>

      <!-- RESULTS (icon + text highlights) -->
      <div v-else-if="b.type === 'results'" class="grid sm:grid-cols-2 gap-3 text-sm">
        <div
          v-for="(h, j) in b.highlights || []"
          :key="j"
          class="flex items-start gap-2"
        >
          <span class="shrink-0">{{ h.icon || '✅' }}</span>
          <span class="text-slate-800">{{ h.text }}</span>
        </div>
      </div>

      <!-- SINGLE IMAGE (full width) -->
      <figure v-else-if="b.type === 'image'" class="rounded-2xl overflow-hidden border border-slate-200 bg-white">
        <img
          :src="b.src"
          :alt="b.alt || b.caption_fr || 'Case study image'"
          class="w-full h-auto"
          loading="lazy"
          decoding="async"
          :sizes="b.sizes || '(min-width:1024px) 960px, 100vw'"
          :srcset="buildSrcset(b.srcset)"
        />
        <figcaption v-if="b.caption_fr || b.caption_en" class="p-4 text-sm">
          <div v-if="b.caption_fr" class="text-slate-700">{{ b.caption_fr }}</div>
          <div v-if="b.caption_en" class="text-slate-500">{{ b.caption_en }}</div>
        </figcaption>
      </figure>

      <!-- GALLERY (masonry-ish grid) -->
      <div v-else-if="b.type === 'gallery'" class="grid sm:grid-cols-2 gap-6">
        <figure
          v-for="(it, k) in b.images || []"
          :key="k"
          class="rounded-xl overflow-hidden border border-slate-200 bg-white"
        >
          <img
            :src="it.src"
            :alt="it.alt || it.caption_fr || 'Gallery image'"
            class="w-full h-auto"
            loading="lazy"
            decoding="async"
            :sizes="it.sizes || '(min-width:1024px) 960px, 100vw'"
            :srcset="buildSrcset(it.srcset)"
          />
          <figcaption v-if="it.caption_fr || it.caption_en" class="p-3 text-sm">
            <div v-if="it.caption_fr" class="text-slate-700">{{ it.caption_fr }}</div>
            <div v-if="it.caption_en" class="text-slate-500">{{ it.caption_en }}</div>
          </figcaption>
        </figure>
      </div>

      <!-- QUOTE -->
      <blockquote v-else-if="b.type === 'quote' || b.type === 'pullquote'"
        class="border-l-4 border-slate-300 pl-4 md:pl-6 text-xl md:text-2xl leading-relaxed text-slate-900 bg-slate-50/60 py-4 rounded-r"
      >
        <p v-if="b.quote_fr" class="font-medium">{{ b.quote_fr }}</p>
        <p v-if="b.quote_en" class="text-base text-slate-500 mt-2">{{ b.quote_en }}</p>
        <footer v-if="b.cite" class="mt-3 text-sm text-slate-600">— {{ b.cite }}</footer>
      </blockquote>

      <!-- TWO COLUMNS (FR+EN on both sides) -->
      <div v-else-if="b.type === 'two-col'" class="grid md:grid-cols-2 gap-6">
        <div class="space-y-2">
          <h3 v-if="b.left_title" class="font-semibold text-slate-900">{{ b.left_title }}</h3>
          <p v-if="b.left_fr" class="text-slate-800">{{ b.left_fr }}</p>
          <p v-if="b.left_en" class="text-sm text-slate-500">{{ b.left_en }}</p>
        </div>
        <div class="space-y-2">
          <h3 v-if="b.right_title" class="font-semibold text-slate-900">{{ b.right_title }}</h3>
          <p v-if="b.right_fr" class="text-slate-800">{{ b.right_fr }}</p>
          <p v-if="b.right_en" class="text-sm text-slate-500">{{ b.right_en }}</p>
        </div>
      </div>

      <!-- METRICS -->
      <div v-else-if="b.type === 'metrics'" class="grid sm:grid-cols-2 gap-4">
        <div
          v-for="(m, j) in b.items || []"
          :key="j"
          class="rounded-xl border border-slate-200 bg-white p-4"
        >
          <div class="text-2xl font-black text-slate-900">{{ m.value }}</div>
          <div class="text-sm text-slate-600 mt-1">{{ m.label }}</div>
        </div>
      </div>

      <!-- STACK / SERVICES LISTS -->
      <div v-else-if="b.type === 'stack' || b.type === 'services'" class="flex flex-wrap gap-2">
        <span
          v-for="(tag, j) in b.items || []"
          :key="j"
          class="px-2.5 py-1 rounded-full text-xs border border-slate-200 text-slate-700 bg-white"
        >{{ tag }}</span>
      </div>

      <!-- LINKS / CTAs -->
      <div v-else-if="b.type === 'links'" class="flex flex-wrap items-center gap-3">
        <a
          v-for="(lnk, j) in b.items || []"
          :key="j"
          :href="lnk.href"
          :target="lnk.external ? '_blank' : undefined"
          :rel="lnk.external ? 'noopener' : undefined"
          class="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900 font-medium"
        >
          {{ lnk.label }} <span aria-hidden>↗</span>
        </a>
      </div>

      <!-- VIDEO (YouTube/Vimeo/iframe) -->
      <div v-else-if="b.type === 'video'" class="rounded-2xl overflow-hidden border border-slate-200 bg-black">
        <div class="aspect-video">
          <iframe
            v-if="embedUrl(b.url)"
            :src="embedUrl(b.url)"
            title="Video"
            class="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            loading="lazy"
          />
        </div>
        <p v-if="b.caption_fr || b.caption_en" class="p-3 text-sm bg-white border-t border-slate-200">
          <span v-if="b.caption_fr" class="text-slate-700">{{ b.caption_fr }}</span>
          <span v-if="b.caption_en" class="text-slate-500"> — {{ b.caption_en }}</span>
        </p>
      </div>

      <!-- FALLBACK (unknown type) -->
      <div v-else class="rounded-lg border border-dashed border-slate-300 p-4 text-slate-500 text-sm">
        Type de bloc inconnu: <code>{{ b.type }}</code>
      </div>
    </section>
  </div>

  <p v-else class="text-slate-500">Aucun contenu pour cette étude.</p>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/* ========= Types ========= */
type MoodboardItem = {
  src: string
  alt?: string
  step?: number
  title?: string
  rationale?: string
  tags?: string[]
}

type MetricItem = { label: string; value: string }
type LinkItem = { label: string; href: string; external?: boolean }
type ImageLike = {
  src: string
  alt?: string
  caption_fr?: string
  caption_en?: string
  srcset?: string | string[] | Record<number, string>
  sizes?: string
}

/* Base fields shared by every block (fixes template typing for title/subtitle) */
type BaseBlock = {
  id?: string
  anchor?: string
  title?: string
  subtitle?: string
}

/* Union of all supported blocks, extending BaseBlock */
type Block =
  | (BaseBlock & { type: 'problem' | 'text'; body_fr?: string; body_en?: string; points?: string[] })
  | (BaseBlock & { type: 'moodboard'; items: MoodboardItem[] })
  | (BaseBlock & { type: 'results'; highlights: { icon?: string; text: string }[] })
  | (BaseBlock & { type: 'image' } & ImageLike)
  | (BaseBlock & { type: 'gallery'; images: ImageLike[] })
  | (BaseBlock & { type: 'quote' | 'pullquote'; quote_fr?: string; quote_en?: string; cite?: string })
  | (BaseBlock & { type: 'two-col'; left_title?: string; right_title?: string; left_fr?: string; left_en?: string; right_fr?: string; right_en?: string })
  | (BaseBlock & { type: 'metrics'; items: MetricItem[] })
  | (BaseBlock & { type: 'stack' | 'services'; items: string[] })
  | (BaseBlock & { type: 'links'; items: LinkItem[] })
  | (BaseBlock & { type: 'video'; url: string; caption_fr?: string; caption_en?: string })
  | (BaseBlock & { type: string; [k: string]: any })

type Study = {
  slug: string
  title: string
  year?: number | string
  hero?: { subtitle?: string }
  meta?: { description?: string; image?: string }
  blocks?: Block[]
}

/* ========= Props ========= */
const props = defineProps<{ study: Study }>()

/* ========= Data ========= */
const blocks = computed<Block[]>(() => props.study?.blocks || [])

/* ========= Helpers ========= */
function buildSrcset(val?: string | string[] | Record<number, string>): string | undefined {
  if (!val) return undefined
  if (typeof val === 'string') return val
  if (Array.isArray(val)) return val.join(', ')
  return Object.entries(val).map(([w, src]) => `${src} ${w}w`).join(', ')
}

function embedUrl(url?: string): string | '' {
  if (!url) return ''
  // YouTube
  const yt = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_\-]+)/i.exec(url)
  if (yt?.[1]) return `https://www.youtube.com/embed/${yt[1]}`
  // Vimeo
  const vm = /vimeo\.com\/(\d+)/i.exec(url)
  if (vm?.[1]) return `https://player.vimeo.com/video/${vm[1]}`
  // Fallback: trust provided URL if it’s an embeddable src
  return url
}
</script>

<style scoped>
code{background:rgba(148,163,184,.12); padding:.1rem .3rem; border-radius:.25rem}
</style>
