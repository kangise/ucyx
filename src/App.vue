<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import audienceBrandGrowth from './assets/images/audience-brand-growth.webp'
import audienceMarketEntry from './assets/images/audience-market-entry.webp'
import audienceScaleRoi from './assets/images/audience-scale-roi.webp'
import pathEntryDelivery from './assets/images/path-entry-delivery.png'
import pathEntryDesign from './assets/images/path-entry-design.png'
import pathEntryRoi from './assets/images/path-entry-roi.png'
import pathMarketSensing from './assets/images/path-market-sensing.png'
import marketEntryDemo from './assets/images/demo-market-entry-opportunity-evaluator.png'
import entryDesignDemo from './assets/images/demo-entry-design-ai-consumer-lab.png'
import entryDeliveryDemo from './assets/images/demo-entry-delivery-us-market-launch.png'
import measurementDemo from './assets/images/demo-measurement-mix-modeling.png'
import megaDesignImage from './assets/images/mega-design-virtual-consumer-hd.png'
import megaEnterImage from './assets/images/mega-enter-channel-ecosystem-hd.png'
import megaEvaluateImage from './assets/images/mega-evaluate-roi-dashboard-hd.png'
import megaSenseImage from './assets/images/mega-sense-market-map-hd.png'
import novochoiceLogo from './assets/images/novochoice-logo.svg'
import ucyxLogo from './assets/images/ucyx-logo.png'
import en from './locales/en.json'
import zhCN from './locales/zh-CN.json'
import zhTW from './locales/zh-TW.json'

const messages = {
  en,
  'zh-CN': zhCN,
  'zh-TW': zhTW
}

const languages = [
  { code: 'en', label: 'English', region: 'United States', flag: '🇺🇸', short: 'EN' },
  { code: 'zh-CN', label: '简体中文', region: '中国', flag: '🇨🇳', short: '简' },
  { code: 'zh-TW', label: '繁體中文', region: '香港', flag: '🇭🇰', short: '繁' }
]
const audienceImages = [audienceMarketEntry, audienceBrandGrowth, audienceScaleRoi]
const pathImages = [pathMarketSensing, pathEntryDesign, pathEntryDelivery, pathEntryRoi]
const workflowDemoImages = [marketEntryDemo, entryDesignDemo, entryDeliveryDemo, measurementDemo]
const serviceMegaImages = [megaSenseImage, megaDesignImage, megaEnterImage, megaEvaluateImage]
const defaultLanguage = 'en'
const storedLanguage = window.localStorage.getItem('ucyx-language')
const currentLanguage = ref(messages[storedLanguage] ? storedLanguage : defaultLanguage)
const routePath = ref(window.location.pathname.replace(/\/$/, '') || '/')
const mobileMenuOpen = ref(false)
const languageMenuOpen = ref(false)
const servicesMenuOpen = ref(false)
const activeMegaIndex = ref(0)
const painPointIndex = ref(0)
const typedPainPoint = ref('')
const activeWorkflowIndex = ref(0)
const workflowQuestionIndex = ref(0)
const typedWorkflowQuestion = ref('')
const workflowDemoVisible = ref(false)
const ecosystemItemIndex = ref(0)
const ecosystemTransitionEnabled = ref(true)
let painRotationTimeout
let painFrame
let workflowQuestionTimeout
let workflowQuestionFrame
let ecosystemRotationTimeout
let ecosystemResetTimeout
let servicesMenuCloseTimeout

