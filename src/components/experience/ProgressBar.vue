<template>
  <div class="experience-item padd-15">
    <div class="experience-item-inner">
      <div class="circle">
        <div
          v-for="num in dots"
          :key="num"
          :style="`--i: ${num}; --rot: ${rotate}deg`"
          :class="['points', percent > num ? 'marked' : '']"
        ></div>
      </div>
      <div class="text">
        <h2>{{ percent }}%</h2>
        <small>
          <p>{{ technology }}</p>
          <span class="icon" v-html="icons[technology]"></span>
        </small>
      </div>
      <div class="direction">
        <p>Lorem ipsum dolor sit amet.</p>
        <!-- <p>Работа с React</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

import icons from './iconsPath'

export default {
  props: ['technology', 'percent'],
  setup(props) {
    const dots = ref(100)
    const percent = ref((dots.value * props.percent) / 100)
    const rotate = ref(360 / dots.value)

    return {
      dots,
      rotate,
      percent,
      icons
    }
  },
}
</script>

<style></style>
