export default {
    name: "headerS",
    data() {
        return {
            activeIndex: '1',
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
                setTimeout(()=>{
                    this.$router.push('/')
                },500)
            }
            if (command == 'a') {
                this.$router.push('/personalCenter')
            }
        }
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
