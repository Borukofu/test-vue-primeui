<template>
    <div>
        <Menubar class="flex" :model="items">
            <template #start>
                <Logo/>
            </template>
            <template #end>
                <div class="flex items-center">
                    <Select v-model="selectFilterItem" :options="selectFilter" optionLabel="name" placeholder="Selected Filter" class="mr-4"></Select>
                    <IconInput v-model="searchString" :Icon="'pi pi-search'" :Label="'Search'"></IconInput>
                    <Avatar class="ml-3 mr-3" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg"/>
                </div>
            </template>
        </Menubar>
    </div>
</template>
<script>
import Logo from '@/components/global/Logo.vue';
import IconInput from '@/components/inputs/IconInput.vue';

    export default {
        components:{
            Logo,IconInput
        },
        props:{
            selectFilter:{type:Array,required:true}
        },
        data(){
            return{
                selectFilterItem:{name:"Title",code:"title"},
                searchString:"",
                items:[
                    {
                        label: "Dashboard",
                        icon: "pi pi-home",
                        command:()=>{this.$router.push("/")}
                    },
                    {
                        label: "Create Post",
                        icon: "pi pi-envelope",
                        command:()=>{this.$emit("CreatePost",true)}
                    },
                    {
                        label: "Setting",
                        icon: "pi pi-cog",
                        items:[
                            {
                                label:"Account",
                                icon:"pi pi-user",
                                command:()=>{alert("I don't know what to add...")}
                            },
                            {
                                label:"Sign out",
                                icon:"pi pi-sign-out",
                                command:this.out
                            },
                        ]
                    }
                ],
            }
        },
        watch:{
            searchString(newValue){
                this.$emit("update:searchString",newValue)
            },
            selectFilterItem(newValue){
                this.$emit("update:selectFilterItem",newValue.code)
            }
        },
        methods:{
            out(){
                this.$cookies.remove("email")
                this.$cookies.remove("password")
                this.$cookies.remove("auth")
                this.$router.push("/login")
            }
        },
        
    }
</script>