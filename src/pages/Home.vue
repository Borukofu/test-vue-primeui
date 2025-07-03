<template>
    <div class="container">
        <Header style="margin-bottom: 20px;" v-model:searchString="searchString"/>
        <div class="content">
            <PostList/>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import PostList from '@/components/PostList.vue';
export default{
    components:{
        Header,
        PostList
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