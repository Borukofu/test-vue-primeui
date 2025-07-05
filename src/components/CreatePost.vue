<template>
    <Dialog class="max-w-3xl" modal position="top" >
        <template #header>
            <h2 class="text-2xl mr-2">Create Post</h2>
        </template>
        <div class="flex flex-col">
            <InputText v-model.trim="title" class="mb-4" placeholder="Title"></InputText>
            <Textarea v-model.trim="body"></Textarea>
        </div>
        <template #footer>
            <div class="flex w-full items-center justify-between">
                <p class=" text-red-600">{{ message }}</p>
                <Button class="" @click="submit">Submit</Button>
            </div>
        </template>
    </Dialog>
</template>
<script>
    export default{
        data(){
            return{
                title:"",
                body:"",
                message:""
            }
        },
        methods:{
            SendMessage(value){
                this.message = value;
                setTimeout(()=>{
                    this.message = ""
                },1000)
            },
            submit(){
                if(this.title.length>50){
                    this.SendMessage("title is so big!")
                }else if(this.body.length>250){
                    this.SendMessage("body is so big!")
                }
                
                if(this.title===""){
                    this.SendMessage("title is empty!")
                }else if(this.body===""){
                    this.SendMessage("body is empty!")
                }
                
                if(this.title.length<50&&this.body.length<250&&this.title!==""&&this.body!==""){
                    this.$emit("CreatePost",{title:this.title,body:this.body})
                    this.title = "";
                    this.body = "";
                }
            }
        }
    }
</script>