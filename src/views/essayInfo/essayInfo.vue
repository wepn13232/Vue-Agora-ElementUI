<template>
    <div class="essayInfo">
        <!--文章卡片-->
        <div class="essayCard">
            <!--文章banner-->
            <div class="cardBanner" :style="{backgroundImage:'url('+essayInfo.url+')'}">
                <!--黑色蒙版-->
                <div class="black">
                    <!--banner内内容-->
                    <div class="bannerContent">
                        <!--发布时间-->
                        <div class="essay-time">
                            <span class="fw">{{essayInfo.date}}</span>
                            <el-dropdown v-if="isUserForEssay">
                                <div class="moreOptions">
                                    <img src="../../../public/img/icons/more.png" alt="more" class="moreOptionsImg">
                                </div>
                                <el-dropdown-menu slot="dropdown">
                                    <el-popover
                                        placement="top"
                                        width="160"
                                        v-model="essayVisible">
                                        <p>确定删除吗？</p>
                                        <div style="text-align: right; margin: 0">
                                            <el-button size="mini" type="text" @click="essayVisible = false">取消
                                            </el-button>
                                            <el-button type="primary" size="mini" @click="confirmDeleteEssay">确定
                                            </el-button>
                                        </div>
                                        <el-dropdown-item slot="reference">删除</el-dropdown-item>
                                    </el-popover>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                        <!--标题-->
                        <div class="essay-title">
                            <h3 class="fw">{{essayInfo.title}}</h3>
                        </div>
                        <div class="essayFooter">
                            <!--作者-->
                            <div class="author">
                                <span class="fw">作者：{{essayInfo.username}}</span>
                            </div>
                            <!--星级显示-->
                            <el-rate
                                v-model="isRateValue"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                            </el-rate>
                        </div>

                    </div>
                </div>
            </div>
            <!--文章内容-->
            <div class="cardContent">
                <div class="essay container" v-html="essayInfo.content"></div>
            </div>
        </div>

        <!--评论区-->
        <div class="commentArea">
            <el-button @click="commentDialog = true" size="small" class="postBtn" v-if="userInfo">发表评论</el-button>
            <div class="clearfix"></div>
            <el-divider content-position="left">评论区</el-divider>
            <div class="comments">
                <div class="userComment" v-for="(lists,i) in commentLists" :key="i" v-show="i<4">
                    <div class="userPic">
                        <el-avatar :src="lists.picUrl"
                                   :size="60"></el-avatar>
                    </div>
                    <div class="userInfo">
                        <div class="username">{{lists.name}}</div>
                        <div class="commentContent">
                            {{lists.comment}}
                        </div>
                    </div>
                    <div class="dateTime">{{lists.date}}</div>
                    <el-dropdown class="commentOptions"
                                 v-if="userInfo && (lists.username ==userInfo.username || userInfo.username == 'admin' )">
                        <img src=".././../../public/img/icons/more_black.png" alt="morePic" class="dropdownPic">
                        <el-dropdown-menu slot="dropdown">
                            <el-popover
                                placement="top"
                                width="160"
                                v-model="lists.visible">
                                <p>确定删除吗？</p>
                                <div style="text-align: right; margin: 0">
                                    <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                                    <el-button type="primary" size="mini" @click="confirmDeleteComment(lists.id)">确定
                                    </el-button>
                                </div>
                                <el-dropdown-item slot="reference">删除</el-dropdown-item>
                            </el-popover>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <div class="clearfix"></div>
                    <el-divider></el-divider>
                </div>
                <div class="loadMoreComment"><span class="load" @click="loadMoreComments">{{commentLoadText}}</span>
                </div>
            </div>
        </div>

        <!--    提示打分对话框-->
        <el-dialog
            center
            title="提示"
            :visible.sync="dialogVisible"
            width="30%">
            <!--推荐星级-->
            <div class="star">
                <el-rate
                    v-model="value"
                    text-color="#ff9900"
                    show-score
                    score-template="{value}">
                </el-rate>
                <p class="dialogText">(喜欢这篇文章的话 请给作者打分喔！)</p>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="confirmScore">确 定</el-button>
  </span>
        </el-dialog>

        <!--发表评论弹窗-->
        <el-dialog
            title="发表评论"
            :visible.sync="commentDialog"
            width="50%"
            custom-class="commentDialog"
        >
            <el-input type="textarea" :row="3" placeholder="请输入你的评论" maxlength="25" show-word-limit
                      v-model="comment"></el-input>
            <span slot="footer" class="dialog-footer">
                 <el-button @click="commentDialog = false">取 消</el-button>
                 <el-button type="primary" @click="postComment">发 表</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script src="./essayInfo.js"></script>

<style scoped lang="scss">
    @import "essayInfo.scss";
</style>
<style lang="scss">
    .essayInfo {
        .commentDialog {
            .el-dialog__body {
                padding: 10px 20px !important;
            }
        }
    }
</style>
