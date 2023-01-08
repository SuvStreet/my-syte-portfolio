<template>
  <div class="main-container" @click="isClose">
    <div :class="['aside', isToggleNav]">
      <div class="wrapper-aside">
        <div class="logo">
          <router-link :to="`/${$store.getters['i18n/getLanguage']}/home`">
            <span>Suv</span>Street
          </router-link>
        </div>
        <div :class="['nav-toggler', isToggleNav]" @click="isNav">
          <span></span>
        </div>
        <ul class="nav">
          <li @click="isNav">
            <router-link :to="`/${$store.getters['i18n/getLanguage']}/home`">
              <i class="fa fa-home"></i>
              {{ $t('menu.home') }}
            </router-link>
          </li>
          <li @click="isNav">
            <router-link :to="`/${$store.getters['i18n/getLanguage']}/about`">
              <i class="fa fa-user"></i>
              {{ $t('menu.about') }}
            </router-link>
          </li>
          <li @click="isNav">
            <router-link
              :to="`/${$store.getters['i18n/getLanguage']}/experience`"
            >
              <i class="fa fa-brain"></i>
              {{ $t('menu.experience') }}
            </router-link>
          </li>
          <li @click="isNav">
            <router-link
              :to="`/${$store.getters['i18n/getLanguage']}/portfolio`"
            >
              <i class="fa fa-briefcase"></i>
              {{ $t('menu.portfolio') }}
            </router-link>
          </li>
          <li @click="isNav">
            <router-link :to="`/${$store.getters['i18n/getLanguage']}/contact`">
              <i class="fa fa-comments"></i>
              {{ $t('menu.contacts') }}
            </router-link>
          </li>
        </ul>

        <div class="card-language">
          <TheCardLanguage />
        </div>

        <footer>© {{ ageNow }} SuvStreet</footer>
      </div>
    </div>

    <div class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" @scroll="isClose" :class="isToggleNav" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from '@vue/runtime-core'

import TheCardLanguage from './TheCardLanguage.vue'

export default {
  setup() {
    const store = useStore()
    const ageNow = ref(new Date().getFullYear())
    const localeTemp = computed(() => store.getters['i18n/getLanguage'])

    function isClose() {
      if (store.getters['styleSwitcher/isOpen'] === true) {
        store.commit('styleSwitcher/toggle')
      }
    }

    function isNav() {
      store.getters.getIsToggleNav === ''
        ? store.commit('setIsToggleNav', 'open')
        : store.commit('setIsToggleNav', '')
    }

    return {
      isClose,
      isNav,
      isToggleNav: computed(() => store.getters.getIsToggleNav),
      ageNow,
      localeTemp,
    }
  },
  components: {
    TheCardLanguage,
  },
}
</script>

<style scoped lang="sass"></style>
