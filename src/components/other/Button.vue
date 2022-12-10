<template>
  <div class="row">
    <div :class="className">
      <router-link :to="link" class="btn">
        <slot name="title"></slot>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['link', 'className'],
}
</script>

<style></style>
