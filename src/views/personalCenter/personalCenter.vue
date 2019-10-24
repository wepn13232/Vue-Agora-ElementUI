<template>
    <div class="personalCenter">
        <!--banner图-->
        <div class="banner">
            <!--个人头像-->
            <div class="avatar">
                <el-avatar :size="80"
                           src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <h5>{{userInfo.username}}</h5>
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
                                <span class="spanTitle">授权码：</span>{{userInfo.liveNumber || '暂无'}}
                                <el-button @click="toGetLiveNum" class="ml1" v-if="!userInfo.liveNumber && userInfo.liveNumber !== '*******'">
                                    申请
                                </el-button>
                                <el-button @click="createLive" v-else-if="userInfo.liveNumber && userInfo.liveNumber !== '*******'" class="ml1">创建直播</el-button>
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
                    <el-button class="mb2" v-show="userInfo.isUserSelf">编辑</el-button>
                </div>
            </div>
        </div>

    <!--    创建直播间的弹框-->
        <el-dialog
            title="直播间创建"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <div class="createLiveInfo">
                <h6>请填写房间信息</h6>
                <div class="liveRoomInfo">
                    <el-form label-position="right" ref="roomForm" :rules="rules" :model="roomForm" label-width="100px">
                        <el-form-item label="作者" prop="username">
                            <el-input v-model="roomForm.username" disabled></el-input>
                        </el-form-item>
                        <el-form-item label="直播间标题" prop="channelName">
                            <el-input v-model="roomForm.channelName"></el-input>
                        </el-form-item>
                        <el-form-item label="直播间简介">
                            <el-input v-model="roomForm.channelSum" type="textarea" placeholder="请输入直播间简介（可不输入）" :rows="2"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="toCreateLiveRoom('roomForm')">创建直播间</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script src="./personalCenter.js"></script>

<style scoped lang="scss">
    @import "personalCenter";
</style>
