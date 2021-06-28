<template>
  <Header />
  <h1>Add Page</h1>
</template>
<script>
import Header from "@/components/Header.vue";

export default {
  name: "Add",
  components: {
    Header,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    let user = localStorage.getItem("userInfo");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
