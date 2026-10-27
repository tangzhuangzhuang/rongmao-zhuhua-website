<script setup>
import { useSite } from '../composables/useSite.js'

defineProps({
  image: { type: String, required: true },
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  lead: { type: String, default: '' },
  current: { type: String, default: '' },
  parent: { type: Object, default: null },
  titleStyle: { type: String, default: '' },
})

const { copy, to } = useSite()
</script>

<template>
  <div class="phead">
    <div class="ph" :style="{ backgroundImage: `url(${image})` }"></div>
    <div class="veil"></div>
    <div class="wrap">
      <div class="crumb">
        <router-link :to="to('home')">{{ copy.nav[0].label }}</router-link>
        /
        <template v-if="parent">
          <router-link :to="parent.to">{{ parent.label }}</router-link>
          /
        </template>
        {{ current || title }}
      </div>
      <div class="eyebrow">{{ eyebrow }}</div>
      <h1 :style="titleStyle">{{ title }}</h1>
      <p v-if="lead">{{ lead }}</p>
    </div>
  </div>
</template>
