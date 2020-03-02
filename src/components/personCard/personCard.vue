<template>
    <div class="person-card">
        <!--banner图片-->
        <div class="banner">
            <!--头像-->
            <div class="logo">
                <div>
                    <el-avatar :size="50" :src="userLogo"></el-avatar>
                </div>
            </div>
        </div>

        <!--内容-->
        <div class="person-content">
            <!--  人物名字-->
            <div class="person-name">
                <slot name="name"></slot>
            </div>
            <!--人物简介-->
            <div class="person-intro">
                <slot name="intro"></slot>
            </div>
        </div>
    </div>
</template>

<script src="./personCard.js"></script>

<style scoped lang="scss">
    @import "personCard.scss";
</style>
