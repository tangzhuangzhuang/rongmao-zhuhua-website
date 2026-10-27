import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ServicesView from './views/ServicesView.vue'
import SolutionView from './views/SolutionView.vue'
import CasesView from './views/CasesView.vue'
import PartnersView from './views/PartnersView.vue'
import NewsView from './views/NewsView.vue'
import ArticleView from './views/ArticleView.vue'
import ContactView from './views/ContactView.vue'

const pages = [
  { path: '/index.html', name: 'home', component: HomeView },
  { path: '/about.html', name: 'about', component: AboutView },
  { path: '/services.html', name: 'services', component: ServicesView },
  { path: '/solution.html', name: 'solution', component: SolutionView },
  { path: '/cases.html', name: 'cases', component: CasesView },
  { path: '/partners.html', name: 'partners', component: PartnersView },
  { path: '/news.html', name: 'news', component: NewsView },
  { path: '/news/:slug.html', name: 'article', component: ArticleView },
  { path: '/contact.html', name: 'contact', component: ContactView },
]

const routes = [
  { path: '/', redirect: '/index.html' },
  { path: '/en', redirect: '/en/index.html' },
  { path: '/en/', redirect: '/en/index.html' },
  ...pages,
  ...pages.map((route) => ({
    path: `/en${route.path}`,
    component: route.component,
    meta: { page: route.name },
  })),
  {
    path: '/:pathMatch(.*)*',
    redirect: (to) => {
      const collapsed = to.path.replace(/(\/en){2,}/, '/en')
      return collapsed === to.path ? '/index.html' : collapsed
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
