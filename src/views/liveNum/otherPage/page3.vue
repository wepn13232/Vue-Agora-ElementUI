<template>
    <div class="content">
        <div class="from">

            <el-form label-position="right" ref="form" :rules="rules" :model="form" label-width="80px">
                <el-form-item label="APPID" prop="appid" class="labelWidth">
                    <el-input v-model="form.appid" class="input-width"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <br/>
        <div class="btn-group">
            <el-button type="success" @click="goNext('form')">完成</el-button>
            <el-button @click="back">返回</el-button>
        </div>
    </div>

</template>

<script>
    export default {
        name: "page3",
        data() {
            return {
                form: {
                    appid: ''
                },
                rules: {
                    appid: [{required: true, message: "请填写APPID", trigger: 'blur'}]
                }
            }
        },
        methods: {
            goNext(form) {
                this.$refs[form].validate((valid) => {
                    if(valid){
                        sessionStorage.setItem('liveNum',this.form.appid);
                        this.$message.success("授权成功");
                        this.$router.push('/personalCenter');
                    }else{
                        return false;
                    }
                })
            },
            back() {
                this.$emit('getStepActive', 1);
                this.$router.go(-1)
            },
        },
        mounted() {
            this.$emit('getStepActive', 2);
        }
    }
</script>

<style scoped lang="scss">
    .content {
        padding-top: 5vh;
        padding-bottom: 5vh;
        width: 100%;
        text-align: center;

        .form {
            text-align: center;

        }

        .labelWidth {
            width: 80%;
            margin: 0 auto;
        }
    }
</style>
