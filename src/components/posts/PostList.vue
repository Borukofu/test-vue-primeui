<template>
    <div class=" w-full flex flex-col justify-center items-center   ">
        <TransitionGroup name="postsList">
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
                        <Button class="mr-2" icon="pi pi-eye" @click="$emit('OpenPost',post.id)"></Button>
                        <Button icon="pi pi-trash" @click="$emit('PostDelete',post.id)"></Button>
                    </div>
                </template>
                <p class="overflow-y-auto">
                    {{ post.body }}
                </p>
            </Panel>
        </TransitionGroup>
    </div>
</template>
<script>
    export default{
        props:{
            posts:{type:Array,required:true}
        },
        methods:{
            // OpenPost(id){
            //     this.$router.push(`/posts/${id}`)
            // },
        }
    }
</script>