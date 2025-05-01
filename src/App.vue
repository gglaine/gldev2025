<template>
  <!-- Hero Section -->
  <section class="hero w-full h-screen flex flex-col justify-center items-center text-white text-center relative bg-black overflow-hidden">
    <ParticlesBackground class="absolute inset-0 z-0" />
    <div class="relative z-10 px-6 max-w-4xl mx-auto">
      <h1 class="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-blue-500 to-purple-600 drop-shadow-lg">
        Bonjour, moi c’est <span class="text-cyan-400">gUI</span>
      </h1>
      <p class="mt-6 text-xl sm:text-2xl text-gray-200 font-light tracking-wide max-w-xl mx-auto">
        Designer UI, développeur front-end & créatif hybride. J’aide les marques, startups et studios à donner vie à leurs idées avec du code, du design, et un soupçon d’IA.
      </p>
    </div>
    <a
      href="#contact"
      class="mt-12 sm:mt-20 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 z-10 animate-bounce"
    >
      🚀 Discutons de votre projet
    </a>
  </section>

  <!-- À propos -->
  <section class="bg-gray-900 text-white py-20 px-6">
    <div class="max-w-4xl mx-auto text-center space-y-6">
      <h2 class="text-4xl font-bold">Un profil hybride au service de vos idées</h2>
      <p class="text-lg text-gray-300">
        Je combine <strong>design, développement</strong> et <strong>technologies créatives</strong> pour transformer vos idées en produits digitaux uniques.
        Que ce soit pour une landing page percutante, une interface intuitive, une stratégie IA ou une animation qui capte l’attention, je vous accompagne de la discovery à la livraison.
      </p>
    </div>
  </section>

  <!-- Offres spécialisées -->
  <section class="bg-black text-white py-20 px-6">
    <div class="max-w-5xl mx-auto space-y-16">
      <h2 class="text-3xl font-bold text-center">Ce que je peux faire pour vous</h2>
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <h3 class="text-xl font-semibold mb-2">Automatisations & IA</h3>
          <p class="text-gray-300">Scripts personnalisés, intégration d'outils IA (ChatGPT, Stable Diffusion, Whisper) pour booster vos workflows et votre contenu.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">E-commerce artisanal</h3>
          <p class="text-gray-300">Sites Shopify ou sur mesure (Vue/Stripe/Firebase), pensés pour la conversion, l'esthétique et l'agilité de gestion.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Montage & vidéo</h3>
          <p class="text-gray-300">Motion design, montage immersif, voix off, deepfakes, reels, habillage vidéo et narrations envoû tantes pour vos contenus sociaux ou produits.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Créativité éditoriale</h3>
          <p class="text-gray-300">Idéation de concepts de campagne, direction artistique, textes et storytelling sur-mesure pour marquer les esprits.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Projets -->
