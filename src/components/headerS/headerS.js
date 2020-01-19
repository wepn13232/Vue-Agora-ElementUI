
export default {
    name: "headerS",
    data() {
        return {
            activeIndex: '1',
            searchInfo: '',
            selectType: 'username',
            userInfo: this.$store.state.userData,
        }
    },
    methods: {
        handleCommand(command) {
            if (command == 'b') {
                this.userInfo.username = '';
                this.$cookies.remove('userInfoCookies');
                sessionStorage.clear();
                this.$message.success('注销成功！');
                setTimeout(() => {
                    this.$router.push('/')
                }, 500)
            }
            if (command == 'a') {
                this.$router.push({path: '/personalCenter', query: {username: this.userInfo.name}})
            }
        },
        //首页
        toHome() {
            this.$router.push('/')
        },
        //文章推荐
        toLocationRec() {
            this.$router.push('/essayList')
        },
        //管理员页面
        toAdminIndex() {
            this.$router.push('/admin/index');
        },
        //照片墙展示
        toPicShow() {
            this.$router.push('/picShow');
        },
        //搜索
        toSearch() {
            if (this.selectType == 'username') {
                this.$router.push({path: '/personalCenter', query: {username: this.searchInfo}})
            } else {
                this.$router.push({path: '/essayList', query: {essayName: this.searchInfo}})
            }
        },
    },
    mounted() {

    },
}
