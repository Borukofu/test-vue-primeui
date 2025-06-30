<template>
    <div class="container">
        <div class="d">
            <Panel header="Info">
                <p>{{ email }}</p>
                <p style="margin-top: 15px;">{{ password }}</p>            
            </Panel>
            <Button @click="out" style=" margin-top: 15px;">Out</Button>
        </div>
    </div>
</template>
<script>
export default{
    mounted(){
        if(this.$cookies.get("auth")==="true"){
            this.email = this.$cookies.get("email") || "";
            this.password = this.$cookies.get("password") || "";
        }else{
            this.$router.push("/login")
        }
    },
    data() {
        return {
            email:"",
            password:""
        }
    },
    methods:{
        out(){
            this.$cookies.remove("email")
            this.$cookies.remove("password")
            this.$cookies.remove("auth")
            this.$router.push("/login")
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