import * as allUrls from '@/utils/allUrls'

export default {
    name: "editPage",
    inject: ['reloadView'],
    data() {
        return {
            //用户信息
            userInfo: {},
            //    次级选择器
            options: [
                {
                    value: 'guangzhou',
                    label: '广州',
                    children: [
                        {
                            value: 'haizhu',
                            label: '海珠',
                        },
                        {
                            value: 'tianhe',
                            label: '天河',
                        },
                        {
                            value: 'yuexiu',
                            label: '越秀',
                        },
                        {
                            value: 'baiyun',
                            label: '白云',
                        },
                        {
                            value: 'panyu',
                            label: '番禺',
                        },
                        {
                            value: 'conghua',
                            label: '从化',
                        },
                        {
                            value: 'zengcheng',
                            label: '增城',
                        },
                    ]
                },
                {
                    value: 'zhanjiang',
                    label: '湛江',
                    children: [
                        {
                            value: 'xiashan',
                            label: '霞山'
                        },
                        {
                            value: 'kaifaqu',
                            label: '开发区'
                        },
                        {
                            value: 'chikan',
                            label: '赤坎'
                        },
                    ]
                },
            ],
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
    methods: {
        //判断是不是本人用户
        isUser() {
            let query_username = this.$route.query.username;
            let _username = sessionStorage.getItem('username');
            if (_username != query_username) {
                this.$message.error("禁止修改别人的账号噢~");
                this.$router.push({path: '/editPage', query: {username: _username}});
                return false;
            }
        },
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
                            _this.userInfo = data.data[i];
                            _this.userLoading = false;
                        } else {
                            setTimeout(() => {
                                this.loadingText = '可能没有这个用户哦，建议重新查询~';
                            }, 3000)
                        }
                    }
                } else {
                    this.$message.error("用户信息查询失败");
                }
            })
        },
        //返回上一页
        goBack() {
            this.$router.push({path: '/personalCenter', query: {username: this.userInfo.name}})
        },
        //确认修改
        confirmEdit() {
            this.$message.success("修改成功");
        },
        //    次级选择器-存入数据
        handleChange() {
            console.log(this.userInfo.address[1])
        },
    },
    mounted() {
        this.isUser();
        this.getUserInfo();

    },
    watch: {
        $route() {
            this.reloadView()
        }
    }
}
