export default {
    name: "headerS",
    data() {
        return {
            activeIndex: '1',
            searchInfo: '',
            selectType: 'username',
            userInfo: {
                username: ''
            }
        }
    },
    methods: {
        handleCommand(command) {
            if (command == 'b') {
                this.userInfo.username = '';
                sessionStorage.clear();
                this.$message.success('注销成功！');
                setTimeout(() => {
                    this.$router.push('/')
                }, 500)
            }
            if (command == 'a') {
                this.$router.push({path: '/personalCenter', query: {username: this.userInfo.username}})
            }
        },
        //文章推荐
        toLocationRec() {
            this.$router.push('/essayList')
        },
        //管理员页面
        toAdminIndex() {
            this.$router.push('/admin/index')
        },
        //搜索
        toSearch() {
            if (this.selectType == 'username') {
                this.$router.push({path: '/personalCenter', query: {username: this.searchInfo}})
            } else {
                this.$message.info("搜索的是文章");
            }
        },
    },
    computed: {
        username() {
            this.userInfo.username = sessionStorage.getItem('username')
        }
    },
    watch: {
        username: function () {

        }
    },
}
