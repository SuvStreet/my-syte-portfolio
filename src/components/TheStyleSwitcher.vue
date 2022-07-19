<template>
  <div :class="['style-switcher', className]">
    <div class="style-switcher-toggler s-icon" @click="isOpen">
      <i class="fa fa-cog fa-spin"></i>
    </div>
    <div class="day-night s-icon" @click="lightDarkMode">
      <i class="fa" id="iconMode"></i>
    </div>
    <h4>Цвета темы</h4>
    <div class="colors">
      <span
        v-for="(col, id) in mapColor"
        :key="id"
        :class="[id]"
        @click="setActiveStyle(col)"
      >
      </span>
    </div>
    <h4>Язык</h4>
    <div class="language">
      <span
        v-for="(lang, id) in mapLanguage"
        :key="id"
        :class="[id]"
        @click="setActiveLanguage(id)"
      >
        {{ lang }}
      </span>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const store = useStore()
    const { t, locale } = useI18n()

    function isOpen() {
      store.commit('styleSwitcher/toggle')
    }

    onMounted(() => {
      store.commit('styleSwitcher/defaultSkin')
      store.commit('styleSwitcher/defaultMode')
    })

    const mapColor = {
      'color-1': '--color-1',
      'color-2': '--color-2',
      'color-3': '--color-3',
      'color-4': '--color-4',
      'color-5': '--color-5',
    }

    const mapLanguage = {
      ru: 'RU',
      en: 'EN',
      pl: 'PL',
    }

    const setActiveStyle = (value) => {
      store.dispatch('styleSwitcher/setActiveStyle', value)
    }

    function lightDarkMode() {
      store.dispatch('styleSwitcher/setActiveMode')
    }

    function setActiveLanguage(value) {
      store.commit('i18n/setLanguage', value)
      locale.value = value
    }

    return {
      setActiveStyle,
      isOpen,
      mapColor,
      mapLanguage,
      lightDarkMode,
      className: computed(() =>
        store.getters['styleSwitcher/isOpen'] ? 'open' : ''
      ),
      setActiveLanguage
    }
  },
}
</script>

<style></style>
