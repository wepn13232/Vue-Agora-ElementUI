<template>
    <!--文章卡片-->
    <div class="e-card">
        <!--图片-->
        <div class="img">
            <!--图片插槽-->
            <slot name="card-pic">
                <img src="../../assets/img/banner1.jpg" alt="essay-pic">
            </slot>
        </div>
        <!--    内容-->
        <div class="card-content">

        </div>
    </div>
</template>

<script src="./essayCard.js"></script>

<style scoped lang="scss">
    @import "essayCard";
</style>

