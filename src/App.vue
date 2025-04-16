<template>
  <!-- Hero Section -->
  <section class="hero w-full h-screen flex flex-col justify-center items-center text-white text-center relative overflow-hidden">
    <div class="relative z-20 max-w-8xl px-8">
      <h1 class="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-green-500 mask-text animate-fade-in">
        Hello, I'm <span class="text-cyan-400">gUI</span>
      </h1>
      <h3 class="mt-4 text-xl font-light">I design. I build. I craft digital experiences.</h3>
    </div>
    <a href="#contact" class="absolute bottom-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 animate-bounce">
      Let’s Work Together
    </a>
  </section>

  <!-- About Section -->
  <section class="bg-gray-900 py-24 text-white text-left px-6 md:px-12 max-w-4xl mx-auto">
    <h2 class="text-4xl font-bold mb-6">Mon approche</h2>
    <p class="text-xl mb-4">
      Je donne forme aux idées. Je crée des expériences numériques à la fois utiles, élégantes et engageantes. J’aide les marques et les équipes à transformer des visions complexes en produits simples, performants et humains.
    </p>
    <p class="text-xl mb-4">
      Mon obsession ? Le bon équilibre entre technologie et émotion. Mon approche ? Créative, technique, rigoureuse. Mon moteur ? L’envie de bâtir des choses qui ont un vrai impact.
    </p>
  </section>

  <!-- Current Focus -->
  <section class="bg-gray-800 py-24 text-white text-center">
    <h2 class="text-4xl font-bold mb-6">Ce que je fais en ce moment</h2>
    <p class="text-xl mb-2">🎯 Freelance UI/UX & Creative Dev pour des startups ambitieuses</p>
    <p class="text-xl mb-2">🧠 Recherche sur les interfaces augmentées et l’IA générative</p>
    <p class="text-xl">🎥 Contenu vidéo & projets expérimentaux autour du design, du code et de la narration</p>
  </section>

  <!-- Story Timeline -->
  <section v-for="(story, index) in storyTimeline" :key="index" class="story-section h-screen flex flex-col justify-center items-start text-white p-12 relative bg-gray-800">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-5xl font-extrabold mb-8">
        <InkText :targetText="story.title" :fadeSpeed="1000" :delay="0" gradientClass="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" />
      </h2>
      <p class="text-2xl font-light mb-12">{{ story.description }}</p>
      <div class="mb-8">
        <div class="flex flex-wrap gap-2 skills">
          <span v-for="(skill, j) in story.skills" :key="j" class="text-cyan-500 border border-cyan-400 px-3 py-1 rounded-lg text-sm flex items-center gap-2 hover:bg-cyan-400 hover:text-white transition-colors">
            <span>#{{ skill.name }}</span>
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="testimonials py-24 bg-gray-800 text-white">
    <div class="container mx-auto px-6">
      <h2 class="text-5xl font-bold text-left mb-12">Ils Parlent de Moi</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p class="text-lg italic">"{{ testimonial.quote }}"</p>
          <div class="mt-4 font-bold text-lg">{{ testimonial.author }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact py-24 bg-gray-900 text-white">
    <div class="container mx-auto px-6 text-left">
      <h2 class="text-5xl font-bold mb-6">Discutons de votre projet</h2>
      <p class="text-lg font-light mb-6">Prêt à transformer votre idée en réalité ? Contactez-moi.</p>
      <form class="max-w-lg mx-auto">
        <input type="text" placeholder="Nom" class="w-full p-3 mb-4 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all" />
        <input type="email" placeholder="Email" class="w-full p-3 mb-4 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all" />
        <textarea placeholder="Parlez-moi de votre projet..." class="w-full p-3 mb-4 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"></textarea>
        <button type="submit" class="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition">
          Envoyer
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

onMounted(() => {
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
