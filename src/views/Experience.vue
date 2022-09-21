<template>
  <MainLayout>
    <template #content>
      <div class="row">
        <ProgressBar
          v-for="(percent, technology, id) in mapExp"
          :key="id"
          :technology="technology"
          :percent="percent"
        />
      </div>
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from '../components/layout/MainLayout.vue'
import ProgressBar from '../components/experience/ProgressBar.vue'

export default {
  setup() {
    const mapExp = {
      HTML: '85',
      CSS: '90',
      JavaScript: '83',
      ReactJs: '63',
      Redux: '30',
      'React Router': '45',
      VueJs: '68',
      VueRouter: '68',
      Vuex: '90',
      Git: '65',
      'Sass/Scss': '85',
      Axios: '48',
    }

    return {
      mapExp,
    }
  },
  components: { MainLayout, ProgressBar },
}
</script>

<style></style>
