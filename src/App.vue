<template>
  <TheSidebar />
  <TheStyleSwitcher />
</template>

<script>
import TheSidebar from './components/TheSidebar.vue'
import TheStyleSwitcher from './components/TheStyleSwitcher.vue'
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    onMounted(() => {
      window.addEventListener('scroll', isOpen)
    })

    function isOpen() {
      if (store.getters['styleSwitcher/isOpen'] === true) {
        store.commit('styleSwitcher/toggle')
      }
    }
    return {}
  },
  components: {
    TheSidebar,
    TheStyleSwitcher,
  },
}
</script>

<style lang="sass">
</style>
