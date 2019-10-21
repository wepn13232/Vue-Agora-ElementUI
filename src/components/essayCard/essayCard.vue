<template>
    <!--文章卡片-->
    <div class="e-card">
        <!--图片-->
        <div class="img">
            <!--图片插槽-->
            <slot name="card-pic" ></slot>
        </div>
        <!--    内容-->
        <div class="card-content">
          <!--  标题-->
            <div class="title"><h5><slot name="title"></slot></h5></div>
            <!--内容简述-->
            <div class="desc"><slot name="desc"></slot></div>
        </div>
    </div>
</template>

<script src="./essayCard.js"></script>

<style scoped lang="scss">
    @import "essayCard";
</style>

