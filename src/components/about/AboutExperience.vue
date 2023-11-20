<template>
  <div class="padd-15 experience">
    <h3 class="title">{{ $t('about.experience-card.title') }}</h3>

    <div class="row">
      <div class="timeline-box padd-15">
        <div class="timeline shadow-dark">
          <AboutCard v-for="(data, key, id) in experienceMapList" :key="id">
            <template #date> {{ data }} </template>
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
    const experienceMapList = {
      result_school: '2021-2022',
      ormedia: '2020-2021'
    }

    return {
      experienceMapList,
      linkAboutI18n: 'about.experience-card.text',
    }
  },
  components: {
    AboutCard,
  },
}
</script>

<style></style>