const t = computed(() => messages[currentLanguage.value])
const isHomePage = computed(() => routePath.value === '/')
const isSuccessStoriesPage = computed(() => routePath.value === '/success-stories')
const isCompanyPage = computed(() => routePath.value === '/company')
const servicePageRoutes = {
  marketEntryStrategy: '/services/market-entry-strategy',
  entryDesign: '/services/entry-design',
  entryDelivery: '/services/entry-delivery',
  entryEvaluation: '/services/entry-evaluation-roi'
}
const servicePageKeys = ['marketEntryStrategy', 'entryDesign', 'entryDelivery', 'entryEvaluation']
const serviceRouteMap = {
  [servicePageRoutes.marketEntryStrategy]: 'marketEntryStrategy',
  [servicePageRoutes.entryDesign]: 'entryDesign',
  [servicePageRoutes.entryDelivery]: 'entryDelivery',
  [servicePageRoutes.entryEvaluation]: 'entryEvaluation'
}
const activeServicePageKey = computed(() => serviceRouteMap[routePath.value] || '')
const isServicesPage = computed(() => routePath.value === '/services' || Boolean(activeServicePageKey.value))
const serviceMegaItems = computed(() => t.value.servicesMega?.items || [])
const activeMegaItem = computed(() => serviceMegaItems.value[activeMegaIndex.value] || serviceMegaItems.value[0] || {})
const activeMegaImage = computed(() => serviceMegaImages[activeMegaIndex.value] || serviceMegaImages[0])
const servicesOverviewPage = computed(() => t.value.servicesOverview || {})
const activeServicePage = computed(() => {
  if (!activeServicePageKey.value) return null
  return t.value.servicePages?.[activeServicePageKey.value] || null
})
const servicePageEntries = computed(() =>
  servicePageKeys.map((key) => ({
    key,
    href: servicePageRoutes[key],
    ...(t.value.servicePages?.[key] || {})
  }))
)
const servicePageRelated = computed(() =>
  servicePageEntries.value.filter((entry) => entry.key !== activeServicePageKey.value)
)
const servicesHeroPage = computed(() => activeServicePage.value || servicesOverviewPage.value)
const currentPageMeta = computed(() => {
  if (isCompanyPage.value && t.value.companyPage?.meta) return t.value.companyPage.meta
  if (activeServicePage.value?.meta) return activeServicePage.value.meta
  if (isServicesPage.value && servicesOverviewPage.value.meta) return servicesOverviewPage.value.meta
  if (isSuccessStoriesPage.value && t.value.successStories?.meta) return t.value.successStories.meta
  return t.value.meta
})
const contactHref = computed(() => `mailto:${t.value.finalCta.email}?subject=${encodeURIComponent(t.value.finalCta.subject)}`)
const currentLanguageOption = computed(() =>
  languages.find((language) => language.code === currentLanguage.value) || languages[0]
)
const activePainPoint = computed(() => {
  const points = t.value.problem.painPoints || []
  return points[painPointIndex.value] || points[0] || ''
})
const workflowSteps = computed(() =>
  (t.value.growthSystem.workflow || []).map((step, index) => ({
    ...step,
    image: pathImages[index],
    demoImage: workflowDemoImages[index]
  }))
)
const activeWorkflowStep = computed(() => {
  const steps = workflowSteps.value || []
  return steps[activeWorkflowIndex.value] || steps[0] || {}
})
const activeWorkflowQuestion = computed(() => {
  const questions = activeWorkflowStep.value.questions || []
  return questions[workflowQuestionIndex.value] || questions[0] || ''
})
const activeWorkflowDemo = computed(() => activeWorkflowStep.value.demoImage || '')
const audienceProfiles = computed(() =>
  (t.value.audience.profiles || []).map((profile, index) => ({
    ...profile,
    image: audienceImages[index]
  }))
)
const ecosystemItems = computed(() => t.value.partnerNetwork.items || [])
const ecosystemLoopItems = computed(() => {
  const items = ecosystemItems.value
  return [...items, ...items]
})
const activeEcosystemIndex = computed(() => {
  const itemCount = ecosystemItems.value.length
  return itemCount ? ecosystemItemIndex.value % itemCount : 0
})

const navItems = computed(() => [
  { label: t.value.nav.novochoice, href: sectionHref('#novochoice') },
  { label: t.value.nav.partnerNetwork, href: sectionHref('#partner-network') },
  { label: t.value.nav.company, href: '/company' },
  { label: t.value.nav.faq, href: sectionHref('#faq') }
])

const resourceLinks = computed(() => [
  { label: t.value.footer.servicesOverview, href: '/services' },
  { label: t.value.footer.company, href: '/company' },
  { label: t.value.footer.faq, href: sectionHref('#faq') }
])

const customerMarqueeRows = computed(() =>
  (t.value.customerWall.rows || []).slice(0, 2).map((items, index) => ({
    id: `${currentLanguage.value}-${index}`,
    reverse: index % 2 === 1,
    items: [...items, ...items]
  }))
)

function setLanguage(language) {
  if (!messages[language]) return
  currentLanguage.value = language
  languageMenuOpen.value = false
  window.localStorage.setItem('ucyx-language', language)
  document.documentElement.lang = language
  updatePageMeta()
}

function updatePageMeta() {
  const meta = currentPageMeta.value || t.value.meta
  const pageUrl = `https://ucyx.com${routePath.value === '/' ? '/' : routePath.value}`
  document.title = meta.title

  const selectors = [
    ['meta[name="description"]', 'content', meta.description],
    ['meta[property="og:title"]', 'content', meta.title],
    ['meta[property="og:description"]', 'content', meta.description],
    ['meta[property="og:url"]', 'content', pageUrl],
    ['meta[name="twitter:title"]', 'content', meta.title],
    ['meta[name="twitter:description"]', 'content', meta.description],
    ['link[rel="canonical"]', 'href', pageUrl]
  ]

  for (const [selector, attribute, value] of selectors) {
    const element = document.querySelector(selector)
    if (element && value) {
      element.setAttribute(attribute, value)
    }
  }
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
  languageMenuOpen.value = false
  servicesMenuOpen.value = false
  document.body.classList.remove('menu-open')
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  document.body.classList.toggle('menu-open', mobileMenuOpen.value)
}

function usesNovochoiceLogo(step) {
  return (step?.brand || '').toLowerCase() === 'novochoice'
}

function hasWorkflowDemo(step) {
  return Boolean(step?.demoImage)
}

function showWorkflowDemo() {
  if (activeWorkflowDemo.value) {
    workflowDemoVisible.value = true
  }
}

