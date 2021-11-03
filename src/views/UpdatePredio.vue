<template>
  <div id="update-predio">
    <div id="tblScope" class="container">
      <h1><b-icon icon="house-fill"></b-icon> Update Predio</h1>

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
          <label>Nome</label>
          <input
            type="text"
            class="form-control"
            v-model="nome"
            :disabled="disabled == 1"
          />
        </fieldset>

        <fieldset class="form-group col-md-6 m-auto">
          <label>Sigla</label>
          <input type="text" class="form-control" v-model="sigla" />
        </fieldset>

        <fieldset class="form-group col-md-6 m-auto">
          <label>Endereço</label>
          <input type="text" class="form-control" v-model="endereco" />
        </fieldset>

        <fieldset class="form-group col-md-6 m-auto">
          <label>Cidade</label>
          <input type="text" class="form-control" v-model="cidade" />
        </fieldset>

        <fieldset class="form-group col-md-6 m-auto">
          <label>Estado</label>
          <input type="text" class="form-control" v-model="estado" />
        </fieldset>

        <br />

        <router-link to="/predio" class="btn btn-danger mb-3 mr-3">
          <b-icon icon="arrow-left-square-fill"></b-icon> Back
        </router-link>

        <button class="btn btn-success mb-3" type="submit">
          <b-icon icon="person-check-fill"></b-icon> Update Predio
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import PredioService from "../service/predio_service";
export default {
  name: "PredioUpdate",
  data() {
    return {
      nome: "",
      sigla: "",
      endereco: "",
      cidade: "",
      estado: "",
      disabled: 1,
      message: null,
      instructor: "predio",
      errors: [],
    };
  },
  head: {
    title: {
      inner: "Update Predio",
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    refreshPredio() {
      PredioService.retrievePredio(this.INSTRUCTOR, this.id).then((res) => {
        if (this.id != -1) {
          this.nome = res.data.nome;
          this.sigla = res.data.sigla;
          this.endereco = res.data.endereco;
          this.cidade = res.data.cidade;
          this.estado = res.data.estado;
        } else {
          this.disabled = 0;
          this.active = false;
        }
      });
    },
    validateAndSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.nome) {
        this.errors.push("O nome é obrigatório.");
      } else if (this.nome.length < 4) {
        this.errors.push("Nome deve possuir mais de 4 caracteres.");
      } else if (!this.sigla) {
        this.errors.push("Sigla é obrigatório.");
      } else if (this.sigla.length > 5) {
        this.errors.push("Sigla deve possuir até 5 caracteres.");
      } else if (!this.endereco) {
        this.errors.push("Endereço é obrigatório");
      } else if (this.endereco.length > 50) {
        this.errors.push("O endereco deve conter até 50 caracteres.");
      } else if (!this.cidade) {
        this.errors.push("Endereço é obrigatório");
      } else if (this.cidade.length > 25) {
        this.errors.push("O endereco deve conter até 25 caracteres.");
      } else if (!this.estado) {
        this.errors.push("Endereço é obrigatório");
      } else if (this.estado.length > 25) {
        this.errors.push("O endereco deve conter até 25 caracteres.");
      } else {
        this.errors.length === 0;
      }
      if (this.errors.length === 0) {
        if (this.id === -1) {
          PredioService.createPredio(this.INSTRUCTOR, {
            nome: this.nome,
            sigla: this.sigla,
            endereco: this.endereco,
            cidade: this.cidade,
            estado: this.estado,
          }).then(() => {
            this.$router.push("/predio");
          });
        } else {
          PredioService.updatePredio(this.INSTRUCTOR, this.id, {
            id: this.id,
            nome: this.nome,
            sigla: this.sigla,
            endereco: this.endereco,
            cidade: this.cidade,
            estado: this.estado,
          }).then(() => {
            this.$router.push("/predio");
            console.log(
              `update predio --> SIGLA: ${this.sigla}, NOME: ${this.nome}`
            );
          });
        }
      }
      window.Toast.fire(
        "Success",
        `Predio "${this.nome}" was registred/updated!`,
        "success"
      );
    },
  },
  created() {
    this.refreshPredio();
  },
};
</script>
<style scoped></style>
