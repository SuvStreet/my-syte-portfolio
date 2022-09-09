<template>
  <div class="row">
    <div class="portfolio-filter padd-15">
      <button
        class="filter-btn shadow-dark"
        v-for="(name, id) in sortBtn"
        :key="id"
        @click="setActiveFilter(id)"
        :class="isFilter === id ? 'active' : ''"
      >
        <!-- {{ $t(`portfolio.sort[${id}]`) }} -->
        {{ name }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useI18n } from 'vue-i18n'
import { computed } from '@vue/runtime-core'

export default {
  setup() {
    const isFilter = ref(0)
    const t = useI18n()
    const sortBtn = computed(() => t.messages.value[t.locale.value].portfolio.sort)

    const setActiveFilter = (value) => {
      console.log('value', value)
      isFilter.value = value
    }

    return {
      setActiveFilter,
      isFilter,
      sortBtn,
    }
  },
}
</script>

<style></style>
