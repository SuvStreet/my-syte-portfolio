import { createI18n } from 'vue-i18n'
import ru from '../plugins/local/ru.json'
import en from '../plugins/local/en.json'
import pl from '../plugins/local/pl.json'

import store from '../store'

const messages = {
  ru,
  en,
  pl,
}

const datetimeFormats = {
  ru: {
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
  },
  en: {
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
  },
  pl: {
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: store.getters['i18n/getLanguage'],
  fallbackLocale: 'en',
  messages,
  datetimeFormats,
  missingWarn: false,
  fallbackWarn: false,
})

export default i18n

// i18n.global.availableLocales = массив созданных языков
// i18n.global.locale = текущий язык
