<template>
<div class = "Login">
    <p>WORK YOU STUPID THING</p>
    <form>
        <input placeholder="Username" v-model="Username">
        <input placeholder="Password" v-model="Password">
        <button type ="submit"  @click="register">Register</button>
        <button type="submit"  @click="login" >Login</button>
    </form>
</div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Login',
  data() {
    return {
        Username:'',
        Password:'',
    }
  },
    created() {
    },
    methods: {
        async register(){
            try{
                let response = await axios.post("/api/Users");
                this.$root.$data.currentUser =response.data;
            }
            catch(error){
                console.log(error);
            }
        },
        async login(){
            try{
                let response = await axios.get("/api/Users");
                this.$root.$data.currentUser =response.data;
            }
            catch(error){
                console.log(error);
            }
        }
    
  }
}
</script>
