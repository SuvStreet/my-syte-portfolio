<template>
  <form class="contact-form padd-15" @submit.prevent="onSubmit">
    <div class="row">
      <div class="form-item col-6 padd-15">
        <div class="form-group">
          <input
            type="text"
            :class="{ 'form-control': true, 'input-error': v$.telegram.$error }"
            :placeholder="$t('contact.placeholder.telegram')"
            v-model.trim="v$.telegram.$model"
            @blur="v$.telegram.$touch"
          />
          <span class="errors" v-if="v$.telegram.$error">
            {{ telegramErrors }}
          </span>
        </div>
      </div>

      <div class="form-item col-6 padd-15">
        <div class="form-group">
          <input
            type="text"
            :class="{ 'form-control': true, 'input-error': v$.email.$error }"
            :placeholder="$t('contact.placeholder.email')"
            v-model.trim="v$.email.$model"
            @blur="v$.email.$touch"
          />
          <span class="errors" v-if="v$.email.$error">
            {{ emailErrors }}
          </span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="form-item col-12 padd-15">
        <div class="form-group">
          <input
            type="text"
            :class="{ 'form-control': true, 'input-error': v$.subject.$error }"
            :placeholder="$t('contact.placeholder.subject')"
            v-model.trim="v$.subject.$model"
            @blur="v$.subject.$touch"
          />
          <span class="errors" v-if="v$.subject.$error">
            {{ subjectErrors }}
          </span>
        </div>
      </div>
      <div class="form-item col-12 padd-15">
        <div class="form-group">
          <textarea
            :class="{ 'form-control': true, 'input-error': v$.message.$error }"
            :placeholder="$t('contact.placeholder.message')"
            v-model.trim="v$.message.$model"
            @blur="v$.message.$touch"
          ></textarea>
          <span class="errors" v-if="v$.message.$error">
            {{ messageErrors }}
          </span>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="form-item col-12 padd-15">
        <SubmitButton :validate="isFormCorrect" />
      </div>
    </div>
  </form>
</template>

<script>
import { validateForm } from './ValidateForm'
import SubmitButton from './Submit/SubmitButton.vue'

export default {
  setup() {
    return {
      ...validateForm(),
    }
  },
  components: {
    SubmitButton,
  },
}
</script>

<style></style>
