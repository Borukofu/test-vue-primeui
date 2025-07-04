<template>
    <div>
        <Header class="mb-4" v-model:searchString="searchString"/>
        <PostList/>
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