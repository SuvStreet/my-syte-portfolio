<template>
  <swiper
    class="mySwiper shadow-dark"
    :autoHeight="true"
    :modules="modules"
    :space-between="10"
    :pagination="{ type: 'progressbar' }"
    :navigation="{ hideOnClick: 'true' }"
    :loop="true"
    :grabCursor="true"
    :zoom="true"
  >
    <swiper-slide v-for="(img, id) in photo" :key="id">
      <div class="swiper-zoom-container">
        <img
          style="max-width: 100%; object-fit: cover"
          :src="img"
          alt="picture"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// import Swiper core and required modules
import { Navigation, Pagination, Zoom } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/zoom'

export default {
  props: ['photo'],
  setup() {
    return {
      modules: [Navigation, Pagination, Zoom],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>

<style scoped>
.mySwiper {
  border: 6px solid var(--bg-black-100);
  border-radius: 10px;
  margin-top: 50px;
}
</style>
