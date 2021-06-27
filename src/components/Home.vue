<template>
<Header/>
<h1>home</h1>
</template>
<script>
import Header from "@/components/Header.vue"

export default {
    name: "Home",
    components:{
      Header
    },
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