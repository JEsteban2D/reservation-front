<template>
  <div class="about">
    <nav>
    <router-link to="/">Home</router-link>
    </nav>
    <h1 >Helcome to Admin page</h1>
    <Table style="margin-top: 5rem;"/>
  </div>
</template>

<script>
import Table  from '../components/Table.vue'

export default {
  data() {
    return{
      
    }
  },
  components:{
    Table
  }
}
</script>

