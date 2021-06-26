<template>
    <h1>Home</h1>
</template>
<script>
export default {
    name: "Home",
    data() {
        return {
            
        }
    },
    methods:{
        
    },
    mounted(){
    let user = localStorage.getItem('userInfo');
    if(!user){
      this.$router.push({name: 'SignUp'})
    }
  }
}
</script>