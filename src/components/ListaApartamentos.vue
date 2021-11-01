<template>
  <div id="tblScope" class="container p-2">
    <div class="row mb-2">
      <div class="col-md-6">
        <h3 class="float-left"><b-icon icon="search"></b-icon>...</h3>
        <input
          id="search"
          class="float-left"
          type="text"
          placeholder="buscar por código..."
          v-model="search"
        />
      </div>

      <div class="col-md-6">
        <button
          class="btn btn-primary float-right"
          v-on:click="insertApartamentoClick()"
        >
          <b-icon icon="person-plus-fill"></b-icon> Add apartamento
        </button>
      </div>
    </div>

    <table class="table text-dark">
      <thead>
        <tr>
          <th>Código</th>
          <!-- <th>Predio</th> -->
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="apartamento in apartamentoFilter" v-bind:key="apartamento.id">
          <td>{{ apartamento.codigo }}</td>
          <!-- <td>{{ apartamento.predio.nome }}</td> -->
          <td>
            <button
              class="btn btn-primary mr-2 mb-1"
              v-on:click="updateApartamentoClick(apartamento.id)"
            >
              <b-icon icon="person-lines-fill">Update</b-icon>
            </button>
            <button
              class="btn btn-danger mr-2 mb-1"
              v-on:click="deleteApartamentoClick(apartamento.id)"
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
import ApartamentoService from "../service/apartamento_service";
export default {
  name: "ApartamentoTable",
  data() {
    return {
      apartamentos: [],
      instructor: "apartamento",
      search: "",
    };
  },
  methods: {
    refreshApartamento() {
      ApartamentoService.retriveAllApartamentos(this.instructor).then((response) => {
        this.apartamentos = response.data;
      });
    },
    deleteApartamentoClick(id) {
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
            `Apartamento with ID: ${id} was deleted`,
            "success"
          );
          ApartamentoService.deleteApartamento(this.instructor, id).then((response) => {
            this.refreshApartamento();
            console.log(`delete --> ID:${id}`);
            return response;
          });
        } else {
          window.Toast.fire("Canceled Operation", "", "info");
        }
      });
    },
    updateApartamentoClick(id) {
      this.$router.push(`/apartamento/${id}`);
      console.log(id);
    },
    insertApartamentoClick() {
      this.$router.push(`/apartamento/-1`);
    },
  },
  created() {
    this.refreshApartamento();
  },
  computed: {
    apartamentoFilter() {
      return this.apartamentos.filter((apartamento) => {
        return apartamento.codigo.match(this.search);
      });
    },
  },
};
</script>

<style scoped>

</style>