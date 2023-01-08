<template>
  <span
    v-for="(lang, id) in mapLanguage"
    :key="id"
    :class="[
      id,
      'shadow-dark',
      id === $store.getters['i18n/getLanguage'] ? 'locale-active' : '',
    ]"
    @click="setActiveLanguage(id)"
  >
    {{ lang }}
  </span>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'

export default {
  setup() {
    const store = useStore()
    const { locale, availableLocales, fallbackLocale } = useI18n()
    const router = useRouter()
    const route = useRoute()
    const activeLanguage = ref('locale-active')

    const mapLanguage = {
      ru: 'RU',
      en: 'EN',
      pl: 'PL',
    }

    watch(
      () => route.path,
      (toPath) => {
        if (toPath.split('/')[1] !== localStorage.getItem('locale_suvstreet')) {
          const pathLocale = toPath.split('/')[1]
          const link = toPath
            .split('/')
            .filter((str) => str !== pathLocale)
            .join('/')
          checkLocale(pathLocale, link)
          locale.value = pathLocale
        }
      }
    )

    function checkLocale(locale, link) {
      if (availableLocales.find((l) => l === locale)) {
        store.dispatch('i18n/setLanguage', locale)
        router.push(`/${locale}${link}`)
      } else {
        store.dispatch('i18n/setLanguage', fallbackLocale.value)
        router.push(`/${fallbackLocale.value}${link}`)
      }
    }

    function setActiveLanguage(value) {
      store.dispatch('i18n/setLanguage', value)
      locale.value = value
      store.commit('downloadCV/localeDownloadCV', locale.value)
      router.push(`/${value}/${route.path.split('/').splice(2, 2).join('/')}`)
    }

    return {
      mapLanguage,
      activeLanguage,
      setActiveLanguage,
    }
  },
}
</script>

<style></style>
