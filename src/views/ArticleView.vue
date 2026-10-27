<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import SiteLayout from '../components/SiteLayout.vue'
import PageHead from '../components/PageHead.vue'
import { useSite } from '../composables/useSite.js'
import articles from '../content/articles.js'

const route = useRoute()
const { locale, copy, to } = useSite()
const article = computed(() => articles.find((item) => item.slug === route.params.slug))

watch(article, (value) => {
  if (!value) return
  document.title = `${value.title[locale.value]} - ${locale.value === 'zh' ? '荣茂竹华' : 'BAMLSOFT'}`
  document.documentElement.lang = locale.value === 'en' ? 'en' : 'zh-CN'
}, { immediate: true })
</script>

<template>
  <SiteLayout v-if="article" :cta="false">
    <PageHead
      image="/assets/img/banner-4.jpg"
      :eyebrow="article.category[locale]"
      :title="article.title[locale]"
      :current="copy.newsUi.crumb"
      title-style="font-size:28px;max-width:900px"
      :parent="{ to: to('news'), label: copy.nav.find((item) => item.name === 'news').label }"
    />
    <section>
      <div class="wrap">
        <article class="npost">
          <div class="meta">
            <span class="cat" :class="article.tone">{{ article.category[locale] }}</span>
            <span class="d">{{ article.date }}</span>
            <span class="d">{{ article.author[locale] }}</span>
          </div>
          <template v-for="(block, index) in article.blocks[locale]" :key="index">
            <p v-if="block.type === 'p'" :class="{ lead: block.lead }" v-html="block.html"></p>
            <ul v-else-if="block.type === 'ul'">
              <li v-for="item in block.items" :key="item" v-html="item"></li>
            </ul>
            <ol v-else>
              <li v-for="item in block.items" :key="item" v-html="item"></li>
            </ol>
          </template>
          <router-link class="nback" :to="to('news')">{{ copy.newsUi.back }}</router-link>
        </article>
      </div>
    </section>
  </SiteLayout>
</template>
