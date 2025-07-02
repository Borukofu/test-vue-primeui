<template>
    <div class="container">
        <Header style="margin-bottom: 20px;" v-model:searchString="searchString"/>
        <div class="content">
            <Panel style="max-width: 900px;min-width: 380px;">
                <template #header>
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <Avatar style="margin-right: 15px;" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                        <span>{{this.$cookies.get("email")}}</span>
                    </div>
                </template>
                <template #footer>
                    <div class="end">
                        <Button icon="pi pi-trash"></Button>
                    </div>
                </template>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque harum quasi consequatur quos eos, impedit minus, dolorem eveniet assumenda unde, itaque quae soluta illo? Quidem qui iste unde facere!
                </p>
            </Panel>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
export default{
    components:{
        Header
    },
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
            searchString:"",
           
        }
    },
}
</script>
<style scoped>
    .end{
        display: flex;
        justify-content: end;
        align-items: center;
    }
    .content{
        padding-right: 15px;
        padding-left: 15px;
    }
    .container{
        height: 100vh;
        width: 100vw;
        top: 0px;
        bottom: 0px;
        right: 0px;
        left: 0px;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
    }
</style>