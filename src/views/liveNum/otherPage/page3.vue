<template>
    <div class="content">
        <div class="from">
            <span class="fr ml3">注意：请务必填写正确，否则将无法创建直播间哦</span>
            <div class="clearFix"></div>
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
    import * as requireUrls from '../../../utils/allUrls'

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
                let _userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        return new Promise(resolve => {
                            requireUrls.setAppid({
                                appid: this.form.appid,
                                username: _userInfo.username,
                            }, 'post').then(res => {
                                return res.json();
                            }).then(res => {
                                if (+res.status === 200) {
                                    resolve();
                                    this.$message.success("授权成功");
                                } else {
                                    this.$message.error("授权失败");
                                    return false;
                                }
                            }).catch(err => {
                                console.log(err);
                                this.$message.error("授权失败");
                                return false;
                            })
                        }).then(() => {
                            requireUrls.insertHost({
                                username: _userInfo.username,
                                name: _userInfo.name,
                                appid:this.form.appid,
                                title: _userInfo.name + '的直播间',
                                roomSum: ''
                            }, 'post').then(res => {
                                return res.json();
                            }).then(res => {
                                if (+res.status === 200) {
                                    console.log("创建默认直播间成功！");
                                    this.$router.push({
                                        path: '/personalCenter',
                                        query: {username: _userInfo.username}
                                    });
                                } else {
                                    this.$message.error("创建默认直播间失败！");
                                }
                            }).catch(err => {
                                console.log(err);
                                this.$message.error("创建默认直播间出错!");
                            })
                        })
                    } else {
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

    .fl {
        float: left;
    }

    .fr {
        color: orangered;
    }

    .clearFix {
        clear: both;
    }
</style>
