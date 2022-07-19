<template>
  <div class="personal-info padd-15">
    <div class="row">
      <div class="info-item padd-15" v-for="(title, id) in titleMap" :key="id">
        <p>
          {{ title }}: <span>{{ textTitle(id) }}</span>
        </p>
      </div>
    </div>
    <div class="row">
      <div class="buttons padd-15">
        <router-link to="/contact" class="btn hire-me">
          Связаться со мной
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
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
}
</script>

<style></style>
