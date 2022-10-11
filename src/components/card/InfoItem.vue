<template>
  <div class="personal-info padd-15">
    <div class="row">
      <div class="info-item padd-15" v-for="(title, id) in titleMap" :key="id">
        <p>
          {{ title }}: <span>{{ textTitle(id) }}</span>
        </p>
      </div>
    </div>

    <Button link="/contact">
      <template #title>{{ $t('about.button') }}</template>
    </Button>
    
  </div>
</template>

<script>
import Button from "../other/Button.vue"

export default {
  setup() {
    const titleMap = {
      birthday: 'День рождения',
      age: 'Возраст',
      website: 'Сайт',
      email: 'Email',
      phone: 'Телефон',
      city: 'Город',
      status: 'Статус работы',
    }

    const infoMap = {
      birthday: '24 февраля 1995',
      age: '26',
      website: 'www.suvstreet.com',
      email: 'suvstreet@gmail.com',
      phone: '+48 123 456 789',
      city: 'Познань',
      status: 'В активном поиске',
    }

    return {
      titleMap,
      textTitle: (idx) => infoMap[idx],
    }
  },
  components: {
    Button,
  }
}
</script>

<style></style>
