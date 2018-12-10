<template>
  <div>
    <div id="name">

      <h1>Enter your Name</h1>
      <input type="text" v-model="gameRequest.gameConfig.playerName">
      <p>{{gameRequest.gameConfig.playerName}}</p>
    </div>
    <div id="card-set">
      <h1>Choose your Set</h1>
      <input type="number" min="1" max="4" v-model="gameRequest.gameConfig.set">
      <p>{{gameRequest.gameConfig.set}}</p>
    </div>
    <button @click="startGame(gameRequest)">Start Game</button>
  </div>
</template>
<script>
  export default {
    name: "home",
    components: {

    },

    data() {
      return {
        gameRequest: {
          gameConfig: {
            playerName: '',
            set: 0
          }
        }
      }
    },
    methods: {
      startGame(gameData) {
        this.$store.dispatch('startGame', gameData)
      }
    }

  }


</script>