function hideWorkflowDemo() {
  workflowDemoVisible.value = false
}

function toggleLanguageMenu() {
  languageMenuOpen.value = !languageMenuOpen.value
}

function sectionHref(hash) {
  return isHomePage.value ? hash : `/${hash}`
}

function openServicesMenu() {
  clearServicesMenuClose()
  servicesMenuOpen.value = true
}

function closeServicesMenu() {
  clearServicesMenuClose()
  servicesMenuOpen.value = false
}

function setActiveMegaItem(index) {
  activeMegaIndex.value = index
}

function toggleServicesMenu() {
  clearServicesMenuClose()
  servicesMenuOpen.value = !servicesMenuOpen.value
}

function clearServicesMenuClose() {
  if (servicesMenuCloseTimeout) {
    window.clearTimeout(servicesMenuCloseTimeout)
    servicesMenuCloseTimeout = null
  }
}

function scheduleServicesMenuClose() {
  clearServicesMenuClose()
  servicesMenuCloseTimeout = window.setTimeout(() => {
    servicesMenuOpen.value = false
    servicesMenuCloseTimeout = null
  }, 380)
}

function closeServicesMenuOnBlur(event) {
  const nextTarget = event.relatedTarget
  if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
    scheduleServicesMenuClose()
  }
}

function closeLanguageMenuOnBlur(event) {
  const nextTarget = event.relatedTarget
  if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
    languageMenuOpen.value = false
  }
}

function clearPainAnimation() {
  if (painRotationTimeout) {
    window.clearTimeout(painRotationTimeout)
    painRotationTimeout = null
  }
  if (painFrame) {
    window.cancelAnimationFrame(painFrame)
    painFrame = null
  }
}

function clearWorkflowQuestionAnimation() {
  if (workflowQuestionTimeout) {
    window.clearTimeout(workflowQuestionTimeout)
    workflowQuestionTimeout = null
  }
  if (workflowQuestionFrame) {
    window.cancelAnimationFrame(workflowQuestionFrame)
    workflowQuestionFrame = null
  }
}

function clearEcosystemRotation() {
  if (ecosystemRotationTimeout) {
    window.clearTimeout(ecosystemRotationTimeout)
    ecosystemRotationTimeout = null
  }
}

function clearEcosystemTimers() {
  clearEcosystemRotation()
  if (ecosystemResetTimeout) {
    window.clearTimeout(ecosystemResetTimeout)
    ecosystemResetTimeout = null
  }
}

