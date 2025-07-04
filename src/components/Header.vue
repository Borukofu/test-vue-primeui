<template>
    <div>
        <Menubar class="flex" :model="items">
            <template #start>
                <Logo/>
            </template>
            <template #end>
                <div class="flex items-center">
                    <IconInput v-model="searchString" :Icon="'pi pi-search'" :Label="'Search'"></IconInput>
                    <Avatar class="ml-3 mr-3" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg"/>
                </div>
            </template>
        </Menubar>
    </div>
</template>
<script>
import Logo from '@/components/Logo.vue';
import IconInput from '@/components/IconInput.vue';

    export default {
        components:{
            Logo,IconInput
        },
        data(){
            return{
                searchString:"",
                items:[
                    {
                        label: "Dashboard",
                        icon: 'pi pi-home',
                        command:()=>{this.$router.push("/")}
                    },
                    {
                        label: "Setting",
                        icon:"pi pi-cog",
                        items:[
                            {
                                label:"Account",
                                icon:"pi pi-user",
                                command:()=>{alert("Coming soon...")}
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