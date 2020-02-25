<template>
    <div class="picShow" v-loading="loading">
        <div class="container">
            <div class="postPic">
                <el-tooltip class="item" effect="light" v-model="showTips" content="你也来Post一张你的日常吧~！" placement="left">
                    <el-button type="primary" class="postPicBtn" @click="openPostDialog">Post照片</el-button>
                </el-tooltip>
                <div class="clearfix"></div>
            </div>
            <!--瀑布流-->
            <div class="grid" v-if="reloadMoreFresh">
                <div class="grid-item" v-for="(item,index) in cardList" :key="index" v-if="index<defaultLoadPic">
                    <!--瀑布流卡片-->
                    <card-pic :cardSrc="item.src" :cardUser="item.name" :cardContent="item.content"
                              @click.native="openDialog(item)"></card-pic>
                </div>
            </div>
            <div class="loadMore">
                <span @click="loadMorePic" v-if="canLoad">{{loadMoreText}}</span>
                <span v-else>{{loadMoreText}}</span>
            </div>
        </div>

        <!--展示弹窗-->
        <div class="picShowDialog">
            <el-dialog
                :visible.sync="dialogVisible"
                width="80%"
                :before-close="handleClose"
                custom-class="picDialog">
                <div class="dialogConcent">
                    <!--左边图片-->
                    <div class="leftPic">
                        <el-image :src="dialogData.src" fit="cover"></el-image>
                    </div>
                    <!--右边内容-->
                    <div class="rightContent">
                        <!--用户信息-->
                        <div class="header">
                            <div class="userIconInfo">
                                <el-avatar
                                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                <span class="username">{{dialogData.name}}</span>
                            </div>
                            <!--操作选项-->
                                <el-dropdown @command="clickCommand" v-if="isUser">
                                    <div class="moreOptions">
                                        <img src="../../../public/img/icons/more_black.png" alt="more" class="moreOptionsImg">
                                    </div>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item command="a">删除</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                        </div>
                        <!--用户内容-->
                        <div class="midContent">
                            <p>{{dialogData.content}}</p>
                        </div>
                        <div class="clickArea" v-if="userInfo">
                            <img src="../../assets/img/loveGray.png" alt="" @click="clickSub()" class="clickIcon"
                                 v-if="!dialogData.isSub">
                            <img src="../../assets/img/loveRed.png" alt="" class="isSubIcon" v-else @click="_cancelSub()">
                            <p class="likeCount">有{{likeCount}}人点赞</p>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </el-dialog>
        </div>

        <!--Post照片弹窗-->
        <div>
            <el-dialog
                title="Post你的照片"
                :visible.sync="postPicDialog"
                width="30%"
                custom-class="postDialog"
                center>
                <div class="postDialog_content">
                    <el-form ref="postForm" :model="postForm" :rules="rules">
                        <el-form-item label="图片地址" prop="src">
                            <el-input type="text" v-model="postForm.src" placeholder="请填写在线图片地址"></el-input>
                        </el-form-item>
                        <div class="picReShow" v-if="postForm.src">
                            <p>图片预览</p>
                            <el-image :src="postForm.src" alt="" fir="cover" class="reShow"></el-image>
                        </div>
                        <el-form-item label="内容" prop="content">
                            <el-input type="textarea" :rows="3" v-model="postForm.content"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <span slot="footer" class="dialog-footer">
                     <el-button @click="centerDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="_insertPic">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script src="./picShow.js"></script>

<style lang="scss">
    @import "picShow";
</style>

