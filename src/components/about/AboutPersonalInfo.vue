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

    <div class="row padd-15">
      <router-link
        :to="`/${$store.getters['i18n/getLanguage']}/contact`"
        v-slot="{ navigate }"
      >
        <button @click="navigate" className="btn buttons">
          {{ $t('about.button') }}
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>

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
}
</script>

<style></style>
