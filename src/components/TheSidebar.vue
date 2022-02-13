<template>
  <div class="main-container">
    <div class="aside">
      <div class="logo">
        <router-link to="/"><span>Suv</span>Street </router-link>
      </div>
      <div class="nav-toggler">
        <span></span>
      </div>
      <ul class="nav">
        <li>
          <router-link to="/"><i class="fa fa-home"></i>Главная</router-link>
        </li>
        <li>
          <router-link to="/about"
            ><i class="fa fa-user"></i>Обо мне</router-link
          >
          <!-- <a href="#"><i class="fa fa-user"></i> About</a> -->
        </li>
        <li>
          <router-link to="/service"
            ><i class="fa fa-cog"></i>Услуги</router-link
          >
          <!-- <a href="#"><i class="fa fa-list"></i> Services</a> -->
        </li>
        <li>
          <router-link to="/portfolio"
            ><i class="fa fa-briefcase"></i>Портфолио</router-link
          >
          <!-- <a href="#"><i class="fa fa-briefcase"></i> Portfolio</a> -->
        </li>
        <li>
          <router-link to="/contact"
            ><i class="fa fa-comments"></i>Контакты</router-link
          >
          <!-- <a href="#"><i class="fa fa-comments"></i> Contact</a> -->
        </li>
      </ul>
    </div>
    <div class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" @scroll="isClose" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    function isClose() {
      if (store.getters['styleSwitcher/isOpen'] === true) {
        store.commit('styleSwitcher/toggle')
      }
    }

    return {
      isClose
    }
  },
}
</script>

<style scoped lang="sass"></style>
