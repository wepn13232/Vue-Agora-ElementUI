<template>
    <div class="picShow">
        <div class="container">
            <!--瀑布流-->
            <div class="grid">
                <div class="grid-item" v-for="(item,index) in cardList" :key="index">
                    <!--瀑布流卡片-->
                    <card-pic :cardSrc="item.src" :cardUser="item.user" :cardContent="item.content"></card-pic>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./picShow.js"></script>

<style scoped lang="scss">
    @import "picShow";
</style>

