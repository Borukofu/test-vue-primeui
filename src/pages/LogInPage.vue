<script setup>
  import LogIn from "@/components/LogInForm.vue";
</script>
<template>
  <div class="container">
    <LogIn @authentication="authentication"></LogIn>
  </div>
</template>
<script>

  export default {
    mounted(){
      if(this.$cookies.get("auth")==="true"){
        this.$router.push("/")
      };
            
    },
    methods:{
      authentication(form){
        // form types {email:String,password:String} //
        // логика аутентификации  //
        if(form.email==="borukofu.ua@gmail.com"&&
          form.password==="100%myPassword"
        ){
          console.log("all good");
          this.$cookies.set("auth","true")
          this.$cookies.set("email",form.email)
          this.$cookies.set("password",form.password)
          this.$router.push("/")
        }else{
          alert("no!")
        }
      }
    }
  }
</script>

<style scoped>
  .container{
    height: 97vh;
    width: 97vw;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>