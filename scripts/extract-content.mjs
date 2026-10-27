import fs from 'fs'
import path from 'path'

const root = '/Users/zhuangzhuang/WebstormProjects/荣茂竹华-官网V2-网站文件-20261009'
const outDir = '/Users/zhuangzhuang/WebstormProjects/荣茂竹华-官网V2-vue3/src/content'

function read(rel) {
  return fs.readFileSync(path.join(root, rel), 'utf8')
}

function decode(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

function clean(value) {
  return decode(value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')).trim()
}

function html(value) {
  return decode(value.replace(/\s+/g, ' ')).trim()
}

function main(file) {
  const source = read(file)
  const body = source.match(/<body>([\s\S]*)<\/body>/)[1]
  return body
    .replace(/<header[\s\S]*?<\/header>/, '')
    .replace(/<footer[\s\S]*?<\/footer>/, '')
    .replace(/<script[\s\S]*?<\/script>/g, '')
}

function meta(file) {
  const source = read(file)
  return {
    title: clean((source.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || ''),
    description: clean((source.match(/name="description" content="([^"]*)"/) || [])[1] || ''),
    keywords: clean((source.match(/name="keywords" content="([^"]*)"/) || [])[1] || ''),
  }
}

function sections(file) {
  return [...main(file).matchAll(/<section([^>]*)>([\s\S]*?)<\/section>/g)].map((match) => ({
    attrs: match[1],
    html: match[2],
  }))
}

function banner(file) {
  const chunk = main(file).match(/<div class="phead">([\s\S]*?)<\/div><\/div><section/)
  const block = chunk ? chunk[1] : ''
  const image = (block.match(/url\(([^)]+)\)/) || [])[1] || ''
  const crumbs = [...block.matchAll(/<a [^>]*>([\s\S]*?)<\/a>| \/ ([^<]+)/g)]
  return {
    image: image.replace(/^(\.\.\/)+/, '/').replace(/^assets\//, '/assets/'),
    eyebrow: clean((block.match(/<div class="eyebrow">([\s\S]*?)<\/div>/) || [])[1] || ''),
    title: clean((block.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || ''),
    lead: clean((block.match(/<p>([\s\S]*?)<\/p>/) || [])[1] || ''),
  }
}

function h2(block) {
  const found = block.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)
  return found ? clean(found[1]) : ''
}

function eyebrow(block) {
  const found = block.match(/<div class="eyebrow">([\s\S]*?)<\/div>/)
  return found ? clean(found[1]) : ''
}

function sub(block) {
  const found = block.match(/<p class="sec-sub">([\s\S]*?)<\/p>/)
  return found ? clean(found[1]) : ''
}

function paragraphs(block) {
  return [...block.matchAll(/<p(?![^>]*class="sec-sub")[^>]*>([\s\S]*?)<\/p>/g)]
    .map((match) => html(match[1]))
    .filter(Boolean)
}

function plainParagraphs(block) {
  return paragraphs(block).map((item) => clean(item))
}

function feats(block) {
  return [...block.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((match) => {
    const raw = match[1]
    const strong = raw.match(/<strong>([\s\S]*?)<\/strong>/)
    return {
      title: strong ? clean(strong[1]) : '',
      text: clean(raw.replace(/<strong>[\s\S]*?<\/strong>/, '')),
    }
  })
}

function sliceDiv(source, start) {
  let depth = 0
  for (let index = start; index < source.length; index += 1) {
    if (source.startsWith('<div', index)) {
      depth += 1
      index = source.indexOf('>', index)
    } else if (source.startsWith('</div>', index)) {
      depth -= 1
      if (depth === 0) return source.slice(start, index + 6)
      index += 5
    }
  }
  return source.slice(start)
}

function blocksByClass(source, className) {
  const needle = `<div class="${className}"`
  const found = []
  let index = 0
  while ((index = source.indexOf(needle, index)) !== -1) {
    const chunk = sliceDiv(source, index)
    found.push(chunk)
    index += chunk.length
  }
  return found
}

function cards(block) {
  return blocksByClass(block, 'biz-card').map((chunk) => {
    const card = chunk
    const tag = card.match(/<span class="tag"[^>]*>([\s\S]*?)<\/span>/)
    return {
      no: clean((card.match(/<div class="no">([\s\S]*?)<\/div>/) || [])[1] || ''),
      title: clean((card.match(/<h3>([\s\S]*?)<\/h3>/) || [])[1] || ''),
      en: clean((card.match(/<div class="en">([\s\S]*?)<\/div>/) || [])[1] || ''),
      text: clean((card.match(/<p>([\s\S]*?)<\/p>/) || [])[1] || ''),
      tag: tag ? clean(tag[1]) : '',
    }
  })
}

function asset(src) {
  return src.replace(/^(\.\.\/)+/, '/').replace(/^assets\//, '/assets/')
}

function write(name, data) {
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(
    path.join(outDir, name),
    `// Page copy for both languages. Edit this file when the wording changes.\nexport default ${JSON.stringify(data, null, 2)}\n`,
  )
}

function pair(build) {
  return { zh: build(''), en: build('en/') }
}

const about = pair((prefix) => {
  const file = `${prefix}about.html`
  const parts = sections(file)
  const intro = parts[0].html
  const stats = [...parts[1].html.matchAll(/<div class="n">([\s\S]*?)<\/div><div class="l">([\s\S]*?)<\/div>/g)].map((match) => ({
    value: clean(match[1].replace(/<small>[\s\S]*?<\/small>/, '')),
    suffix: clean((match[1].match(/<small>([\s\S]*?)<\/small>/) || [])[1] || ''),
    label: clean(match[2]),
  }))
  const industries = [...parts[3].html.matchAll(/<span>([\s\S]*?)<\/span>/g)].map((match) => clean(match[1]))
  const work = parts[4].html
  const wide = work.match(/<figcaption>([\s\S]*?)<\/figcaption>/)
  return {
    meta: meta(file),
    banner: banner(file),
    intro: paragraphs(intro),
    stats,
    industries: {
      eyebrow: eyebrow(parts[3].html),
      title: h2(parts[3].html),
      sub: sub(parts[3].html),
      items: industries,
    },
    work: {
      eyebrow: eyebrow(work),
      title: h2(work),
      paragraphs: plainParagraphs(work).slice(0, 1),
      bullets: feats(work).map((item) => item.text),
      image: '/assets/img/meeting.jpg',
      imageAlt: clean((work.match(/<img[^>]*alt="([^"]*)"/) || [])[1] || ''),
      wide: '/assets/img/banner-1.jpg',
      wideAlt: clean((work.match(/<div class="widepic"><img[^>]*alt="([^"]*)"/) || [])[1] || ''),
      caption: wide ? clean(wide[1]) : '',
    },
  }
})

const services = pair((prefix) => {
  const file = `${prefix}services.html`
  const parts = sections(file)
  const items = [...parts[0].html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3|<div style="padding:34px|$)/g)].map((match, index) => {
    const chunk = match[2]
    return {
      no: String(index + 1).padStart(2, '0'),
      title: clean(match[1]),
      en: clean((chunk.match(/<div style="font-size:12\.5px[^"]*"[^>]*>([\s\S]*?)<\/div>/) || [])[1] || ''),
      tag: clean((chunk.match(/<span class="tag"[^>]*>([\s\S]*?)<\/span>/) || [])[1] || ''),
      paragraphs: paragraphs(chunk).map(clean),
    }
  })
  const steps = blocksByClass(parts[1].html, 'step').map((step) => ({
    n: clean((step.match(/<div class="n">([\s\S]*?)<\/div>/) || [])[1] || ''),
    title: clean((step.match(/<h4>([\s\S]*?)<\/h4>/) || [])[1] || ''),
    text: clean((step.match(/<p>([\s\S]*?)<\/p>/) || [])[1] || ''),
  }))
  const end = parts[2].html
  return {
    meta: meta(file),
    banner: banner(file),
    items,
    delivery: {
      eyebrow: eyebrow(parts[1].html),
      title: h2(parts[1].html),
      sub: sub(parts[1].html),
      steps,
    },
    end: {
      eyebrow: eyebrow(end),
      title: h2(end),
      paragraphs: plainParagraphs(end),
      bullets: feats(end).map((item) => item.text),
      image: '/assets/img/workspace.jpg',
      imageAlt: clean((end.match(/alt="([^"]*)"/) || [])[1] || ''),
    },
  }
})

const cases = pair((prefix) => {
  const file = `${prefix}cases.html`
  const parts = sections(file)
  const items = [...parts[0].html.matchAll(/<div class="case"[\s\S]*?<div class="who">([\s\S]*?)<\/div><div class="big">([\s\S]*?)<small>([\s\S]*?)<\/small><\/div><\/div><div>([\s\S]*?)<\/div><\/div>/g)].map((match) => ({
    who: clean(match[1]),
    big: clean(match[2]),
    small: clean(match[3]),
    points: [...match[4].matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((point) => {
      const strong = point[1].match(/<strong>([\s\S]*?)<\/strong>/)
      return {
        label: strong ? clean(strong[1]) : '',
        text: clean(point[1].replace(/<strong>[\s\S]*?<\/strong>/, '')),
      }
    }),
  }))
  const delivery = parts[1].html
  return {
    meta: meta(file),
    banner: banner(file),
    items,
    delivery: {
      eyebrow: eyebrow(delivery),
      title: h2(delivery),
      paragraphs: plainParagraphs(delivery),
      bullets: feats(delivery).map((item) => item.text),
      image: '/assets/img/datacenter.jpg',
      imageAlt: clean((delivery.match(/alt="([^"]*)"/) || [])[1] || ''),
    },
  }
})

const partners = pair((prefix) => {
  const file = `${prefix}partners.html`
  const parts = sections(file)
  const prod = parts[0].html
  const logos = [...parts[2].html.matchAll(/<img src="([^"]+)" alt="([^"]*)"/g)].map((match) => ({
    src: asset(match[1]),
    alt: clean(match[2]),
  }))
  return {
    meta: meta(file),
    banner: banner(file),
    product: {
      eyebrow: eyebrow(prod),
      title: h2(prod),
      paragraphs: plainParagraphs(prod),
      features: feats(prod),
      image: '/assets/shots/pipeline.png',
      imageAlt: clean((prod.match(/<div class="shot"><img[^>]*alt="([^"]*)"/) || [])[1] || ''),
    },
    offer: {
      eyebrow: eyebrow(parts[1].html),
      title: h2(parts[1].html),
      sub: sub(parts[1].html),
      cards: cards(parts[1].html),
    },
    ecosystem: {
      eyebrow: eyebrow(parts[2].html),
      title: h2(parts[2].html),
      sub: sub(parts[2].html),
      logos,
    },
  }
})

const contact = pair((prefix) => {
  const file = `${prefix}contact.html`
  const parts = sections(file)
  const boxes = blocksByClass(parts[0].html, 'cbox').map((box) => ({
    label: clean((box.match(/<div class="l">([\s\S]*?)<\/div>/) || [])[1] || ''),
    value: html((box.match(/<div class="v"[^>]*>([\s\S]*?)<\/div>/) || [])[1] || ''),
  }))
  const form = parts[0].html
  const topics = [...form.matchAll(/<option>([\s\S]*?)<\/option>/g)].map((match) => clean(match[1]))
  const labels = [...form.matchAll(/<label[^>]*>([\s\S]*?)<\/label>/g)].map((match) => clean(match[1]))
  const placeholders = [...form.matchAll(/placeholder="([^"]*)"/g)].map((match) => clean(match[1]))
  const done = clean((form.match(/textContent='([^']*)'/) || [])[1] || '')
  const talk = parts[1].html
  return {
    meta: meta(file),
    banner: banner(file),
    boxes,
    form: {
      title: h2(form),
      lead: clean((form.match(/<h2[\s\S]*?<\/h2><p[^>]*>([\s\S]*?)<\/p>/) || [])[1] || ''),
      labels,
      placeholders,
      topics,
      submit: clean((form.match(/<button[^>]*>([\s\S]*?)<\/button>/) || [])[1] || ''),
      done,
      consent: clean((form.match(/<p style="font-size:12\.5px[\s\S]*?>([\s\S]*?)<\/p>/) || [])[1] || ''),
    },
    talk: {
      eyebrow: eyebrow(talk),
      title: h2(talk),
      paragraphs: plainParagraphs(talk),
      bullets: feats(talk).map((item) => item.text),
      image: '/assets/img/arch.jpg',
      imageAlt: clean((talk.match(/alt="([^"]*)"/) || [])[1] || ''),
    },
  }
})

function solutionPage(prefix) {
  const file = `${prefix}solution.html`
  const parts = sections(file).filter((part) => !part.html.includes('class="cta"'))
  const intro = parts[0].html
  const experienceRows = [...parts[5].html.matchAll(/<div class="ui-row( rev)?"><div class="txt">([\s\S]*?)<\/div><div class="shot"><img src="([^"]+)" alt="([^"]*)"/g)].map((match) => ({
    reverse: Boolean(match[1]),
    title: clean((match[2].match(/<h3>([\s\S]*?)<\/h3>/) || [])[1] || ''),
    paragraphs: plainParagraphs(match[2]),
    bullets: feats(match[2]).map((item) => item.text),
    image: asset(match[3]),
    imageAlt: clean(match[4]),
  }))
  const dash = parts[6].html
  const closing = parts[9].html
  return {
    meta: meta(file),
    banner: banner(file),
    intro: {
      quote: clean((intro.match(/<div class="quote">([\s\S]*?)<\/div>/) || [])[1] || ''),
      paragraphs: plainParagraphs(intro),
      features: feats(intro).map((item) => item.text),
      cta: clean((intro.match(/<a class="btn[\s\S]*?>([\s\S]*?)<\/a>/) || [])[1] || ''),
      image: '/assets/shots/precheck.png',
      imageAlt: clean((intro.match(/<div class="shot"><img[^>]*alt="([^"]*)"/) || [])[1] || ''),
    },
    blind: {
      eyebrow: eyebrow(parts[1].html),
      title: h2(parts[1].html),
      cards: cards(parts[1].html),
    },
    flow: {
      eyebrow: eyebrow(parts[2].html),
      title: h2(parts[2].html),
      sub: sub(parts[2].html),
      steps: [...parts[2].html.matchAll(/<div class="step">([\s\S]*?)<\/div><\/div>/g)].map((match) => ({
        n: clean((match[1].match(/<div class="n">([\s\S]*?)<\/div>/) || [])[1] || ''),
        title: clean((match[1].match(/<h4>([\s\S]*?)<\/h4>/) || [])[1] || ''),
        text: clean((match[1].match(/<p>([\s\S]*?)<\/p>/) || [])[1] || ''),
      })),
    },
    architecture: {
      eyebrow: eyebrow(parts[3].html),
      title: h2(parts[3].html),
      sub: sub(parts[3].html),
      cards: cards(parts[3].html),
      image: '/assets/shots/pipeline.png',
      imageAlt: clean((parts[3].html.match(/<div class="shot"[\s\S]*?alt="([^"]*)"/) || [])[1] || ''),
      caption: clean((parts[3].html.match(/<p style="font-size:13px[\s\S]*?>([\s\S]*?)<\/p>/) || [])[1] || ''),
    },
    capabilities: {
      eyebrow: eyebrow(parts[4].html),
      title: h2(parts[4].html),
      cards: cards(parts[4].html),
    },
    policy: {
      eyebrow: eyebrow(parts[5] ? '' : ''),
    },
  }
}

function solutionFull(prefix) {
  const file = `${prefix}solution.html`
  const parts = sections(file).filter((part) => !part.html.includes('class="cta"'))
  const intro = parts[0].html
  const rows = [...parts[5].html.matchAll(/<div class="ui-row( rev)?"><div class="txt">([\s\S]*?)<\/div><div class="shot"><img src="([^"]+)" alt="([^"]*)"/g)].map((match) => ({
    reverse: Boolean(match[1]),
    title: clean((match[2].match(/<h3>([\s\S]*?)<\/h3>/) || [])[1] || ''),
    paragraphs: plainParagraphs(match[2]),
    bullets: feats(match[2]).map((item) => item.text),
    image: asset(match[3]),
    imageAlt: clean(match[4]),
  }))
  const dashCards = [...parts[6].html.matchAll(/<div class="biz-card"><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((match) => ({
    title: clean(match[1]),
    text: clean(match[2]),
  }))
  const cost = [...parts[8].html.matchAll(/<div class="case"[\s\S]*?<div class="who">([\s\S]*?)<\/div><div class="big">([\s\S]*?)<\/div><p>([\s\S]*?)<\/p>/g)].map((match) => ({
    who: clean(match[1]),
    big: clean(match[2]),
    text: clean(match[3]),
  }))
  return {
    meta: meta(file),
    banner: banner(file),
    intro: {
      quote: clean((intro.match(/<div class="quote">([\s\S]*?)<\/div>/) || [])[1] || ''),
      paragraphs: plainParagraphs(intro),
      features: feats(intro).map((item) => item.text),
      cta: clean((intro.match(/<a class="btn[\s\S]*?>([\s\S]*?)<\/a>/) || [])[1] || ''),
      image: '/assets/shots/precheck.png',
      imageAlt: clean((intro.match(/<div class="shot"><img[^>]*alt="([^"]*)"/) || [])[1] || ''),
    },
    blind: { eyebrow: eyebrow(parts[1].html), title: h2(parts[1].html), cards: cards(parts[1].html) },
    flow: {
      eyebrow: eyebrow(parts[2].html),
      title: h2(parts[2].html),
      sub: sub(parts[2].html),
      steps: [...parts[2].html.matchAll(/<h4>([\s\S]*?)<\/h4><p>([\s\S]*?)<\/p>/g)].map((match, index) => ({
        n: String(index + 1),
        title: clean(match[1]),
        text: clean(match[2]),
      })),
    },
    architecture: {
      eyebrow: eyebrow(parts[3].html),
      title: h2(parts[3].html),
      sub: sub(parts[3].html),
      cards: cards(parts[3].html),
      image: '/assets/shots/pipeline.png',
      imageAlt: clean((parts[3].html.match(/alt="([^"]*)"/) || [])[1] || ''),
      caption: clean((parts[3].html.match(/<p style="font-size:13px[\s\S]*?>([\s\S]*?)<\/p>/) || [])[1] || ''),
    },
    capabilities: { eyebrow: eyebrow(parts[4].html), title: h2(parts[4].html), cards: cards(parts[4].html) },
    policy: {
      eyebrow: eyebrow(parts[5].html),
      title: h2(parts[5].html),
      sub: sub(parts[5].html),
      features: feats(parts[5].html),
      image: '/assets/shots/pipeline.png',
      imageAlt: clean((parts[5].html.match(/<div class="shot"><img[^>]*alt="([^"]*)"/) || [])[1] || ''),
    },
    experience: {
      eyebrow: eyebrow(parts[5].html.match(/<div class="sec-head">[\s\S]*?<div class="eyebrow">([\s\S]*?)<\/div>/) ? parts[5].html : parts[5].html),
    },
    rows,
    dashboard: {
      eyebrow: eyebrow(parts[6].html),
      title: h2(parts[6].html),
      sub: sub(parts[6].html),
      image: '/assets/shots/dashboard.png',
      imageAlt: clean((parts[6].html.match(/alt="([^"]*)"/) || [])[1] || ''),
      cards: dashCards,
      close: html((parts[6].html.match(/<p style="margin-top:22px[\s\S]*?>([\s\S]*?)<\/p>/) || [])[1] || ''),
    },
    value: { eyebrow: eyebrow(parts[7].html), title: h2(parts[7].html), cards: cards(parts[7].html) },
    cost: { eyebrow: eyebrow(parts[8].html), title: h2(parts[8].html), sub: sub(parts[8].html), cases: cost },
    close: {
      quote: clean((parts[9].html.match(/<div class="quote">([\s\S]*?)<\/div>/) || [])[1] || ''),
      paragraphs: plainParagraphs(parts[9].html),
      noteTitle: clean((parts[9].html.match(/<div class="h">([\s\S]*?)<\/div>/) || [])[1] || ''),
      noteText: clean((parts[9].html.match(/<div class="note[\s\S]*?<p>([\s\S]*?)<\/p>/) || [])[1] || ''),
    },
  }
}

const solution = {
  zh: solutionFull(''),
  en: solutionFull('en/'),
}
delete solution.zh.experience
delete solution.en.experience
solution.zh.experience = {
  eyebrow: eyebrow(sections('solution.html').filter((part) => !part.html.includes('class="cta"'))[5].html),
  title: h2(sections('solution.html').filter((part) => !part.html.includes('class="cta"'))[5].html),
  sub: sub(sections('solution.html').filter((part) => !part.html.includes('class="cta"'))[5].html),
  rows: solution.zh.rows,
}
solution.en.experience = {
  eyebrow: eyebrow(sections('en/solution.html').filter((part) => !part.html.includes('class="cta"'))[5].html),
  title: h2(sections('en/solution.html').filter((part) => !part.html.includes('class="cta"'))[5].html),
  sub: sub(sections('en/solution.html').filter((part) => !part.html.includes('class="cta"'))[5].html),
  rows: solution.en.rows,
}
delete solution.zh.rows
delete solution.en.rows
delete solution.zh.policy
delete solution.en.policy

function policyOf(prefix) {
  const part = sections(`${prefix}solution.html`).filter((item) => !item.html.includes('class="cta"'))[5]
  // policy is section index 5 only if experience is also 5? Check order.
  return part
}

// Re-read section order: 0 intro, 1 blind, 2 flow, 3 arch, 4 caps, 5 policy, 6 experience, 7 dashboard, 8 value, 9 cost, 10 close
function ordered(prefix) {
  return sections(`${prefix}solution.html`).filter((part) => !part.html.includes('class="cta"'))
}

function rebuildSolution(prefix) {
  const parts = ordered(prefix)
  const intro = parts[0].html
  const policy = parts[5].html
  const experience = parts[6].html
  const rows = [...experience.matchAll(/<div class="ui-row( rev)?"><div class="txt">([\s\S]*?)<\/div><div class="shot"><img src="([^"]+)" alt="([^"]*)"/g)].map((match) => ({
    reverse: Boolean(match[1]),
    title: clean((match[2].match(/<h3>([\s\S]*?)<\/h3>/) || [])[1] || ''),
    paragraphs: plainParagraphs(match[2]),
    bullets: feats(match[2]).map((item) => item.text),
    image: asset(match[3]),
    imageAlt: clean(match[4]),
  }))
  const dash = parts[7].html
  const costHtml = parts[9].html
  const close = parts[10].html
  return {
    meta: meta(`${prefix}solution.html`),
    banner: banner(`${prefix}solution.html`),
    intro: {
      quote: clean((intro.match(/<div class="quote">([\s\S]*?)<\/div>/) || [])[1] || ''),
      paragraphs: plainParagraphs(intro),
      features: feats(intro).map((item) => item.text),
      cta: clean((intro.match(/<a class="btn[\s\S]*?>([\s\S]*?)<\/a>/) || [])[1] || ''),
      image: '/assets/shots/precheck.png',
      imageAlt: clean((intro.match(/alt="([^"]*)"/) || [])[1] || ''),
    },
    blind: { eyebrow: eyebrow(parts[1].html), title: h2(parts[1].html), cards: cards(parts[1].html) },
    flow: {
      eyebrow: eyebrow(parts[2].html),
      title: h2(parts[2].html),
      sub: sub(parts[2].html),
      steps: [...parts[2].html.matchAll(/<h4>([\s\S]*?)<\/h4><p>([\s\S]*?)<\/p>/g)].map((match, index) => ({
        n: String(index + 1),
        title: clean(match[1]),
        text: clean(match[2]),
      })),
    },
    architecture: {
      eyebrow: eyebrow(parts[3].html),
      title: h2(parts[3].html),
      sub: sub(parts[3].html),
      cards: cards(parts[3].html),
      image: '/assets/shots/pipeline.png',
      imageAlt: clean((parts[3].html.match(/<div class="shot"[\s\S]*?alt="([^"]*)"/) || [])[1] || ''),
      caption: clean((parts[3].html.match(/<p style="font-size:13px[\s\S]*?>([\s\S]*?)<\/p>/) || [])[1] || ''),
    },
    capabilities: { eyebrow: eyebrow(parts[4].html), title: h2(parts[4].html), cards: cards(parts[4].html) },
    policy: {
      eyebrow: eyebrow(policy),
      title: h2(policy),
      sub: sub(policy),
      features: feats(policy),
      image: '/assets/shots/pipeline.png',
      imageAlt: clean((policy.match(/<div class="shot"><img[^>]*alt="([^"]*)"/) || [])[1] || ''),
    },
    experience: { eyebrow: eyebrow(experience), title: h2(experience), sub: sub(experience), rows },
    dashboard: {
      eyebrow: eyebrow(dash),
      title: h2(dash),
      sub: sub(dash),
      image: '/assets/shots/dashboard.png',
      imageAlt: clean((dash.match(/alt="([^"]*)"/) || [])[1] || ''),
      cards: [...dash.matchAll(/<div class="biz-card"><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map((match) => ({
        title: clean(match[1]),
        text: clean(match[2]),
      })),
      close: html((dash.match(/<p style="margin-top:22px[\s\S]*?>([\s\S]*?)<\/p>/) || [])[1] || ''),
    },
    value: { eyebrow: eyebrow(parts[8].html), title: h2(parts[8].html), cards: cards(parts[8].html) },
    cost: {
      eyebrow: eyebrow(costHtml),
      title: h2(costHtml),
      sub: sub(costHtml),
      cases: [...costHtml.matchAll(/<div class="who">([\s\S]*?)<\/div><div class="big">([\s\S]*?)<\/div><p>([\s\S]*?)<\/p>/g)].map((match) => ({
        who: clean(match[1]),
        big: clean(match[2]),
        text: clean(match[3]),
      })),
    },
    close: {
      quote: clean((close.match(/<div class="quote">([\s\S]*?)<\/div>/) || [])[1] || ''),
      paragraphs: plainParagraphs(close),
      noteTitle: clean((close.match(/<div class="h">([\s\S]*?)<\/div>/) || [])[1] || ''),
      noteText: clean((close.match(/<div class="note[\s\S]*?<p>([\s\S]*?)<\/p>/) || [])[1] || ''),
    },
  }
}

function articleBlocks(inner) {
  const body = inner
    .replace(/<div class="meta">[\s\S]*?<\/div>/, '')
    .replace(/<a class="nback"[\s\S]*?<\/a>/, '')
  const blocks = []
  const pattern = /<(p|ul|ol)([^>]*)>([\s\S]*?)<\/\1>/g
  let match
  while ((match = pattern.exec(body))) {
    if (match[1] === 'p') {
      blocks.push({ type: 'p', lead: /class="lead"/.test(match[2]), html: html(match[3]) })
    } else {
      blocks.push({
        type: match[1],
        items: [...match[3].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((item) => html(item[1])),
      })
    }
  }
  return blocks
}

function loadArticles(prefix) {
  const listFile = `${prefix}news.html`
  const list = main(listFile)
  const cards = blocksByClass(list, 'ncard').map((chunk) => {
    const category = (chunk.match(/data-cat="([^"]*)"/) || [])[1] || ''
    const card = chunk
    const href = (card.match(/href="([^"]+)"/) || [])[1] || ''
    const slug = href.split('/').pop().replace(/\.html$/, '')
    const tone = ((card.match(/class="cat ([^"]*)"/) || [])[1] || '').trim()
    return {
      slug,
      category: clean(category),
      tone,
      date: clean((card.match(/<span class="d">([\s\S]*?)<\/span>/) || [])[1] || ''),
      title: clean((card.match(/<h3><a[^>]*>([\s\S]*?)<\/a><\/h3>/) || [])[1] || ''),
      summary: clean((card.match(/<p>([\s\S]*?)<\/p>/) || [])[1] || ''),
    }
  })
  return cards.map((card) => {
    const source = read(`${prefix}news/${card.slug}.html`)
    const article = (source.match(/<article class="npost">([\s\S]*?)<\/article>/) || [])[1] || ''
    const metaBits = [...article.matchAll(/<span class="(?:cat[^"]*|d)">([\s\S]*?)<\/span>/g)].map((match) => clean(match[1]))
    return {
      ...card,
      author: metaBits[2] || '',
      blocks: articleBlocks(article),
    }
  })
}

const zhArticles = loadArticles('')
const enArticles = loadArticles('en/')
const articles = zhArticles.map((article) => {
  const en = enArticles.find((item) => item.slug === article.slug)
  return {
    slug: article.slug,
    date: article.date,
    tone: article.tone,
    category: { zh: article.category, en: en?.category || '' },
    title: { zh: article.title, en: en?.title || '' },
    summary: { zh: article.summary, en: en?.summary || '' },
    author: { zh: article.author, en: en?.author || '' },
    blocks: { zh: article.blocks, en: en?.blocks || [] },
  }
})

write('about.js', about)
write('services.js', services)
write('cases.js', cases)
write('partners.js', partners)
write('contact.js', contact)
write('solution.js', { zh: rebuildSolution(''), en: rebuildSolution('en/') })
write('articles.js', articles)

for (const [name, data] of Object.entries({ about, services, cases, partners, contact })) {
  console.log(name, 'zh keys', Object.keys(data.zh).join(','), 'en title', data.en.banner?.title || data.en.meta.title)
}
const sol = { zh: rebuildSolution(''), en: rebuildSolution('en/') }
console.log('solution zh cards', sol.zh.blind.cards.length, 'rows', sol.zh.experience.rows.length, 'caps', sol.zh.capabilities.cards.length, 'cost', sol.zh.cost.cases.length)
console.log('solution en title', sol.en.banner.title, 'rows', sol.en.experience.rows.length)
console.log('articles', articles.length, articles.filter((item) => !item.title.en || !item.blocks.en.length).map((item) => item.slug))
console.log('services items', services.zh.items.length, services.en.items.map((item) => item.title))
console.log('cases', cases.zh.items.length, cases.en.items.length)
console.log('contact topics', contact.zh.form.topics.length, contact.en.form.labels)
