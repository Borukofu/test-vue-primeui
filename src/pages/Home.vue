<template>
    <div>
        <Header @CreatePost="()=>{visibleDialogCreatePost=true}" class="mb-4" v-model:searchString="searchString"/>
        <CreatePost @CreatePost="CreatePost" v-model:visible="visibleDialogCreatePost"></CreatePost>
        <ViewPost :post="viewPostItem" v-if="viewPost" v-model:visible="viewPost" ></ViewPost>
        <div v-if="(posts.length===0)&&PostListLoading===false" class="flex w-lvw justify-center">
            <h2 class=" text-2xl">Post list is Empty!</h2>
        </div>
        <div v-if="PostListLoading" class="flex w-lvw justify-center">
            <h2 class=" text-2xl">Post list is Loading!</h2>
        </div>
        <PostList @OpenPost="OpenPost" @PostDelete="PostDelete" :posts="posts"/>
    </div>
</template>
<script>
import CreatePost from '@/components/CreatePost.vue';
import Header from '@/components/Header.vue';
import PostList from '@/components/PostList.vue';
import ViewPost from '@/components/ViewPost.vue';
import axios from 'axios';
export default{
    components:{
        Header,
        PostList,
        CreatePost,
        ViewPost
    },
    mounted(){
        if(this.$cookies.get("auth")==="true"){
            this.email = this.$cookies.get("email") || "";
            this.password = this.$cookies.get("password") || "";
            this.GetPosts();
        }else{
            this.$router.push("/login")
        }
    },
    watch:{
        searchString(newValue){
            console.log(newValue);
            // logical filtered posts
        },
    },
    data() {
        return {
            posts:[
                {id:1,userid:1,title:"tested title post",body:"is legal body 100 % "},
                {id:2,userid:2,title:"Lorem? 100))",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium non hic, magni perspiciatis ab laboriosam, mollitia impedit optio earum debitis iure maxime blanditiis dignissimos rem nulla, natus perferendis voluptatem harum minima possimus sit fuga. Iusto praesentium eius maxime corrupti nemo voluptas dolor eligendi cupiditate! Voluptate neque harum inventore doloremque cupiditate mollitia earum nemo accusamus repellendus voluptatem nobis unde quidem quia ad porro, dolor dolores adipisci labore sapiente assumenda molestiae possimus a. Odio illum error quisquam labore dolorum architecto quia velit nostrum necessitatibus? Aperiam officia dolorum deleniti sequi, libero vero harum aspernatur quos corporis deserunt commodi dolores dignissimos, tempora totam fuga!"}
            ],
            filteredPosts:[],
            searchString:"",

            email:"",
            password:"",
            
            page:1,
            PostListLoading:true,
            visibleDialogCreatePost:false,
            
            viewPost:false,
            viewPostItem:{},
        }
    },
    methods:{
        SearchPost(id){
            for(let i = 0; i <= this.posts.length; i++){
                if(this.posts[i].id===id){
                    return this.posts[i]
                }
            };
            return null;
        },
        OpenPost(id){
            this.viewPost = true;
            this.viewPostItem = this.SearchPost(id);
        },
        CreatePost(item){
            this.visibleDialogCreatePost = false
            this.posts.reverse()
            this.posts.push({
                title:item.title,
                body:item.body,
                id:Date.now()
            })
            this.posts.reverse()
        },
        PostDelete(id){
            for(let post of this.posts){
                if(post.id===id){
                    this.posts = this.posts.filter(post => post.id !== id)
                }
            };
        },
        async GetPosts(){
            try{
                // при получении постов с бека указываеться страница и он даёт 
                // оптимальное количество постов но сто процентов не лям постов)
                // но не в этом случае) 
                this.posts = (await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")).data;
                this.PostListLoading = false
            }catch (er){
                this.PostListLoading = false
                console.error(er);
            };
        } 
    }
}
</script>