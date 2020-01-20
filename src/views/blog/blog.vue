<template>
    <div class="blog">
        <!--banner头部-->
        <div class="banner">
            <!--banner图-->
            <div class="banner">
                <!--个人头像-->
                <div class="avatar">
                    <el-avatar :size="80"
                               src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    <h5>{{name}}</h5>
                </div>
            </div>
        </div>
        <!--内容部分-->
        <div class="content container">
            <div class="block">
                <el-timeline :reverse="false">
                    <el-timeline-item v-for="(activity, index) in activities"
                                      :key="index"
                                      :timestamp="activity.date"
                                      placement="top">
                        <el-card>
                            <h6>{{activity.content}}</h6>
                            <br/>
                            <p>{{activity.name}} 发表于 {{activity.date}}</p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
    </div>
</template>

<script src="./blog.js"></script>

<style scoped lang="scss">
    @import "blog";
</style>
