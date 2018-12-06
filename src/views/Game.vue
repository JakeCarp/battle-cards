<template>
  <div>
    <h1>this is a game!</h1>
    <enemyHand />
    <playerHand />
  </div>

</template>
<script>
  import winScreen from '@/components/winScreen.vue'
  import lossScreen from '@/components/lossScreen.vue'
  import tieScreen from '@/components/tieScreen.vue'
  import playerHand from '@/components/playerHand.vue'
  import enemyHand from '@/components/enemyHand.vue'
  export default {
    name: "game",
    components: {
      winScreen,
      lossScreen,
      tieScreen,
      enemyHand,
      playerHand


    }
  }

</script>