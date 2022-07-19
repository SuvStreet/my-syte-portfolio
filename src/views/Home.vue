<template>
  <section class="home section">
    <div class="container">
      <div class="row">
        <div class="home-info padd-15">
          <h3 class="hello">
            {{ $t('home.hello') }}
            <span class="name">{{ $t('home.name') }}</span>
          </h3>
          <h3 class="my-profession">{{ $t('home.i') }} <TheTypeText /></h3>
          <p>
            {{ $t('home.info') }}
          </p>
          <router-link to="/#" class="btn hire-me">
            {{ $t('home.nameBtnSaveResume') }}
          </router-link>
        </div>
        <div class="home-img padd-15">
          <img src="../assets/my-foto.jpg" alt="my-foto" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TheTypeText from '../components/TheTypeText.vue'

export default {
  setup() {
    return {}
  },
  components: { TheTypeText },
}
</script>

<style lang="sass"></style>
