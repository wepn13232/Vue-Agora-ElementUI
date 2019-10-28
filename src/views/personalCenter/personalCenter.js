import * as allUrls from '@/utils/allUrls'

export default {
    name: "personalCenter",
    inject: ['reload', 'reloadView'],
    data() {
        return {
            userLoading: true,
            dialogVisible: false,
            //用户信息
            userInfo: {
                username: "",
                liveNumber: '',
                email: '',
                sex: '',
                address: '',
                userSum: '',
                isUserSelf: false
            },
            //直播间信息
            roomForm: {
                channelName: '',
                username: '',
                channelSum: ''
            },
            //直播间信息表单填写规则
            rules: {
                channelName: [
                    {required: true, message: "请填写直播间标题", trigger: 'blur'},
                    {min: 1, max: 18, message: "标题长度只能在1~18位", trigger: 'blur'}],
            }
        }
    },
    methods: {
        getUserInfo() {
            let _username = this.$route.query.username;
            let _this = this;
            //    调用查询用户信息
            allUrls.allUserInfo('post', _username).then(res => {
                return res.json();
            }).then(data => {
                if (+data.status === 200) {
                    for (let i = 0; i < data.data.length; i++) {
                        if (_username === data.data[i].username) {
                            _this.userInfo.username = data.data[i].username;
                            _this.userInfo.email = data.data[i].email;
                            _this.userInfo.sex = data.data[i].sex;
                            _this.userInfo.address = data.data[i].address;
                            _this.userInfo.liveNumber = data.data[i].appid;
                            _this.userInfo.userSum = data.data[i].userSum;
                            _this.userLoading = false;
                        }
                    }
                } else {
                    this.$message.error("用户信息查询失败");
                }
            }).then(() => {
                this.isUser();
            })
        },
        //    跳转至直播间编码申请
        toGetLiveNum() {
            this.$router.push('/liveNum/page1')
        },
        //    判断是否本人用户
        isUser() {
            let _username = sessionStorage.getItem('username');
            this.userInfo.isUserSelf = this.userInfo.username === _username;
            if (!this.userInfo.isUserSelf) {
                this.$set(this.userInfo, 'liveNumber', '*******')
            }
        },
        //点击创建直播间按钮
        createLive() {
            this.dialogVisible = true;
            this.roomForm.username = this.userInfo.username;
        },
        //创建直播间
        toCreateLiveRoom(roomForm) {
            this.$refs[roomForm].validate(valid => {
                if (valid) {
                    //替换空格
                    this.roomForm.channelSum = this.roomForm.channelSum.replace(/\n/g, '<br/>')
                    sessionStorage.setItem('channelName', this.roomForm.channelName);
                    sessionStorage.setItem('channelSum', this.roomForm.channelSum);
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
        },
        //点击博客跳转
        toBlog() {
            this.$router.push({path: '/blog', query: {username: this.userInfo.username}})
        }
    },
    filters: {},
    mounted() {
        this.getUserInfo();
        // this.isUser();
        this.reload()
    },
    watch:{
        $route(){
            this.reloadView()
        }
    }
}
