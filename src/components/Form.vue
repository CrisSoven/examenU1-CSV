<template>
  <div>
    <b-breadcrumb :items="items" />
    <b-form @submit="checkForm">
      <b-alert show variant="warning" v-if="errors.length">
        <b>Error:</b>
        <ul>
          <li v-for="error in errors" :key="error.index">{{ error }}</li>
        </ul>
      </b-alert>

      <b-form-group label="Marca" class="mb-2">
        <b-form-input v-model="marca" placeholder="Marca del vehículo" />
      </b-form-group>

      <b-form-group label="Modelo" class="mb-2">
        <b-form-input v-model="modelo" placeholder="Modelo del vehículo" />
      </b-form-group>

      <b-form-group label="Año del fabricación" class="mb-4">
        <b-form-input
          v-model="year"
          placeholder="Año de fabricación del vehículo"
          type="number"
        />
      </b-form-group>

      <b-form-group label="Número de serie" class="mb-2">
        <b-form-input
          v-model="serie"
          placeholder="Número de serie del vehículo"
        />
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Inicio",
          href: "/inicio",
        },
        {
          text: "Registrar",
          active: true,
        },
      ],
      errors: [],
      marca: "",
      modelo: "",
      year: 0,
      serie: "",
    };
  },
  methods: {
    checkForm: function (e) {
      if (this.marca && this.modelo && this.year && this.serie) {
        return true;
      }
      this.errors = [];

      //campo marca
      if (!this.marca) {
        this.errors.push("El nombre de la marca es obligatorio");
      } else if (!this.validField(this.marca)) {
        this.errors.push("El nombre de la marca no puede contener signos")
      }

      //campo modelo
      if (!this.modelo) {
        this.errors.push("El nombre del modelo es obligatorio");
      } else if (!this.validField(this.modelo)) {
        this.errors.push("El nombre del modelo no puede contener signos")
      }

      //campo year
      if (!this.year) {
        this.errors.push("El año de fabricación es obligatorio");
        console.log(Date.prototype.getFullYear);
      } else if (this.year > Date.prototype.getFullYear) {
        this.errors.push("El año de fabricación no puede ser mayor al año actual")
      }


      e.preventDefault();
    },
    validField: function (field) {
      var re = /^[A-Za-z-0-9]+$/;
      return re.test(field);
    }
  },
};
</script>