function startPainTyping() {
  clearPainAnimation()
  const points = t.value.problem.painPoints || []
  if (!points.length) return

  if (painPointIndex.value >= points.length) {
    painPointIndex.value = 0
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const characters = Array.from(activePainPoint.value)
  const typeInterval = 46

  if (reduceMotion) {
    typedPainPoint.value = activePainPoint.value
    return
  }

  typedPainPoint.value = ''
  const startedAt = window.performance.now()

  function paintFrame(now) {
    const visibleCharacters = Math.min(characters.length, Math.floor((now - startedAt) / typeInterval))
    typedPainPoint.value = characters.slice(0, visibleCharacters).join('')

    if (visibleCharacters < characters.length) {
      painFrame = window.requestAnimationFrame(paintFrame)
      return
    }

    painRotationTimeout = window.setTimeout(() => {
      painPointIndex.value = (painPointIndex.value + 1) % points.length
      startPainTyping()
    }, 2200)
  }

  painFrame = window.requestAnimationFrame(paintFrame)
}

function startWorkflowQuestionTyping() {
  clearWorkflowQuestionAnimation()
  const questions = activeWorkflowStep.value.questions || []
  if (!questions.length) {
    typedWorkflowQuestion.value = ''
    return
  }

  if (workflowQuestionIndex.value >= questions.length) {
    workflowQuestionIndex.value = 0
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const characters = Array.from(activeWorkflowQuestion.value)
  const typeInterval = 78

  if (reduceMotion) {
    typedWorkflowQuestion.value = activeWorkflowQuestion.value
    return
  }

  typedWorkflowQuestion.value = ''
  const startedAt = window.performance.now()

  function paintFrame(now) {
    const visibleCharacters = Math.min(characters.length, Math.floor((now - startedAt) / typeInterval))
    typedWorkflowQuestion.value = characters.slice(0, visibleCharacters).join('')

    if (visibleCharacters < characters.length) {
      workflowQuestionFrame = window.requestAnimationFrame(paintFrame)
      return
    }

    workflowQuestionTimeout = window.setTimeout(() => {
      workflowQuestionIndex.value = (workflowQuestionIndex.value + 1) % questions.length
      startWorkflowQuestionTyping()
    }, 2600)
  }

  workflowQuestionFrame = window.requestAnimationFrame(paintFrame)
}

function startEcosystemRotation() {
  clearEcosystemRotation()
  const items = ecosystemItems.value

  if (!items.length) return

  if (ecosystemItemIndex.value >= items.length) {
    ecosystemTransitionEnabled.value = false
    ecosystemItemIndex.value = 0
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion || items.length < 2) return

  ecosystemRotationTimeout = window.setTimeout(() => {
    advanceEcosystemItem()
    startEcosystemRotation()
  }, 2600)
}

function moveEcosystemTo(index, animated = true) {
  const items = ecosystemItems.value
  if (!items.length) return

  ecosystemTransitionEnabled.value = animated
  ecosystemItemIndex.value = index

  if (index >= items.length) {
    ecosystemResetTimeout = window.setTimeout(() => {
      ecosystemTransitionEnabled.value = false
      ecosystemItemIndex.value = 0
      window.requestAnimationFrame(() => {
        ecosystemTransitionEnabled.value = true
      })
    }, 560)
  }
}

function advanceEcosystemItem() {
  moveEcosystemTo(ecosystemItemIndex.value + 1)
}

function selectPainPoint(index) {
  painPointIndex.value = index
  startPainTyping()
}

function selectWorkflowStep(index) {
  if (activeWorkflowIndex.value === index) return
  hideWorkflowDemo()
  activeWorkflowIndex.value = index
  workflowQuestionIndex.value = 0
  startWorkflowQuestionTyping()
}

function selectEcosystemItem(index) {
  moveEcosystemTo(index)
  startEcosystemRotation()
}

onMounted(() => {
  setLanguage(currentLanguage.value)
  startPainTyping()
  startWorkflowQuestionTyping()
  startEcosystemRotation()
})

onUnmounted(() => {
  clearPainAnimation()
  clearWorkflowQuestionAnimation()
  clearEcosystemTimers()
  clearServicesMenuClose()
})

watch(currentLanguage, () => {
  updatePageMeta()
  clearEcosystemTimers()
  painPointIndex.value = 0
  activeWorkflowIndex.value = 0
  activeMegaIndex.value = 0
  workflowQuestionIndex.value = 0
  ecosystemItemIndex.value = 0
  ecosystemTransitionEnabled.value = true
  startPainTyping()
  startWorkflowQuestionTyping()
  startEcosystemRotation()
})
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <a class="brand-mark" :href="isHomePage ? '#top' : '/'" aria-label="UCYX home">
        <img :src="ucyxLogo" alt="UCYX">
      </a>

      <nav class="desktop-nav" :aria-label="t.nav.primary">
        <div
          class="services-nav-item"
          @mouseenter="openServicesMenu"
          @mouseleave="scheduleServicesMenuClose"
          @focusout="closeServicesMenuOnBlur"
        >
          <button
            class="services-trigger"
            type="button"
            :aria-expanded="servicesMenuOpen"
            :aria-label="t.servicesMega?.label || t.nav.solutions"
            @click="toggleServicesMenu"
            @keydown.escape="closeServicesMenu"
          >
            <span>{{ t.nav.solutions }}</span>
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M4 6l4 4 4-4"></path>
            </svg>
          </button>
          <Transition name="mega-menu">
            <div
              v-if="servicesMenuOpen"
              class="services-mega"
              role="menu"
              :aria-label="t.servicesMega?.label || t.nav.solutions"
              @mouseenter="clearServicesMenuClose"
              @mouseleave="scheduleServicesMenuClose"
            >
              <div class="services-mega-copy">
                <h2>{{ t.servicesMega.title }}</h2>
                <p>{{ t.servicesMega.body }}</p>
                <a class="services-mega-inline-link" href="/services" @click="closeServicesMenu">
                  {{ t.servicesMega.overviewCta }}
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              <div class="services-mega-stage">
                <div class="services-mega-tabs" aria-label="Market entry service paths">
                  <a
                    v-for="(item, index) in serviceMegaItems"
                    :key="item.href"
                    class="services-mega-tab"
                    :class="{ active: index === activeMegaIndex }"
                    :href="item.href"
                    role="menuitem"
                    @mouseenter="setActiveMegaItem(index)"
                    @mouseover="setActiveMegaItem(index)"
                    @pointerenter="setActiveMegaItem(index)"
                    @focus="setActiveMegaItem(index)"
                    @click="closeServicesMenu"
                  >
                    <span class="mega-tab-copy">
                      <strong>{{ item.verb }}</strong>
                      <span>{{ item.title }}</span>
                    </span>
                  </a>
                </div>

                <div
                  class="services-mega-preview"
                  :class="`services-mega-preview--${activeMegaIndex + 1}`"
                >
                  <div class="mega-preview-header">
                    <span class="mega-preview-route">{{ activeMegaItem.title }}</span>
                    <img
                      v-if="activeMegaItem.brand === 'NovoChoice'"
                      class="mega-preview-logo"
                      :src="novochoiceLogo"
                      alt="NovoChoice"
                    >
                    <span v-else class="mega-preview-capability">{{ activeMegaItem.token }}</span>
                  </div>

                  <div class="mega-preview-main">
                    <div class="mega-preview-copy">
                      <h3>{{ activeMegaItem.previewTitle || activeMegaItem.body }}</h3>
                      <p>{{ activeMegaItem.body }}</p>
                      <div class="mega-preview-services">
                        <span>{{ t.servicesMega.servicesLabel }}</span>
                        <strong v-for="point in activeMegaItem.points" :key="point">{{ point }}</strong>
                      </div>
                    </div>

                    <figure class="mega-preview-figure">
                      <img :src="activeMegaImage" :alt="activeMegaItem.title">
                    </figure>
                  </div>

                  <div class="mega-preview-footer">
                    <a class="services-mega-link services-mega-link--accent" :href="activeMegaItem.href" @click="closeServicesMenu">
                      {{ t.servicesMega.serviceCta }}
                    </a>
                  </div>
                </div>
              </div>

              <div class="services-mega-actions">
                <a class="services-mega-link services-mega-link--accent" :href="sectionHref('#contact')" @click="closeServicesMenu">
                  {{ t.servicesMega.diagnosticCta }}
                </a>
              </div>
            </div>
          </Transition>
        </div>
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>

      <div class="header-actions">
        <div class="language-switcher" :aria-label="t.language.switch" @focusout="closeLanguageMenuOnBlur">
          <button
            class="language-button"
            type="button"
            :aria-label="t.language.switch"
            :aria-expanded="languageMenuOpen"
            @click="toggleLanguageMenu"
            @keydown.escape="languageMenuOpen = false"
          >
            <span class="language-icon-stack" aria-hidden="true">
              <span class="language-flag">{{ currentLanguageOption.flag }}</span>
              <span class="language-globe">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M3 12h18M12 3c2.4 2.6 3.6 5.6 3.6 9S14.4 18.4 12 21M12 3c-2.4 2.6-3.6 5.6-3.6 9S9.6 18.4 12 21"></path>
                </svg>
              </span>
            </span>
            <span class="language-code">{{ currentLanguageOption.short }}</span>
          </button>
          <div v-if="languageMenuOpen" class="language-menu" role="listbox">
            <button
              v-for="language in languages"
              :key="language.code"
              class="language-option"
              type="button"
              role="option"
              :aria-selected="language.code === currentLanguage"
              :class="{ active: language.code === currentLanguage }"
              @click="setLanguage(language.code)"
            >
              <span class="language-option-flag" aria-hidden="true">{{ language.flag }}</span>
              <span class="language-option-copy">
                <strong>{{ language.region }}</strong>
                <span>- {{ language.label }}</span>
              </span>
              <span class="language-option-check" aria-hidden="true">✓</span>
            </button>
          </div>
        </div>
        <a class="button button-small" :href="sectionHref('#contact')">{{ t.nav.contact }}</a>
        <button
          class="mobile-menu-button"
          type="button"
          :aria-label="t.nav.menu"
          :aria-expanded="mobileMenuOpen"
          @click="toggleMobileMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <nav class="mobile-nav" :class="{ open: mobileMenuOpen }" :aria-label="t.nav.primary">
      <a class="mobile-nav-primary" href="/services" @click="closeMobileMenu">{{ t.nav.solutions }}</a>
      <div class="mobile-services-list">
        <a
          v-for="item in serviceMegaItems"
          :key="`mobile-${item.href}`"
          :href="item.href"
          @click="closeMobileMenu"
        >
          <span>{{ item.verb }}</span>
          <strong>{{ item.title }}</strong>
        </a>
      </div>
      <a v-for="item in navItems" :key="item.href" :href="item.href" @click="closeMobileMenu">{{ item.label }}</a>
      <a :href="sectionHref('#contact')" @click="closeMobileMenu">{{ t.nav.contact }}</a>
    </nav>

    <main v-if="isSuccessStoriesPage" id="top" class="success-stories-page">
      <section class="section-band success-hero">
        <div class="section-inner">
          <div class="section-heading">
            <h1>{{ t.successStories.title }}</h1>
            <p>{{ t.successStories.body }}</p>
          </div>
          <div class="success-story-grid">
            <article v-for="story in t.successStories.cards" :key="story.title" class="success-story-card">
              <span>{{ story.label }}</span>
              <h3>{{ story.title }}</h3>
              <p>{{ story.body }}</p>
            </article>
          </div>
          <div class="section-actions success-actions">
            <a class="button" href="/#contact">{{ t.successStories.primaryCta }}</a>
            <a class="button button-secondary" href="/">{{ t.successStories.secondaryCta }}</a>
          </div>
        </div>
      </section>
    </main>

    <main v-else-if="isServicesPage" id="top" class="content-page services-content-page">
      <section class="section-band content-hero content-hero-dark">
        <div class="section-inner content-hero-grid">
          <div class="content-hero-copy">
            <span class="content-kicker">{{ servicesHeroPage.kicker }}</span>
            <h1>{{ servicesHeroPage.title }}</h1>
            <p>{{ servicesHeroPage.intro }}</p>
            <div class="section-actions">
              <a class="button" :href="sectionHref('#contact')">{{ servicesHeroPage.primaryCta || t.hero.primaryCta }}</a>
              <a class="button button-secondary" href="/#solutions">{{ servicesHeroPage.secondaryCta || t.hero.secondaryCta }}</a>
            </div>
          </div>
          <div class="content-hero-panel" aria-hidden="true">
            <span v-for="entry in servicePageEntries" :key="`hero-${entry.key}`">
              {{ entry.verb }}
            </span>
          </div>
        </div>
      </section>

      <section v-if="!activeServicePage" class="section-band section-muted">
        <div class="section-inner services-overview-grid">
          <a
            v-for="entry in servicePageEntries"
            :key="entry.key"
            class="service-overview-card"
            :href="entry.href"
          >
            <span>{{ entry.verb }}</span>
            <h2>{{ entry.shortTitle }}</h2>
            <p>{{ entry.cardBody }}</p>
            <ul class="line-list">
              <li v-for="item in entry.highlights" :key="item">{{ item }}</li>
            </ul>
          </a>
        </div>
      </section>

      <template v-else>
        <section class="section-band section-muted">
          <div class="section-inner service-detail-layout">
            <article class="service-detail-main">
              <span class="content-kicker">{{ activeServicePage.summaryLabel }}</span>
              <h2>{{ activeServicePage.answerTitle }}</h2>
              <p>{{ activeServicePage.answerBody }}</p>
              <div class="service-block-grid">
                <article v-for="block in activeServicePage.blocks" :key="block.title" class="service-block">
                  <h3>{{ block.title }}</h3>
                  <p>{{ block.body }}</p>
                  <ul class="line-list">
                    <li v-for="item in block.items" :key="item">{{ item }}</li>
                  </ul>
                </article>
              </div>
            </article>
            <aside class="service-side-panel">
              <strong>{{ activeServicePage.deliverablesTitle }}</strong>
              <ul>
                <li v-for="deliverable in activeServicePage.deliverables" :key="deliverable">{{ deliverable }}</li>
              </ul>
              <a class="button" :href="sectionHref('#contact')">{{ activeServicePage.primaryCta }}</a>
            </aside>
          </div>
        </section>

        <section class="section-band">
          <div class="section-inner service-related">
            <div class="section-heading">
              <h2>{{ activeServicePage.relatedTitle }}</h2>
            </div>
            <div class="service-related-grid">
              <a v-for="entry in servicePageRelated" :key="entry.key" :href="entry.href">
                <span>{{ entry.verb }}</span>
                <strong>{{ entry.shortTitle }}</strong>
              </a>
            </div>
          </div>
        </section>
      </template>
    </main>

    <main v-else-if="isCompanyPage" id="top" class="content-page company-content-page">
      <section class="section-band content-hero content-hero-dark">
        <div class="section-inner content-hero-grid">
          <div class="content-hero-copy">
            <span class="content-kicker">{{ t.companyPage.kicker }}</span>
            <h1>{{ t.companyPage.title }}</h1>
            <p>{{ t.companyPage.intro }}</p>
            <div class="section-actions">
              <a class="button" :href="sectionHref('#contact')">{{ t.companyPage.primaryCta }}</a>
              <a class="button button-secondary" href="/services">{{ t.companyPage.secondaryCta }}</a>
            </div>
          </div>
          <div class="company-logo-panel">
            <img :src="ucyxLogo" alt="UCYX">
            <p>{{ t.companyPage.logoLine }}</p>
          </div>
        </div>
      </section>

      <section class="section-band section-muted">
        <div class="section-inner company-grid">
          <article v-for="card in t.companyPage.cards" :key="card.title" class="company-card">
            <span>{{ card.label }}</span>
            <h2>{{ card.title }}</h2>
            <p>{{ card.body }}</p>
          </article>
        </div>
      </section>

      <section class="section-band">
        <div class="section-inner company-principles">
          <div class="section-heading">
            <h2>{{ t.companyPage.principlesTitle }}</h2>
          </div>
          <ul class="line-list">
            <li v-for="principle in t.companyPage.principles" :key="principle">{{ principle }}</li>
          </ul>
        </div>
      </section>
    </main>

    <main v-else id="top">
      <section class="hero-section section-band">
        <div class="hero-video-background" aria-hidden="true">
          <video autoplay muted loop playsinline webkit-playsinline preload="metadata">
            <source src="/media/hero-background-2.mp4" type="video/mp4">
          </video>
        </div>
        <div class="section-inner hero-layout hero-layout-simple">
          <div class="hero-copy">
            <h1>{{ t.hero.title }}</h1>
            <p class="hero-subtitle">{{ t.hero.subtitle }}</p>
            <div class="hero-actions">
              <a class="button" href="#contact">{{ t.hero.primaryCta }}</a>
              <a class="button button-secondary" href="#solutions">{{ t.hero.secondaryCta }}</a>
            </div>
          </div>
        </div>
      </section>

      <section class="customer-wall-section" :aria-label="t.customerWall.label">
        <div class="customer-wall-heading">
          <p>{{ t.customerWall.kicker }}</p>
        </div>
        <div class="customer-wall-stage">
          <div class="customer-marquee" aria-hidden="true">
            <div
              v-for="row in customerMarqueeRows"
              :key="row.id"
              class="customer-marquee-row"
              :class="{ reverse: row.reverse }"
            >
              <div class="customer-marquee-track">
                <span v-for="(item, index) in row.items" :key="`${row.id}-${index}`">{{ item }}</span>
              </div>
            </div>
          </div>
          <a class="customer-wall-cta" :href="t.customerWall.successHref">
            <span>{{ t.customerWall.successBadge }}</span>
            <strong>{{ t.customerWall.successCta }}</strong>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h13M13 6l6 6-6 6"></path>
            </svg>
          </a>
        </div>
      </section>

      <section class="section-band audience-section">
        <div class="section-inner audience-layout">
          <div class="section-heading audience-heading">
            <h2>{{ t.audience.title }}</h2>
          </div>
          <div class="audience-list" :aria-label="t.audience.label">
            <article
              v-for="profile in audienceProfiles"
              :key="profile.title"
              class="audience-card"
              tabindex="0"
            >
              <img :src="profile.image" :alt="profile.title" loading="lazy">
              <div class="audience-card-shade" aria-hidden="true"></div>
              <div class="audience-card-copy">
                <span>{{ profile.kicker }}</span>
                <h3>{{ profile.title }}</h3>
                <p>{{ profile.body }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section-band problem-section">
        <div class="section-inner pain-layout">
          <div class="section-heading">
            <h2>{{ t.problem.title }}</h2>
            <p>{{ t.problem.body }}</p>
          </div>
          <div class="pain-typewriter" :aria-label="t.problem.label">
            <span>{{ t.problem.kicker }}</span>
            <p>
              {{ typedPainPoint }}
              <i aria-hidden="true"></i>
            </p>
            <div class="pain-dots">
              <button
                v-for="(point, index) in t.problem.painPoints"
                :key="point"
                type="button"
                :class="{ active: index === painPointIndex }"
                :aria-label="`${t.problem.dotLabel} ${index + 1}`"
                @click="selectPainPoint(index)"
              ></button>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" class="section-band entry-path-section">
        <div class="section-inner">
          <div class="section-heading">
            <h2>{{ t.growthSystem.title }}</h2>
          </div>
          <div class="entry-map-shell" :aria-label="t.growthSystem.workflowLabel">
            <div class="entry-map-route">
              <button
                v-for="(step, index) in workflowSteps"
                :key="step.title"
                class="entry-map-step"
                type="button"
                :class="{ active: index === activeWorkflowIndex }"
                :aria-pressed="index === activeWorkflowIndex"
                @click="selectWorkflowStep(index)"
                @mouseenter="selectWorkflowStep(index)"
                @focus="selectWorkflowStep(index)"
              >
                <span class="entry-step-index">{{ String(index + 1).padStart(2, '0') }}</span>
                <span class="entry-step-copy">
                  <strong>{{ step.verb }}</strong>
                  <small>{{ step.title }}</small>
                </span>
              </button>
            </div>

            <div class="entry-map-preview">
              <Transition name="brief-change" mode="out-in">
                <article
                  class="entry-visual-card"
                  :class="{ 'entry-visual-card--demo-ready': hasWorkflowDemo(activeWorkflowStep) }"
                  :key="activeWorkflowStep.title"
                  @mouseleave="hideWorkflowDemo"
                >
                  <img
                    :src="activeWorkflowStep.image"
                    :alt="activeWorkflowStep.visualAlt || activeWorkflowStep.title"
                    loading="lazy"
                  >
                  <div class="entry-visual-shade" aria-hidden="true"></div>
                  <div class="entry-visual-topline">
                    <button
                      v-if="hasWorkflowDemo(activeWorkflowStep)"
                      :class="[
                        'entry-demo-thumb',
                        `entry-demo-thumb--step-${activeWorkflowIndex + 1}`,
                        { 'entry-demo-thumb--open': workflowDemoVisible }
                      ]"
                      type="button"
                      :aria-label="activeWorkflowStep.demoAlt || activeWorkflowStep.title"
                      @mouseenter="showWorkflowDemo"
                      @mouseleave="hideWorkflowDemo"
                      @focus="showWorkflowDemo"
                      @blur="hideWorkflowDemo"
                      @keydown.enter.prevent="showWorkflowDemo"
                      @keydown.space.prevent="showWorkflowDemo"
                    >
                      <span
                        class="entry-demo-thumb-image"
                        :style="{ backgroundImage: `url(${activeWorkflowDemo})` }"
                        aria-hidden="true"
                      ></span>
                      <span class="entry-demo-thumb-cue" aria-hidden="true">
                        <svg viewBox="0 0 24 24" focusable="false">
                          <path d="M5.4 3.8 19.1 11c1 .5.9 1.9-.1 2.3l-5.6 1.8-2.7 5.3c-.5 1-1.9.8-2.2-.2L4 5.2c-.2-.9.6-1.6 1.4-1.2Z" />
                        </svg>
                      </span>
                    </button>
                    <div
                      v-else
                      class="entry-logo-mark"
                      :class="{ 'entry-logo-mark--novochoice': usesNovochoiceLogo(activeWorkflowStep) }"
                      :aria-label="activeWorkflowStep.brandAlt || activeWorkflowStep.brand"
                    >
                      <template v-if="usesNovochoiceLogo(activeWorkflowStep)">
                        <img :src="novochoiceLogo" alt="" aria-hidden="true">
                        <strong>NovoChoice</strong>
                      </template>
                      <template v-else>
                        <span>{{ activeWorkflowStep.brandMark }}</span>
                        <strong>{{ activeWorkflowStep.brand }}</strong>
                      </template>
                    </div>
                    <p class="entry-question" :aria-label="t.growthSystem.questionLabel">
                      {{ typedWorkflowQuestion }}
                      <i aria-hidden="true"></i>
                    </p>
                  </div>
                  <div
                    v-if="activeWorkflowStep.body"
                    class="entry-visual-copy"
                  >
                    <p>{{ activeWorkflowStep.body }}</p>
                  </div>
                </article>
              </Transition>
            </div>
          </div>
        </div>
      </section>

      <section id="novochoice" class="section-band section-muted">
        <div class="section-inner novochoice-compact">
          <div class="section-heading">
            <h2>{{ t.novochoice.title }}</h2>
            <p>{{ t.novochoice.body }}</p>
          </div>
          <div class="section-actions">
            <a
              class="button button-secondary"
              :href="t.novochoice.externalUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ t.novochoice.externalCta }}
            </a>
          </div>
        </div>
      </section>

      <section id="partner-network" class="section-band ecosystem-section">
        <div class="section-inner">
          <div class="section-heading">
            <h2>{{ t.partnerNetwork.title }}</h2>
            <p>{{ t.partnerNetwork.body }}</p>
          </div>
          <div class="ecosystem-carousel" :aria-label="t.partnerNetwork.label">
            <div class="ecosystem-panel">
              <div
                class="ecosystem-track"
                :class="{ 'ecosystem-track--no-transition': !ecosystemTransitionEnabled }"
                :style="{ '--ecosystem-index': ecosystemItemIndex }"
              >
                <article
                  v-for="(item, index) in ecosystemLoopItems"
                  :key="`${item.name}-${index}`"
                  class="ecosystem-item"
                >
                  <span class="ecosystem-token" aria-hidden="true">{{ item.token }}</span>
                  <strong>{{ item.name }}</strong>
                  <p>{{ item.description }}</p>
                </article>
              </div>
            </div>
            <div class="ecosystem-progress" :aria-label="t.partnerNetwork.controlsLabel">
              <button
                v-for="(item, index) in ecosystemItems"
                :key="`ecosystem-${item.name}`"
                type="button"
                :class="{ active: index === activeEcosystemIndex }"
                :aria-label="`${t.partnerNetwork.groupLabel} ${index + 1}: ${item.name}`"
                @click="selectEcosystemItem(index)"
              ></button>
            </div>
          </div>
          <div class="partner-cta">
            <p>{{ t.partnerNetwork.note }}</p>
            <a class="button button-secondary" href="#contact">{{ t.partnerNetwork.cta }}</a>
          </div>
        </div>
      </section>

      <section id="faq" class="section-band section-dark faq-section">
        <div class="section-inner faq-layout">
          <div class="faq-heading">
            <h2>{{ t.faq.title }}</h2>
          </div>
          <div class="faq-list" :aria-label="t.faq.label">
            <details
              v-for="(item, index) in t.faq.items"
              :key="item.question"
              class="faq-item"
              :open="index === 0"
            >
              <summary>
                <span>{{ item.question }}</span>
              </summary>
              <p>{{ item.answer }}</p>
            </details>
          </div>
        </div>
      </section>

      <section id="contact" class="section-band final-cta">
        <div class="section-inner cta-panel">
          <h2>{{ t.finalCta.title }}</h2>
          <p>{{ t.finalCta.body }}</p>
          <div class="contact-actions">
            <a class="button" :href="contactHref">
              {{ t.finalCta.primaryCta }}
            </a>
            <a class="button button-secondary" href="#partner-network">{{ t.finalCta.secondaryCta }}</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="section-inner footer-grid">
        <div>
          <a class="brand-mark" :href="isHomePage ? '#top' : '/'" aria-label="UCYX home">
            <img :src="ucyxLogo" alt="UCYX">
          </a>
          <p>{{ t.footer.description }}</p>
        </div>
        <div>
          <strong>{{ t.footer.navigation }}</strong>
          <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
        </div>
        <div>
          <strong>{{ t.footer.resources }}</strong>
          <a v-for="resource in resourceLinks" :key="resource.href" :href="resource.href">{{ resource.label }}</a>
        </div>
        <div>
          <strong>{{ t.footer.contact }}</strong>
          <a :href="`mailto:${t.finalCta.email}`">{{ t.finalCta.email }}</a>
          <span>{{ t.footer.location }}</span>
        </div>
      </div>
    </footer>
  </div>
</template>
