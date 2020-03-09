<template>
    <div class="resetPas">
        <div class="resetCard">
            <div class="title">
                {{isConfirm?'请重置你的密码':' 请填写信息确认是你本人'}}
            </div>
            <div class="content">
                <el-form ref="confirmForm" :rules="formRules" :model="confirmForm" label-width="80px" v-if="!isConfirm">
                    <el-form-item label="用户名" prop="username">
                        <el-input type="text" v-model="confirmForm.username" class="input-width"
                                  placeholder="请输入注册时用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="昵称" prop="name">
                        <el-input type="text" v-model="confirmForm.name" class="input-width"
                                  placeholder="请输入注册时昵称"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input type="email" v-model="confirmForm.email" class="input-width"
                                  placeholder="请输入注册时邮箱"></el-input>
                    </el-form-item>
                    <el-form-item label="安全问题" prop="questionTitle">
                        <el-select v-model="confirmForm.questionTitle" placeholder="请选择安全问题">
                            <el-option label="我的小学" value="1"></el-option>
                            <el-option label="我的故乡" value="2"></el-option>
                            <el-option label="我的大学" value="3"></el-option>
                            <el-option label="我第一次工作城市" value="4"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="答案" prop="questionContent">
                        <el-input type="text" v-model="confirmForm.questionContent" class="input-width"></el-input>
                    </el-form-item>
                    <div class="btnGroup">
                        <el-button type="primary" @click="confirmAccount">确认</el-button>
                        <el-button @click="goBack">取消</el-button>
                    </div>
                </el-form>

                <el-form ref="resetForm" :rules="formRules2" :model="resetForm" label-width="80px" v-else>
                    <el-form-item label="新密码" prop="password">
                        <el-input type="password" v-model="resetForm.password" class="input-width"
                                  placeholder="请输入新密码"></el-input>
                    </el-form-item>
                    <el-form-item label="再次输入" prop="pasAgain">
                        <el-input type="password" v-model="resetForm.pasAgain" class="input-width"
                                  placeholder="请再次输入新密码"></el-input>
                    </el-form-item>
                    <div class="btnGroup">
                        <el-button type="success" @click="confirmReset">确认</el-button>
                        <el-button @click="goBack">取消</el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script src="./resetPas.js"></script>

<style lang="scss">
    @import "resetPas";
</style>
