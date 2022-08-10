<template>
  <div :class="['project', 'section', $store.getters.getIsToggleNav]">
    <div class="container">

      <CardInfo />
      
      <!-- Две кнопки открыть детали проекта и закрыть сам проект -->
      <div class="row padd-15 btn-details">
        <button class="btn" @click="clickDetails">More details +</button>
        <button class="btn">X</button>
      </div>

      <div class="project-item">
        <button class="btn">next</button>

        <div class="project-item-inner shadow-dark">
          <img
            src="https://api.lorem.space/image/face?w=1920&h=1080"
            alt="picture"
          />
        </div>

        <button class="btn">past</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

import CardInfo from './CardInfo.vue'

export default {
  setup() {
    const store = useStore()

    function clickDetails() {
      const refCard = store.getters.getStyleHeightCard

      store.getters.getIsToggleDetails === ''
        ? (store.commit('setIsToggleDetails', 'active'),
          (refCard.style.height = refCard.scrollHeight + 20 + 'px'))
        : (store.commit('setIsToggleDetails', ''),
          (refCard.style.height = '0px'))
    }

    return {
      clickDetails,
    }
  },
  components: {
    CardInfo,
  },
}
</script>

<style></style>
