<script setup>
  import FormInput from '@/components/FormInput.vue';
</script>
<template>
  <div class="flex justify-center items-center h-svh">
    <Panel>
      <template #header>
        <h1 class="text-3xl">Welcome back!</h1>
      </template>
      <form @submit.prevent>
        
            <FormInput 
            class="mb-4"
            v-model.trim="UserEmail"  
            :HelpMessage="'Enter your Email'" 
            :Label="'Email'" 
            :isInvalid="isInvalidEmail"
            />
    
            <FormInput 
            class="mb-4" 
            v-model.trim="UserPassword"  
            :HelpMessage="'Enter your Password'" 
            :Label="'Password'" 
            :Type="'Password'"
            :isInvalid="isInvalidPassword"
            />
    
    
            <div class="flex flex-col">
                <Button class="h-8" @click="Submit" label="Log in"/>   
                <Button class="h-8 mt-2" @click="$router.push('/registration')" label="no account" severity="secondary" variant="text"/>   
            </div>
        </form>
    </Panel>
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