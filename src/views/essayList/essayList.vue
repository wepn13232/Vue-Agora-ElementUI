<template>
    <div class="essayList">
        <!--  推荐文章-->
        <div class="recEssay">
            <Divider class="recDivider">推荐文章</Divider>
            <div class="container">
                <div v-for="lists in 3" class="pb2 pt2 " style="cursor: pointer">
                    <essay-card class="e-list-card" @click.native="toEssay()">
                      <div slot="card-pic" class="slot-pic">
                        <img src="../../assets/img/banner1.jpg" alt="essay-pic">
                      </div>
                        <div slot="title">标题</div>
                        <div slot="desc">内容</div>
                    </essay-card>
                </div>
            </div>
        </div>
        <!--  往期文章-->
        <div class="essayBefore">
            <Divider class="recDivider">往期文章</Divider>
            <ul>
                <li v-for="(lists,index) in test" :key="index" v-if="index < listsNum" >
                    <div class="container pb2 pt2" style="cursor:pointer">
                        <essay-card class="e-list-card" @click.native="toEssay()">
                            <div slot="card-pic" class="slot-pic">
                                <img src="../../assets/img/banner1.jpg" alt="essay-pic">
                            </div>
                            <div slot="title">标题</div>
                            <div slot="desc">内容</div>
                        </essay-card>
                    </div>
                </li>
            </ul>
            <div class="moreLists">
                <span @click="loadMore" class="cp">{{showMoreTitle}}</span>
            </div>
        </div>
    </div>
</template>

<script src="./essayList.js"></script>

<style scoped lang="scss">
    @import "essayList";
</style>
