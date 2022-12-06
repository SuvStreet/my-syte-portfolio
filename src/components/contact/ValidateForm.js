import { useVuelidate } from '@vuelidate/core'
import {
  required,
  email,
  minLength,
  helpers,
  maxLength,
} from '@vuelidate/validators'
import { reactive } from '@vue/reactivity'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
import { useI18n } from 'vue-i18n'

export function validateForm() {
  const store = useStore()
  const { t } = useI18n()

  const state = reactive({
    telegram: '',
    email: '',
    subject: '',
    message: '',
  })

  const MIN_LENGTH_VALUE_TELEGRAM = 6
  const MAX_LENGTH_VALUE_SUBJECT = 50
  const MAX_LENGTH_VALUE_MESSAGE = 350

  const validateTelegram = helpers.regex(/^\@/)

  const rules = {
    telegram: {
      minLengthValue: minLength(MIN_LENGTH_VALUE_TELEGRAM),
      validateTelegram,
      $lazy: true,
    },
    email: {
      required,
      email,
      $lazy: true,
    },
    subject: {
      required,
      maxLengthValue: maxLength(MAX_LENGTH_VALUE_SUBJECT),
      $lazy: true,
    },
    message: {
      required,
      maxLengthValue: maxLength(MAX_LENGTH_VALUE_MESSAGE),
      $lazy: true,
    },
  }

  const v$ = useVuelidate(rules, state)

  const telegramErrors = computed(() => {
    let error = ''
    if (v$.value.telegram.minLengthValue.$invalid)
      error = t('errors.min-length-value', { value: MIN_LENGTH_VALUE_TELEGRAM })
    if (v$.value.telegram.validateTelegram.$invalid)
      error = t('errors.telegram-name')
    return error
  })

  const emailErrors = computed(() => {
    let error = ''
    if (v$.value.email.required.$invalid) error = t('errors.required')
    if (v$.value.email.email.$invalid) error = t('errors.email-name')
    return error
  })

  const subjectErrors = computed(() => {
    let error = ''
    if (v$.value.subject.required.$invalid) error = t('errors.required')
    if (v$.value.subject.maxLengthValue.$invalid)
      error = t('errors.max-length-value', { value: MAX_LENGTH_VALUE_SUBJECT })
    return error
  })

  const messageErrors = computed(() => {
    let error = ''
    if (v$.value.message.required.$invalid) error = t('errors.required')
    if (v$.value.message.maxLengthValue.$invalid)
      error = t('errors.max-length-value', { value: MAX_LENGTH_VALUE_MESSAGE })
    return error
  })

  const onSubmit = async () => {
    const listMessage = {
      telegram: state.telegram,
      email: state.email,
      subject: state.subject,
      text: state.message,
    }

    const isFormCorrect = await v$.value.$validate()

    if (isFormCorrect) {
      store.dispatch('tgBotMessage/postMessage', listMessage)

      state.telegram = ''
      state.email = ''
      state.subject = ''
      state.message = ''

      v$.value.$reset()
    }
  }

  return {
    onSubmit,
    state,
    v$,
    telegramErrors,
    emailErrors,
    subjectErrors,
    messageErrors,
  }
}
