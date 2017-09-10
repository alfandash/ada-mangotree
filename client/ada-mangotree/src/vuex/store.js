import Vue from 'vue'
import Vuex from 'vuex'

// require axios
import axios from 'axios'

let http = axios.create({
  baseURL: 'http://localhost:3005/'
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tree: []
  },
  mutations: {
    setTree (state, data) {
      state.tree = data
      console.log(state.tree)
    }
  },
  actions: {
    getMango ({ commit }) {
      http.get('/')
      .then(({ data }) => {
        commit('setTree', data)
      })
    }
  }
})
export default store
