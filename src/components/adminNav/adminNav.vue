<template>
    <!--管理员导航栏-->
    <div class="adminNav">
        <el-menu
            :default-active="defaultActive || '1'"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1" @click="toAdminIndex">
                <i class="el-icon-menu"></i>
                <span slot="title">大致概况</span>
            </el-menu-item>
            <el-menu-item index="2" @click="toEssayManage">
                <i class="el-icon-document"></i>
                <span slot="title">文章管理</span>
            </el-menu-item>
            <el-menu-item index="3" @click="toLiveManage">
                <i class="el-icon-setting"></i>
                <span slot="title">直播管理</span>
            </el-menu-item>
        </el-menu>

    </div>
</template>

<script>
    export default {
        name: "adminNav",
        inject: ['reloadNav'],
        data() {
            return {
                defaultActive: ''
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            toAdminIndex() {
                sessionStorage.setItem('defaultActive', '1');
                this.reloadNav();
                this.$router.push('/admin/index');
            },
            //前往文章管理页
            toEssayManage() {
                sessionStorage.setItem('defaultActive', '2');
                this.reloadNav();
                this.$router.push('/admin/essayManage');
            },
            //前往直播管理页
            toLiveManage() {
                sessionStorage.setItem('defaultActive', '3');
                this.reloadNav();
                this.$router.push('/admin/essayManage');
            },
        },
        mounted() {
            //获取当前导航栏目
            this.defaultActive = sessionStorage.getItem('defaultActive');
        },
    }
</script>

<style lang="scss">
    .adminNav {
        height: 100%;
        width: 100%;

        .el-menu {
            height: 100% !important;
        }
    }

</style>
