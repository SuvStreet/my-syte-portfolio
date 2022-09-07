import { createI18n } from 'vue-i18n'
import ru from '../plugins/local/ru.json'
import en from '../plugins/local/en.json'
import pl from '../plugins/local/pl.json'

const messages = {
  ru,
  en,
  pl,
}

const i18n = createI18n({
  legacy: false,
  locale: `ru`,
  fallbackLocale: 'ru',
  messages,
})

export default i18n

// i18n.global.availableLocales = массив созданных языков
// i18n.global.locale = текущий язык
