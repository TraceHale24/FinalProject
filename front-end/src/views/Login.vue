
<template>
<div>
    <div v-if="currentUser === null || currentUser === undefined">
    <p>Login!</p>
        <input placeholder="Username" v-model="Username">
        <input type = "password" placeholder="Password" v-model="Password">
        <button type ="submit"  @click="register">Register</button>
        <button type="submit"  @click="login" >Login</button>
    </div>
    <div v-if="currentUser !== null && currentUser !== undefined">
        <p>
            You are currently logged in as {{currentUser}}
        </p>
    </div>
</div>
</template>


<script>
import axios from 'axios';
export default {
    computed: {
        currentUser() {

            return this.$root.$data.currentUser;
        }
    },
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
                let response = await axios.put("/api/users", {
                  Username: this.Username,
                  Password: this.Password
                });
                console.log(response);
                console.log(response.data.Username);
                if(response.data == ""||response.data.Username == undefined || response.data.Username == null) {
                    //alert(response.data);
                    alert("Failed Register: Username Taken");
                    this.$root.$data.currentUser = undefined;

                }
                else {
                    this.$root.$data.currentUser = response.data.Username;
                }

            }
            catch(error){
                console.log(error);
            }
        },
        async login(){

            try{
                let response = await axios.get("/api/users/" + this.Username, {
                  Username: this.Username,
                  Password: this.Password
                });
                console.log(response);
                this.$root.$data.currentUser = response.data.Username;

                if(this.$root.$data.currentUser == undefined || this.Password != (response.data.Password)) {
                    alert("Failed Login: Invalid Username or Password");
                    this.$root.$data.currentUser = undefined;
                }
            }
            catch(error){
                console.log(error);
            }
        },
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}
h1 {
  display: flex;
  justify-content: center;
}
#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
}

#menu a {
  color: forestgreen;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#rightside {
  grid-area: side;
  display: flex;
  justify-content: center;
}

#rightside img {
  width: 50px;
}

#leftside {
  grid-area:auto;
  display: flex;
  justify-content: center;
  padding-left: auto;
}

#leftside img {
  width: 50px;
}


.menu-item {
  display: flex;
  flex-direction: column;
  width: 50px;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
  width: 50px;
}


.footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 75px;
}

.footer-item {
  border: 3px solid black;
  border-radius: 10px;
  background-color: forestgreen;
  color: white;
  height: 150px;
  width: fit-content;
  flex: 1;
  padding-left: 70px;
  padding-top: 5px;
  position:sticky;
  width: 100%;
  bottom:0;
}

  a:visited {
    color:white;
}

a:link {
    color: white;
}
</style>
