<template>
    <div id="app" class="app">
        <header-s v-if="hasUser"></header-s>
        <router-view v-if="reloadV"/>
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
                hasUser: true,
                reloadV: true,
            }
        },
        provide() {
            return {
                reload: this.reload,
                reloadView:this.reloadView
            }
        },
        methods: {
            reload() {
                this.hasUser = false;
                this.$nextTick(() => {
                    this.hasUser = true;
                })
            },
            reloadView() {
                this.reloadV = false;
                this.$nextTick(() => {
                    this.reloadV = true;
                })
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>

</style>
