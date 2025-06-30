<template>
    <form class="LogInForm" @submit.prevent>
        <h1>Welcome back!</h1>
        <FloatLabel class="MarginTop15" variant="on">
            <InputText v-model.trim="UserEmail" style="width: 100%;" :invalid="isInvalidEmail" inputId="onLabelEmil"/>
            <label for="onLabelEmail">Email</label>
        </FloatLabel>

        <FloatLabel class="MarginTop15" variant="on">
            <InputText v-model.trim="UserPassword" type="password" :feedback="false" :invalid="isInvalidPassword" inputId="onLabelPassword"/>
            <label for="onLabelPassword">Password</label>
        </FloatLabel>

        <div class="buttons">
            <Button class="MarginTop15" @click="Submit" label="Log in"/>   
            <Button class="MarginTop15" label="no account" severity="secondary" variant="text"/>   
        </div>
    </form>
</template>
<script>
    export default {
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
                    this.$emit("authentication",{password:this.UserPassword,email:this.UserEmail})                    
                }
                if(!(this.UserPassword.length>8)){
                    this.isInvalidPassword = true;
                }
                if(this.UserEmail.search(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)!==0){
                    this.isInvalidEmail = true;
                };
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

</style>