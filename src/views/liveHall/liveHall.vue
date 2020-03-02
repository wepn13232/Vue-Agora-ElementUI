<template>
    <div class="liveHall">
        <div class="container">
            <!--直播大厅标题-->
            <div class="liveTitle">
                <Divider><h5>直播大厅</h5></Divider>
            </div>
            <!--    头像-->
            <el-row :gutter="24">
                <el-col :md="4" :sm="6" :xs="6" v-for="(lists,index) in hostInfo" :key="index" v-if="index < personNum">
                    <div class="liveAvatar" @click="toLive(lists.username)">
                        <el-avatar :size="100" :src="lists.picUrl"></el-avatar>
                        <h6>{{lists.name}}</h6>
                    </div>
                </el-col>
            </el-row>
            <div class="checkMore">
                <span @click="morePerson">{{showMoreTitle}}</span>
            </div>

        </div>
    </div>
</template>

<script src="./liveHall.js"></script>

<style scoped lang="scss">
    @import "liveHall";
</style>
