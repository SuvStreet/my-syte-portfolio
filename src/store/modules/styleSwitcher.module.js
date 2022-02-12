const mapClassListMode = {
  dark: 'fa-sun',
  light: 'fa-moon',
}

export default {
  namespaced: true,
  state() {
    return {
      isOpen: false,
      color:
        localStorage.getItem('color') !== null
          ? localStorage.getItem('color')
          : '--color-1',
      mode:
        localStorage.getItem('mode') !== null
          ? localStorage.getItem('mode')
          : 'dark',
    }
  },
  mutations: {
    toggle(state) {
      state.isOpen = !state.isOpen
    },
    defaultSkin(state) {
      document.documentElement.style.setProperty(
        '--skin-color',
        `var(${state.color})`
      )
    },
    defaultMode(state) {
      document.querySelector('#app').classList.add(state.mode)
      document
        .querySelector('#iconMode')
        .classList.add(mapClassListMode[state.mode])
    },
    changeMode(state) {
      const iconMode = document.querySelector('#iconMode')
      const app = document.querySelector('#app')

      iconMode.classList.toggle('fa-sun')
      iconMode.classList.toggle('fa-moon')

      app.classList.toggle('dark')
      app.classList.toggle('light')

      state.mode = app.classList.value
    },
    changeColor(state, payload) {
      state.color = payload
    },
  },
  actions: {
    setActiveStyle({ commit }, payload) {
      commit('changeColor', payload)
      commit('defaultSkin')

      localStorage.setItem('color', payload)
    },
    setActiveMode({ commit }) {
      commit('changeMode')
      commit('defaultMode')

      localStorage.setItem(
        'mode',
        document.querySelector('#app').classList.value
      )
    },
  },
  getters: {
    isOpen(state) {
      return state.isOpen
    },
  },
}
