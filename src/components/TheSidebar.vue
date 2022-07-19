<template>
  <div class="main-container">
    <div :class="['aside', isToggleNav]">
      <div class="logo">
        <router-link to="/"><span>Suv</span>Street </router-link>
      </div>
      <div :class="['nav-toggler', isToggleNav]" @click="isNav">
        <span></span>
      </div>
      <ul class="nav">
        <li @click="isNav">
          <router-link to="/">
            <i class="fa fa-home"></i>
            {{ $t('menu.home') }}
          </router-link>
        </li>
        <li @click="isNav">
          <router-link to="/about">
            <i class="fa fa-user"></i>
            {{ $t('menu.about') }}
          </router-link>
        </li>
        <li @click="isNav">
          <router-link to="/service">
            <i class="fa fa-cog"></i>
            {{ $t('menu.services') }}
          </router-link>
        </li>
        <li @click="isNav">
          <router-link to="/portfolio">
            <i class="fa fa-briefcase"></i>
            {{ $t('menu.portfolio') }}
          </router-link>
        </li>
        <li @click="isNav">
          <router-link to="/contact">
            <i class="fa fa-comments"></i>
            {{ $t('menu.contacts') }}
          </router-link>
        </li>
      </ul>
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
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const isToggleNav = ref('')

    function isClose() {
      if (store.getters['styleSwitcher/isOpen'] === true) {
        store.commit('styleSwitcher/toggle')
      }
    }

    function isNav() {
      isToggleNav.value === ''
        ? (isToggleNav.value = 'open')
        : (isToggleNav.value = '')
    }

    return {
      isClose,
      isNav,
      isToggleNav,
    }
  },
}
</script>

<style scoped lang="sass"></style>
