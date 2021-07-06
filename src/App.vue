<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
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
.register input,
.login input {
  width: 300px;
  height: 41px;
  display: block;
  margin: 0 auto 10px;
}
.register button,
.login button {
  width: 310px;
  height: 41px;
  border: 1px solid salmon;
  background: salmon;
  color: #fff;
  cursor: pointer;
}
.register button:hover,
.login button:hover {
  background: #e2562f;
}

.add input[type="text"],
.add select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.add input[type="button"] {
  width: 100%;
  background-color: salmon;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add input[type="button"]:hover {
  background-color: #e2562f;
}
.form-container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
