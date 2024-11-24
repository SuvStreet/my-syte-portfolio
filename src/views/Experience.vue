<template>
  <MainLayout>
    <template #title>
      <SectionTitle />
    </template>

    <template #content>
      <div class="row">
        <ProgressBar
          v-for="(percent, technology, id) in mapExp"
          :key="id"
          :technology="technology"
          :percent="percent"
          :description="mapDescription[technology]"
        />
      </div>
    </template>
  </MainLayout>
</template>

<script>
import { useI18n } from 'vue-i18n'

import MainLayout from '../components/layout/MainLayout.vue'
import SectionTitle from '../components/layout/SectionTitle.vue'
import ProgressBar from '../components/experience/ProgressBar.vue'

export default {
  setup() {
    const t = useI18n()
    
    const mapExp = {
      ReactJs: '101',
      Redux: '101',
      TypeScript: '101',
      NodeJs: '101',
      Express: '101',
      MongoDB: '101',
      Docker: '101',
      HTML: '101',
      CSS: '101',
      JavaScript: '101',
      'React Router': '101',
      VueJs: '101',
      VueRouter: '101',
      Vuex: '101',
      Git: '101',
      'Sass/Scss': '101',
      Axios: '101',
      Vite: '101',
      Webpack: '101',
    }

    const mapDescription = Object.keys(mapExp).reduce((acc, technology) => {
      const description =
        t.messages.value[t.locale.value]?.experience?.technology?.[
          technology.toLocaleLowerCase()
        ]
      if (description) {
        acc[technology] = description.text
      }
      return acc
    }, {})

    return {
      mapExp,
      mapDescription,
    }
  },
  components: { MainLayout, SectionTitle, ProgressBar },
}
</script>

<style></style>
