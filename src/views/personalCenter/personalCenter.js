export default {
    name: "personalCenter",
    inject: ['reload'],
    data() {
        return {
            userInfo: {
                username: "",
                liveNumber: '',
                isUserSelf: false
            }
        }
    },
    methods: {
        getUserInfo() {
            this.userInfo.username = sessionStorage.getItem('username')
        },
        //    跳转至直播间编码申请
        toGetLiveNum() {
            this.$router.push('/liveNum/page1')
        },
        //    获取直播编号
        getLiveNum() {
            this.userInfo.liveNumber = sessionStorage.getItem('liveNum')
        },
        //    判断是否本人用户
        isUser() {
            let _username = sessionStorage.getItem('username');
            this.userInfo.isUserSelf = this.userInfo.username === _username;
                if (!this.userInfo.isUserSelf) {
                    this.$set(this.userInfo,'liveNumber','*******')
                }
        }
    },
    mounted() {
        this.getLiveNum();
        this.getUserInfo();
        this.isUser();
        this.reload()
    }
}
