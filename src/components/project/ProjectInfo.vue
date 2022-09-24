<template>
      <div
        :class="['project-card', $store.getters.getIsToggleDetails]"
        ref="card"
      >
        <div class="row">
          <div class="project-tag padd-15">
            <small v-for="(tag, id) in info.hash_tag" :key="id">
              #{{ tag }}
            </small>
          </div>
        </div>

        <div class="row">
          <div class="project-content padd-15">
            <div class="project-title">
              <h3>{{ $t('projectInfo.description') }}:</h3>
              <p>
                {{ info.description[$store.getters['i18n/getLanguage']] }}
              </p>
            </div>
            <div class="project-tech-title">
              <h3>{{ $t('projectInfo.info') }}:</h3>

              <ul>
                <li v-for="(dataProject, id) in info.info" :key="id">
                  <strong>
                    {{ dataProject.title[$store.getters['i18n/getLanguage']] }}
                  </strong>
                  -
                  <a
                    v-if="dataProject.description.indexOf('https') !== -1"
                    :href="dataProject.description"
                    target="_blank"
                  >
                    {{ dataProject.title[$store.getters['i18n/getLanguage']] }}
                  </a>
                  <template v-else>
                    {{ dataProject.description }}
                  </template>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <slot name="button"></slot>
      <slot name="slider"></slot>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

import MainLayout from '../layout/MainLayout.vue'

export default {
  props: ['info'],
  setup(props) {
    const store = useStore()
    const card = ref(null)

    onMounted(() => {
      store.commit('setStyleHeightCard', card.value)

      // console.log('card.value', card.value)
    })

    return {
      card,
    }
  },
  components: {
    MainLayout,
  },
}
</script>

<style></style>
