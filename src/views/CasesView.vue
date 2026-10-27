<script setup>
import SiteLayout from '../components/SiteLayout.vue'
import PageHead from '../components/PageHead.vue'
import { usePage } from '../composables/useSite.js'
import cases from '../content/cases.js'

const page = usePage(cases)
</script>

<template>
  <SiteLayout>
    <PageHead :image="page.banner.image" :eyebrow="page.banner.eyebrow" :title="page.banner.title" :lead="page.banner.lead" />
    <section>
      <div class="wrap">
        <div class="cases" style="grid-template-columns:1fr;gap:22px">
          <div v-for="item in page.items" :key="item.who" class="case" style="display:grid;grid-template-columns:220px 1fr;gap:38px;align-items:start">
            <div>
              <div class="who">{{ item.who }}</div>
              <div class="big">{{ item.big }}<small>{{ item.small }}</small></div>
            </div>
            <div>
              <p v-for="(point, index) in item.points" :key="point.label" :style="index === item.points.length - 1 ? 'margin-bottom:0' : ''">
                <strong>{{ point.label }}</strong>{{ point.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="alt">
      <div class="wrap">
        <div class="split">
          <div class="pic"><img :src="page.delivery.image" :alt="page.delivery.imageAlt" loading="lazy" decoding="async"></div>
          <div>
            <div class="eyebrow">{{ page.delivery.eyebrow }}</div>
            <h2 class="sec" style="font-size:24px">{{ page.delivery.title }}</h2>
            <p v-for="paragraph in page.delivery.paragraphs" :key="paragraph">{{ paragraph }}</p>
            <ul class="feat" style="margin-bottom:0">
              <li v-for="item in page.delivery.bullets" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
</template>
