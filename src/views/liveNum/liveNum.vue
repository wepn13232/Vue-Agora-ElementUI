<template>
    <div class="liveNum">
        <div class="container">
            <!--步骤条-->
            <div class="stepsDiv">
                <live-step v-model="stepActive"></live-step>
            </div>
            <!--    内容-->
            <router-view @getStepActive="getStepActive"/>
        </div>
    </div>
</template>

<script src="./liveNum.js"></script>

<style scoped lang="scss">
    @import "liveNum";
</style>
