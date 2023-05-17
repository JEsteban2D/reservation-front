<template>
  <div class="container-form" style="width: 100%">
    <h1 class="tittleApp">Welcome to your Reservation APP</h1>
    <div class="container-btns">
      <div>
      <Register></Register>
      </div>
    <div>
      <Login></Login>
    </div>
    </div>
  </div>
</template>

<script>
import Login from './Login.vue'
import Register from './Register.vue'

export default {
    name:'HelloWorld',
    data() {
        return{
            user: null
        }
    },
  components:{
    Register,
    Login 
  }    
}


</script>

<style scoped>
.tittleApp {
  font-family: 'Franklin Gothic Medium';
  font-weight: 900;
}
.container-btns {
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
}
</style>
