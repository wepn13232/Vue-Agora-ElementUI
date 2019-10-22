<template>
    <div class="content">
        <div class="intro">
            <h5>请创建一个项目</h5>
            <img src="../../../assets/img/page2.jpg" alt="page2" class="page2Img">
            <el-divider></el-divider>
            <img src="../../../assets/img/page2-1.jpg" alt="page2" class="page2Img">
            <el-divider></el-divider>
            <img src="../../../assets/img/page2-2.jpg" alt="page2" class="page2Img">
            <el-divider></el-divider>
            <h5>将APPID复制，点击“下一步”进行填写</h5>
            <img src="../../../assets/img/page2-3.jpg" alt="page2" class="page2Img">
        </div>
        <br/>
        <div class="btn-group">
            <el-button @click="goNext">下一步</el-button>
            <el-button @click="back">返回</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page2",
        methods: {
            goNext() {
                //传值给父组件=》至步骤条
                this.$emit('getStepActive', 2);
                this.$router.push('page3')
            },
            back() {
                this.$emit('getStepActive', 0);
                this.$router.go(-1)
            },
        },
        mounted() {
            this.$emit('getStepActive', 1);
        }
    }
</script>

<style scoped lang="scss">
    .content {
        padding-top: 5vh;
        padding-bottom: 5vh;
        width: 100%;
        text-align: center;

        .intro {
            width: 80%;
            margin: 0 auto;
            .page2Img{
                padding-top: 3vh;
                padding-bottom: 3vh;
                max-width: 100%;
                height: auto;
            }
        }

        .btn-group {
            margin-top: 5vh;
        }
    }
</style>
