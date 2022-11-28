<template>
  <h3 class="contact-title padd-15">
    {{ $t(`contact.${text}-title`) }}
  </h3>
  <h4 class="contact-sub-title padd-15">
    {{ $t(`contact.${text}-sub-title`) }}
  </h4>
</template>

<script>
export default {
  props: ["text"]
}
</script>

<style></style>
