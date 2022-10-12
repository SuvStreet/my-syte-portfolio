<template>
  <div class="timeline-item">
    <div class="circle-dot"></div>
    <h3 class="timeline-date">
      <i class="fa fa-calendar"></i>
      <slot name="date"></slot>
    </h3>
    <h4 class="timeline-title">
      <slot name="title"></slot>
    </h4>
    <p class="timeline-text">
      <slot name="text"></slot>
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
