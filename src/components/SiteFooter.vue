<script setup>
import { useSite } from '../composables/useSite.js'

const { copy, to } = useSite()
</script>

<template>
  <footer class="site">
    <div class="wrap">
      <div class="cols">
        <div class="fbrand">
          <div class="fl">
            <svg class="mark" viewBox="0 0 215 233" aria-hidden="true">
              <defs>
                <linearGradient id="rbW" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stop-color="#FFFFFF"/>
                  <stop offset=".35" stop-color="#FFFFFF" stop-opacity=".84"/>
                  <stop offset=".7" stop-color="#FFFFFF" stop-opacity=".58"/>
                  <stop offset="1" stop-color="#FFFFFF" stop-opacity=".34"/>
                </linearGradient>
              </defs>
              <g fill="url(#rbW)">
                <rect x="54" y="41" width="23" height="68" rx="11.5"/>
                <rect x="54" y="123" width="23" height="68" rx="11.5"/>
                <rect x="96" y="0" width="23" height="68" rx="11.5"/>
                <rect x="96" y="82" width="23" height="68" rx="11.5"/>
                <rect x="96" y="164" width="23" height="68" rx="11.5"/>
                <rect x="138" y="41" width="23" height="68" rx="11.5"/>
                <rect x="138" y="123" width="23" height="68" rx="11.5"/>
              </g>
              <g fill="#FFFFFF">
                <path d="M0 110 C14 103 36 111 52 123 C30 125 11 120 0 110 Z"/>
                <path d="M31 90 C40 96 46 105 48 116 C42 112 33 101 31 90 Z"/>
                <path d="M215 110 C201 103 179 111 163 123 C185 125 204 120 215 110 Z"/>
                <path d="M184 90 C175 96 169 105 167 116 C173 112 182 101 184 90 Z"/>
              </g>
            </svg>
            <b>{{ copy.footer.name }}</b>
          </div>
          <p v-html="copy.footer.blurb"></p>
        </div>
        <div>
          <h4>{{ copy.footer.servicesTitle }}</h4>
          <router-link v-for="label in copy.footer.services" :key="label" :to="to('services')">{{ label }}</router-link>
        </div>
        <div>
          <h4>{{ copy.footer.aboutTitle }}</h4>
          <router-link v-for="item in copy.footer.about" :key="item.name" :to="to(item.name)">{{ item.label }}</router-link>
        </div>
        <div>
          <h4>{{ copy.footer.contactTitle }}</h4>
          <div class="addr">
            {{ copy.footer.addressLabel }}{{ copy.footer.address }}<br>
            {{ copy.footer.telLabel }}<a href="tel:18618276535" style="display:inline">{{ copy.phone }}</a><br>
            {{ copy.footer.mailLabel }}<a href="mailto:contact@bamlsoft.com" style="display:inline">{{ copy.footer.email }}</a>
          </div>
        </div>
      </div>
      <div class="bar"><div>{{ copy.footer.copyright }}</div></div>
    </div>
  </footer>
</template>
