<template>
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
  >
  </skeleton-image>
</template>

<script>
import { SkeletonBlock } from 'skeleton-elements/vue'
import { SkeletonImage } from 'skeleton-elements/vue'

export default {
  setup(){
    return {
      radius: "40px"
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

.block-skeleton {
  display: flex;
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
