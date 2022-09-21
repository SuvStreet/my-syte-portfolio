<template>
  <MainLayout>
    <template #content>
      <h3 class="contact-title padd-15">У вас есть вопросы?</h3>
      <h4 class="contact-sub-title padd-15">Я к вашим услугам</h4>
      <div class="row">
        <div class="contact-info-item padd-15">
          <div class="icon">
            <i class="fa fa-phone"></i>
          </div>
          <h4>Позвони мне</h4>
          <p>+7 (903) 903-03-03</p>
        </div>

        <div class="contact-info-item padd-15">
          <div class="icon">
            <i class="fa fa-map-marker-alt"></i>
          </div>
          <h4>Офис</h4>
          <p>Познань</p>
        </div>

        <div class="contact-info-item padd-15">
          <div class="icon">
            <i class="fa fa-envelope"></i>
          </div>
          <h4>Email</h4>
          <p>suvstreet@gmail.com</p>
        </div>

        <div class="contact-info-item padd-15">
          <div class="icon">
            <i class="fa fa-globe-europe"></i>
          </div>
          <h4>Сайт</h4>
          <p>www.suvstreet.com</p>
        </div>
      </div>
      <h3 class="contact-title padd-15">Напиши мне на email</h3>
      <h4 class="contact-sub-title padd-15">я очень отзывчив на сообщения</h4>
      <div class="row">
        <div class="contact-form padd-15">
          <div class="row">
            <div class="form-item col-6 padd-15">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Имя" />
              </div>
            </div>

            <div class="form-item col-6 padd-15">
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Email" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-item col-12 padd-15">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Тема" />
              </div>
            </div>
            <div class="form-item col-12 padd-15">
              <div class="form-group">
                <textarea
                  class="form-control"
                  placeholder="Сообщение"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="form-item col-12 padd-15">
              <button type="submit" class="btn">Отправить сообщение</button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from '../components/layout/MainLayout.vue'

export default {
  setup() {},
  components: {
    MainLayout,
  },
}
</script>

<style></style>
