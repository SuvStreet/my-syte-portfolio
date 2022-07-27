<template>
  <div class="row">
    <div class="portfolio-filter padd-15">
      <button
        class="filter-btn shadow-dark"
        v-for="(tag, name, id) in tagBtn"
        :key="id"
        @click="setActiveFilter(tag)"
        :class="isFilter === tag ? 'active' : ''"
      >
        {{ name }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  setup() {
    const isFilter = ref('all')

    const tagBtn = {
      'Все': 'all',
      'Сайт': 'web',
      'Элементы': 'details',
      'Загрузка': 'loading',
    }

    const setActiveFilter = (value) => {
      console.log('value', value)
      isFilter.value = value
    }

    return {
      setActiveFilter,
      tagBtn,
      isFilter,
    }
  },
}
</script>

<style></style>
