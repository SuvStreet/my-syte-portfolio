<template>
  <div class="contact-info-item padd-15">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <h4>
      <slot name="title"></slot>
    </h4>
    <p>
      <slot name="text"></slot>
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
