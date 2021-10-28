<template>
    <div id="tblScope" class="container p-2">
      <div class="row mb-2">
        <div class="col-md-6">
          <h3 class="float-left"><b-icon icon="search"></b-icon>...</h3>
          <input
            id="search"
            class="float-left"
            type="text"
            placeholder="buscar por nome..."
            v-model="search"
          />
        </div>

        <div class="col-md-6">
          <button
            class="btn btn-success float-right"
            v-on:click="insertPredioClick()"
          >
            <b-icon icon="person-plus-fill"></b-icon> Add predio
          </button>
        </div>
      </div>

      <table class="table text-dark">
        <thead>
          <tr>
            <th>Predio</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="predio in predioFilter" v-bind:key="predio.id">
            <td>{{ predio.nome }}</td>
            <td>
              <button
                class="btn btn-primary mr-2 mb-1"
                v-on:click="updatePredioClick(predio.id)"
              >
                <b-icon icon="person-lines-fill">Update</b-icon>
              </button>
              <button
                class="btn btn-danger mr-2 mb-1"
                v-on:click="deletePredioClick(predio.id)"
              >
                <b-icon icon="trash-fill">Delete</b-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import PredioService from "../service/predio_service";
export default {
  name: "PredioTable",
  data() {
    return {
      predios: [],
      instructor: "predio",
      search: "",
    };
  },
  methods: {
    refreshPredio() {
      PredioService.retriveAllPredios(this.instructor).then((response) => {
        this.predios = response.data;
      });
    },
    deletePredioClick(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.isConfirmed) {
          window.Toast.fire(
            "Deleted",
            `Predio with ID: ${id} was deleted`,
            "success"
          );
          PredioService.deletePredio(this.instructor, id).then((response) => {
            this.refreshPredio();
            console.log(`delete --> ID:${id}`);
            return response;
          });
        } else {
          window.Toast.fire("Canceled Operation", "", "info");
        }
      });
    },
    updatePredioClick(id) {
      this.$router.push(`/predio/${id}`);
      console.log(id);
    },
    insertPredioClick() {
      this.$router.push(`/predio/-1`);
    },
  },
  created() {
    this.refreshPredio();
  },
  computed: {
    predioFilter() {
      return this.predios.filter((predio) => {
        return predio.nome.match(this.search);
      });
    },
  },
};
</script>

<style scoped>

</style>