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
      <!-- <span class="color-1" ref="color" ></span>
      <span class="color-2" ref="color" ></span>
      <span class="color-3" ref="color" @click="setActiveStyle"></span>
      <span class="color-4" ref="color" @click="setActiveStyle"></span>
      <span class="color-5" ref="color" @click="setActiveStyle"></span> -->
    </div>
    <!-- <h4>Язык</h4>
    <div class="language">
      <span class="ru" @click="setActiveLanguage">RU</span>
      <span class="en" @click="setActiveLanguage">EN</span>
      <span class="pl" @click="setActiveLanguage">PL</span>
    </div> -->
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const dayNight = ref(null)

    function isOpen() {
      store.commit('styleSwitcher/toggle')
    }

    onMounted(() => {
      store.commit('styleSwitcher/defaultSkin')
      store.commit('styleSwitcher/defaultMode')

      // dayNight.value = document.querySelector('.day-night')

      // console.log('dayNight.value',dayNight.value.querySelector('i').classList.add('fa-sun')

      // if (document.querySelector('#app').classList.contains('dark')) {
      //   dayNight.value.querySelector('i').classList.add('fa-sun')
      // } else {
      //   dayNight.value.querySelector('i').classList.add('fa-moon')
      // }
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
