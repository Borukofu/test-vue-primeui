<template>
    <div>
        <Header v-model:selectFilterItem="selectFilterItem" :selectFilter="selectFilter" @CreatePost="()=>{visibleDialogCreatePost=true}" class="mb-4" v-model:searchString="searchString"/>
        <CreatePost @CreatePost="CreatePost" v-model:visible="visibleDialogCreatePost"></CreatePost>
        <ViewPost :post="viewPostItem" v-if="viewPost" v-model:visible="viewPost" ></ViewPost>
        <div v-if="(posts.length===0)" class="flex w-lvw justify-center">
            <h2 class=" text-2xl">Post list is Empty!</h2>
        </div>
        <PostList @OpenPost="OpenPost" @PostDelete="PostDelete" :posts="PostsList()"/>
    </div>
</template>
<script>
import CreatePost from '@/components/post/CreatePost.vue';
import Header from '@/components/global/Header.vue';
import PostList from '@/components/post/PostList.vue';
import ViewPost from '@/components/post/ViewPost.vue';
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
        }else{
            this.$router.push("/login")
        }
    },
    watch:{
        searchString(newValue){
            this.sortPosts(newValue)
        },
        selectFilterItem(newValue){
            this.sortPosts(this.searchString)
        },
    },
    data() {
        return {
            posts:[
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "qui est esse",
                    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
                },
                {
                    "userId": 1,
                    "id": 4,
                    "title": "eum et est occaecati",
                    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
                },
                {
                    "userId": 1,
                    "id": 5,
                    "title": "nesciunt quas odio",
                    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
                },
            ],
            filteredPosts:[],
            searchString:"",
            selectFilterItem:"title",
            selectFilter:[
                {name:"Title",code:"title"},
                {name:"Body",code:"body"}
            ],

            email:"",
            password:"",
            
            page:1,
            visibleDialogCreatePost:false,
            
            viewPost:false,
            viewPostItem:{},
        }
    },
    methods:{
        sortPosts(value){
            if(value===""){
                this.filteredPosts = [];
            }else{

                // logical filtered posts
                let relevantPosts = this.posts.map(post =>{
                    return {post,score:this.relevantGet(post,value)}
                });
                relevantPosts.sort((a,b)=>{return a.score-b.score}).reverse();
                this.filteredPosts = relevantPosts.map(item=>{
                    return item.post;
                })
            }
        },
        relevantGet(post,searchStr){
            if(post[this.selectFilterItem].toLowerCase().includes(searchStr.toLowerCase())){
                return 1
            }else{
                return 0
            }
        },
        PostsList(){
            if(this.filteredPosts.length===0){
                return this.posts;
            }else{
                return this.filteredPosts;
            }
                
        },
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
            this.sortPosts(this.searchString)
        },
        PostDelete(id){
            for(let post of this.posts){
                if(post.id===id){
                    this.posts = this.posts.filter(post => post.id !== id)
                }
            };
        },
    }
}
</script>