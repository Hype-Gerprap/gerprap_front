<template>
  <div class="predio">
    <div class="m-0 p-3 mx-auto" style="color: #000">
      <h3>Home</h3>
      <Alert />
    </div>
  </div>
</template>

<script>
import Alert from "../components/Alert.vue";

export default {
  name: "Home",
  components: {
    Alert,
  },
};
</script>

<style scoped></style>
