<template>
    <div id="app" class="app">
        <el-backtop target=".app"></el-backtop>
        <header-s v-if="hasUser"></header-s>
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
        data() {
            return {
                username: '',
                hasUser: true
            }
        },
        provide() {
            return {
                reload: this.reload
            }
        },
        methods: {
            reload() {
                this.hasUser = false;
                this.$nextTick(() => {
                    this.hasUser = true;
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .app {
        height: 100vh;
        overflow-y: scroll;
    }
</style>
