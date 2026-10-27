<script setup>
import SiteLayout from '../components/SiteLayout.vue'
import PageHead from '../components/PageHead.vue'
import { usePage } from '../composables/useSite.js'
import partners from '../content/partners.js'

const page = usePage(partners)
</script>

<template>
  <SiteLayout>
    <PageHead :image="page.banner.image" :eyebrow="page.banner.eyebrow" :title="page.banner.title" :lead="page.banner.lead" />
    <section>
      <div class="wrap">
        <div class="prod">
          <div>
            <div class="eyebrow">{{ page.product.eyebrow }}</div>
            <h2 class="sec" style="font-size:26px">{{ page.product.title }}</h2>
            <p v-for="paragraph in page.product.paragraphs" :key="paragraph">{{ paragraph }}</p>
            <ul class="feat">
              <li v-for="item in page.product.features" :key="item.title"><strong>{{ item.title }}</strong>　{{ item.text }}</li>
            </ul>
          </div>
          <div class="shot"><img :src="page.product.image" :alt="page.product.imageAlt" loading="lazy" decoding="async"></div>
        </div>
      </div>
    </section>
    <section class="alt">
      <div class="wrap">
        <div class="sec-head">
          <div class="eyebrow">{{ page.offer.eyebrow }}</div>
          <h2 class="sec">{{ page.offer.title }}</h2>
          <p class="sec-sub">{{ page.offer.sub }}</p>
        </div>
        <div class="biz" style="grid-template-columns:repeat(2,1fr)">
          <div v-for="card in page.offer.cards" :key="card.no" class="biz-card">
            <div class="no">{{ card.no }}</div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.text }}</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="wrap">
        <div class="sec-head">
          <div class="eyebrow">{{ page.ecosystem.eyebrow }}</div>
          <h2 class="sec">{{ page.ecosystem.title }}</h2>
          <p class="sec-sub">{{ page.ecosystem.sub }}</p>
        </div>
        <div class="plogos">
          <div v-for="logo in page.ecosystem.logos" :key="logo.alt" class="it">
            <img :src="logo.src" :alt="logo.alt" loading="lazy" decoding="async">
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
</template>
