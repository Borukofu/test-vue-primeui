<template>
    <Dialog modal>
        <template #header>
            <h2 class="mr-4">
                <strong>
                    {{ post.title }}
                </strong>
            </h2>
        </template>
        <p class="overflow-y-auto">
            {{ post.body }}
        </p>
    </Dialog>
</template>
<script>
    export default{
        props:{
            post:{type:Object,required:true}
        }
    };
</script>