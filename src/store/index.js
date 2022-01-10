import { createStore } from 'vuex'

import axios from 'axios'

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
    },
  },
  actions: {
    async register({ commit }, credentials) {
      try {
        const { data } = await axios.post('http://localhost:3000/register', credentials)
        commit('SET_USER_DATA', data)
      } catch (err) {
        return console.log(err)
      }
    },

    /* register({ commit }, credentials) {
      return axios
        .post('http://localhost:3000/register', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
        .catch((err) => console.log(err))
    }, */
  },
  modules: {},
})
