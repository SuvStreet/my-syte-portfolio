function instalLocale() {
  let userLang = navigator.language || navigator.userLanguage
  return localStorage.getItem('locale_suvstreet') ?? userLang.split('-')[0]
}

export default {
  namespaced: true,
  state: {
    language: instalLocale(),
  },
  mutations: {
    saveLanguage(state, payload) {
      state.language = payload
    },
  },
  actions: {
    setLanguage({ commit }, payload) {
      localStorage.setItem('locale_suvstreet', payload)
      commit('saveLanguage', payload)
    },
  },
  getters: {
    getLanguage(state) {
      return state.language
    },
  },
}