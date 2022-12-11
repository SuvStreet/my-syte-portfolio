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
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

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

    const setActiveStyle = (value) => {
      store.dispatch('styleSwitcher/setActiveStyle', value)
    }

    function lightDarkMode() {
      store.dispatch('styleSwitcher/setActiveMode')
    }

    return {
      setActiveStyle,
      isOpen,
      mapColor,
      lightDarkMode,
      className: computed(() =>
        store.getters['styleSwitcher/isOpen'] ? 'open' : ''
      ),
    }
  },
}
</script>

<style></style>
