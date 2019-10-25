<template>
    <div class="roomTabs">
        <el-tabs type="border-card">
            <el-tab-pane label="直播间简介"><slot name="channelSum"></slot></el-tab-pane>
            <el-tab-pane label="主播介绍"><slot name="userSum"></slot></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script src="./roomTabs.js"></script>

<style  lang="scss">
    @import "roomTabs";
</style>
