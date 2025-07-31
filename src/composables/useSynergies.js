import { computed } from 'vue'
import { synergyMap } from '../data/synergies.js'

export function useSynergies(selectedIds, allBricks) {
  const activeSynergies = computed(() =>
    synergyMap.filter(s => s.ids.every(id => selectedIds.value.includes(id)))
  )

  const potentialFOMO = computed(() => {
    const selectedSet = new Set(selectedIds.value)
    return synergyMap
      .filter(s => !s.ids.every(id => selectedSet.has(id)))
      .map(s => {
        const missing = s.ids.filter(id => !selectedSet.has(id))
        if (missing.length === 1 && s.ids.some(id => selectedSet.has(id))) {
          return {
            ...s,
            missingBrick: allBricks.find(b => b.id === missing[0])
          }
        }
        return null
      })
      .filter(Boolean)
  })

  return { activeSynergies, potentialFOMO }
}