<!-- Projets -->
<section class="bg-gray-900 py-20 px-6 text-white">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">Projets récents</h2>
    <div class="grid md:grid-cols-3 gap-6">

      <div class="bg-gray-800 rounded-lg p-6 shadow-md hover:scale-105 transition">
        <img src="/images/pototop-snap.png" alt="Pototop" class="mb-4 rounded" />
        <h3 class="text-xl font-semibold mb-2">Pototop.fr <span class="text-sm text-gray-400">(2025)</span></h3>
        <p class="text-sm text-gray-300">
          Création d’un mini-site vitrine, montage vidéo, stratégie réseaux sociaux (Instagram), accompagnement contenu et image.
        </p>
      </div>

      <div class="bg-gray-800 rounded-lg p-6 shadow-md hover:scale-105 transition">
        <img src="/images/antishirt-snap.png" alt="AntiShirt" class="mb-4 rounded" />
        <h3 class="text-xl font-semibold mb-2">AntiShirt.fr <span class="text-sm text-gray-400">(2025)</span></h3>
        <p class="text-sm text-gray-300">
          Micro-boutique en ligne développée avec Vue, Firestore & Stripe. Direction artistique, développement front, automatisations IA.
        </p>
      </div>

      <div class="bg-gray-800 rounded-lg p-6 shadow-md hover:scale-105 transition">
        <img src="/images/mediaclasse-snap.png" alt="MediaClasse" class="mb-4 rounded" />
        <h3 class="text-xl font-semibold mb-2">MediaClasse.fr <span class="text-sm text-gray-400">(2016)</span></h3>
        <p class="text-sm text-gray-300">
          Application fullstack co-développée chez Le Wagon en Ruby on Rails. Aujourd’hui, site très populaire avec +120k abonnés YouTube.
        </p>
      </div>

      <div class="bg-gray-800 rounded-lg p-6 shadow-md hover:scale-105 transition">
        <img src="/images/funcenter-snap.png" alt="Fun Center" class="mb-4 rounded" />
        <h3 class="text-xl font-semibold mb-2">Fun Center <span class="text-sm text-gray-400">(2020–2025)</span></h3>
        <p class="text-sm text-gray-300">
          Site vitrine moderne pour centre nautique. Plusieurs refontes, ajout de vidéo d’accueil, intégration Tailwind & système de réservation.
        </p>
      </div>

      <div class="bg-gray-800 rounded-lg p-6 shadow-md hover:scale-105 transition">
        <img src="/images/storia-snap.png" alt="Storia TV" class="mb-4 rounded" />
        <h3 class="text-xl font-semibold mb-2">Storia Télévision <span class="text-sm text-gray-400">(2018)</span></h3>
        <p class="text-sm text-gray-300">
          Conception et déploiement du premier site officiel pour le groupe audiovisuel. Design original, site responsive, hébergement inclus.
        </p>
      </div>

      <div class="bg-gray-800 rounded-lg p-6 shadow-md hover:scale-105 transition">
        <img src="/images/slaps-snap.png" alt="Slaps" class="mb-4 rounded" />
        <h3 class="text-xl font-semibold mb-2">Slaps <span class="text-sm text-gray-400">(2017)</span></h3>
        <p class="text-sm text-gray-300">
          Refonte complète du site et ajout de nouvelles fonctionnalités. Travail de design, intégration responsive et SEO technique.
        </p>
      </div>

    </div>
  </div>
</section>


  <!-- Témoignages -->
  <section class="bg-black text-white py-20 px-6">
    <div class="max-w-4xl mx-auto text-center space-y-10">
      <h2 class="text-3xl font-bold">Ce qu’on dit de moi</h2>
      <blockquote class="text-lg italic text-gray-300">"Un travail exceptionnel, à l’écoute et super réactif !" — <span class="text-white font-medium">Mathieu (StoryEngines)</span></blockquote>
      <blockquote class="text-lg italic text-gray-300">"Pleinement satisfait du travail de Guillaume, nous collaborons depuis 4ans et souhaitons bien évidemment poursuivre sur cette voie" — <span class="text-white font-medium">Benjamin (funcenter-lacduder)</span></blockquote>
      <blockquote class="text-lg italic text-gray-300">"Nous avons entièrement refait notre site internet avec l'aide de Guillaume. Il a été très réactif et compétent.
        Je recommande !" — <span class="text-white font-medium">Tancrède (Slaps)</span></blockquote>
    </div>
  </section>

  <!-- Process -->
  <section class="bg-gray-950 text-white py-20 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-12">Comment je travaille</h2>
      <div class="grid md:grid-cols-4 gap-6 text-left text-sm text-gray-300">
        <div><h3 class="text-white font-semibold mb-2">1. Discovery</h3><p>Comprendre vos besoins, vos clients, votre vision.</p></div>
        <div><h3 class="text-white font-semibold mb-2">2. Prototype</h3><p>Créer des wireframes ou des maquettes claires et engageantes.</p></div>
        <div><h3 class="text-white font-semibold mb-2">3. Production</h3><p>Développer un produit fonctionnel, rapide et responsive.</p></div>
        <div><h3 class="text-white font-semibold mb-2">4. Livraison</h3><p>Optimiser, livrer, accompagner, mesurer les résultats.</p></div>
      </div>
    </div>
  </section>



<!-- Contact -->
<section id="contact" class="bg-gradient-to-br from-gray-950 via-black to-gray-900 py-20 px-6 text-white">
  <div class="max-w-2xl w-full mx-auto relative">
    
    <!-- Message de succès -->
    <div
      v-if="success"
      class="absolute top-0 left-0 right-0 bg-green-500 text-white text-center py-3 rounded-t-2xl z-10 shadow-lg"
    >
      🎉 Merci ! Votre message a bien été envoyé.
    </div>
