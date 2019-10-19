<template>
    <div class="personalCenter">
        <!--banner图-->
        <div class="banner">
            <!--个人头像-->
            <div class="avatar">
                <el-avatar :size="80"
                           src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <h5>林启元</h5>
            </div>
        </div>

        <!--个人具体信息-->
        <div class="info">
            <div class="container">
                <!--个人信息简述-->
                <div class="infoSum">
                    <div class="infoSum-title">
                        <span>个人信息简述</span>
                    </div>
                    <div class="infoSum-content">
                        那咋办嘛那咋办嘛那咋办嘛那咋办嘛那咋办嘛那咋办嘛
                    </div>
                </div>
                <!--其余详细信息-->
                <div class="infoContent">
                    <el-row :gutter="24">
                        <!--地区-->
                        <el-col :md="12" :sm="12" :xs="24">
                            <div class=" bt-line pb2">
                                <span class="spanTitle">地区：</span>广东 / 湛江
                            </div>
                        </el-col>

                        <!--邮箱-->
                        <el-col :md="12" :sm="12" :xs="24">
                            <div class=" bt-line pb2">
                                <span class="spanTitle">邮箱：</span>466214222@qq.com
                            </div>
                        </el-col>

                        <!--性别-->
                        <el-col :md="12" :sm="12" :xs="24">
                            <div class=" bt-line pb2 pt3">
                                <span class="spanTitle">性别：</span>男
                            </div>
                        </el-col>

                        <!--直播间号码-->
                        <el-col :md="12" :sm="12" :xs="24">
                            <div class=" bt-line pb2 pt3">
                                <span class="spanTitle">直播间号码：</span>暂无
                            </div>
                        </el-col>

                        <!--博客地址-->
                        <el-col :md="12" :sm="12" :xs="24">
                            <div class=" bt-line pb2 pt3">
                                <span class="spanTitle">博客地址：</span><a href="#">www.pornhub.com</a>
                            </div>
                        </el-col>

                    </el-row>
                    <br/>
                    <el-button>编辑</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./personalCenter.js"></script>

<style scoped lang="scss">
    @import "personalCenter";
</style>
