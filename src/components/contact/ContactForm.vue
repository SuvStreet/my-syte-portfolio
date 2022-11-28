<template>
  <div class="contact-form padd-15" @submit.prevent="onSubmit">
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
          <textarea class="form-control" placeholder="Сообщение"></textarea>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="form-item col-12 padd-15">
        <button class="btn">Отправить сообщение</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const onSubmit = () => {
      
    }

    return {
      onSubmit,
    }
  },
}
</script>

<style></style>
