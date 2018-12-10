import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let api = axios.create({
  baseURL: "//battlecardz.herokuapp.com/api/games",
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {},
    attack: {},
    activeCards: {
      playerCard: {},
      opponentCard: {}
    }

  },
  mutations: {
    setGame(state, game) {
      state.game = game
      state.activeCards.playerCard = {}
      state.activeCards.opponentCard = {}
    },
    setOpponentCard(state, card) {
      state.activeCards.opponentCard = card
      state.attack.opponentCardId = card.id
      console.log(state.activeCards)
    },
    setPlayerCard(state, card) {
      state.activeCards.playerCard = card
      state.attack.playerCardId = card.id
      console.log(state.activeCards)
    }


  },
  actions: {
    startGame({ commit }, gameConfig) {
      api.post('/', gameConfig)
        .then(res => {
          console.log(res)
          commit('setGame', res.data.game)
          router.push({ name: "game", params: { id: res.data.game.id } })
        })


        .catch(err => alert(err))
    },
    getGame({ commit }, gameId) {
      api.get('/' + gameId)
        .then(res => {

          commit('setGame', res.data.data)
        })
        .catch(err => alert(err))

    },
    setOpponentCard({ commit }, card) {
      commit('setOpponentCard', card)
    },
    setPlayerCard({ commit }, card) {
      commit('setPlayerCard', card)
    },
    attack({ commit }, payload) {
      debugger
      api.put('/' + payload.gameId, payload.attack)
        .then(res => {
          commit('setGame', res.data.game)
        })
    }


  }
})
