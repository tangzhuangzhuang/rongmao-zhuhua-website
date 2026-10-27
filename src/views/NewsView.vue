<script setup>
import { computed, ref, watch } from 'vue'
import SiteLayout from '../components/SiteLayout.vue'
import PageHead from '../components/PageHead.vue'
import { useSite } from '../composables/useSite.js'
import common from '../content/common.js'
import articles from '../content/articles.js'

const { locale, copy, to } = useSite()
const filter = ref('')
const ui = computed(() => copy.value.newsUi)
const banner = computed(() => locale.value === 'zh'
  ? {
      image: '/assets/img/banner-4.jpg',
      eyebrow: 'Information',
      title: '行业资讯',
      lead: '关于云计算、数据中心、IT 服务管理、AI 应用与数据合规的观察与分享。',
      meta: {
        title: '行业资讯｜云计算、数据中心、IT 服务管理与人工智能 - 荣茂竹华',
        description: '关于云计算平台、数据中心运维、IT 服务管理与人工智能落地的行业观察与分享。',
        keywords: '行业资讯,云计算,数据中心运维,IT 服务管理,人工智能',
      },
    }
  : {
      image: '/assets/img/banner-4.jpg',
      eyebrow: 'Insights',
      title: 'Industry Insights',
      lead: 'Observations and perspectives on cloud computing, data centers, IT service management, AI applications and data compliance.',
      meta: {
        title: 'Insights | Cloud Computing, Data Center, ITSM & AI | BAMLSOFT',
        description: 'BAMLSOFT insights — observations and perspectives on cloud computing, data center operations, IT service management, AI applications and data compliance.',
        keywords: 'Insights,Cloud Computing,Data Center Operations,IT Service Management,AI',
      },
    })

const filters = computed(() => {
  const names = []
  articles.forEach((article) => {
    const name = article.category[locale.value]
    if (name && !names.includes(name)) names.push(name)
  })
  return [ui.value.all, ...names]
})

watch(locale, () => { filter.value = '' })
watch(banner, (value) => {
  document.title = value.meta.title
  document.documentElement.lang = locale.value === 'en' ? 'en' : 'zh-CN'
}, { immediate: true })

const visible = computed(() => articles.filter((article) => !filter.value || filter.value === ui.value.all || article.category[locale.value] === filter.value))
</script>

<template>
  <SiteLayout :cta-copy="common[locale].newsCta">
    <PageHead :image="banner.image" :eyebrow="banner.eyebrow" :title="banner.title" :lead="banner.lead" />
    <section>
      <div class="wrap">
        <div class="ntabs" id="tabs">
          <button v-for="name in filters" :key="name" type="button" :class="{ on: (filter || ui.all) === name }" @click="filter = name">
            {{ name }}
            <span v-if="name === ui.all" style="opacity:.65">{{ articles.length }}</span>
          </button>
        </div>
        <div class="nlist" id="nlist">
          <div v-for="article in visible" :key="article.slug" class="ncard" :data-cat="article.category[locale]">
            <div class="top">
              <span class="cat" :class="article.tone">{{ article.category[locale] }}</span>
              <span class="d">{{ article.date }}</span>
            </div>
            <h3><router-link :to="to('article', article.slug)">{{ article.title[locale] }}</router-link></h3>
            <p>{{ article.summary[locale] }}</p>
            <router-link class="more" :to="to('article', article.slug)">{{ ui.more }}</router-link>
          </div>
        </div>
        <p v-if="!visible.length" id="nempty" style="color:var(--ink3);padding:40px 0">{{ ui.empty }}</p>
      </div>
    </section>
  </SiteLayout>
</template>
