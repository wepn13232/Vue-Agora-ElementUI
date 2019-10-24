export default {
    name: "personalCenter",
    inject: ['reload'],
    data() {
        return {
            dialogVisible: false,
            //用户信息
            userInfo: {
                username: "",
                liveNumber: '',
                isUserSelf: false
            },
            //直播间信息
            roomForm: {
                channelName: '',
                username: '',
                channelSum:''
            },
            //直播间信息表单填写规则
            rules: {
                channelName: [{required: true, message: "请填写直播间标题", trigger: 'blur'}],
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
                this.$set(this.userInfo, 'liveNumber', '*******')
            }
        },
        createLive() {
            this.dialogVisible = true;
            this.roomForm.username = this.userInfo.username;
        },
        //创建直播间
        toCreateLiveRoom(roomForm) {
            this.$refs[roomForm].validate(valid => {
                if (valid) {
                    sessionStorage.setItem('roomTitle',this.roomForm.channelName);
                    this.$router.push({path: '/liveRoom', query: {userType: 'host'}})
                } else {
                    return false;
                }
            })
        },
        handleClose(done) {
            this.$confirm('放弃创建吗？')
                .then(_ => {
                    done();
                })
                .catch(_ => {
                });
        }
    },
    mounted() {
        this.getLiveNum();
        this.getUserInfo();
        this.isUser();
        this.reload()
    }
}
