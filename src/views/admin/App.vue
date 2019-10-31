<template>
    <div class="app">
        <el-container>
            <!--导航栏-->
            <el-aside>
                <admin-nav></admin-nav>
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
        components: {adminNav}
    }
</script>

<style scoped lang="scss">
    .p0m0{
        padding: 0;
        margin: 0;
    }

</style>
