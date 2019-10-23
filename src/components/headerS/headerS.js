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
        },
    //    地点推荐
        toLocationRec(){
            this.$router.push('/essayList')
        },
        //品牌推荐
        toBrandRec(){
            this.$router.push('/essayList')
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
