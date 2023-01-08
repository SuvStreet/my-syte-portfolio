<template>
  <MainLayout>
    <template #title>
      <SectionTitle />
    </template>

    <template #content>
      <div class="row">
        <div class="portfolio-heading padd-15">
          <h2>{{ $t('portfolio.text') }} :</h2>
        </div>
      </div>

      <PortfolioLoader v-if="statusLoader" />

      <template v-else>
        <NoPortfolio v-if="listProjects.length === 0" />

        <!-- TODO: сделать сортировку -->
        <!-- TODO: сделать поиск -->

        <div class="row" v-else>
          <div
            class="portfolio-item padd-15"
            v-for="project in listProjects"
            :key="project.idx"
            @click="open(project.idx)"
          >
            <PortfolioCard
              :poster="project.avatar"
              :title="titleProject(project.idx)"
            />
          </div>
        </div>
      </template>
    </template>
  </MainLayout>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import MainLayout from '../components/layout/MainLayout.vue'
import SectionTitle from '../components/layout/SectionTitle.vue'
import NoPortfolio from '../components/portfolio/NoPortfolio.vue'
import PortfolioLoader from '../components/loader-skeleton/PortfolioLoader.vue'
import PortfolioCard from '../components/portfolio/PortfolioCard.vue'

export default {
  setup() {
    const router = useRouter()
    const store = useStore()

    const statusLoader = computed(() => store.getters['portfolio/loader'])
    const listProjects = computed(() => store.getters['portfolio/getProjects'])
    // const listProjects = ref([])

    onMounted(() => {
      store.dispatch('portfolio/loadingAllProjects')
    })

    function open(id) {
      if (store.getters.getIsToggleNav === 'open') {
        store.commit('setIsToggleNav', '')
      }
      router.push(`project/${id}`)
    }

    function titleProject(id) {
      const language = store.getters['i18n/getLanguage']
      return listProjects.value[id].title[language]
    }

    return {
      statusLoader,
      open,
      listProjects,
      titleProject,
    }
  },
  components: {
    MainLayout,
    SectionTitle,
    NoPortfolio,
    PortfolioLoader,
    PortfolioCard,
  },
}
</script>

<style></style>
