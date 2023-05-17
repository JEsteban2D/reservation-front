<template>
  <div>
    <!-- Button trigger modal -->
    <router-link to="/login" style="color: white"><button
      type="button"
      class="btn btn-primary btn-login"
    > Ya tienes Cuenta?
    </button></router-link>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
    
    }
  },
  methods:{

  }
};
</script>

<style scoped>
.btn-login {
  height: 500px;
  color: white;
  font-weight: bold;
  font-size: 32px;
  border-radius: 30px;
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.87), rgb(44, 61, 63));
}
</style>