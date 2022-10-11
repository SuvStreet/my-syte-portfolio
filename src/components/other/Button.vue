<template>
  <div class="row">
      <div class="buttons padd-15">
        <router-link :to="link" class="btn">
          <slot name="title"></slot>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  props:['link']
}
</script>

<style>

</style>