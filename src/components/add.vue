<template>
  <Header />
  <h1>Hello, User, Welcome and add Restauran Page</h1>
  <div class="form-container">
    <form class="add">
      <input
        type="text"
        id="fname"
        v-model="this.name"
        placeholder="Your name.."
      />
      <input
        type="text"
        id="lname"
        v-model="this.address"
        placeholder="Address.."
      />
      <input
        type="text"
        id="lname"
        v-model="this.contact"
        placeholder="Contact.."
      />
      <input type="button" value="Submit" @click="addRestaurant" />
    </form>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";

export default {
  name: "Add",
  components: {
    Header,
  },
  data() {
    return {
      name: "",
      address: "",
      contact: "",
    };
  },
  methods: {
    addRestaurant() {
      console.warn(this.name, this.address);
    },
  },
  mounted() {
    let user = localStorage.getItem("userInfo");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
