<template>
    <div class="picShow" v-loading="loading">
        <div class="container">
            <!--瀑布流-->
            <div class="grid" v-if="reloadMoreFresh">
                <div class="grid-item" v-for="(item,index) in cardList" :key="index" v-if="index<defaultLoadPic">
                    <!--瀑布流卡片-->
                    <card-pic :cardSrc="item.src" :cardUser="item.user" :cardContent="item.content"></card-pic>
                </div>
            </div>
            <div class="loadMore">
                <span @click="loadMorePic">{{loadMoreText}}</span>
            </div>
        </div>
    </div>
</template>

<script src="./picShow.js"></script>

<style scoped lang="scss">
    @import "picShow";
</style>

