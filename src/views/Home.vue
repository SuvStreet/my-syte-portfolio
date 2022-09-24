<template>
  <MainLayout>
    <template #content>
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
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from '../components/layout/MainLayout.vue'
import TheTypeText from '../components/TheTypeText.vue'

export default {
  setup() {
    return {}
  },
  components: { TheTypeText, MainLayout },
}
</script>

<style lang="sass"></style>
