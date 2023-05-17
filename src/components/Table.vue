<template>
<div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Tipo Doc</th>
        <th scope="col">Documento</th>
        <th scope="col">Email</th>
        <th scope="col">Fecha</th>
        <th scope="col">Tipo Reserva</th>
        <th scope="col">Cant Personas</th>
        <th scope="col">Descripcion</th>
      </tr>
    </thead>
    <tbody >
      <tr v-for="usuario in usuarios" v-bind:key = "usuario.id" >
        <th>{{usuario.id}}</th>
        <td>{{usuario.nombre}}</td>
        <td>{{usuario.apellido}}</td>
        <td>{{usuario.tipoDocumento}}</td>
        <td>{{usuario.identificacion}}</td>
        <td>{{usuario.email}}</td>
        <td>{{usuario.fecha}}</td>
        <td>{{usuario.tipoReserva}}</td>
        <td>{{usuario.cantidad}}</td>
        <td>{{usuario.descripcion}}</td>
        <button type="button" class="btn btn-warning btn-edit"><router-link to="/edit">Edit</router-link></button>
        <button type="button" @click="deletedUser(usuario)" class="btn btn-danger btn-delete">Delete</button>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import axios from 'axios';
import UsuarioService from "../services/UsuarioService";

export default {
  name: "Table",
  data() {
    return {
      usuarios:{
        id:'',
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
      }
    };
  },
  usuarioService: null,
  created() {
    this.usuarioService = new UsuarioService();
  },
  mounted() {
    this.usuarioService.getAll().then((data) => {
      this.usuarios = data.data;
    });
  },
  methods:{

  deletedUser(usuario){
    var url = `http://localhost:8082/usuario/${usuario.id}`;
    axios.delete(url);
    alert("Reservacion Eliminada");
  }
  }
};
</script>

<style scoped>
.btn-edit {
  background-color: #ffc107;
  margin-right: 1rem;
}
.btn-delete{
  background-color: #dc3545;
  margin-right: 1rem;
  
}
</style>
