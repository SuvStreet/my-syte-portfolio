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

      <TheSort/>

      <div class="row">

        <div class="portfolio-item padd-15">
          <div class="portfolio-item-inner shadow-dark">
            <div class="portfolio-img">
              <img src="https://api.lorem.space/image/movie?w=150&h=220" alt="poster">
            </div>
          </div>
        </div>

        <div class="portfolio-item padd-15">
          <div class="portfolio-item-inner shadow-dark">
            <div class="portfolio-img">
              <img src="https://api.lorem.space/image/game?w=150&h=220" alt="poster">
            </div>
          </div>
        </div>

        <div class="portfolio-item padd-15">
          <div class="portfolio-item-inner shadow-dark">
            <div class="portfolio-img">
              <img src="https://api.lorem.space/image/album?w=150&h=220" alt="poster">
            </div>
          </div>
        </div>

        <div class="portfolio-item padd-15">
          <div class="portfolio-item-inner shadow-dark">
            <div class="portfolio-img">
              <img src="https://api.lorem.space/image/book?w=150&h=220" alt="poster">
            </div>
          </div>
        </div>

        <div class="portfolio-item padd-15">
          <div class="portfolio-item-inner shadow-dark">
            <div class="portfolio-img">
              <img src="https://api.lorem.space/image/fashion?w=150&h=220" alt="poster">
            </div>
          </div>
        </div>

        <div class="portfolio-item padd-15">
          <div class="portfolio-item-inner shadow-dark">
            <div class="portfolio-img">
              <img src="https://api.lorem.space/image/watch?w=150&h=220" alt="poster">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import TheSort from '../components/TheSort.vue'

export default {
  setup() {
    return {
    }
  },
  components: {
    TheSort,
  },
}
</script>

<style></style>
