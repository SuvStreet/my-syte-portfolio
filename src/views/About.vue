<template>
  <MainLayout>
    <template #title>
      <SectionTitle />
    </template>

    <template #content>
      <div class="row">
        <div class="about-content padd-15">
          <div class="row">
            <AboutText />
          </div>
          <div class="row">
            <AboutPersonalInfo />
          </div>
          <div class="row">
            <AboutEducation />
            <AboutExperience />
          </div>
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from '../components/layout/MainLayout.vue'
import SectionTitle from '../components/layout/SectionTitle.vue'

import AboutText from '../components/about/AboutText.vue'
import AboutPersonalInfo from '../components/about/AboutPersonalInfo.vue'
import AboutEducation from '../components/about/AboutEducation.vue'
import AboutExperience from '../components/about/AboutExperience.vue'

export default {
  setup() {
    
    const qTitle = {
      education: 'Образование',
      experience: 'Опыт',
    }
    return {
      qTitle,
    }
  },
  components: {
    MainLayout,
    SectionTitle,
    AboutText,
    AboutPersonalInfo,
    AboutEducation,
    AboutExperience
  },
}
</script>
