<template>
  <div class="skills padd-15">
    <div class="row">
      <div
        class="skills-item padd-15"
        v-for="(volume, skill, id) in skillsMap"
        :key="id"
      >
        <h5>{{ skill }}</h5>
        <div class="progress">
          <div class="progress-in" :style="[`width: ${volume}%`]"></div>
          <div class="skill-percent">{{ volume }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const skillsMap = {
      html: '92',
      css: '90',
      sass: '38',
      js: '86',
      react: '58',
      vue: '66',
    }

    return {
      skillsMap,
    }
  },
}
</script>

<style></style>
