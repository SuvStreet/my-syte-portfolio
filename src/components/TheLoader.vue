<template>
  <skeleton-block
    class="skeleton title-skeleton"
    effect="wave"
  ></skeleton-block>
  <skeleton-block
    class="skeleton title-before-skeleton"
    effect="wave"
  ></skeleton-block>
  <skeleton-block
    class="skeleton title-after-skeleton"
    effect="wave"
  ></skeleton-block>
  <skeleton-block class="skeleton text-skeleton" effect="wave"></skeleton-block>

  <div class="block-skeleton">
    <skeleton-block
      class="skeleton sort-skeleton"
      effect="wave"
    ></skeleton-block>
    <skeleton-block
      class="skeleton sort-skeleton"
      effect="wave"
    ></skeleton-block>
    <skeleton-block
      class="skeleton sort-skeleton"
      effect="wave"
    ></skeleton-block>
    <skeleton-block
      class="skeleton sort-skeleton"
      effect="wave"
    ></skeleton-block>
  </div>

  <div class="block-skeleton">
    <skeleton-block
      class="skeleton img-skeleton"
      effect="wave"
    ></skeleton-block>
    <skeleton-block
      class="skeleton img-skeleton"
      effect="wave"
    ></skeleton-block>
    <skeleton-block
      class="skeleton img-skeleton"
      effect="wave"
    ></skeleton-block>
  </div>
</template>

<script>
import { SkeletonBlock } from 'skeleton-elements/vue'
import 'skeleton-elements/css'

export default {
  components: {
    SkeletonBlock,
  },
}
</script>

<style scoped>
.skeleton {
  border-radius: 5px;
  --skeleton-color: var(--bg-black-100);
}

.title-skeleton {
  width: 230px;
  height: 50px;
  margin-bottom: 5px;
}

.title-before-skeleton {
  height: 4px;
  width: 50px;
}

.title-after-skeleton {
  height: 4px;
  width: 25px;
  margin-top: 5px;
}

.text-skeleton {
  width: 280px;
  height: 36px;
  margin-top: 55px;
}

.block-skeleton {
  display: flex;
}

.sort-skeleton {
  width: 170px;
  height: 45px;
  margin-top: 40px;
}

.sort-skeleton:not(:last-child) {
  margin-right: 10px;
}

.img-skeleton {
  width: 262px;
  height: 130px;
  margin-top: 50px;
}

.img-skeleton:not(:last-child) {
  margin-right: 10px;
}
</style>
