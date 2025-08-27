<template>
  <ProjectLivePreview
    v-bind="project"
    :devices="project.devices || ['desktop','mobile']"
    :aspect="project.aspect || '16/10'"
    :lazy="true"
    :openOnClick="true"
  />
</template>

<script setup>
import ProjectLivePreview from '../components/ProjectLivePreview.vue'

const props = defineProps({
  // This assumes you're passing each project as a full object
  project: {
    type: Object,
    required: true
  }
})
</script>
