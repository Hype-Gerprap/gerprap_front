<template>
  <div class="apartamentos">
    <div class="m-0 p-3 mx-auto" style="color: #000;">
      <h1>Apartamentos</h1>
      <ListaApartamentos />
    </div>
  </div>
</template>

<script>
import ListaApartamentos from '../components/ListaApartamentos.vue';

export default {
  name: "Home",
  components: {
    ListaApartamentos,
  },
}
</script>

<style scoped>

</style>