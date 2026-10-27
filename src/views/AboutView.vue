<script setup>
import SiteLayout from '../components/SiteLayout.vue'
import PageHead from '../components/PageHead.vue'
import IconCards from '../components/IconCards.vue'
import { usePage, useSite } from '../composables/useSite.js'
import { advantages } from '../content/common.js'
import about from '../content/about.js'

const page = usePage(about)
const { locale } = useSite()
</script>

<template>
  <SiteLayout>
    <PageHead :image="page.banner.image" :eyebrow="page.banner.eyebrow" :title="page.banner.title" :lead="page.banner.lead" />
    <section>
      <div class="wrap narrow rich">
        <p v-for="paragraph in page.intro" :key="paragraph" v-html="paragraph"></p>
      </div>
    </section>
    <section class="alt">
      <div class="wrap">
        <div class="sec-head mid">
          <div class="eyebrow">{{ locale === 'zh' ? 'At a Glance' : 'At a Glance' }}</div>
          <h2 class="sec">{{ locale === 'zh' ? '公司概况' : 'Company Overview' }}</h2>
        </div>
        <div class="stats" style="grid-template-columns:repeat(3,1fr);border-radius:12px;overflow:hidden;border:1px solid var(--line)">
          <div v-for="item in page.stats" :key="item.label">
            <div class="n">{{ item.value }}<small v-if="item.suffix">{{ item.suffix }}</small></div>
            <div class="l">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="wrap">
        <div class="sec-head">
          <div class="eyebrow">Advantage</div>
          <h2 class="sec">{{ locale === 'zh' ? '服务优势' : 'Why Clients Choose Us' }}</h2>
        </div>
        <IconCards :items="advantages[locale]" />
      </div>
    </section>
    <section class="alt">
      <div class="wrap">
        <div class="sec-head">
          <div class="eyebrow">{{ page.industries.eyebrow }}</div>
          <h2 class="sec">{{ page.industries.title }}</h2>
          <p class="sec-sub">{{ page.industries.sub }}</p>
        </div>
        <div class="inds"><span v-for="item in page.industries.items" :key="item">{{ item }}</span></div>
      </div>
    </section>
    <section class="alt">
      <div class="wrap">
        <div class="split">
          <div class="pic"><img :src="page.work.image" :alt="page.work.imageAlt" loading="lazy" decoding="async"></div>
          <div>
            <div class="eyebrow">{{ page.work.eyebrow }}</div>
            <h2 class="sec" style="font-size:24px">{{ page.work.title }}</h2>
            <p v-for="paragraph in page.work.paragraphs" :key="paragraph">{{ paragraph }}</p>
            <ul class="feat" style="margin-bottom:0">
              <li v-for="item in page.work.bullets" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <figure class="widepic">
          <img :src="page.work.wide" :alt="page.work.wideAlt" loading="lazy" decoding="async">
          <figcaption>{{ page.work.caption }}</figcaption>
        </figure>
      </div>
    </section>
  </SiteLayout>
</template>
