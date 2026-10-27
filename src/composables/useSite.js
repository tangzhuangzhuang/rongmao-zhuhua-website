import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import common from '../content/common.js'

const paths = {
  home: '/index.html',
  about: '/about.html',
  services: '/services.html',
  solution: '/solution.html',
  cases: '/cases.html',
  partners: '/partners.html',
  news: '/news.html',
  contact: '/contact.html',
}

export function useSite() {
  const route = useRoute()
  const locale = computed(() => (route.path.startsWith('/en') ? 'en' : 'zh'))
  const copy = computed(() => common[locale.value])

  function to(name, slug) {
    const prefix = locale.value === 'en' ? '/en' : ''
    if (name === 'article') return `${prefix}/news/${slug}.html`
    return prefix + paths[name]
  }

  const otherLocalePath = computed(() => {
    const path = route.path === '/' ? '/index.html' : route.path
    if (path.startsWith('/en')) return path.replace(/^\/en/, '') || '/index.html'
    return `/en${path}`
  })

  function isOn(name) {
    const page = route.meta.page || route.name
    if (name === 'news') return page === 'news' || page === 'article'
    return page === name
  }

  return { locale, copy, to, otherLocalePath, isOn }
}

export function usePage(source) {
  const { locale } = useSite()
  const page = computed(() => source[locale.value])

  watch(
    page,
    (value) => {
      if (!value?.meta) return
      document.title = value.meta.title
      document.documentElement.lang = locale.value === 'en' ? 'en' : 'zh-CN'
      setMeta('description', value.meta.description)
      setMeta('keywords', value.meta.keywords)
    },
    { immediate: true },
  )

  return page
}

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content || '')
}
