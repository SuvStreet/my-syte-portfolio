<template>
  <div class="portfolio section">
    <div class="container">
      <router-view v-if="$route.params.id"></router-view>

      <template v-else>
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
            @click="clickProject(id)"
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
      </template>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

import TheSort from '../components/TheSort.vue'

export default {
  setup() {
    const picture = ref('https://api.lorem.space/image/watch?w=150&h=220')
    const volumePortfolio = ref(3)
    const router = useRouter()

    function clickProject(id) {
      router.push({
        name: 'project',
        params: {
          id,
        },
      })
    }

    return {
      picture,
      volumePortfolio,
      clickProject,
    }
  },
  components: {
    TheSort,
  },
}
</script>

<style></style>
