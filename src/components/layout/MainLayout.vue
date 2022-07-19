<template>
  <section class="about section">
    <div class="container">
      <div class="row">
        <div class="section-title padd-15" v-if="sectionTitle">
          <h2>{{ sectionTitle }}</h2>
        </div>
      </div>
      <slot name="content"></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: ['sectionTitle'],
  setup() {

  }
}
</script>

<style></style>
