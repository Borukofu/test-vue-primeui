<template>
    <FloatLabel variant="on">
        <IconField>
            <InputIcon :class="Icon" />
            <InputText id="on_label" v-model.trim="value"/>
        </IconField>
        <label for="on_label">{{ Label }}</label>
    </FloatLabel>
</template>
<script>
    export default {
        data(){
            return{
                value:""
            }
        },
        watch:{
            value(newValue){
                this.$emit("update:modelValue",newValue)
            }
        },
        props:{
            Icon:{type:String,required:true},
            Label:{type:String,required:true}
        }
    }
</script>