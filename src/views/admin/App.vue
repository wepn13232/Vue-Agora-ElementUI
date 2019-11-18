<template>
    <div class="app">
        <el-container>
            <!--导航栏-->
            <el-aside>
                <admin-nav v-if="reloadNav"></admin-nav>
            </el-aside>
            <el-main class="p0m0">
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import adminNav from "@/components/adminNav/adminNav";


    export default {
        name: "App",
        components: {adminNav},
        provide() {
            return {reloadNav: this.reloadAdminNav}
        },
        data() {
            return {
                reloadNav: true
            }
        },
        methods: {
            reloadAdminNav() {
                this.reloadNav = false;
                this.$nextTick(() => {
                    this.reloadNav = true;
                })
            },
        },
        destroyed() {
            sessionStorage.setItem('defaultActive', '1');
        }
    }
</script>

<style scoped lang="scss">
    .p0m0 {
        padding: 0;
        margin: 0;
    }

</style>
