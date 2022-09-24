<template>
  <div class="row">
    <div class="section-title padd-15">
      <h2>
        <slot>
          {{ $t(`${$route.name.toLowerCase()}.title`) }}
        </slot>
      </h2>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
