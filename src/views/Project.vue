<template>
  <MainLayout>
    <template #title>
      <SectionTitle v-if="projectInfo">
        {{ projectInfo.title[$store.getters['i18n/getLanguage']] }}
      </SectionTitle>
    </template>

    <template #content>
      <ProjectLoader v-if="!projectInfo" />

      <ProjectInfo v-else :info="projectInfo">
        <!-- Две кнопки открыть детали проекта и закрыть сам проект -->

        <template #button>
          <div class="row padd-15 btn-details">
            <button class="btn" @click="clickDetails">
              {{ $t('project.openDetail') }}
              <span :class="[styleRotate ? 'isOpen' : '']">
                <i class="fa-solid fa-plus"></i>
              </span>
            </button>
            <button class="btn" @click="clickClose">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </template>

        <template #slider>
          <ProjectSlider :photo="projectInfo.photo_slider" />
        </template>
      </ProjectInfo>
    </template>
  </MainLayout>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ref } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'

import ProjectInfo from '../components/project/ProjectInfo.vue'
import ProjectSlider from '../components/project/ProjectSlider.vue'
import ProjectLoader from '../components/loader-skeleton/ProjectLoader.vue'
import MainLayout from '../components/layout/MainLayout.vue'
import SectionTitle from '../components/layout/SectionTitle.vue'

export default {
  props: ['id'],
  setup({ id }) {
    const store = useStore()
    const router = useRouter()

    const styleRotate = ref(false)
    const projectInfo = computed(() =>
      store.getters['portfolio/getProject'](id)
    )

    onMounted(() => {
      store.dispatch('portfolio/loadingAllProjects')
    })

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
      router.push(`/${store.getters['i18n/getLanguage']}/portfolio`)
    }

    return {
      clickDetails,
      clickClose,
      styleRotate,
      projectInfo,
    }
  },
  components: {
    ProjectInfo,
    ProjectSlider,
    ProjectLoader,
    MainLayout,
    SectionTitle,
  },
}
</script>

<style></style>
