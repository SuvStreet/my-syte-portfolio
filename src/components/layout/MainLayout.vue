<template>
  <section :class="[routeName, 'section']">
    <div class="container">
      <div class="row">
        <div class="section-title padd-15">
          <slot v-if="routeName == 'home'" name="home"></slot>
          <h2 v-else>{{ $t(`${routeName}.title`) }}</h2>
        </div>
      </div>
      <slot name="content"></slot>
    </div>
  </section>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()

    console.log('route', route.name)

    return {
      routeName: route.name.toLowerCase(),
    }
  },
}
</script>

<style></style>
