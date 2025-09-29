export default {
  slug: 'funcenter',
  title: 'Funcenter Lac du Der',
  hero: {
    kicker: 'Étude de cas',
    title: 'De la refonte technique à la refonte complète de l’interface',
    subtitle: 'Migration PHP → React → Vue, nouveau logo et nouvelle identité visuelle'
  },
  blocks: [
    {
      type: 'problem',
      title: 'Contexte & objectifs',
      body_fr: `Depuis 2020, j’accompagne Funcenter dans sa transition digitale. 
      Objectif : sortir d’un ancien site PHP peu maintenable, moderniser la base technique, puis harmoniser l’identité visuelle pour attirer un public local et international.`,
      body_en: `Since 2020, I’ve been supporting Funcenter in its digital transition. 
      The goal: move away from an outdated PHP site, modernize the technical foundation, and then align the visual identity to reach both local and international audiences.`
    },

    {
      type: 'timeline',
      title: 'Un projet en trois phases',
      steps: [
        {
          year: 2020,
          title: 'Reconstruction complète',
          body_fr: 'Création d’un nouveau site avec React-Static pour remplacer l’ancien PHP. Amélioration des performances et du déploiement.',
          body_en: 'Built a brand-new site using React-Static to replace the legacy PHP version. Improved performance and deployment.'
        },
        {
          year: 2024,
          title: 'Migration technique',
          body_fr: 'Portage vers Vue 3 + Vite + Tailwind après l’arrêt de React-Static. Nouvelle base technique stable et évolutive.',
          body_en: 'Migrated to Vue 3 + Vite + Tailwind after React-Static was deprecated. Provided a stable, future-proof foundation.'
        },
        {
          year: 2025,
          title: 'Refonte visuelle',
          body_fr: 'Création d’un nouveau logo, définition d’une palette de couleurs inspirée des activités nautiques et redesign complet de l’interface.',
          body_en: 'Designed a new logo, defined a vibrant palette inspired by water sports, and completely redrew the site’s interface.'
        }
      ]
    },

    {
      type: 'results',
      title: 'Résultats',
      highlights: [
        { icon: '✅', text: 'Identité unifiée (logo, palette, site)' },
        { icon: '⚡', text: 'Fondation technique pérenne avec Vue/Vite/Tailwind' },
        { icon: '📈', text: 'Trafic SEO en croissance constante (Search Console)' },
        { icon: '🌍', text: 'Meilleure accessibilité mobile et visibilité internationale' }
      ]
    }
  ]
}
