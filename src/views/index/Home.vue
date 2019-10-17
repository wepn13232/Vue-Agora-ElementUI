<template>
    <div class="home">
        <!--banner头部-->
        <div class="banner">
            <div class="jumbotron">
                <h1 class="jum-title">欢迎来到YOLO社区</h1>
                <p class="jum-content">你可以在这里看到你中意的作品，同时你也可以了解到你中意的平台，认识到各类行业却拥有相同兴趣的人们。</p>
                <hr class="my-4">
                <el-button @click="toReg">加入YOLO社区</el-button>
                <!--二维码-->
                <div class="qrcode"></div>
            </div>
        </div>

        <!--    内容块-->
        <div class="content">
            <!--首页推荐-->
            <div class="indexRecommended">
                <!--首页推荐-标题-->
                <div class="rec-title">
                    <span class="fb">-</span>
                    首页推荐
                    <span class="fb">-</span>
                </div>
                <!--    首页推荐-内容-->
                <div class="rec-content">
                    <div class="container-self">
                        <el-row :gutter="24">
                            <el-col :md="6" :sm="12" v-for="(item, index) in indexPic" :key="index">
                                <el-card :body-style="{ padding: '0px' }" style="margin-top: 7%">
                                    <img
                                        :src="item.picUrl"
                                        class="image">
                                </el-card>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>

            <!--文章推荐-->
            <div class="essayRec container-self">
                <!--文章推荐-标题-->
                <div class="essayRec-title">
                    <span class="fb">-</span>
                    文章推荐
                    <span class="fb">-</span>
                </div>
                <div class="essayRec-content">
                    <el-row :gutter="24">
                        <el-col :md="12" :xs="24" v-for="(item,index) in essayInfo" :key="index">
                            <a href="/essayInfo">
                                <essay-card class="e-card">
                                    <div slot="title">{{item.essay.title}}</div>
                                    <div slot="desc">{{item.essay.content}}</div>
                                </essay-card>
                            </a>
                        </el-col>
                    </el-row>
                </div>
                <!--    查看更多按钮-->
                <div style="width: 100%;text-align: center;margin-top: 2%">
                    <el-button plain>查看更多</el-button>
                </div>
            </div>

            <!--热门人物-->
            <div class="toplist-person">
                <!--热门人物-标题-->
                <div class="toplist-title">
                    <span class="fb">-</span>
                    热门人物
                    <span class="fb">-</span>
                </div>
                <!--热门人物展示-->
                <div class="toplist-content container-self">
                    <el-row :gutter="20">
                        <el-col :md="6" :sm="12" :xs="12" v-for="(item,index) in personInfo" :key="index">
                            <person-card>
                                <div slot="name">
                                    <h3>{{item.personName}}</h3>
                                </div>
                                <div slot="intro">
                                    <p>{{item.personIntro}}</p>
                                </div>
                            </person-card>
                        </el-col>
                    </el-row>
                </div>
                <!--    查看更多按钮-->
                <div style="width: 100%;text-align: center;margin-top: 2%">
                    <el-button plain>查看更多</el-button>
                </div>
            </div>
        </div>

    </div>

</template>

<script src="./home.js"></script>

<style lang="scss" scoped>
    @import "home";
</style>
