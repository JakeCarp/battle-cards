import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let api = axios.create({
  baseURL: "http://battlecardz.herokuapp.com/games",
  withCredentials: true
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {}

  },
  mutations: {
    SETGAME(state, game) {
      state.game = game
    }


  },
  actions: {
    startGame({ commit }, gameConfig) {
      api.post('/', gameConfig)
        .then(res => commit('SETGAME', res.data))

        .catch(err => alert(err))
    }


  }
})
