<template>
  <Header />
  <h1>Hello {{ name }} yo</h1>
  <table border="1px">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Address</th>
      <th>Contact</th>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.contact }}</td>
    </tr>
  </table>
</template>
<script>
import Header from "@/components/Header.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  methods: {},
  async mounted() {
    let user = localStorage.getItem("userInfo");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    let result = await axios.get("http://localhost:3000/restaurants");
    console.warn(result);
    this.restaurants = result.data;
  },
};
</script>
<style scoped>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td,
table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #e2562f;
  color: white;
}
</style>
