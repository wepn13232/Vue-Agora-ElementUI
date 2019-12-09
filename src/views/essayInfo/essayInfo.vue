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
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>


    </div>
</template>

<script src="./essayInfo.js"></script>

<style scoped lang="scss">
    @import "essayInfo.scss";
</style>
