<template>
  <CardInfo />

  <!-- Две кнопки открыть детали проекта и закрыть сам проект -->
  <div class="row padd-15 btn-details">
    <button class="btn" @click="clickDetails">
      More details
      <span :class="[styleRotate ? 'isOpen' : '']"
        ><i class="fa-solid fa-plus"></i
      ></span>
    </button>
    <button class="btn" @click="clickClose">
      <i class="fa-solid fa-xmark"></i>
    </button>
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
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ref } from '@vue/reactivity'

import CardInfo from './CardInfo.vue'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const styleRotate = ref(false)

    function clickDetails() {
      const refCard = store.getters.getStyleHeightCard

      store.getters.getIsToggleDetails === ''
        ? (store.commit('setIsToggleDetails', 'active'),
          (styleRotate.value = true),
          (refCard.style.height = refCard.scrollHeight + 20 + 'px'))
        : (store.commit('setIsToggleDetails', ''),
          (styleRotate.value = false),
          (refCard.style.height = '0px'))
    }

    function clickClose() {
      store.commit('setIsToggleDetails', '')
      router.push('/portfolio')
    }

    return {
      clickDetails,
      clickClose,
      styleRotate,
    }
  },
  components: {
    CardInfo,
  },
}
</script>

<style></style>
