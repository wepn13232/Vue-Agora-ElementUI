<template>
    <!--管理员导航栏-->
    <div class="adminNav">
                <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span slot="title">大致概况</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-document"></i>
                        <span slot="title">文章管理</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">直播管理</span>
                    </el-menu-item>
                </el-menu>

    </div>
</template>

<script>
    export default {
        name: "adminNav",
            methods: {
                handleOpen(key, keyPath) {
                    console.log(key, keyPath);
                },
                handleClose(key, keyPath) {
                    console.log(key, keyPath);
                }
            }
    }
</script>

<style lang="scss">
    .adminNav{
        height: 100%;
        width: 100%;
         .el-menu{
            height: 100% !important;
        }
    }

</style>
