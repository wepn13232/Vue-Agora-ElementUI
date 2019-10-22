<template>
    <div class="steps">
        <el-steps :space="200" :active="stepActive" finish-status="success" align-center>
            <el-step title="进入Agorc官网注册账号"></el-step>
            <el-step title="创建新项目"></el-step>
            <el-step title="把APPID填写至下方"></el-step>
        </el-steps>
    </div>
</template>

<script>
    export default {
        name: "steps",
        model:{
            prop:'stepActive'
        },
        props:{
            stepActive:{
                type: Number,
                default:0
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
