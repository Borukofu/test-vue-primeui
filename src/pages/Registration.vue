<template>
  <div class="container">
    <form class="RegForm" @submit.prevent>
        <h1>Register now!</h1>
        <FormInput 
        class="MarginTop15" 
        v-model.trim="UserName"  
        :HelpMessage="'Enter your Username'" 
        :Label="'Username'" 
        :isInvalid="isInvalidUserName"
        />

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
        :Type="'Password'"
        :isInvalid="isInvalidPassword"
        />

        <FormInput 
        class="MarginTop15" 
        v-model.trim="UserConfirmPassword"  
        :HelpMessage="'Enter your Password again!'" 
        :Label="'Confirm Password'" 
        :Type="'Password'"
        :isInvalid="isInvalidConfirmPassword"
        />


        <div class="buttons">
            <Button class="MarginTop15" @click="Submit" label="Log in"/>   
            <Button class="MarginTop15" @click="$router.push('/login')" label="have an account" severity="secondary" variant="text"/>   
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
                if(this.UserPassword.length>8&&this.UserEmail.search(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)===0&&this.UserPassword===this.UserConfirmPassword){
                    this.registration({password:this.UserPassword,email:this.UserEmail})                    
                }
                if(!(this.UserPassword.length>8)){
                    this.isInvalidPassword = true;
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
<style scoped>
  .MarginTop15{
    margin-top: 15px;
  }
  .RegForm{
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