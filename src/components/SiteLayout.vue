<script setup>
import SiteHeader from './SiteHeader.vue'
import SiteFooter from './SiteFooter.vue'
import CtaBand from './CtaBand.vue'

defineProps({
  cta: { type: Boolean, default: true },
  ctaCopy: { type: Object, default: null },
})
</script>

<template>
  <SiteHeader />
  <slot />
  <CtaBand v-if="cta" :copy="ctaCopy" />
  <SiteFooter />
</template>
