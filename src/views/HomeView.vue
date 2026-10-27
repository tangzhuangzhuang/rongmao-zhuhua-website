<script setup>
import SiteLayout from '../components/SiteLayout.vue'
import IconCards from '../components/IconCards.vue'
import { usePage, useSite } from '../composables/useSite.js'
import home from '../content/home.js'
import { advantages, strengths } from '../content/common.js'

const page = usePage(home)
const { locale, to } = useSite()
const strengthItems = () => strengths[locale.value]
const advantageItems = () => advantages[locale.value]
</script>

<template>
  <SiteLayout>
    <div class="hero">
      <div class="ph"></div>
      <div class="veil"></div>
      <div class="wrap">
        <div class="eyebrow" style="margin-bottom:16px;color:#8FD8B4">{{ page.hero.eyebrow }}</div>
        <h1>{{ page.hero.titleBefore }}<em>{{ page.hero.titleEm }}</em>{{ page.hero.titleAfter }}<br>{{ page.hero.titleLine2 }}</h1>
        <div class="en">{{ page.hero.en }}</div>
        <p class="lead">{{ page.hero.lead }}</p>
        <div class="acts">
          <router-link class="btn btn-p" :to="to('contact')">{{ page.hero.primary }}</router-link>
          <router-link class="btn btn-w" :to="to('services')">{{ page.hero.secondary }}</router-link>
        </div>
      </div>
    </div>
    <section class="tight">
      <div class="wrap">
        <div class="stats" style="grid-template-columns:repeat(5,1fr);border-radius:12px;overflow:hidden;border:1px solid var(--line)">
          <div v-for="item in page.stats" :key="item.label">
            <div class="n">{{ item.value }}<small v-if="item.suffix">{{ item.suffix }}</small></div>
            <div class="l">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </section>
    <section class="alt">
      <div class="wrap">
        <div class="sec-head">
          <div class="eyebrow">{{ page.business.eyebrow }}</div>
          <h2 class="sec">{{ page.business.title }}</h2>
          <p class="sec-sub">{{ page.business.sub }}</p>
        </div>
        <div class="biz">
          <div v-for="card in page.business.cards" :key="card.no" class="biz-card">
            <div class="no">{{ card.no }}</div>
            <h3>{{ card.title }}</h3>
            <div class="en">{{ card.en }}</div>
            <p>{{ card.text }}</p>
            <span class="tag">{{ card.tag }}</span>
          </div>
        </div>
        <div class="photoband">
          <img src="/assets/img/ai-tablet.jpg" :alt="page.business.imageAlt" loading="lazy" decoding="async">
        </div>
      </div>
    </section>
    <section>
      <div class="wrap">
        <div class="prod">
          <div>
            <div class="eyebrow">{{ page.flagship.eyebrow }}</div>
            <h2 class="sec" style="font-size:26px">{{ page.flagship.title }}</h2>
            <p style="font-size:13px;color:var(--ink3);letter-spacing:.03em;margin-bottom:16px">{{ page.flagship.kicker }}</p>
            <p>{{ page.flagship.lead }}</p>
            <ul class="feat">
              <li v-for="item in page.flagship.features" :key="item.title"><strong>{{ item.title }}</strong>　{{ item.text }}</li>
            </ul>
            <router-link class="btn btn-p" :to="to('solution')">{{ page.flagship.cta }}</router-link>
          </div>
          <div class="shot">
            <img src="/assets/shots/precheck.png" :alt="page.flagship.imageAlt" loading="lazy" decoding="async">
          </div>
        </div>
      </div>
    </section>
    <section class="alt">
      <div class="wrap">
        <div class="sec-head">
          <div class="eyebrow">{{ page.impact.eyebrow }}</div>
          <h2 class="sec">{{ page.impact.title }}</h2>
          <p class="sec-sub">{{ page.impact.sub }}</p>
        </div>
        <div class="cases">
          <div v-for="item in page.impact.cases" :key="item.who" class="case">
            <div class="who">{{ item.who }}</div>
            <div class="big">{{ item.big }}<small>{{ item.small }}</small></div>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="wrap">
        <div class="prod">
          <div class="shot" style="order:2">
            <img src="/assets/shots/pipeline.png" :alt="page.partner.imageAlt" loading="lazy" decoding="async">
          </div>
          <div style="order:1">
            <div class="eyebrow">{{ page.partner.eyebrow }}</div>
            <h2 class="sec" style="font-size:26px">{{ page.partner.title }}</h2>
            <p v-for="paragraph in page.partner.paragraphs" :key="paragraph">{{ paragraph }}</p>
            <ul class="feat">
              <li v-for="item in page.partner.features" :key="item">{{ item }}</li>
            </ul>
            <router-link class="btn btn-s" :to="to('partners')">{{ page.partner.cta }}</router-link>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="wrap">
        <div class="sec-head">
          <div class="eyebrow">{{ page.strengths.eyebrow }}</div>
          <h2 class="sec">{{ page.strengths.title }}</h2>
          <p class="sec-sub">{{ page.strengths.sub }}</p>
        </div>
        <IconCards :items="strengthItems()" />
      </div>
    </section>
    <section class="alt">
      <div class="wrap">
        <div class="sec-head">
          <div class="eyebrow">{{ page.advantages.eyebrow }}</div>
          <h2 class="sec">{{ page.advantages.title }}</h2>
        </div>
        <IconCards :items="advantageItems()" />
      </div>
    </section>
    <section>
      <div class="wrap">
        <div class="sec-head" style="display:flex;align-items:flex-end;justify-content:space-between;gap:20px;flex-wrap:wrap">
          <div>
            <div class="eyebrow">{{ page.news.eyebrow }}</div>
            <h2 class="sec" style="margin-bottom:0">{{ page.news.title }}</h2>
          </div>
          <router-link class="btn btn-s" :to="to('news')">{{ page.news.all }}</router-link>
        </div>
        <div class="news">
          <router-link v-for="card in page.news.cards" :key="card.title" class="news-card" :to="to('news')">
            <div class="d">{{ card.date }}</div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.text }}</p>
          </router-link>
        </div>
      </div>
    </section>
  </SiteLayout>
</template>
