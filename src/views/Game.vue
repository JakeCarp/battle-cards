<template>
  <div>
    <div class="row">
      <opponentHand class="col-12 d-flex hand" v-if="game.opponent" />
    </div>
    <div class="row">
      <div v-if="!game.player.dead && game.opponent.dead">
        <h1>You Win</h1>
      </div>
      <div v-if="game.player.dead && !game.opponent.dead">
        <h1>You Lose</h1>
      </div>
      <div v-if="game.player.dead && game.opponent.dead">
        <h1>It's a Tie</h1>
      </div>
      <battle />
    </div>
    <div class="row">
      <playerHand class="col-12 d-flex hand" v-if="game.player" />
    </div>
  </div>

</template>
<script>

  import playerHand from '@/components/playerHand.vue'
  import opponentHand from '@/components/opponentHand.vue'
  import battle from '@/components/battle.vue'
  export default {
    name: "game",
    components: {
      battle,
      opponentHand,
      playerHand


    },
    mounted() {
      this.$store.dispatch('getGame', this.$route.params.id)
    },
    computed: {
      game() {
        return this.$store.state.game
      }

    }
  }

</script>
<style>
  .hand {
    justify-content: space-between;
  }
</style>