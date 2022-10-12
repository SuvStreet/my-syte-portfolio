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
            <qualification-card
              v-for="(text, className, id) in qTitle"
              :key="id"
              :className="className"
              :qTitle="text"
            >
            </qualification-card>
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
import QualificationCard from '../components/about/QualificationCard.vue'
import Skills from '../components/card/Skills.vue'

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
    Skills,
    QualificationCard,
  },
}
</script>
