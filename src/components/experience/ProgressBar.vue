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
          {{ technology }}
          <span v-html="icons[technology]"></span>
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

<style>
.experience-item-inner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.text {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--text-black-700);
}

.text h2 {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;
  color: var(--text-black-900);
}

.text small {
  font-size: 18px;
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.circle .points {
  width: 3px;
  height: 15px;
  background: #0007;
  position: absolute;
  border-radius: 3px;
  transform: rotate(calc(var(--i) * var(--rot))) translateY(-100px);
}

.points.marked {
  animation: glow 0.04s linear forwards;
  animation-delay: calc(var(--i) * 0.05s);
}

@keyframes glow {
  0% {
    background: #0007;
    box-shadow: none;
  }

  100% {
    background: var(--skin-color);
    box-shadow: 0 0 10px var(--skin-color);
  }
}
</style>
