<template>
    <div class="personalCenter" v-loading="userLoading" :element-loading-text="loadingText">
        <!--banner图-->
        <div class="banner">
            <!--个人头像-->
            <div class="avatar">
                <el-avatar :size="80" :src="userInfo.picUrl"></el-avatar>
                <h5>{{userInfo.name}}</h5>
                <el-tag effect="dark" type="info" class="isLiveTag" v-if="isLive" @click="toLiveRoom">直播中...</el-tag>
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
                        {{userInfo.userSum}}
                    </div>
                </div>
                <!--其余详细信息-->
                <div class="infoContent">
                    <el-row :gutter="24">
                        <!--地区-->
                        <el-col :md="12" :sm="12" :xs="24">
                            <div class=" bt-line pb2">
                                <span class="spanTitle">地区：</span>{{userInfo.address | transAddress}}
                            </div>
                        </el-col>

                        <!--邮箱-->
                        <el-col :md="12" :sm="12" :xs="24">
                            <div class=" bt-line pb2">
                                <span class="spanTitle">邮箱：</span>{{userInfo.email}}
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
                                <span class="spanTitle">授权码：</span>{{userInfo.appid || '暂无'}}
                                <el-button @click="toGetLiveNum" class="ml1" v-if="!userInfo.appid && userInfo.appid !== '*******'">
                                    申请
                                </el-button>
                                <el-button @click="createLive" v-else-if="userInfo.appid && userInfo.appid !== '*******'" class="ml1">创建直播</el-button>
                            </div>
                        </el-col>

                        <!--空间地址-->
                        <el-col :md="12" :sm="12" :xs="24">
                            <div class=" bt-line pb2 pt3">
                                <span class="spanTitle">空间地址：</span><a class="blog" @click="toBlog">{{userInfo.name}}的空间</a>
                            </div>
                        </el-col>

                    </el-row>
                    <br/>
                    <el-button class="mb2" v-show="isUserSelf" @click="toEdit">编辑</el-button>
                </div>
            </div>
        </div>

    <!--    创建直播间的弹框-->
        <el-dialog
            title="直播间创建"
            :visible.sync="dialogVisible"
            width="50%"
            >
            <div class="createLiveInfo">
                <h6>请填写房间信息</h6>
                <div class="liveRoomInfo">
                    <el-form label-position="right" ref="roomForm" :rules="rules" :model="roomForm" label-width="100px">
                        <el-form-item label="主播" prop="username">
                            <el-input v-model="roomForm.name" disabled></el-input>
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
