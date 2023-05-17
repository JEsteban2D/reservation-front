<template>
  <div class="container-form-edit">
    <nav>
    <router-link to="/">Home</router-link>
    </nav>
    <nav>
    <router-link to="/admin">Reservas</router-link>
    </nav>
    <form name="form" id="form" @submit="save">
      <div class="mb-3">
        <label for="nombre" class="form-label">Id</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          aria-describedby="emailHelp"
          v-model="user.id"
          
        />
      </div>
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
        <label for="tipDocument" class="form-label">Tipo de documento</label>
        <select id="tipDocument" v-model="user.tipDocument" class="form-select">
          <option>CC</option>
          <option>TI</option>
          <option>NIT</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="identificacion" class="form-label">Identificacion</label>
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
        <select id="reserva" v-model="user.reserva" class="form-select">
          <option>cena</option>
          <option>almuerzo</option>
          <option>onces</option>
          <option>cumpleaños</option>
          <option>ocasión especial</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="numPersonas" class="form-label">Cantidad de personas</label>
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
            <div class="mb-3">
        <label for="Confirmacion" class="form-label">Confirmacion</label>
        <input
          type="number"
          class="form-control"
          id="Confirmacion"
          v-model="user.confirmacion"
        />
      </div>
      <button type="submit" class="btn btn-primary btn-submit-register">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import UsuarioService from "../services/UsuarioService";
var usuariosD = ''

export default {
  
  name: "EditView",
  data() {
    return {
      user: {
        id: "",
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
        confirmacion: "Pendiente",
      },
    };
  },
  created() {
    this.usuarioService = new UsuarioService();
  },
  mounted() {
    this.usuarioService.getAll().then((data) => {
      this.usuarios = data.data;
      usuariosD = data.data.id;
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
.container-form-edit {
  margin: 0 auto;
  width: 600px;
}
</style>