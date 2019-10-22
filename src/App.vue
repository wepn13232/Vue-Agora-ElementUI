<template>
    <div id="app" class="app">
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
        mounted(){
        }
    }
</script>

<style lang="scss" scoped>

</style>
