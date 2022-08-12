<template>
  <div class="row">
    <div class="slider">
      <div class="slider-container shadow-dark" ref="sliderContainer">
        <img
          :style="classTransforms"
          :src="picture"
          alt="picture"
          v-for="img in volumePicture"
          :key="img"
        />
      </div>
      <div class="slider-btn">
        <button class="past" @click="postPicture">
          <i class="fa-solid fa-caret-left"></i>
        </button>
        <button class="next" @click="nextPicture">
          <i class="fa-solid fa-caret-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  setup() {
    const picture = ref('https://api.lorem.space/image/face?w=1920&h=1080')
    const volumePicture = ref(3)
    const sliderContainer = ref(null)
    const count = ref(0)
    const classTransforms = ref('')

    function nextPicture() {
      count.value++
      rollSlider()
    }

    function rollSlider() {
      let width = sliderContainer.value.offsetWidth

      classTransforms.value = `transform: translate(-${
        (width - 12) * count.value
      }px)`

      if (count.value === volumePicture.value) {
        classTransforms.value = `transform: translate(0px)`
        count.value = 0
      }
    }

    function postPicture() {
      if (count.value === 0) {
        count.value = volumePicture.value
      }
      count.value--
      rollSlider()
    }

    return {
      picture,
      volumePicture,
      nextPicture,
      postPicture,
      sliderContainer,
      classTransforms,
    }
  },
}
</script>

<style></style>
