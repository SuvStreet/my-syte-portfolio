<template>
  <span class="typing">{{ outText }}</span>
  <span :class="['cursor', { 'cursor--blink': cursorBlink }]">_</span>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted, watch } from '@vue/runtime-core'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    console.log('store', store.getters['i18n/getLanguage'])

    const { t } = useI18n()

    const text = ref([
      ' ',
      t('home.typedStrings.firstString'),
      t('home.typedStrings.secondString'),
      t('home.typedStrings.thirdString'),
      t('home.typedStrings.fourthString'),
      t('home.typedStrings.fifthString'),
    ])

    watch(useI18n().locale, () => {
      text.value = [
        ' ',
        t('home.typedStrings.firstString'),
        t('home.typedStrings.secondString'),
        t('home.typedStrings.thirdString'),
        t('home.typedStrings.fourthString'),
        t('home.typedStrings.fifthString'),
      ]
    })

    const line = ref(0)
    const count = ref(0)
    const outText = ref('')
    const cursorBlink = ref(false)

    onMounted(() => {
      typeLine(150, 1000, 20)
    })

    const typeLine = (speedAdd = 150, delay = 1500, speedRemove = 150) => {
      const intervalAddText = setInterval(() => {
        const resultAddText = addText()
        if (resultAddText) {
          clearInterval(intervalAddText)

          const delayRemove = setTimeout(() => {
            cursorBlink.value = false
            const intervalRemoveText = setInterval(() => {
              const resultRemoveText = removeText()
              if (resultRemoveText) {
                if (line.value === text.value.length) {
                  line.value = 0
                }
                clearInterval(intervalRemoveText)
                clearTimeout(delayRemove)
                typeLine(speedAdd, delay, speedRemove)
              }
            }, speedRemove)
          }, delay)
        }
      }, speedAdd)
    }

    const addText = () => {
      outText.value += text.value[line.value][count.value]
      count.value++
      if (count.value >= text.value[line.value].length) {
        cursorBlink.value = true
        count.value = 0
        line.value++
        return true
      }
    }

    const removeText = () => {
      outText.value = outText.value.slice(0, -1)
      if (outText.value.length === 0) {
        return true
      }
    }

    return {
      outText,
      cursorBlink,
    }
  },
}
</script>

<style>
</style>
