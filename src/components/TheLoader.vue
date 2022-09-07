<template>
  <skeleton-text class="skeleton-text" tag="h2" effect="wave">
    Portfolio
  </skeleton-text>
  <skeleton-block class="skeleton-block" tag="p" effect="wave"></skeleton-block>
  <skeleton-block class="skeleton-block" tag="p" effect="wave"></skeleton-block>
</template>

<script>
import { SkeletonBlock } from 'skeleton-elements/vue'
import { SkeletonText } from 'skeleton-elements/vue'
import 'skeleton-elements/css'

export default {
  components: {
    SkeletonBlock,
    SkeletonText,
  },
}
</script>

<style>
.skeleton-text {
  font-size: 53px;
  --skeleton-color: var(--text-black-900);
  margin-bottom: 20px;
  border-radius: 5px;
}

.skeleton-block {
  font-family: sans-serif;
  width: 230px;
  height: 50px;
  border-radius: 5px;
  --skeleton-color: var(--text-black-900);
  margin-bottom: 5px;
}
</style>
