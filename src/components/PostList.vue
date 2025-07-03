<template>
    <div class="list">
        <ScrollPanel>
            <Panel v-for="post in posts" :key="post.id" style="max-width: 900px;min-width: 380px;margin-top: 15px;">
                <template #header>
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <Avatar style="margin-right: 15px;" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                        <span>{{post.title}}</span>
                    </div>
                </template>
                <template #footer>
                    <div class="end">
                        <Button icon="pi pi-trash" @click="(ev)=>{alert('Coming soon...')}"></Button>
                    </div>
                </template>
                <p>
                    {{ post.body }}
                </p>
            </Panel>
            <ScrollTop target="parent" :threshold="100" icon="pi pi-arrow-up" :buttonProps="{ severity: 'contrast', raised: true, rounded: true }" />
        </ScrollPanel>
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
            this.getPosts()
        },
        methods:{
            async getPosts(){
                this.posts = (await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")).data
            }   
        }
    }
</script>
<style>
    .end{
        display: flex;
        justify-content: end;
        align-items: center;
    }
</style>