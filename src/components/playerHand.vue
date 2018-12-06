<template>
  <div>
    <div v-for="card in hand">
      <img src="card.img" />
      <h3>{{card.attack}}</h3>
      <h3>{{card.defense}}</h3>
      <h3>{{card.health}}</h3>
    </div>
    <div>
      <img src="cardBack" />
    </div>
  </div>
</template>
<script>
  export default {
    name: 'playerhand'
  }

</script>