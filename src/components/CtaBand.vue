<script setup>
import { computed } from 'vue'
import { useSite } from '../composables/useSite.js'

const props = defineProps({
  copy: { type: Object, default: null },
})
const { copy: site, to } = useSite()
const text = computed(() => props.copy || site.value.cta)
</script>

<template>
  <section class="tight">
    <div class="wrap">
      <div class="cta">
        <div>
          <h2>{{ text.title }}</h2>
          <p>{{ text.text }}</p>
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap">
          <router-link class="btn btn-p" :to="to('contact')">{{ text.primary }}</router-link>
          <a class="btn btn-w" href="tel:18618276535">{{ text.secondary }}</a>
        </div>
      </div>
    </div>
  </section>
</template>
