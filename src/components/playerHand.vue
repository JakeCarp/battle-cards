<template>
  <div>
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <h1>{{player.name}}</h1>
          <h3>{{player.remainingCards}}</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-8 d-flex hand">
          <div v-for="card in player.hand" id="card-box">
            <div class="card" @click="setPlayerCard(card)">
              <img :src="card.img" class="card-img-top" />
              <div class="card-body">
                <h4 class="card-title">{{card.name}}</h4>
                <p class="card-text">{{card.attack}}</p>
                <p class="card-text">{{card.defense}}</p>
                <p class="card-text">{{card.health}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'playerHand',
    methods: {
      setPlayerCard(card) {
        this.$store.dispatch('setPlayerCard', card)
      }
    },
    computed: {
      player() {
        return this.$store.state.game.player
      },
      gameId() {
        return this.$store.state.game.id
      }
    }

  }
</script>