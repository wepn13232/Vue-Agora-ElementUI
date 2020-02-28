<template>
    <!--头部导航-->
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">YOLO社区</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" @click="toHome">首页 <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/liveHall">直播大厅</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="toPicShow">照片墙</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="toLocationRec">所有文章</a>
                    </li>
                    <li class="nav-item" v-if="userInfo.username == 'admin'">
                        <a class="nav-link" @click="toAdminIndex">管理员页</a>
                    </li>

                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <el-input placeholder="请输入内容" @keyup.enter.native="toSearch" v-model="searchInfo" class="input-with-select">
                        <el-select v-model="selectType" slot="prepend" placeholder="请选择">
                            <el-option label="用户" value="username"></el-option>
                            <el-option label="文章" value="essayname"></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search" @click="toSearch"></el-button>
                    </el-input>
                </form>
                <!--未登录-->
                <div v-if="!userInfo.username">
                    <a href="/#/login" class="btn btn-outline-secondary my-2 my-sm-0" style="margin-left: 3vw">登录</a>
                    <a href="/#/register" class="btn btn-outline-success my-2 my-sm-0" style="margin-left: 1vw">注册</a>
                </div>
                <div v-else>
                    <!--已登录-->
                    <el-dropdown @command="handleCommand" style="cursor:pointer;">
                        <div class="block userBlock" style="margin-left: 3vw;padding-top: 3px;margin-right: 2vw">
                            <el-avatar :size="31"
                                       src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                            <span style="color: #ffffff;padding-top: 5px;padding-left: 5px">{{userInfo.name}}</span>
                        </div>

                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">个人中心</el-dropdown-item>
                            <el-dropdown-item command="b">注销账户</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                </div>
            </div>
        </nav>
    </div>
</template>

<script src="./headerS.js"></script>

<style scoped lang="scss">
    @import "headerS";
</style>
<style>
    .el-select .el-input {
        width: 80px;
    }

    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
</style>
