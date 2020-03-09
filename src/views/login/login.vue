<template>
    <div class="login">
        <div class="login-card">
            <!--登录框logo-->
            <div class="logo">YOLO社区</div>
            <!--登录框表单-->
            <div class="login-form container">
                <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="用户名">
                        <el-input v-model="form.username" class="input-width" @input="replaceSpace()"
                                  clearable></el-input>
                    </el-form-item>
                    <el-form-item label="密码" class="pasInput">
                        <el-input type="password" v-model="form.password" @input="replaceSpace()" class="input-width"
                                  @keyup.enter.native="doLogin"
                                  clearable></el-input>
                    </el-form-item>

                        <div class="forgetPas"><span class="span" @click="toReset">忘记密码？</span></div>

                    <el-form-item>
                        <el-button type="primary" @click="doLogin">登录</el-button>
                        <el-button @click="toHome">返回</el-button>
                    </el-form-item>
                    <el-form-item>
                        <span class="fr" ref="loginRef"></span>
                    </el-form-item>
                </el-form>
            </div>
            <p class="author">@Copyright<span class="author_n"> 林启元毕业设计</span></p>
        </div>
    </div>
</template>

<script src="./app.js"></script>

<style scoped lang="scss">
    @import "login.scss";
</style>
