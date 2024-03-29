import axios from 'axios'

const formatDate = () => {
  const date = new Date()

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }

  return date.toLocaleString('ru', options)
}

function formatMessage(state) {
  let message = `\n<b>--- ${state.message.subject.toUpperCase()} ---</b>\n\n`
  message += `<i>${state.message.text}</i>\n\n`
  message += `${
    state.message.telegram.length != 0
      ? `<b>Telegram:</b> ${state.message.telegram}\n<b>Email:</b> ${state.message.email}`
      : `<b>Email:</b> ${state.message.email}`
  } \n\n`
  message += `<i>${formatDate()}</i>\n`

  return message
}

export default {
  namespaced: true,
  state: {
    token_tg: process.env.VUE_APP_TG_TOKEN,
    chat_id_tg: process.env.VUE_APP_TG_CHAT_ID,
    message: {
      telegram: '',
      email: '',
      subject: '',
      text: '',
    },
    isLoad: '',
    isStatus: '',
  },
  mutations: {
    setMessage(state, payload) {
      state.message = {
        telegram: payload.telegram,
        email: payload.email,
        subject: payload.subject,
        text: payload.text,
      }
    },
    setLoad(state, payload) {
      state.isLoad = payload
    },
    setStatus(state, payload) {
      state.isStatus = payload
    },
  },
  actions: {
    async postMessage({ commit, state }, payload) {
      commit('setMessage', payload)

      let message = formatMessage(state)

      try {
        commit('setLoad', 'load')

        const res = await axios.post(
          `https://api.telegram.org/bot${state.token_tg}/sendMessage`,
          {
            chat_id: state.chat_id_tg,
            parse_mode: 'html',
            text: message,
          }
        )

        if (res) {
          commit('setLoad', '')
          commit('setStatus', 'success')
        }
      } catch (error) {
        commit('setLoad', '')
        commit('setStatus', 'error')
      }
    },
  },
  getters: {
    getLoad(state) {
      return state.isLoad
    },
    getStatus(state) {
      return state.isStatus
    },
  },
}
