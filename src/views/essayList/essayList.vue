<template>
    <div class="essayList">
        <!--无搜索-->
        <div class="noEssayName" v-if="!essayName" v-loading="loadingEssay">
            <!--  推荐文章-->
            <div class="recEssay">
                <Divider class="recDivider">推荐文章</Divider>
                <div class="container">
                    <!--    添加文章按钮-->
                    <el-button type="primary" class="fr" @click="toAddEssay">发表文章</el-button>
                    <div class="clearFix"></div>
                    <div v-for="(lists,index) in recEssayInfo" :key="index" v-if="index < 4" class="pb2 pt2 " style="cursor: pointer">
                        <essay-card class="e-list-card" @click.native="toEssay(lists.id)">
                            <div slot="card-pic" class="slot-pic">
                                <img :src="lists.url" alt="essay-pic">
                            </div>
                            <div slot="title">{{lists.title}}</div>
                            <div slot="desc" v-html="lists.content"></div>
                            <div slot="author">作者：{{lists.username}}</div>
                        </essay-card>
                    </div>
                </div>
            </div>
            <!--  往期文章-->
            <div class="essayBefore">
                <Divider class="recDivider">往期文章</Divider>
                <ul>
                    <li v-for="(lists,index) in essayInfo" :key="index" v-if="index < listsNum" >
                        <div class="container pb2 pt2" style="cursor:pointer">
                            <essay-card class="e-list-card" @click.native="toEssay(lists.id)">
                                <div slot="card-pic" class="slot-pic">
                                    <img :src="lists.url" alt="essay-pic">
                                </div>
                                <div slot="title">{{lists.title}}</div>
                                <div slot="desc" v-html="lists.content"></div>
                                <div slot="author">作者：{{lists.username}}</div>
                            </essay-card>
                        </div>
                    </li>
                </ul>
                <div class="moreLists">
                    <span @click="loadMore" class="cp">{{showMoreTitle}}</span>
                </div>
            </div>
        </div >
        <!--有搜索-->
        <div class="haveEssayName" v-else>
            <!--  搜索文章-->
            <div class="essayBefore">
                <Divider class="recDivider">搜索文章</Divider>
                <ul>
                    <li v-for="(lists,index) in essayInfo" :key="index" v-if="index < listsNum" >
                        <div class="container pb2 pt2" style="cursor:pointer">
                            <essay-card class="e-list-card" @click.native="toEssay()">
                                <div slot="card-pic" class="slot-pic">
                                    <img :src="lists.url" alt="essay-pic">
                                </div>
                                <div slot="title">{{lists.title}}</div>
                                <div slot="desc" v-html="lists.content"></div>
                                <div slot="author">作者：{{lists.username}}</div>
                            </essay-card>
                        </div>
                    </li>
                </ul>
                <div class="moreLists">
                    <span @click="loadMore" class="cp">{{showMoreTitle}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./essayList.js"></script>

<style scoped lang="scss">
    @import "essayList";
</style>
