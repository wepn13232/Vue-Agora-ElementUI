<template>
    <div class="liveHall">
        <div class="container">
            <!--&lt;!&ndash;推荐主播&ndash;&gt;-->
            <!--<div class="recPerson">-->
            <!--    &lt;!&ndash;推荐主播-标题&ndash;&gt;-->
            <!--    <div class="recPerTitle">-->
            <!--        <Divider><h5>推荐主播</h5></Divider>-->
            <!--    </div>-->
            <!--    &lt;!&ndash;推荐6人&ndash;&gt;-->
            <!--    <div class="recPerContent">-->
            <!--        <el-row :gutter="24">-->
            <!--            <el-col :md="4" :sm="6" :xs="6" v-for="(lists,index) in 6" :key="index">-->
            <!--                <div class="liveAvatar" @click="toLive">-->
            <!--                    <el-avatar :size="100"-->
            <!--                               src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>-->
            <!--                    <h6>名字</h6>-->
            <!--                </div>-->
            <!--            </el-col>-->
            <!--        </el-row>-->
            <!--    </div>-->
            <!--</div>-->
            <!--直播大厅标题-->
            <div class="liveTitle">
                <Divider><h5>直播大厅</h5></Divider>
            </div>
            <!--    头像-->
            <el-row :gutter="24">
                <el-col :md="4" :sm="6" :xs="6" v-for="(lists,index) in hostInfo" :key="index" v-if="index < personNum">
                    <div class="liveAvatar" @click="toLive(lists.username)">
                        <el-avatar :size="100"
                                   src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
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
