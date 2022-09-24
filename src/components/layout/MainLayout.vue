<template>
  <section :class="[$route.name.toLowerCase(), 'section']">
    <div class="container">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
