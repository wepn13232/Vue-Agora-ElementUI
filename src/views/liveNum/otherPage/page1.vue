<template>
    <div>
        <div class="content">
            <h5>请前往“声网”官网注册一个账号</h5>
            <a href="https://www.agora.io/cn/" target="_blank">https://www.agora.io/cn/</a>
            <br/>
            <div class="btn-group">
                <el-button @click="goNext">下一步</el-button>
                <el-button @click="back">返回</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page1",
        methods: {
            goNext() {
                //传值给父组件=》至步骤条
                this.$emit('getStepActive', 1);
                this.$router.push('page2')
            },
            back() {
                // this.$emit('getStepActive', 0);
                this.$router.go(-1)
            },
        },
        mounted() {
            this.$emit('getStepActive', 0);
        }
    }
</script>

<style scoped lang="scss">
    .content {
        padding-top: 5vh;
        padding-bottom: 5vh;
        width: 100%;
        text-align: center;

        .btn-group {
            margin-top: 5vh;
        }
    }
</style>
