<template>
    <div class="editPage">
        <!--banner图-->
        <div class="banner">
            <!--个人头像-->
            <div class="avatar">
                <el-tooltip class="item" effect="light" content="点击头像更换图片" placement="top" v-model="showTips">
                    <el-avatar :size="80" class="avatorPic" @click.native="_openDialog"
                               :src="changeUrl || userInfo.picUrl"></el-avatar>
                </el-tooltip>
                <h5>{{userInfo.name}}</h5>
            </div>
        </div>
        <!--个人具体信息-->
        <div class="info pb3">
            <div class="container">
                <el-button class="changePas" @click="toChangePas">修改密码</el-button>
                <div class="clearfix"></div>
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

        <!--更换头像对话框-->
        <el-dialog
            title="更换头像"
            :visible.sync="dialogVisible"
            width="30%"
            custom-class="changePic"
        >
            <div class="changePic">
                <el-input type="text" v-model="changeUrl" placeholder="http://"></el-input>
                <img :src="changeUrl" alt="logoPic" class="logoPic" v-if="changeUrl">
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelChange">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
             </span>
        </el-dialog>
    </div>
</template>

<script src="./editPage.js"></script>

<style lang="scss" scoped>
    @import "editPage";
</style>
<style lang="scss">
    .changePic {
        text-align: center;
        .logoPic {
            margin-top: 10px;
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }
    }
</style>