<!-- Formulaire de contact -->
<form 
  v-else
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="?success=true"
  class="bg-white/5 w-full backdrop-blur-lg shadow-2xl rounded-2xl p-8 space-y-6 border border-white/10"
>
  <!-- Champs cachés requis par Netlify -->
  <input type="hidden" name="form-name" value="contact" />
  <input type="text" name="bot-field" style="display:none" />

  <!-- Titre et description -->
  <div class="text-center space-y-2">
    <h2 class="text-3xl font-extrabold text-white">Discutons de votre projet</h2>
    <p class="text-gray-300 text-sm">Un besoin, une idée, une envie de collaborer ? Je vous écoute.</p>
  </div>

  <!-- Champs du formulaire -->
  <div class="space-y-4">
    <div>
      <label class="block mb-1 text-sm font-medium text-gray-300" for="name">Votre nom</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        placeholder="Jean Dupont"
        class="w-full p-3 bg-white/10 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
    </div>

    <div>
      <label class="block mb-1 text-sm font-medium text-gray-300" for="email">Adresse e-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="vous@startup.com"
        class="w-full p-3 bg-white/10 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
    </div>

    <div>
      <label class="block mb-1 text-sm font-medium text-gray-300" for="message">Votre message</label>
      <textarea
        id="message"
        name="message"
        required
        rows="5"
        placeholder="Parlez-moi de votre projet, vos besoins ou vos idées."
        class="w-full p-3 bg-white/10 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
      ></textarea>
    </div>
  </div>

  <!-- Bouton -->
  <button
    type="submit"
    class="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 rounded-md transition duration-300 transform hover:scale-105"
  >
    ✉️ Envoyer le message
  </button>
</form>

  </div>
</section>



</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import InkText from './components/InkText.vue';
import ParticlesBackground from './components/ParticlesBackground.vue';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const portfolioItems = ref([
  { title: "Projet 1", image: "/images/slaps-snap.png" },
  { title: "Projet 2", image: "/images/storia-snap.png" },
  { title: "Projet 3", image: "/images/funcenter-snap.png" },
]);

const testimonials = ref([
  { quote: "Un travail exceptionnel, à l'écoute et super réactif !", author: "Mathieu" },
  { quote: "Design impeccable et une vraie maîtrise du front-end.", author: "Benjamin" },
  { quote: "Un site moderne et performant, je recommande !", author: "Tancrède" },
]);

const storyTimeline = ref([
  {
    title: 'Une Vision, Une Expérience',
    description: `Chaque projet est unique. Mon objectif : transformer vos idées en expériences 
    digitales percutantes. Design, vidéo, contenu—tout est pensé pour capter l’attention et 
    marquer les esprits.`,
    details: [
      "Création de designs sur-mesure avec Figma pour une précision parfaite.",
      "Développement front-end fluide et réactif pour une expérience utilisateur optimale.",
      "Intégration de contenus multimédias (vidéos, animations) pour un impact maximal."
    ],
    skills: [
      { name: "Web Design"},
      { name: "UX/UI Design"},
      { name: "Prototyping" },
      { name: "Wireframing" }
    ],
    tools: [
      {
        name: "Figma",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" width="16" height="16" />'
      },
      {
        name: "Sketch",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg" width="16" height="16" />'
      },
      {
        name: "Adobe XD",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-plain.svg" width="16" height="16" />'
      }
    ]
  },
  {
    title: 'Web Design & Développement',
    description: `Un bon design ne se limite pas à l’esthétique. J’allie créativité et ergonomie
    pour des interfaces intuitives qui convertissent.`,
    details: [
      "Designs modernes et épurés, adaptés à votre identité de marque.",
      "Optimisation de l’expérience utilisateur (UX) pour une navigation fluide.",
      "Interfaces responsive et accessibles sur tous les appareils.",
      "Focus sur la conversion : boutons clairs, parcours utilisateur simplifié."
    ],
    skills: [
      {
        name: "Figma",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" width="16" height="16" />'
      },
      {
        name: "HTML",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width="16" height="16" />'
      },
      {
        name: "CSS",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width="16" height="16" />'
      },
      {
        name: "JavaScript",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="16" height="16" />'
      },
      {
        name: "Responsive Design",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width="16" height="16" />'
      }
    ]
  },
  {
    title: 'Vidéo & IA Créative',
    description: `Rien ne capte l’attention comme la vidéo. Montage, animation, IA—je fusionne art et 
    technologie pour des contenus innovants et immersifs.`,
    details: [
      "Création de vidéos explicatives, promotionnelles ou animées.",
      "Utilisation d’outils IA pour des effets visuels innovants.",
      "Montage professionnel pour un rendu cinématographique.",
      "Intégration de vidéos interactives pour engager votre audience."
    ],
    skills: [
      { name: "Adobe Premiere Pro" },
      { name: "After Effects" },
      { name: "Blender" },
      { name: "AI Tools (DALL-E, MidJourney)" },
      { name: "Video Editing" },
      { name: "Motion Graphics" }
    ]
  },
  {
    title: 'Mon Processus',
    description: `J’écoute, je conçois, je teste, je peaufine. Une approche sur-mesure, où chaque détail
    compte pour créer des interfaces fluides, engageantes et mémorables.`,
    details: [
      "Écoute active de vos besoins et objectifs pour une compréhension approfondie.",
      "Conception de wireframes et prototypes pour valider les idées rapidement.",
      "Tests utilisateurs pour garantir une expérience intuitive et efficace.",
      "Itérations et ajustements pour un résultat parfait."
    ],
    skills: [
      { name: "Design Thinking" },
      { name: "User Research" },
      { name: "Agile Methodology" },
      { name: "Prototyping" },
      { name: "Usability Testing" }
    ],
    tools: [
      {
        name: "Trello",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg" width="16" height="16" />'
      },
      {
        name: "Jira",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" width="16" height="16" />'
      }
    ]
  },
  {
    title: 'Envie De Collaborer ?',
    description: `Un projet en tête ? Parlons-en. Ensemble, transformons votre vision en une expérience 
    digitale inoubliable.`,
    details: [
      "Contactez-moi pour une consultation gratuite.",
      "Échangeons sur vos objectifs et vos idées.",
      "Je vous propose une solution sur-mesure adaptée à vos besoins.",
      "Travaillons ensemble pour créer quelque chose d’unique et d’impactant."
    ]
  }
]);

