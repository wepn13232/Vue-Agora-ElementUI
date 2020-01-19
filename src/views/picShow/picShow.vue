<template>
    <div class="picShow" v-loading="loading">
        <div class="container">
            <!--瀑布流-->
            <div class="grid" v-if="reloadMoreFresh">
                <div class="grid-item" v-for="(item,index) in cardList" :key="index" v-if="index<defaultLoadPic">
                    <!--瀑布流卡片-->
                    <card-pic :cardSrc="item.src" :cardUser="item.user" :cardContent="item.content"
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
                            <el-avatar
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                            <span class="username">{{dialogData.user}}</span>
                        </div>
                        <!--用户内容-->
                        <div class="midContent">
                            <p>{{dialogData.content}}</p>
                        </div>
                        <div class="clickArea">
                            <img src="../../assets/img/loveGray.png" alt="" @click="clickSub()" class="clickIcon"
                                 v-if="!dialogData.isSub">
                            <img src="../../assets/img/loveRed.png" alt="" class="isSubIcon" v-else>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script src="./picShow.js"></script>

<style lang="scss">
    @import "picShow";
</style>

