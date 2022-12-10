import { createStore } from 'vuex'

import styleSwitcher from './modules/styleSwitcher.module'
import i18n from './modules/i18n.module'
import portfolio from './modules/portfolio.module'
import tgBotMessage from './modules/tgBotMessage.module'
import downloadCV from './modules/downloadCV.module'

export default createStore({
  state: {
    isToggleNav: '',
    isToggleDetail: '',
    styleHeightCard: '',
  },
  mutations: {
    setIsToggleNav(state, payload) {
      state.isToggleNav = payload
    },
    setIsToggleDetails(state, payload) {
      state.isToggleDetail = payload
    },
    setStyleHeightCard(state, payload) {
      state.styleHeightCard = payload
    },
  },
  actions: {},
  getters: {
    getIsToggleNav(state) {
      return state.isToggleNav
    },
    getIsToggleDetails(state) {
      return state.isToggleDetail
    },
    getStyleHeightCard(state) {
      return state.styleHeightCard
    },
  },
  modules: {
    styleSwitcher,
    i18n,
    portfolio,
    tgBotMessage,
    downloadCV
  },
})
