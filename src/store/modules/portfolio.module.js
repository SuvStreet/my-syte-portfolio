import axios from 'axios'
import store from '..'

export default {
  namespaced: true,
  state: {
    loader: false,
    projects: [],
  },
  mutations: {
    loader(state, statusLoader) {
      state.loader = statusLoader
    },
    setProjects(state, listProjects) {
      state.projects = listProjects
    },
  },
  actions: {
    // загрузить все проекты с firebase
    async loadingAllProjects({ state, commit }) {
      if (state.projects.length === 0) {
        commit('loader', true)

        const { data } = await axios.get(
          'https://suvstreet-portfolio-default-rtdb.europe-west1.firebasedatabase.app/request.json'
        )

        if (data) {
          const listProjects = Object.keys(data).map((key) => {
            return {
              idx: key,
              ...data[key],
            }
          })
          commit('setProjects', listProjects)
        }

        commit('loader', false)
      }
      else {
        return store.projects
      }
    },
  },
  getters: {
    getProjects(state) {
      return state.projects
    },
    getProject(_, getters) {
      return (idx) => getters.getProjects.find((project) => project.idx === idx)
    },
    loader({ loader }) {
      return loader
    },
  },
}
