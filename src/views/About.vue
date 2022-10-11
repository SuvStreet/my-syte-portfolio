<template>
  <MainLayout>
    <template #title>
      <SectionTitle />
    </template>

    <template #content>
      <div class="row">
        <div class="about-content padd-15">
          <div class="row">
            <div class="about-text padd-15">
              <h3>
                Меня зовут Дмитрий Колотуша и я <span>веб-разработчик</span>
              </h3>
              <p>
                Трудолюбивый и заинтересованный веб-разработчик. Мне нравится
                разрабатывать и оживлять сайты. Люблю решать трудности, изучать
                новые технологии и умею задавать вопросы что бы учиться быстрее.
                На данный момент у меня уже есть опыть работы с Vue.js и
                React.js. Не собираюсь на этом останавливаться и продолжу искать
                опыт в разных проектах...
              </p>
            </div>
          </div>
          <div class="row">
            <InfoItem />
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

import QualificationCard from '../components/about/QualificationCard.vue'
import InfoItem from '../components/card/InfoItem.vue'
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
    InfoItem,
    Skills,
    QualificationCard,
  },
}
</script>
