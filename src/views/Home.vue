<template>
  <section class="home section">
    <div class="container">
      <div class="row">
        <div class="home-info padd-15">
          <h3 class="hello">
            Привет, меня зовут <span class="name">Дмитрий Колотуша</span>
          </h3>
          <h3 class="my-profession">
            Я <span class="typing">веб-разработчик</span>
          </h3>
          <p>
            Я трудолюбивый и заинтересованный веб-разработчик. Мне нравится
            разрабатывать и оживлять сайты. Люблю решать трудности, изучать новые технологии
            и умею задавать вопросы что бы учиться быстрее.
            На данный момент у меня уже есть опыть работы с Vue.js и React.js. Не собираюсь
            на этом останавливаться и продолжу искать опыт в разных проектах...
          </p>
          <router-link to="/contact" class="btn hire-me">Связаться со мной</router-link>
          <!-- <a href="#contact" class="btn hire-me">Связаться со мной</a> -->
        </div>
        <div class="home-img padd-15">
          <img src="../assets/my-foto.jpg" alt="my-foto">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="sass">
</style>
