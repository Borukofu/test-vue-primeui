<template>
    <div class=" w-full flex flex-col justify-center items-center   ">
        <Panel class="mb-4 max-w-3xl" v-for="post in posts" :key="post.id">
            <template #header>
                <div class="flex justify-center items-center">
                    <Avatar class="mr-4" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                    <span>
                        <strong>
                            {{post.title}}
                        </strong>
                    </span>
                </div>
            </template>
            <template #footer>
                <div class="flex justify-end items-center">
                    <Button icon="pi pi-trash" @click="PostDelete(post.id)"></Button>
                </div>
            </template>
            <p>
                {{ post.body }}
            </p>
        </Panel>
    </div>
</template>
<script>
    import axios from 'axios';
    export default{
        data(){
            return{
                posts:[]
            }
        },
        mounted(){
            this.GetPosts()
        },
        methods:{
            PostDelete(id){
                console.log(id);
                for(let post of this.posts){
                    if(post.id===id){
                        this.posts = this.posts.filter(post => post.id !== id)
                    }
                };
            },
            async GetPosts(){
                try{
                    this.posts = (await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")).data
                }catch (er){
                    console.error(er);
                };
            }   
        }
    }
</script>