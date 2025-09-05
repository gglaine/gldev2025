export default {
  slug: 'storyengines',
  title: 'StoryEngines',
  hero: {
    kicker: 'Étude de cas',
    title: 'Positionner une société de production en “crafted premium”',
    subtitle: 'Vision, identité, site et SEO — FR/EN'
  },
  blocks: [
    {
      type: 'problem',
      title: 'Contexte & objectifs',
      body_fr: 'Créer une identité premium sans ostentation…',
      body_en: 'Craft a premium, understated identity…'
    },

    // 👇 your moodboard snippet goes here
    {
      type: 'moodboard',
      title: 'Moodboard — itérations de logo',
      subtitle: 'Des premières pistes au monogramme final',
      items: [
        {
          src: '/cs/storyengines/logo-v1.png',
          alt: 'Piste 1',
          step: 1,
          title: 'Piste mécanique',
          rationale: 'Explorer une couronne/engrenage → évoquer précision et artisanat.',
          tags: ['monogram', 'mechanical', 'crown']
        },
        {
          src: '/cs/storyengines/logo-v2.png',
          alt: 'Piste 2',
          step: 2,
          title: 'Wordmark ciné',
          rationale: 'Kerning serré, rythme inspiré des intertitres.',
          tags: ['wordmark', 'kerning']
        },
        // … more logo variants …
      ]
    },

    {
      type: 'results',
      title: 'Résultats',
      highlights: [
        { icon: '✅', text: 'Identité clarifiée' },
        { icon: '🚀', text: 'Site en ligne en 3 semaines' }
      ]
    }
  ]
}
