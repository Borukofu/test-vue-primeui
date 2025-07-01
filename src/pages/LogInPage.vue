<script setup>
  import FormInput from '@/components/FormInput.vue';
</script>
<template>
  <div class="container">
    <form class="LogInForm" @submit.prevent>
        <h1>Welcome back!</h1>
        <FormInput 
        class="MarginTop15" 
        v-model.trim="UserEmail"  
        :HelpMessage="'Enter your Email'" 
        :Label="'Email'" 
        :isInvalid="isInvalidEmail"
        />

        <FormInput 
        class="MarginTop15" 
        v-model.trim="UserPassword"  
        :HelpMessage="'Enter your Password'" 
        :Label="'Password'" 
        :isInvalid="isInvalidPassword"
        />


        <div class="buttons">
            <Button class="MarginTop15" @click="Submit" label="Log in"/>   
            <Button class="MarginTop15" @click="$router.push('/registration')" label="no account" severity="secondary" variant="text"/>   
        </div>
    </form>
  </div>
</template>
<script>
    export default {
        mounted(){
          if(this.$cookies.get("auth")==="true"){
            this.$router.push("/")
          };
                
        },
        data(){
            return{
                isInvalidEmail:false,
                isInvalidPassword:false,
                UserEmail:"",
                UserPassword:"",
            }
        },
        methods:{
            Submit(){
                if(this.UserPassword.length>8&&this.UserEmail.search(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)===0){
                    this.authentication({password:this.UserPassword,email:this.UserEmail})                    
                }
                if(!(this.UserPassword.length>8)){
                    this.isInvalidPassword = true;
                }
                if(this.UserEmail.search(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)!==0){
                    this.isInvalidEmail = true;
                };
            }, 
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
                    this.isInvalidEmail = true;
                    this.isInvalidPassword = true;
              }
            }
        },
        watch:{
            UserEmail(newEmail){
                if(newEmail.search(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)===0){
                    this.isInvalidEmail = false;
                }else{
                    this.isInvalidEmail = true;
                }
            },
            UserPassword(newPassword){
                if(newPassword.length>=8){
                    this.isInvalidPassword = false;
                }else{
                    this.isInvalidPassword = true;
                }
            }
        }
    }
    
</script>
<style scoped>
  .MarginTop15{
    margin-top: 15px;
  }
  .LogInForm{
    padding: 20px;
    border-radius: 4%;
    border: 1px solid var(--p-content-border-color);
    background-color: var(--p-content-background);
    display: flex;
    flex-direction: column;
  }
  .buttons{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
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