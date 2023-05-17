<template>
  <div class="about">
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
    <h1>Helcome to Login page</h1>
    <form class="container-form">
      <div class="input-container">
        <div class="mb-3">
        <label for="username" class="form-label">Email</label>
        <input
          type="text"
          class="form-control"
          id="username"
          aria-describedby="emailHelp"
          v-model="this.user.email"
          @input="validateEmail()"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="this.user.password"
          @input="validatePassword()"
        />
      </div>
      <button
        type="submit"
        :disabled="
          this.user.email === '' ||
          this.user.password === '' ||
          flagValidate.email ||
          flagValidate.password
        "
        class="btn btn-primary"
      >
        <router-link to="/admin" style="color: white">Submit</router-link>
      </button>
      </div>
      
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      user:{
        username:'',
        password:'',
      },
      flagValidate: {
        email: false,
        password: false,
      },
    }
  },
  methods:{
    validateEmail() {
      if (this.user.email.search(/^admin@gmail.com$/)
      ) {
        this.flagValidate.email = true;
      } else {
        this.flagValidate.email = false;
      }
    },
    validatePassword() {
      if (this.user.password.search(/^1234$/)
      ) {
        this.flagValidate.password = true;
      } else {
        this.flagValidate.password = false;
      }
    },
  }
};
</script>

<style scoped>
.btn {
  background-color: black;
}
.container-form {
  display: grid;
  width: 100%;
}
.input-container {
  width: 600px;
  margin: 4rem auto;
}
</style>