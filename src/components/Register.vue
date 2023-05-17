<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary btn-register"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      Registra tu Reserva
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Modal title
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form name="form" id="form" @submit="save">
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  aria-describedby="emailHelp"
                  v-model="user.nombre"
                />
              </div>
              <div class="mb-3">
                <label for="apellido" class="form-label">Apellido</label>
                <input
                  type="text"
                  class="form-control"
                  id="apellido"
                  v-model="user.apellido"
                />
              </div>
              <div class="mb-3">
                <label for="tipDocument" class="form-label"
                  >Tipo de documento</label
                >
                <select
                  id="tipDocument"
                  v-model="user.tipDocument"
                  class="form-select"
                >
                  <option>CC</option>
                  <option>TI</option>
                  <option>NIT</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="identificacion" class="form-label"
                  >Identificacion</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="identificacion"
                  v-model="user.identificacion"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="user.email"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Fecha de reserva</label
                >
                <input
                  disabled
                  type="date"
                  class="form-control"
                  id="exampleInputPassword1"
                  
                />
              </div>
              <div class="mb-3">
                <label for="reserva" class="form-label">Tipo de reserva</label>
                <select
                  id="reserva"
                  v-model="user.reserva"
                  class="form-select"
                >
                  <option>cena</option>
                  <option>almuerzo</option>
                  <option>onces</option>
                  <option>cumpleaños</option>
                  <option>ocasión especial</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="numPersonas" class="form-label"
                  >Cantidad de personas</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="numPersonas"
                  v-model="user.cantidad"
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label"
                  >Descripción y/o observaciones</label
                >
                <textarea
                  class="form-control"
                  id="description"
                  v-model="user.descripcion"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-submit-register">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import UsuarioService from "../services/UsuarioService";

export default {
  name: "Register",
  data() {
    return {
      user: {
        Username: "",
        nombre: "",
        Username: "",
        apellido: "",
        tipoDocumento: "",
        identificacion: "",
        email: "",
        tipoReserva: "",
        cantidad: "",
        cantidad: "",
        descripcion: "",
      },
    };
  },
  created() {
    this.usuarioService = new UsuarioService();
  },
  mounted() {
    this.usuarioService.getAll().then((data) => {
      this.usuarios = data.data;
    });
  },
  methods: {
    save() {
      this.saveData();
    },
    saveData() {
      axios.post("http://localhost:8082/usuario/save", this.user).then(
        ({data}) => {
          alert("Reservacion Guardada con Exito");
          this.user.nombre = '';
          this.user.apellido = '';
          this.user.tipoDocumento = '';
          this.user.email = '';
          this.user.tipoReserva = '';
          this.user.cantidad = '';
          this.user.descripcion = '';

        }
      )
    }
  },
};
</script>

<style scoped>
.btn-submit-register {
 background-color: black;
}
.btn-register {
  height: 500px;
  color: white;
  font-weight: bold;
  font-size: 32px;
  border-radius: 30px;
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.87), rgb(44, 61, 63));
}
</style>
