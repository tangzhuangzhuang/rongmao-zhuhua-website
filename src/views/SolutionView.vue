<script setup>
import SiteLayout from '../components/SiteLayout.vue'
import PageHead from '../components/PageHead.vue'
import { usePage, useSite } from '../composables/useSite.js'
import solution from '../content/solution.js'

const page = usePage(solution)
const { to } = useSite()
</script>

<template>
  <SiteLayout>
    <PageHead :image="page.banner.image" :eyebrow="page.banner.eyebrow" :title="page.banner.title" :lead="page.banner.lead" />
    <section>
      <div class="wrap">
        <div class="prod">
          <div>
            <div class="quote">{{ page.intro.quote }}</div>
            <p v-for="paragraph in page.intro.paragraphs" :key="paragraph">{{ paragraph }}</p>
            <ul class="feat">
              <li v-for="item in page.intro.features" :key="item">{{ item }}</li>
            </ul>
            <router-link class="btn btn-p" :to="to('contact')">{{ page.intro.cta }}</router-link>
          </div>
          <div class="shot"><img :src="page.intro.image" :alt="page.intro.imageAlt" loading="lazy" decoding="async"></div>
        </div>
      </div>
    </section>
    <section class="alt">
      <div class="wrap">
        <div class="sec-head">
          <div class="eyebrow">{{ page.blind.eyebrow }}</div>
          <h2 class="sec">{{ page.blind.title }}</h2>
        </div>
        <div class="biz">
          <div v-for="card in page.blind.cards" :key="card.no" class="biz-card">
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
          <div class="eyebrow">{{ page.flow.eyebrow }}</div>
          <h2 class="sec">{{ page.flow.title }}</h2>
          <p class="sec-sub">{{ page.flow.sub }}</p>
        </div>
        <div class="flow">
          <div v-for="step in page.flow.steps" :key="step.n" class="step">
            <div class="n">{{ step.n }}</div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.text }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="alt">
      <div class="wrap">
        <div class="sec-head">
          <div class="eyebrow">{{ page.architecture.eyebrow }}</div>
          <h2 class="sec">{{ page.architecture.title }}</h2>
          <p class="sec-sub">{{ page.architecture.sub }}</p>
        </div>
        <div class="biz" style="grid-template-columns:repeat(2,1fr)">
          <div v-for="card in page.architecture.cards" :key="card.no" class="biz-card">
            <div class="no">{{ card.no }}</div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.text }}</p>
          </div>
        </div>
        <div class="shot" style="margin-top:32px"><img :src="page.architecture.image" :alt="page.architecture.imageAlt" loading="lazy" decoding="async"></div>
        <p style="font-size:13px;color:var(--ink3);margin-top:12px">{{ page.architecture.caption }}</p>
      </div>
    </section>
    <section>
      <div class="wrap">
        <div class="sec-head">
          <div class="eyebrow">{{ page.capabilities.eyebrow }}</div>
          <h2 class="sec">{{ page.capabilities.title }}</h2>
        </div>
        <div class="biz">
          <div v-for="card in page.capabilities.cards" :key="card.no" class="biz-card">
            <div class="no">{{ card.no }}</div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.text }}</p>
            <span v-if="card.tag" class="tag">{{ card.tag }}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="alt">
      <div class="wrap">
        <div class="sec-head">
          <div class="eyebrow">{{ page.policy.eyebrow }}</div>
          <h2 class="sec">{{ page.policy.title }}</h2>
          <p class="sec-sub">{{ page.policy.sub }}</p>
        </div>
        <div class="prod">
          <div>
            <ul class="feat">
              <li v-for="item in page.policy.features" :key="item.title"><strong>{{ item.title }}</strong>　{{ item.text }}</li>
            </ul>
          </div>
          <div class="shot"><img :src="page.policy.image" :alt="page.policy.imageAlt" loading="lazy" decoding="async"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="wrap">
        <div class="sec-head">
          <div class="eyebrow">{{ page.experience.eyebrow }}</div>
          <h2 class="sec">{{ page.experience.title }}</h2>
          <p class="sec-sub">{{ page.experience.sub }}</p>
        </div>
        <div v-for="row in page.experience.rows" :key="row.title" class="ui-row" :class="{ rev: row.reverse }">
          <div class="txt">
            <h3>{{ row.title }}</h3>
            <p v-for="paragraph in row.paragraphs" :key="paragraph">{{ paragraph }}</p>
            <ul class="feat">
              <li v-for="item in row.bullets" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="shot"><img :src="row.image" :alt="row.imageAlt" loading="lazy" decoding="async"></div>
        </div>
      </div>
    </section>
    <section class="alt">
      <div class="wrap">
        <div class="sec-head">
          <div class="eyebrow">{{ page.dashboard.eyebrow }}</div>
          <h2 class="sec">{{ page.dashboard.title }}</h2>
          <p class="sec-sub">{{ page.dashboard.sub }}</p>
        </div>
        <div class="shot"><img :src="page.dashboard.image" :alt="page.dashboard.imageAlt" loading="lazy" decoding="async"></div>
        <div class="biz" style="grid-template-columns:repeat(3,1fr);margin-top:28px">
          <div v-for="card in page.dashboard.cards" :key="card.title" class="biz-card">
            <h3>{{ card.title }}</h3>
            <p>{{ card.text }}</p>
          </div>
        </div>
        <p style="margin-top:22px;margin-bottom:0" v-html="page.dashboard.close"></p>
      </div>
    </section>
    <section>
      <div class="wrap">
        <div class="sec-head">
          <div class="eyebrow">{{ page.value.eyebrow }}</div>
          <h2 class="sec">{{ page.value.title }}</h2>
        </div>
        <div class="biz">
          <div v-for="card in page.value.cards" :key="card.no" class="biz-card">
            <div class="no">{{ card.no }}</div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.text }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="alt">
      <div class="wrap">
        <div class="sec-head">
          <div class="eyebrow">{{ page.cost.eyebrow }}</div>
          <h2 class="sec">{{ page.cost.title }}</h2>
          <p class="sec-sub">{{ page.cost.sub }}</p>
        </div>
        <div class="cases" style="grid-template-columns:repeat(2,1fr)">
          <div v-for="item in page.cost.cases" :key="item.who" class="case" style="border-left-color:var(--red)">
            <div class="who">{{ item.who }}</div>
            <div class="big">{{ item.big }}</div>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="wrap narrow rich">
        <div class="quote">{{ page.close.quote }}</div>
        <p v-for="paragraph in page.close.paragraphs" :key="paragraph">{{ paragraph }}</p>
        <div class="note info">
          <div class="h">{{ page.close.noteTitle }}</div>
          <p>{{ page.close.noteText }}</p>
        </div>
      </div>
    </section>
  </SiteLayout>
</template>
