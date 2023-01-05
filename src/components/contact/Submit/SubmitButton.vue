<template>
  <button id="b" :class="['button', className]" :disabled="isDisabled">
    <span class="textButton">
      {{ textButton }}
    </span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      v-if="className === 'success'"
    >
      <path
        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
        fill="#fff"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      v-if="className === 'error'"
    >
      <path
        d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
        fill="#fff"
      />
    </svg>
  </button>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const className = ref('')
    const load = computed(() => store.getters['tgBotMessage/getLoad'])
    const status = computed(() => store.getters['tgBotMessage/getStatus'])
    const textButton = ref('Отправить сообщение')
    const isDisabled = ref(false)

    function submit() {
      isDisabled.value = true
      className.value = load.value
      textButton.value = ''
    }

    watch(load, (value) => {
      if (value === 'load') {
        submit()
      }

      if (status.value === 'success') {
        className.value = 'success'
        setTimeout(() => {
          className.value = ''
          store.commit('tgBotMessage/setStatus', '')
          setTimeout(() => {
            textButton.value = 'Отправить сообщение'
            isDisabled.value = false
          })
        }, 5000)
      }

      if (status.value === 'error') {
        className.value = 'error'
        setTimeout(() => {
          className.value = ''
          store.commit('tgBotMessage/setStatus', '')
          setTimeout(() => {
            textButton.value = 'Отправить сообщение'
            isDisabled.value = false
          })
        }, 5000)
      }
    })

    return {
      className,
      textButton,
      isDisabled,
    }
  },
}
</script>

<style></style>
