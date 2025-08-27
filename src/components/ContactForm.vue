<!-- src/components/ContactForm.vue -->
<template>
  <section class="max-w-2xl mx-auto px-6 py-16">
    <h1 class="text-3xl font-extrabold mb-2">Contact</h1>
    <p class="text-slate-600 mb-8">Parlez-moi de votre projet — réponse sous 24–48h ouvrées.</p>

    <form
      ref="formEl"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      data-netlify-hcaptcha="true"   
      novalidate
      @submit.prevent="onSubmit"
      class="space-y-5"
      aria-describedby="form-status"
    >
      <!-- Netlify requires this field in AJAX body too -->
      <input type="hidden" name="form-name" value="contact" />
      <!-- human dwell-time (filled after a delay) -->
      <input type="hidden" name="ts" :value="ts" />

      <!-- Honeypot: keep in DOM, off-screen, not display:none -->
      <input
        ref="hp"
        type="text"
        name="bot-field"
        tabindex="-1"
        autocomplete="off"
        aria-hidden="true"
        style="position:absolute; left:-10000px; top:auto; width:1px; height:1px; overflow:hidden;"
      />

      <!-- Name -->
      <div>
        <label class="block text-sm font-medium text-slate-700" for="name">Nom</label>
        <input
          id="name"
          v-model.trim="form.name"
          name="name"
          type="text"
          required
          autocomplete="name"
          :aria-invalid="errors.name ? 'true' : 'false'"
          class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
        />
        <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
      </div>

      <!-- Email -->
      <div>
        <label class="block text-sm font-medium text-slate-700" for="email">Email</label>
        <input
          id="email"
          v-model.trim="form.email"
          name="email"
          type="email"
          required
          autocomplete="email"
          :aria-invalid="errors.email ? 'true' : 'false'"
          class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
        />
        <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
      </div>

      <!-- Message -->
      <div>
        <label class="block text-sm font-medium text-slate-700" for="message">Message</label>
        <textarea
          id="message"
          v-model.trim="form.message"
          name="message"
          rows="5"
          required
          :aria-invalid="errors.message ? 'true' : 'false'"
          class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
        ></textarea>
        <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
      </div>

      <!-- CAPTCHA placeholder (hCaptcha or reCAPTCHA) -->
      <div data-netlify-hcaptcha="true"></div>
      <!-- If you prefer reCAPTCHA instead:
      <div data-netlify-recaptcha="true"></div>
      -->

      <!-- Actions -->
      <div class="pt-2 flex items-center gap-3">
        <button
          type="submit"
          :disabled="submitting"
          class="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-base font-semibold text-white
                 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700
                 disabled:opacity-60 disabled:cursor-not-allowed transition"
        >
          <svg v-if="submitting" xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
          </svg>
          <span v-if="!submitting">Envoyer</span>
          <span v-else>Envoi…</span>
        </button>

        <button
          type="button"
          class="text-sm text-slate-500 hover:text-slate-700 underline underline-offset-2"
          @click="resetForm"
          :disabled="submitting"
        >
          Réinitialiser
        </button>
      </div>

      <!-- Screen-reader live status -->
      <p id="form-status" class="sr-only" role="status" aria-live="polite">{{ srStatus }}</p>

      <!-- Inline feedback -->
      <p v-if="sent" class="text-sm text-emerald-700">
        Merci, votre message a bien été envoyé. Je reviens vers vous rapidement.
      </p>
      <p v-if="fatalError" class="text-sm text-red-600">
        Oups, l’envoi a échoué. Vous pouvez réessayer ou m’écrire directement :
        <a class="underline" :href="`mailto:${fallbackEmail}`">{{ fallbackEmail }}</a>.
      </p>
    </form>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

/** Config **/
const fallbackEmail = 'guillaulelaine2.0@gmail.com' // message d’urgence

/** State **/
const formEl = ref(null)
const hp = ref(null) // honeypot
const form = ref({ name: '', email: '', message: '' })
const errors = ref({ name: '', email: '', message: '' })
const submitting = ref(false)
const sent = ref(false)
const fatalError = ref('')
const srStatus = ref('')
const ts = ref('') // dwell-time token

/** Dwell-time (anti-bot) **/
onMounted(() => {
  const startedAt = Date.now()
  setTimeout(() => { ts.value = String(startedAt) }, 2500) // 2.5s min
})

/** Lightweight spam heuristics **/
const burnerDomains = ['tempmail','mailinator','guerrillamail','yopmail','trashmail','10minutemail']
function looksDisposable(email) {
  const d = (email.split('@')[1] || '').toLowerCase()
  return burnerDomains.some(b => d.includes(b))
}
function looksBottyName(name) {
  // catches blobs like "Securityihq", "Feedergez", etc. (not perfect, but helps)
  return (/^[a-z]{8,}$/i.test(name) && !/\s/.test(name)) || /^[a-z]{4,}\d{2,}$/i.test(name)
}

/** Validation **/
function validate() {
  errors.value = { name: '', email: '', message: '' }
  let ok = true

  const name = (form.value.name || '').trim()
  if (!name || name.length < 2 || looksBottyName(name)) {
    errors.value.name = 'Indiquez un nom réel.'
    ok = false
  }

  const email = (form.value.email || '').trim()
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
  if (!emailOk || looksDisposable(email)) {
    errors.value.email = 'Email non valide (pas d’adresse jetable).'
    ok = false
  }

  const message = (form.value.message || '').trim()
  if (!message || message.length < 30) {
    errors.value.message = 'Détaillez votre demande (≥ 30 caractères).'
    ok = false
  }

  return ok
}

function isHumanTime() {
  const started = Number(ts.value || 0)
  return started > 0 && (Date.now() - started) >= 2500
}

/** URL-encode FormData for Netlify AJAX */
function encodeFormData(fd) {
  const pairs = []
  for (const [k, v] of fd.entries()) {
    pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(String(v)))
  }
  return pairs.join('&')
}

/** Submit **/
async function onSubmit() {
  sent.value = false
  fatalError.value = ''
  srStatus.value = ''

  // Honeypot → pretend success
  if (hp.value && hp.value.value) {
    sent.value = true
    srStatus.value = 'Message envoyé.'
    return
  }
  if (!validate()) {
    srStatus.value = 'Corrigez les champs en erreur.'
    return
  }
  if (!isHumanTime()) {
    srStatus.value = 'Un instant…'
    return
  }

  submitting.value = true
  try {
    const fd = new FormData(formEl.value)
    // Ensure key fields are present in body
    if (!fd.get('form-name')) fd.set('form-name', 'contact')
    if (!fd.get('ts')) fd.set('ts', ts.value)

    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeFormData(fd)
    })
    if (!res.ok) throw new Error('Network error')

    sent.value = true
    srStatus.value = 'Message envoyé.'
    form.value = { name: '', email: '', message: '' }

    // Reset captcha widgets if present
    if (window.hcaptcha?.reset) window.hcaptcha.reset()
    if (window.grecaptcha?.reset) window.grecaptcha.reset()
  } catch (e) {
    fatalError.value = 'Impossible d’envoyer le formulaire pour le moment.'
    srStatus.value = 'Échec de l’envoi.'
  } finally {
    submitting.value = false
  }
}

function resetForm(clearStatus = true) {
  form.value = { name: '', email: '', message: '' }
  errors.value = { name: '', email: '', message: '' }
  if (hp.value) hp.value.value = ''
  if (clearStatus) {
    sent.value = false
    fatalError.value = ''
    srStatus.value = ''
  }
}
</script>
