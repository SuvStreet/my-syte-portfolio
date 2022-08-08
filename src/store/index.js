import { createStore } from 'vuex'
import styleSwitcher from './modules/styleSwitcher.module'
import i18n from './modules/i18n.module'

export default createStore({
  state: {
    isToggleNav: ''
  },
  mutations: {
    setIsToggleNav(state, payload) {
      state.isToggleNav = payload
    }
  },
  actions: {
  },
  getters: {
    getIsToggleNav(state) {
      return state.isToggleNav
    }
  },
  modules: {
    styleSwitcher,
    i18n,
  }
})
