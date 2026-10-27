<script setup>
import { icons } from '../content/common.js'

defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <div class="adv">
    <div v-for="item in items" :key="item.title" class="adv-card">
      <div class="ic" v-html="icons[item.icon]"></div>
      <h3>{{ item.title }}</h3>
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>
