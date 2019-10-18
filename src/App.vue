<template>
    <div id="app" class="app">
        <el-backtop target=".app"></el-backtop>
        <header-s></header-s>
        <router-view/>
        <footer-s></footer-s>
    </div>
</template>

<script>
    import headerS from "@/components/headerS/headerS.vue";
    import footerS from "@/components/footerS/footerS.vue";

    export default {
        name: "App",
        components: {headerS, footerS},
    }
</script>

<style lang="scss" scoped>
    .app {
        height: 100vh;
        overflow-y: scroll;
    }
</style>
