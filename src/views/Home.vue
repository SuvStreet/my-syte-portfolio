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

          <button class="btn" @click="onDownloadCV">
            {{ $t('home.nameBtnSaveResume') }}
          </button>
        </div>
        <div class="home-img padd-15">
          <img src="../assets/my-foto.jpg" alt="my-foto" />
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script>
import { computed, onMounted, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'

import MainLayout from '../components/layout/MainLayout.vue'
import TheTypeText from '../components/TheTypeText.vue'

export default {
  setup() {
    const store = useStore()
    
    const locale = computed(() => store.getters['i18n/getLanguage'])
    const linkDownload = computed(() =>
      store.dispatch('downloadCV/setLinkDownloadCV', locale.value)
    )

    watch(locale, () => {
      linkDownload.value
    })

    onMounted(() => {
      linkDownload.value
    })

    const onDownloadCV = () => {
      store.dispatch('downloadCV/downloadCV', locale.value)
    }

    return {
      onDownloadCV,
    }
  },
  components: { TheTypeText, MainLayout },
}
</script>

<style lang="sass"></style>
