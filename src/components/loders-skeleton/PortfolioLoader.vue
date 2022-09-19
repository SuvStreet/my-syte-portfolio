<template>
  <skeleton-block
    class="skeleton title-skeleton"
    effect="wave"
    :borderRadius="radius"
  >
  </skeleton-block>
  <skeleton-block
    class="skeleton title-before-skeleton"
    effect="wave"
    :borderRadius="radius"
  >
  </skeleton-block>
  <skeleton-block
    class="skeleton title-after-skeleton"
    effect="wave"
    :borderRadius="radius"
  >
  </skeleton-block>
  <skeleton-block
    class="skeleton text-skeleton"
    effect="wave"
    :borderRadius="radius"
  ></skeleton-block>

  <!-- <div class="block-skeleton">
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
  </div> -->

  <div class="row">
    <div class="block-skeleton padd-15" v-for="id in projectBlock" :key="id">
      <skeleton-block
        class="skeleton img-skeleton"
        effect="wave"
        :borderRadius="radius"
      ></skeleton-block>
    </div>
  </div>
</template>

<script>
import { SkeletonBlock } from 'skeleton-elements/vue'
import 'skeleton-elements/css'

export default {
  setup() {
    return {
      projectBlock: 6,
      radius: '5px',
    }
  },
  components: {
    SkeletonBlock,
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

.text-skeleton {
  width: 280px;
  height: 36px;
  margin: 55px 0 50px 0;
}

.block-skeleton {
  margin-bottom: 30px;
  min-width: 340px;
  flex: 1 0 33.33%;
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
  min-width: 340px;
  height: 180px;
}
</style>
