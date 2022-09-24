<template>
  <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-item-bg">
      <div class="portfolio-img">
        <img :src="poster" alt="poster" />
      </div>
      <h2 class="portfolio-title">
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ['poster', 'title']
}
</script>

<style></style>
