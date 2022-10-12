<template>
  <div class="padd-15 education">
    <h3 class="title">{{ $t('about.education-card.title') }}</h3>

    <div class="row">
      <div class="timeline-box padd-15">
        <div class="timeline shadow-dark">
          <AboutCard v-for="(data, key, id) in educationMapList" :key="id">
            <template #date>
              {{ data }}
            </template>
            <template #title>
              {{ $t(`${linkAboutI18n}.${key}.title`) }}
            </template>
            <template #text>
              {{ $t(`${linkAboutI18n}.${key}.text`) }}
            </template>
          </AboutCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutCard from './AboutCard.vue'

export default {
  setup() {
    const educationMapList = {
      vue: '2021-2022',
      js: '2021',
      react: '2020',
      frontend: '2020-2021',
      SkillBox: '2018-2019',
      itStep: '2016-2019',
    }

    return {
      educationMapList,
      linkAboutI18n: 'about.education-card.text',
    }
  },
  components: {
    AboutCard,
  },
}
</script>

<style></style>
