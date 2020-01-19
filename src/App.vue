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
                userInfo: [],
            }
        },
        provide() {
            return {
                reload: this.reload,
                reloadView: this.reloadView
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
            },
            getUserInfoCookies() {
                this.userInfo = this.$cookies.get('userInfoCookies');
                if (this.userInfo) {
                    sessionStorage.setItem('userInfo', JSON.stringify(this.userInfo));
                    //sessionStorage.setItem('username', this.userInfo.username);
                    //sessionStorage.setItem('name', this.userInfo.name);
                    //sessionStorage.setItem('email', this.userInfo.email);
                    //sessionStorage.setItem('sex', this.userInfo.sex);
                    //sessionStorage.setItem('address', this.userInfo.address);
                    //sessionStorage.setItem('liveNum', this.userInfo.appid);
                    //sessionStorage.setItem('userSum', this.userInfo.userSum);
                    this.$store.state.userData = this.userInfo;
                } else {
                    sessionStorage.clear();
                }
            },
        },
        mounted() {
            this.getUserInfoCookies();
        }
    }

</script>

<style lang="scss" scoped>

</style>




