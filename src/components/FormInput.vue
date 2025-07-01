<template>
    <FloatLabel variant="on">
        <InputText 
            v-tooltip="{ value: HelpMessage, showDelay: 1000, hideDelay: 300 }" 
            style="width: 100%;" 
            :invalid="isInvalid" 
            inputId="onLabel"
            v-model.trim="value"
            :type="Type"
        />
        <label for="onLabel">{{Label}}</label>
    </FloatLabel>
</template>
<script>
    export default{
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
            Type:{default:"text",type:String},
            isInvalid:{required:true},
            Label:{type:String,required:true},
            HelpMessage:{type:String,required:true}
        }
    }
</script>
<style>

</style>