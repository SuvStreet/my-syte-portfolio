export default {
  namespaced: true,
  state: {
    language: 'ru',
  },
  mutations: {
    setLanguage(state, payload) {
      state.language = payload
    },
  },
  getters: {
    getLanguage(state) {
      return state.language
    },
  },
}
