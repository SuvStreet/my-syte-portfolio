<template>
  <div class="row">
    <div class="slider">
      <div class="slider-container shadow-dark" ref="sliderContainer">
        <div class="slider-inner" v-for="(img, id) in picture" :key="id">
          <img :style="classTransforms" :src="img" alt="picture" />
        </div>
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
import { computed, onMounted, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  props: ['photo'],
  setup(props) {
    const store = useStore()
    const picture = ref(props.photo)
    const sliderContainer = ref(null)
    const width = ref(0)
    const count = ref(0)
    const classTransforms = ref('')

    onMounted(() => {
      window.addEventListener('resize', rollSlider)
    })

    // watch(width, (old, newV) => {
    //   console.log('old', old)
    //   console.log('new', newV)
    // })

    function nextPicture() {
      count.value++
      rollSlider()
    }

    function rollSlider() {
      if (sliderContainer.value.offsetWidth !== null) {
        width.value = sliderContainer.value.offsetWidth
      }

      classTransforms.value = `transform: translate(-${
        (width.value - 12) * count.value
      }px)`

      if (count.value === props.photo.length) {
        classTransforms.value = `transform: translate(0px)`
        count.value = 0
      }
    }

    function postPicture() {
      if (count.value === 0) {
        count.value = props.photo.length
      }
      count.value--
      rollSlider()
    }

    return {
      picture,
      nextPicture,
      postPicture,
      sliderContainer,
      classTransforms,
    }
  },
}
</script>

<style></style>
