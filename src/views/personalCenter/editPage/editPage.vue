<template>
    <div class="editPage">
        <!--banner图-->
        <div class="banner">
            <!--个人头像-->
            <div class="avatar">
                <el-avatar :size="80"
                           src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <h5>{{userInfo.name}}</h5>
            </div>
        </div>
        <!--个人具体信息-->
        <div class="info pb3">
            <div class="container">
                <!--个人信息简述-->
                <div class="infoSum">
                    <div class="infoSum-title">
                        <span>个人信息简述</span>
                    </div>
                    <div class="infoSum-content">
                            <el-input type="textarea" v-model="userInfo.userSum"></el-input>
                    </div>
                </div>
                <!--其余详细信息-->
                <div class="infoContent">
                    <el-row :gutter="24">
                        <!--地区-->
                        <el-col :md="12" :sm="12" :xs="24">
                            <div class=" bt-line pb2">
                                <span class="spanTitle">地区：</span>
                                <el-cascader
                                    v-model="userInfo.address"
                                    :options="options"
                                    @change="handleChange"></el-cascader>
                            </div>
                        </el-col>

                        <!--邮箱-->
                        <el-col :md="12" :sm="12" :xs="24">
                            <div class=" bt-line pb2">
                                <span class="spanTitle">邮箱：</span>
                                <el-input class="inputWidth" v-model="userInfo.email"></el-input>
                            </div>
                        </el-col>

                        <!--性别-->
                        <el-col :md="12" :sm="12" :xs="24">
                            <div class=" bt-line pb2 pt3">
                                <span class="spanTitle">性别：</span>{{userInfo.sex | transSex}}
                            </div>
                        </el-col>

                        <!--直播间号码-->
                        <el-col :md="12" :sm="12" :xs="24">
                            <div class=" bt-line pb2 pt3">
                                <span class="spanTitle">授权码：</span>
                                <el-input class="inputWidth" v-model="userInfo.appid"></el-input>
                            </div>
                        </el-col>


                    </el-row>
                    <br/>
                </div>
                <el-button type="primary" @click="confirmEdit">确认修改</el-button>
                <el-button @click="goBack">返回</el-button>
            </div>
        </div>
    </div>
</template>

<script src="./editPage.js"></script>

<style lang="scss" scoped>
    @import "editPage";
</style>
