<template>
  <div id="update-apartamento">
    <div id="tblScope" class="container">
      <h1><b-icon icon="house-fill"></b-icon> Update Apartamento</h1>

      <form @submit="validateAndSubmit">
        <br />
        <div v-if="errors.length">
          <div
            class="alert alert-danger mt-2"
            v-bind:key="index"
            v-for="(error, index) in errors"
          >
            {{ errors.toString() }}
          </div>
        </div>

        <fieldset class="form-group col-md-6 m-auto">
          <label>Codigo</label>
          <input
            type="text"
            class="form-control"
            v-model="codigo"
            :disabled="disabled == 1"
          />
        </fieldset>

        <fieldset class="form-group col-md-6 m-auto">
          <label>Qtd. Quartos</label>
          <input type="number" class="form-control" v-model="qtdQuartos" />
        </fieldset>

        <fieldset class="form-group col-md-6 m-auto">
          <label>Qtd. Banheiros</label>
          <input type="number" class="form-control" v-model="qtdBanheiros" />
        </fieldset>

        <fieldset class="form-group col-md-6 m-auto">
          <label>Qtd. Suítes</label>
          <input type="number" class="form-control" v-model="qtdSuites" />
        </fieldset>

        <fieldset class="form-group col-md-6 m-auto">
          <label>Área Apartamento</label>
          <input type="number" class="form-control" v-model="areaApartamento" />
        </fieldset>

        <fieldset class="form-group col-md-6 m-auto">
          <label>Código Predio</label>
          <input type="number" class="form-control" v-model="predio.id" 
          :disabled="disabled == 1" />
        </fieldset>

        <br>

        <router-link to="/apartamento" class="btn btn-danger mb-3 mr-3">
          <b-icon icon="arrow-left-square-fill"></b-icon> Back
        </router-link>

        <button class="btn btn-success mb-3" type="submit">
          <b-icon icon="person-check-fill"></b-icon> Update Apartamento
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import ApartamentoService from "../service/apartamento_service";
export default {
  name: "ApartamentoUpdate",
  data() {
    return {
      codigo: "",
      qtdQuartos: 0,
      qtdBanheiros: 0,
      qtdSuites: 0,
      areaApartamento: 0,
      predio: {
        id: 0,
      },
      disabled: 1,
      message: null,
      instructor: "apartamento",
      errors: [],
    };
  },
  head: {
    title: {
      inner: "Update Apartamento",
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    refreshApartamento() {
      ApartamentoService.retrieveApartamento(this.INSTRUCTOR, this.id).then(
        (res) => {
          if (this.id != -1) {
            this.codigo = res.data.codigo;
            this.qtdQuartos = res.data.qtdQuartos;
            this.qtdBanheiros = res.data.qtdBanheiros;
            this.qtdSuites = res.data.qtdSuites;
            this.areaApartamento = res.data.areaApartamento;
            this.predio.id = res.data.predio.id;
          } else {
            this.disabled = 0;
            this.active = false;
          }
        });
    },
    validateAndSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.codigo) {
        this.errors.push("O código é obrigatório.");
      } else if (this.codigo.length > 4) {
        this.errors.push("codigo deve possuir até 4 caracteres.");
      } else {
        this.errors.length === 0;
      }
      if (this.errors.length === 0) {
        if (this.id === -1) {
          ApartamentoService.createApartamento(this.INSTRUCTOR, {
            codigo: this.codigo,
            qtdQuartos: this.qtdQuartos,
            qtdBanheiros: this.qtdBanheiros,
            qtdSuites: this.qtdSuites,
            areaApartamento: this.areaApartamento,
            predio: this.predio,
          }).then(() => {
            this.$router.push("/apartamento");
          });
        } else {
          ApartamentoService.updateApartamento(this.INSTRUCTOR, this.id, {
            id: this.id,
            codigo: this.codigo,
            qtdQuartos: this.qtdQuartos,
            qtdBanheiros: this.qtdBanheiros,
            qtdSuites: this.qtdSuites,
            areaApartamento: this.areaApartamento,
            predio: this.predio,
          }).then(() => {
            this.$router.push("/apartamento");
            console.log(
              `update apartamento --> CODIGO: ${this.codigo}` //, PREDIO: ${this.predio}
            );
          });
        }
      }
      window.Toast.fire(
        "Success",
        `Apartamento "${this.codigo}" was registred/updated!`,
        "success"
      );
    },
  },
  created() {
    this.refreshApartamento();
  },
};
</script>
<style scoped>

</style>