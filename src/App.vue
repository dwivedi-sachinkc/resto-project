<template>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.logo {
  width: 300px;
}
.register input , .login input {
  width: 300px;
  height: 41px;
  display: block;
  margin: 0 auto 10px;
}
.register button, .login button {
  width: 310px;
  height: 41px;
  border: 1px solid salmon;
  background: salmon;
  color: #fff;
  cursor: pointer;
}
.register button:hover , .login button:hover{
  background: #e2562f;
}
</style>

