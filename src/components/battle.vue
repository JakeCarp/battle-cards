<template>
  <div>
    <div v-if="!game.winner" class="col-12">
      <div class="row">
        <div class="col-4 card">
          <img :src="activeCards.playerCard.img" class="card-img-top">
          <div class="card-body">
            <h3 class="card-text">{{activeCards.playerCard.name}}</h3>
            <p class="card-text">{{activeCards.playerCard.attack}}</p>
            <p class="card-text">{{activeCards.playerCard.defense}}</p>
            <p class="card-text">{{activeCards.playerCard.health}}</p>
          </div>
        </div>
        <div class="col-4">
          <button @click="attack()">Attack</button>

        </div>
        <div class="col-4 card">
          <div v-if="activeCards.opponentCard.visible">
            <img :src="activeCards.playerCard.img" class="card-img-top">
            <div class="card-body">
              <h3 class="card-text">{{activeCards.playerCard.name}}</h3>
              <p class="card-text">{{activeCards.playerCard.attack}}</p>
              <p class="card-text">{{activeCards.playerCard.defense}}</p>
              <p class="card-text">{{activeCards.playerCard.health}}</p>
            </div>
          </div>
          <img v-if="activeCards.opponentCard.id && !activeCards.opponentCard.visible" src="@/assets/cardback.png">
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: "battle",

    methods: {
      attack() {
        let payload = {
          attack: {
            opponentCardId: this.activeCards.opponentCard.id,
            playerCardId: this.activeCards.playerCard.id
          },
          gameId: this.game.id
        }
        this.$store.dispatch('attack', payload)
      }
    },
    data() {
      return {

      }

    },
    computed: {
      activeCards() {
        return this.$store.state.activeCards
      },
      game() {
        return this.$store.state.game
      }
    }
  }



</script>