<template>
    <div class="container">
        <Header v-model:searchString="searchString"/>
        <div class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aspernatur sapiente. Perspiciatis vero recusandae eum modi voluptates eligendi sequi eveniet, nobis ut? Saepe corporis similique sit? Animi, saepe expedita velit ad, reprehenderit quo repellat harum eveniet rerum incidunt ipsum totam, earum dolor eaque. Porro maiores beatae accusamus non earum voluptatibus impedit consectetur magnam possimus ratione, error minima vel libero quod temporibus officia harum fuga necessitatibus, molestias eum reprehenderit est? Provident, minus deserunt! Assumenda doloribus id est dicta quidem quaerat, illum consequuntur ipsum, tempora modi alias a quas exercitationem consectetur ad nam esse quis? Fugiat laboriosam, quibusdam sequi doloribus vero exercitationem veritatis. Blanditiis sunt voluptatum autem eligendi enim modi repellat ab delectus atque, cumque ad accusantium ipsa corporis soluta laborum architecto consequuntur dolor voluptatibus vero voluptate! Ipsum, tenetur quo. Illum placeat illo earum quidem asperiores ipsam? Et, harum quae iure sapiente minima nesciunt ratione? Aut omnis, deserunt magni inventore recusandae ad tempora, numquam quis illum unde voluptas. A possimus itaque eaque aperiam labore, alias iure deserunt sint nemo aliquam vel ducimus. Corporis vitae doloremque debitis excepturi amet temporibus unde odit eius, ducimus nulla at, commodi voluptas autem soluta aspernatur id consectetur quasi? Culpa enim numquam, voluptatum quae fugit consequuntur vitae voluptatem reiciendis inventore perferendis aspernatur ipsa suscipit veniam praesentium porro repellat aliquid, odio amet exercitationem, doloribus ex eaque? Eos architecto facere, aliquam itaque distinctio at deleniti repudiandae placeat harum tempora! Fuga corporis velit incidunt nisi cupiditate autem ratione officia eligendi, ducimus aut eaque veritatis debitis quo dolores illum placeat voluptatum! Maxime, illum. Quod, ipsa fuga pariatur commodi saepe adipisci obcaecati neque modi sequi facilis, iusto facere doloribus officiis natus tempora perferendis earum libero. Enim adipisci accusantium blanditiis dolores harum ullam delectus voluptates. Suscipit vero minima similique asperiores incidunt quia iusto quos repudiandae id. Natus quia numquam illo dolores dolorem! Praesentium dolores rem deleniti veritatis, corrupti numquam voluptate tempora, molestiae perspiciatis eum impedit fugiat aperiam maxime mollitia exercitationem nemo alias totam optio laboriosam adipisci! Consequuntur, soluta? Eveniet optio veniam esse illum debitis doloribus suscipit, inventore iure maxime quos quis asperiores. Iste pariatur exercitationem eaque quia alias sint debitis doloremque libero deleniti facilis commodi, praesentium non quidem dolorum maxime similique cumque eum cupiditate animi quo error. Recusandae iusto aspernatur tempore consectetur provident facilis beatae libero expedita nostrum. Cupiditate iusto temporibus pariatur veniam. Eligendi, doloribus quidem atque accusamus neque consequuntur nobis sunt obcaecati eos unde minus eum ducimus. Sunt culpa consectetur, minima facere ea soluta debitis voluptas incidunt omnis cumque quas totam corrupti, quae eveniet sint. Mollitia amet est architecto ipsam ducimus porro laudantium? Corrupti accusantium voluptas provident ratione ipsam delectus commodi magni ab at, sunt ad nihil voluptate atque totam enim iste placeat aperiam ipsum officia illo neque, quo eos amet maxime. Et minima, dicta, doloribus id libero autem facilis quae, quisquam nesciunt saepe vero voluptas. Quaerat nisi iure saepe harum. Non, numquam vero obcaecati saepe inventore iure. Voluptas sint in autem distinctio, harum dignissimos sequi consequatur corrupti quos numquam. Dicta aut, dolore aspernatur, illo nobis non optio, enim odit iusto animi aliquam!
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
export default{
    components:{
        Header
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
<style scoped>
    .content{
        padding-right: 15px;
        padding-left: 15px;
    }
    .container{
        height: 100vh;
        width: 100vw;
        top: 0px;
        bottom: 0px;
        right: 0px;
        left: 0px;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
    }
</style>