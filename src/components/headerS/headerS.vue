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
                        <a class="nav-link" href="/">首页 <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">直播大厅</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            推荐
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">地点推荐</a>
                            <a class="dropdown-item" href="#">品牌推荐</a>
                        </div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="在此搜索文章" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜索</button>
                </form>
                <!--未登录-->
                <div v-if="!userInfo.username">
                    <a href="/login" class="btn btn-outline-secondary my-2 my-sm-0" style="margin-left: 3vw">登录</a>
                    <a href="/register" class="btn btn-outline-success my-2 my-sm-0" style="margin-left: 1vw">注册</a>
                </div>
                <div v-else>
                    <el-dropdown @command="handleCommand" style="cursor:pointer;">
                        <div class="block userBlock" style="margin-left: 3vw;padding-top: 3px;margin-right: 2vw">
                            <el-avatar :size="31"
                                       src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                            <span style="color: #ffffff;padding-top: 5px;padding-left: 5px">{{userInfo.username}}</span>
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
