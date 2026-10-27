<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useSite } from '../composables/useSite.js'

const open = ref(false)
const route = useRoute()
const { copy, to, otherLocalePath, isOn, locale } = useSite()
const logo = '/assets/img/logo.png'
const srcset = '/assets/img/logo@2x.png 2x, /assets/img/logo@3x.png 3x, /assets/img/logo@4x.png 4x'

function close() {
  open.value = false
}
</script>

<template>
  <header class="site">
    <div class="wrap">
      <router-link class="brand" :to="to('home')" @click="close">
        <img class="mark" :src="logo" :srcset="srcset" :alt="copy.logoAlt" width="119" height="38">
        <span v-if="copy.brandText" class="bt"><b>{{ copy.brandText }}</b></span>
      </router-link>
      <nav class="main" id="nav" :class="{ open }">
        <router-link v-for="item in copy.nav" :key="item.name" :to="to(item.name)" :class="{ on: isOn(item.name) }" @click="close">{{ item.label }}</router-link>
      </nav>
      <div class="head-cta">
        <div class="lang-switch">
          <router-link :to="locale === 'zh' ? (route.path === '/' ? '/index.html' : route.path) : otherLocalePath" :class="{ on: locale === 'zh' }">中</router-link>
          <router-link :to="locale === 'en' ? route.path : otherLocalePath" :class="{ on: locale === 'en' }">EN</router-link>
        </div>
        <div class="head-tel"><small>{{ copy.hotline }}</small>{{ copy.phone }}</div>
        <router-link class="btn btn-p" :to="to('contact')">{{ copy.plan }}</router-link>
      </div>
      <button class="burger" type="button" :aria-label="copy.menu" @click="open = !open">
        <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true"><path d="M1 1h16M1 7h16M1 13h16" stroke="#16202E" stroke-width="1.8" stroke-linecap="round"/></svg>
      </button>
    </div>
  </header>
</template>
