<template>
    <Menubar class="header" :model="items">
        <template #start>
            <Logo/>
        </template>
        <template #end>
            <div class="end-template">
                <IconInput v-model="searchString" :Icon="'pi pi-search'" :Label="'Search'"></IconInput>
                <Avatar style="margin-right: 15px;" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg"/>
            </div>
        </template>
    </Menubar>
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
                        label: "Home",
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
<style scoped>
    .end-template{
        display: flex;  
        flex-direction: row;
        justify-content: center; 
        align-items: center;
        gap: 15px;
    }
    .header{
        width: 100vw;
        display: fixed;  
    }

</style>