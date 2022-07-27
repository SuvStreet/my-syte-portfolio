<template>
  <div class="portfolio section">
    <div class="container">
      <div class="row">
        <div class="section-title padd-15">
          <h2>Портфолио</h2>
        </div>
      </div>
      <div class="row">
        <div class="portfolio-heading padd-15">
          <h2>Мои последние проекты :</h2>
        </div>
      </div>

      <TheSort />

      <div class="row">
        <div
          class="portfolio-item padd-15"
          v-for="id in volumePortfolio"
          :key="id"
        >
          <div class="portfolio-item-inner shadow-dark">
            <div class="portfolio-item-bg">
              <div class="portfolio-img">
                <img :src="picture" alt="poster" />
              </div>
              <h2 class="portfolio-title">Lorem, ipsum dolor.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import TheSort from '../components/TheSort.vue'

export default {
  setup() {
    const picture = ref('https://api.lorem.space/image/watch?w=150&h=220')
    const volumePortfolio = ref(3)

    return {
      picture,
      volumePortfolio,
    }
  },
  components: {
    TheSort,
  },
}
</script>

<style></style>
