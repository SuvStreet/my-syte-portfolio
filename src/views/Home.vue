<template>
  <section class="home section">
    <div class="container">
      <div class="row">
        <div class="home-info padd-15">
          <h3 class="hello">
            Привет, меня зовут <span class="name">Дмитрий Колотуша</span>
          </h3>
          <h3 class="my-profession">
            Я <span class="typing" id="typing"></span>
          </h3>
          <p>
            Веб-разработчик с годовым опытом работы. Опыт заключается в создании
            динамичных сайтов (SPA). Верстаю сайты на основе React и Vue. Делаю
            их функциональными и оптимизированными.
          </p>
          <router-link to="/#" class="btn hire-me">
            Скачать резюме
          </router-link>
        </div>
        <div class="home-img padd-15">
          <img src="../assets/my-foto.jpg" alt="my-foto" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Typed from 'typed.js'
import { onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      textAnimation()
    })

    function textAnimation() {
      new Typed('#typing', {
        strings: [
          '',
          'веб разработчик',
          'верстаю сайты',
          'junior frontend разработчик',
          'js специалист',
        ],
        typeSpeed: 100,
        BackSpeed: 60,
        loop: true,
      })
    }
    return {}
  },
  components: {},
}
</script>

<style lang="sass"></style>
