<template>
    <div class="register">
        <div class="registerCard container">
            <div class="registerLogo">
                YOLO社区
            </div>
            <!--注册表单-->
            <div class="registerFrom">
                <el-form ref="form" :rules="rules" :model="form" label-width="100px">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="form.username" class="input-width" clearable="true"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="form.password" class="input-width"
                                  clearable="true"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input type="email" v-model="form.email" class="input-width"
                                  clearable="true"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="sex">
                        <el-select v-model="form.sex" placeholder="请选择性别">
                            <el-option label="男" value="male"></el-option>
                            <el-option label="女" value="female"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="success" @click="doReg">注册</el-button>
                        <el-button @click="toHome">返回</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script src="./reg.js"></script>

<style lang="scss" scoped>
    @import "reg";
</style>
