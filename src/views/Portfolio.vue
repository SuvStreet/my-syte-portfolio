<template>
  <div class="portfolio section">
    <div class="container">
      <TheLoader v-if="$store.getters['portfolio/loader']" />

      <template v-else>
        <router-view v-if="$route.params.id"></router-view>

        <template v-else>
          <div class="row">
            <div class="section-title padd-15">
              <h2>{{ $t('portfolio.title') }}</h2>
            </div>
          </div>
          <div class="row">
            <div class="portfolio-heading padd-15">
              <h2>{{ $t('portfolio.text') }} :</h2>
            </div>
          </div>

          <TheSort />

          <div class="row">
            <div
              class="portfolio-item padd-15"
              v-for="project in listProjects"
              :key="project.idx"
              @click="clickProject(project.idx)"
            >
              <ProjectCard
                :poster="project.avatar"
                :title="titleProject(project.idx)"
              />
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { computed, onMounted, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'

import TheSort from '../components/TheSort.vue'
import TheLoader from '../components/TheLoader.vue'
import ProjectCard from '../components/portfolio/ProjectCard.vue'

export default {
  setup() {
    const picture = ref('https://api.lorem.space/image/watch?w=150&h=220')
    const volumePortfolio = ref(3)
    const router = useRouter()
    const store = useStore()

    const listProjects = computed(() => store.getters['portfolio/getProjects'])

    onMounted(() => {
      store.dispatch('portfolio/loadingAllProjects')
    })

    function clickProject(id) {
      router.push({
        name: 'project',
        params: {
          id,
        },
      })
    }

    function titleProject(id) {
      const language = store.getters['i18n/getLanguage']
      return listProjects.value[id].title[language]
    }

    return {
      picture,
      volumePortfolio,
      clickProject,
      listProjects,
      titleProject,
    }
  },
  components: {
    TheSort,
    TheLoader,
    ProjectCard,
  },
}
</script>

<style></style>
