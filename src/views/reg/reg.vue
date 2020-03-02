<template>
    <div class="register">
        <div class="registerCard container">
            <div class="registerLogo">
                YOLO社区
            </div>
            <!--注册表单-->
            <div class="registerFrom">
                <el-form :rules="rules" :model="form" ref="regForm" label-width="100px">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="form.username" class="input-width" clearable
                                  placeholder="只限英文和数字"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="form.password" class="input-width" @input="replaceIllegal"
                                  clearable></el-input>
                    </el-form-item>
                    <el-form-item label="昵称" prop="name">
                        <el-input type="text" v-model="form.name" class="input-width" @input="replaceSpace"
                                  clearable></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input type="email" v-model="form.email" class="input-width"
                                  clearable></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="sex">
                        <el-select v-model="form.sex" placeholder="请选择性别">
                            <el-option label="男" value="1"></el-option>
                            <el-option label="女" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="地区" prop="address">
                        <el-cascader
                            v-model="form.address"
                            :options="options"
                            @change="handleChange"></el-cascader>
                    </el-form-item>
                    <el-form-item label="直播授权码" prop="roomNum">
                        <el-input v-model="form.roomNum" class="input-width"
                                  disabled placeholder="默认无，可在个人中心申请"></el-input>
                    </el-form-item>

                    <el-form-item class="btn_group">
                        <el-button type="success" @click="doReg('regForm')">注册</el-button>
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
