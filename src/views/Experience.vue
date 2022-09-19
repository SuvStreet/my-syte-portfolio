<template>
  <section class="experience section">
    <div class="container">
      <div class="row">
        <div class="section-title padd-15">
          <h2>{{ $t('experience.title') }}</h2>
        </div>
      </div>

      <div class="row">
        <ProgressBar
          v-for="(percent, technology, id) in mapExp"
          :key="id"
          :technology="technology"
          :percent="percent"
        />
      </div>
    </div>
  </section>
</template>

<script>
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
  components: { ProgressBar },
}
</script>

<style></style>