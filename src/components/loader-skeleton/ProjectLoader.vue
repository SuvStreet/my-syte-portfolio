<template>
  <skeleton-block
    class="skeleton title-skeleton"
    effect="wave"
    borderRadius="5px"
  ></skeleton-block>

  <skeleton-block
    class="skeleton title-before-skeleton"
    effect="wave"
    borderRadius="5px"
  ></skeleton-block>

  <skeleton-block
    class="skeleton title-after-skeleton"
    effect="wave"
    borderRadius="5px"
  ></skeleton-block>

  <div class="block-skeleton">
    <skeleton-block
      class="skeleton button-one-skeleton"
      effect="wave"
      :borderRadius="radius"
    ></skeleton-block>
    <skeleton-block
      class="skeleton button-two-skeleton"
      effect="wave"
      :borderRadius="radius"
    ></skeleton-block>
  </div>
  <skeleton-image
    class="skeleton image-skeleton"
    borderRadius="10px"
    effect="wave"
  ></skeleton-image>
</template>

<script>
import { SkeletonBlock } from 'skeleton-elements/vue'
import { SkeletonImage } from 'skeleton-elements/vue'

import 'skeleton-elements/css'

export default {
  setup() {
    return {
      radius: '40px',
    }
  },
  components: {
    SkeletonBlock,
    SkeletonImage,
  },
}
</script>

<style scoped>
.skeleton {
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

.block-skeleton {
  display: flex;
  margin-top: 60px;
}

.button-one-skeleton {
  width: 140px;
  height: 40px;
}

.button-one-skeleton:not(:last-child) {
  margin-right: 10px;
}

.button-two-skeleton {
  width: 40px;
  height: 40px;
}

.image-skeleton {
  margin-top: 20px;
}
</style>
