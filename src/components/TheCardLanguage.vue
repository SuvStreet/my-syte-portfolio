<template>
    <span
      v-for="(lang, id) in mapLanguage"
      :key="id"
      :class="[id]"
      @click="setActiveLanguage(id)"
    >
      {{ lang }}
    </span>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const { locale } = useI18n()

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
      setActiveLanguage
    }
  },
}
</script>

<style></style>
