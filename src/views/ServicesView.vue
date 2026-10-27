<script setup>
import SiteLayout from '../components/SiteLayout.vue'
import PageHead from '../components/PageHead.vue'
import { usePage } from '../composables/useSite.js'
import services from '../content/services.js'

const page = usePage(services)
</script>

<template>
  <SiteLayout>
    <PageHead :image="page.banner.image" :eyebrow="page.banner.eyebrow" :title="page.banner.title" :lead="page.banner.lead" />
    <section>
      <div class="wrap">
        <div style="margin-top:14px">
          <div v-for="item in page.items" :key="item.no" style="padding:34px 0;border-bottom:1px solid var(--line)">
            <div style="display:flex;gap:22px;align-items:flex-start;flex-wrap:wrap">
              <div style="flex:none;width:52px;font-size:13px;font-weight:700;color:var(--blue);letter-spacing:.08em;padding-top:5px">{{ item.no }}</div>
              <div style="flex:1;min-width:280px">
                <h3 style="font-size:21px;margin-bottom:4px">{{ item.title }}</h3>
                <div style="font-size:12.5px;color:var(--ink3);letter-spacing:.03em;margin-bottom:6px">{{ item.en }}</div>
                <span class="tag" style="display:inline-block;font-size:12px;padding:3px 10px;border-radius:20px;background:var(--blue-l);color:var(--blue-d);font-weight:600">{{ item.tag }}</span>
                <p v-for="(paragraph, index) in item.paragraphs" :key="paragraph" :style="index === 0 ? 'margin-top:16px' : 'margin-bottom:0'">{{ paragraph }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="alt">
      <div class="wrap">
        <div class="sec-head">
          <div class="eyebrow">{{ page.delivery.eyebrow }}</div>
          <h2 class="sec">{{ page.delivery.title }}</h2>
          <p class="sec-sub">{{ page.delivery.sub }}</p>
        </div>
        <div class="flow">
          <div v-for="step in page.delivery.steps" :key="step.n" class="step">
            <div class="n">{{ step.n }}</div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.text }}</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="wrap">
        <div class="split">
          <div class="pic"><img :src="page.end.image" :alt="page.end.imageAlt" loading="lazy" decoding="async"></div>
          <div>
            <div class="eyebrow">{{ page.end.eyebrow }}</div>
            <h2 class="sec" style="font-size:24px">{{ page.end.title }}</h2>
            <p v-for="paragraph in page.end.paragraphs" :key="paragraph">{{ paragraph }}</p>
            <ul class="feat" style="margin-bottom:0">
              <li v-for="item in page.end.bullets" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
</template>
