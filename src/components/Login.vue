<template>
  <img src="../assets/resto-logo.jpg" class="logo" />
  <h1>Login Page</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="enter your Email" />
    <input type="password" v-model="password" placeholder="enter your Password"
    />
    <button class="login" @click="login">Login</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods:{
     async login(){
        console.log(this.email, this.password);
        let result = await axios.get(
            `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        );
        if(result.status== 200 && result.data.length> 0){
          localStorage.setItem('userInfo', JSON.stringify(result.data[0]));
          this.$router.push({name: 'Home'});
        }
        console.warn(result);
      }
  },
   mounted(){
    let user = localStorage.getItem('userInfo');
    if(user){
      this.$router.push({name: 'Home'})
    }
  }
};
</script>

