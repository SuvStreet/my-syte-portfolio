import axios from 'axios'

import storage from '../../firebase'
import { ref as refGoogle, getDownloadURL } from 'firebase/storage'

export default {
  namespaced: true,
  state: {
    link: '',
    locale: '',
  },
  mutations: {
    linkDownloadCV(state, link) {
      state.link = link
    },
    localeDownloadCV(state, locale) {
      state.locale = locale
    },
  },
  actions: {
    async setLinkDownloadCV({ state, commit }, localePayload) {
      if (!state.link || state.locale !== localePayload) {
        try {
          const urlDownload = await getDownloadURL(
            refGoogle(storage, `cv/${localePayload}_cv.pdf`)
          )

          commit('linkDownloadCV', urlDownload)
          commit('localeDownloadCV', localePayload)
        } catch (error) {
          console.error(error)
        }
      } else return state.link
    },
    async downloadCV({ state }, locale) {
      if (state.locale === locale) {
        const { data } = await axios.get(`${state.link}`, {
          responseType: 'blob',
        })

        const link = document.createElement('a')
        link.setAttribute('href', URL.createObjectURL(data))
        link.setAttribute('download', `${locale}_cv`)
        link.click()
      }
    },
  },
  getters: {
    getLinkDownloadCV(state) {
      return state.link
    },
  },
}
