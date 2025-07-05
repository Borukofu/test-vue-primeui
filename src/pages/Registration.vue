<script setup>
  import FormInput from '@/components/inputs/FormInput.vue';
</script>
<template>
  <div class="flex justify-center items-center h-lvh">
    <Panel>
        <template #header>
            <h1 class=" text-3xl">Register now!</h1>
        </template>
        <form @submit.prevent>
            <FormInput 
            v-model.trim="UserName"  
            class="mb-4"
            :HelpMessage="'Enter your Username'" 
            :Label="'Username'" 
            :isInvalid="isInvalidUserName"
            />
    
            <FormInput 
            v-model.trim="UserEmail"
            class="mb-4"
            :HelpMessage="'Enter your Email'" 
            :Label="'Email'" 
            :isInvalid="isInvalidEmail"
            />
    
            <FormInput 
            v-model.trim="UserPassword"
            class="mb-4"
            :HelpMessage="'Enter your Password'" 
            :Label="'Password'" 
            :Type="'Password'"
            :isInvalid="isInvalidPassword"
            />
    
            <FormInput 
            v-model.trim="UserConfirmPassword"
            class="mb-4"
            :HelpMessage="'Enter your Password again!'" 
            :Label="'Confirm Password'" 
            :Type="'Password'"
            :isInvalid="isInvalidConfirmPassword"
            />
    
    
            <div class="flex items-center">
                <Button @click="Submit" label="Log in"/>   
                <Button @click="$router.push('/login')" label="have an account" severity="secondary" variant="text"/>   
            </div>
        </form>
    </Panel>
  </div>
</template>
<script>
    import FormInput from '@/components/inputs/FormInput.vue';
    export default {
        components:{
            FormInput
        },
        mounted(){
          if(this.$cookies.get("auth")==="true"){
            this.$router.push("/")
          };
                
        },
        data(){
            return{
                isInvalidUserName:false,
                isInvalidEmail:false,
                isInvalidPassword:false,
                isInvalidConfirmPassword:false,
                UserName:"",
                UserEmail:"",
                UserPassword:"",
                UserConfirmPassword:""
            }
        },
        methods:{
            registration(){
                console.log("TITA TYT REGISTRATIYA");
                // ULTRA REGISTRATIYA  //
            },
            Submit(){
                if(this.UserPassword.length>8&&this.UserEmail.search(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)===0&&this.UserPassword===this.UserConfirmPassword&&this.UserName!==""){
                    this.registration({password:this.UserPassword,email:this.UserEmail,username:this.UserName})                    
                }
                if(!(this.UserPassword.length>8)){
                    this.isInvalidPassword = true;
                }
                if(this.UserName===""){
                    this.isInvalidUserName = true;
                }
                if(!(this.UserConfirmPassword.length>8)||(this.UserPassword!==this.UserConfirmPassword)){
                    this.isInvalidConfirmPassword = true;
                }
                if(this.UserEmail.search(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)!==0){
                    this.isInvalidEmail = true;
                };
            }, 
        },
        watch:{
            UserName(newValue){
                if(newValue!==""){
                    this.isInvalidUserName = false;
                }else{
                    this.isInvalidUserName = true;
                }
            },
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
            },
            UserConfirmPassword(newPassword){
                if(newPassword.length>=8||this.UserConfirmPassword===this.UserPassword){
                    this.isInvalidConfirmPassword = false;
                }else{
                    this.isInvalidConfirmPassword = true;
                }
            }
        }
    }
    
</script>