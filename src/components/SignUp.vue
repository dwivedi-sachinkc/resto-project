<template>
  <img src="../assets/resto-logo.jpg" class="logo" />
  <h1>sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="enter your Name" />
    <input type="text" v-model="email" placeholder="enter your Email" />
    <input
      type="password"
      v-model="password"
      placeholder="enter your Password"
    />
    <button class="register" @click="signUp">Sign up</button>
  </div>
  <p>
    <router-link to="/login">Login</router-link>
  </p>
</template>

<script>
import axios from "axios";
export default {
  name: "Sign Up",
  props: {},
  data() {
    return {
      name: "",
    };
  },
  methods: {
    async signUp() {
      console.log("sign", this.name, this.email, this.password);
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        name: this.name,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("userInfo", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
      this.name = "";
      this.email = "";
      this.password = "";
    },
  },
  mounted() {
    let user = localStorage.getItem("userInfo");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
