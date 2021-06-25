<template>
<img src="../assets/resto-logo.jpg" class="logo">
  <h1>sign Up</h1>
  <div class="register">
  <input type="text" name="" id="" placeholder="enter your Name">
  <input type="text" name="" id="" placeholder="enter your Email">
  <input type="password" name="" id="" placeholder="enter your Password">
  <button class="register">Sign up</button>
  </div>
</template>

<script>
export default {
  name: 'Sign Up',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  

.logo {
  width: 300px;
}
.register input{
  width: 300px;
  height: 40px;
  display: block;
  margin: 0 auto 10px;
}
.register button{
width: 310px;
height: 40px;
border: 1px solid salmon;
background: salmon;
color: #fff;
cursor: pointer;
}
</style>
