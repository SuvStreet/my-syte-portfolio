<template>
  <div class="personal-info padd-15">
    <div class="row">
      <div class="info-item padd-15" v-for="(title, id) in titleMap" :key="id">
        <p>
          {{ $t(`about.personal-info-title.${title}`) }}:
          <span>
            {{
              $t(`about.personal-info-description[${id}]`, {
                birthday: $d(new Date(1995, 1, 24), 'long'),
                age: Age(),
                website: 'suvstreet-portfolio.web.app',
                account: 'suvstreet',
                domain: 'gmail.com',
              })
            }}
          </span>
        </p>
      </div>
    </div>

    <Button link="/contact" className="buttons padd-15">
      <template #title>{{ $t('about.button') }}</template>
    </Button>
  </div>
</template>

<script>
import Button from '../other/Button.vue'

export default {
  setup() {
    const titleMap = [
      'birthday',
      'age',
      'website',
      'email',
      'city',
      'status-work',
    ]

    function Age() {
      let now = new Date() //Текущя дата
      let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()) //Текущя дата без времени
      let birthday = new Date(1995, 1, 24) //Дата рождения
      let birthdayNow = new Date(
        today.getFullYear(),
        birthday.getMonth(),
        birthday.getDate()
      ) //ДР в текущем году
      let age //Возраст

      //Возраст = текущий год - год рождения
      age = today.getFullYear() - birthday.getFullYear()
      //Если ДР в этом году ещё предстоит, то вычитаем из age один год
      if (today < birthdayNow) {
        age = age - 1
      }

      return age
    }

    return {
      titleMap,
      Age,
    }
  },
  components: {
    Button,
  },
}
</script>

<style></style>