// This will collect each "story-section" DOM element
const storyRefs = ref([]);

// Success message logic
const success = ref(false);
const showSuccess = ref(false);
onMounted(() => {

  // Detect ?success=true in URL
  if (window.location.search.includes('success=true')) {
    success.value = true;
    showSuccess.value = true;

    // After 3s → fade out
    setTimeout(() => {
      showSuccess.value = false;
    }, 3000);

    // After 4s → remove `?success=true` from URL
    setTimeout(() => {
      const url = new URL(window.location);
      url.searchParams.delete('success');
      window.history.replaceState({}, '', url);
    }, 4000);
  }

  storyRefs.value.forEach((section) => {
    const heading = section.querySelector('h2');
    const paragraph = section.querySelector('p');
    const skillBoxes = section.querySelectorAll('.skills span');
    const toolBoxes = section.querySelectorAll('.tools-list span');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=100%', // Adjust this to control how long it's pinned
        pin: true,      // 👈 this is the magic!
        scrub: true,    // allows the scroll to control animation progress
        // markers: true, // enable for debugging
      }
    });

    tl.from(section, {
      opacity: 0,
      y: 30,
      duration: 1.0
    })
      .from(heading, {
        opacity: 0,
        y: 20,
        duration: 0.8
      })
      .from(paragraph, {
        opacity: 0,
        y: 20,
        duration: 0.8
      }, '-=0.4')
      .from(skillBoxes, {
        opacity: 0,
        y: 10,
        stagger: 0.2,
        duration: 0.5
      }, '-=0.4')
      .from(toolBoxes, {
        opacity: 0,
        y: 10,
        stagger: 0.2,
        duration: 0.5
      }, '-=0.4');
  });
});


</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
}

.mask-text {
  -webkit-mask-image: linear-gradient(to right, transparent 50%, black 100%);
  mask-image: linear-gradient(to right, transparent 0%, black 10%);
  -webkit-mask-clip: text;
  mask-clip: text;
  -webkit-mask-composite: source-out;
  mask-composite: exclude;
  display: inline-block;
}

.animate-fade-in {
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.story-section {
  min-height: 100vh;
  background-color: #1f2937;
}

.portfolio img {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.testimonials div {
  transition: box-shadow 0.3s ease;
}

.contact input,
.contact textarea {
  transition: box-shadow 0.3s ease;
}
</style>
