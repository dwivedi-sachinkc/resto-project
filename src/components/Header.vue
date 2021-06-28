<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <router-link to="/update">update Restaurant</router-link>
    <a href="" @click="logout">Logout</a>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "{login}" });
    },
  },
};
</script>
<style scoped>
.nav {
  background: #333;
  overflow: hidden;
}
.nav a {
  float: left;
  cursor: pointer;
  color: #f2f2f2;
  text-align: center;
  padding: 16px 14px;
  text-decoration: none;
  font-size: 16px;
  margin-right: 4px;
}
.nav a:hover {
  background: #ddd;
  color: #222;
}
</style>
