import * as allUrls from '@/utils/allUrls'

export default {
    name: "personalCenter",
    inject: ['reload', 'reloadView'],
    data() {
        return {
            userLoading: true,
            dialogVisible: false,
            loadingText: '用户查询中...',
            //用户信息
            userInfo: {},
            isUserSelf: false,
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
                        if (_username === data.data[i].name) {
                            this.userInfo = data.data[i];
                            _this.userLoading = false;
                        } else {
                            setTimeout(() => {
                                this.loadingText = '可能没有这个用户哦，建议重新查询~';
                            }, 4000)
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
            this.isUserSelf = this.userInfo.username === _username;
            if (!this.isUserSelf) {
                this.$set(this.userInfo, 'appid', '*******')
            }
        },
        //点击创建直播间按钮
        createLive() {
            this.dialogVisible = true;
            this.roomForm.name = this.userInfo.name;
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
        //点击博客跳转
        toBlog() {
            this.$router.push({path: '/blog', query: {name: this.userInfo.name}})
        },
        //点击跳转个人信息编辑
        toEdit() {
            this.$router.push({path: '/editPage', query: {username: this.userInfo.username}})
        }
    },
    filters: {
        //地区转译
        transAddress(val) {
            switch (val) {
                case 'kaifaqu':
                    return '湛江 / 开发区';
                case 'haizhu':
                    return '广州 / 海珠区';
                case 'tianhe':
                    return '广州 / 天河区';
                case 'yuexiu':
                    return '广州 / 越秀区';
                case 'baiyun':
                    return '广州 / 白云区';
                case 'panyu':
                    return '广州 / 番禺区';
                case 'conghua':
                    return '广州 / 从化区';
                case 'zengcheng':
                    return '广州 / 增城区';
                case 'xiashan':
                    return '湛江 / 霞山区';
                case 'chikan':
                    return '湛江 / 赤坎区';
                default:
                    return '地区暂未录入';
            }
        },
        //性别转译
        transSex(val) {
            switch (val) {
                case 'male':
                    return '男';
                case 'female':
                    return '女';
                default :
                    return '暂未录入性别';
            }
        }
    },
    mounted() {
        this.getUserInfo();
        // this.isUser();
        this.reload()
    },
    watch: {
        $route() {
            this.reloadView()
        }
    }
}
