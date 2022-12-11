<template>
  <span
    v-for="(lang, id) in mapLanguage"
    :key="id"
    :class="[id, 'shadow-dark', id === $store.state.i18n.language ? 'locale-active' : '']"
    @click="setActiveLanguage(id)"
  >
    {{ lang }}
  </span>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const { locale } = useI18n()
    const activeLanguage = ref('locale-active')

    const mapLanguage = {
      ru: 'RU',
      en: 'EN',
      pl: 'PL',
    }
    function setActiveLanguage(value) {
      store.commit('i18n/setLanguage', value)
      locale.value = value
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
