<template>
  <div>
    <div class="col-12">
      <div class="row">
        <div class="col-4">
          <h1>{{opponent.name}}</h1>
          <h3>{{opponent.remainingCards}} </h3>
        </div>
      </div>
      <div class="row">
        <div class="col-8 d-flex hand">
          <div v-for="card in opponent.hand" id="card-box">
            <div class="card" @click="setOpponentCard(card)">
              <div v-if="card.visible">
                <img :src="card.img" class="card-img-top" @click="setOpponentCard(card)" />
                <div class="card-body">
                  <h4 class="card-title" @click="setOpponentCard(card)">{{card.name}}</h4>
                  <p class="card-text">{{card.attack}}</p>
                  <p class="card-text">{{card.defense}}</p>
                  <p class="card-text">{{card.health}}</p>
                </div>
              </div>
              <img v-if="!card.visible" src="@/assets/cardback.png" id="card-back" @click="setOpponentCard(card)">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'opponenthand',
    methods: {
      setOpponentCard(card) {
        this.$store.dispatch('setOpponentCard', card)
      }
    },
    computed: {
      opponent() {
        return this.$store.state.game.opponent
      },
      gameId() {
        return this.$store.state.game.id
      }
    }

  }
</script>
<style>
  .card {
    width: 14rem;
  }

  #card-back {
    width: 10rem;
  }
</style>