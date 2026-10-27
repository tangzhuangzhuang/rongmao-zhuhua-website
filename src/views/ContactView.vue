<script setup>
import { ref } from 'vue'
import SiteLayout from '../components/SiteLayout.vue'
import PageHead from '../components/PageHead.vue'
import { usePage } from '../composables/useSite.js'
import contact from '../content/contact.js'

const page = usePage(contact)
const sent = ref(false)

function submit(event) {
  event.preventDefault()
  sent.value = true
}
</script>

<template>
  <SiteLayout>
    <PageHead :image="page.banner.image" :eyebrow="page.banner.eyebrow" :title="page.banner.title" :lead="page.banner.lead" />
    <section>
      <div class="wrap">
        <div class="cgrid">
          <div>
            <div v-for="box in page.boxes" :key="box.label" class="cbox">
              <div class="l">{{ box.label }}</div>
              <div class="v" :style="box.value.includes('<br>') ? 'font-size:15px;line-height:1.7' : (box.value.length > 24 ? 'font-size:15px' : '')" v-html="box.value"></div>
            </div>
          </div>
          <div>
            <h2 style="font-size:20px;margin-bottom:8px">{{ page.form.title }}</h2>
            <p style="font-size:14px;margin-bottom:22px">{{ page.form.lead }}</p>
            <form @submit="submit">
              <div class="f"><label for="c1">{{ page.form.labels[0] }}</label><input id="c1" type="text" :placeholder="page.form.placeholders[0]" required></div>
              <div class="f"><label for="c2">{{ page.form.labels[1] }}</label><input id="c2" type="tel" :placeholder="page.form.placeholders[1]" required></div>
              <div class="f"><label for="c3">{{ page.form.labels[2] }}</label><input id="c3" type="text" :placeholder="page.form.placeholders[2]"></div>
              <div class="f">
                <label for="c4">{{ page.form.labels[3] }}</label>
                <select id="c4"><option v-for="topic in page.form.topics" :key="topic">{{ topic }}</option></select>
              </div>
              <div class="f"><label for="c5">{{ page.form.labels[4] }}</label><textarea id="c5" :placeholder="page.form.placeholders[3]"></textarea></div>
              <button class="btn btn-p" type="submit" style="width:100%;justify-content:center" :disabled="sent">{{ sent ? page.form.done : page.form.submit }}</button>
              <p style="font-size:12.5px;color:var(--ink3);margin:12px 0 0">{{ page.form.consent }}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="alt">
      <div class="wrap">
        <div class="split">
          <div class="pic"><img :src="page.talk.image" :alt="page.talk.imageAlt" loading="lazy" decoding="async"></div>
          <div>
            <div class="eyebrow">{{ page.talk.eyebrow }}</div>
            <h2 class="sec" style="font-size:24px">{{ page.talk.title }}</h2>
            <p v-for="paragraph in page.talk.paragraphs" :key="paragraph">{{ paragraph }}</p>
            <ul class="feat" style="margin-bottom:0">
              <li v-for="item in page.talk.bullets" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
</template>
