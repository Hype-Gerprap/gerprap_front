<template>
  <div class="predio">
    <div class="m-0 p-3 mx-auto" style="color: #000;">
      <h1>Predios</h1>
      <ListaPredios />
    </div>
  </div>
</template>

<script>
import ListaPredios from '../components/ListaPredios.vue';

export default {
  name: "Home",
  components: {
    ListaPredios,
  },
  
}
</script>

<style scoped>
.card-body{
  background-color: black;
}
</style>