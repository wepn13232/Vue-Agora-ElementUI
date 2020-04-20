import * as allUrls from '../../../utils/allUrls'

export default {
    name: "editPage",
    inject: ['reloadView'],
    data() {
        return{
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
            showTips: true,
            dialogVisible: false,
            picUrl: '', //头像
            changeUrl:'',//需要更改的照片
            hasPicUrl:false,
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
                case '1':
                    return '男';
                case '2':
                    return '女';
                default :
                    return '暂未录入性别';
            }
        },
    },
    methods: {
        //判断是不是本人用户
        isUser() {
            let query_username = this.$route.query.username;
            let _username = JSON.parse(sessionStorage.getItem('userInfo')).username;
            if (_username != query_username) {
                this.$message.error("禁止修改别人的账号噢~");
                this.$router.push({path: '/personalCenter', query: {username: _username}});
                return false;
            }else{
                this.getUserInfo();
            }
        },
        getUserInfo() {
            let _username = this.$route.query.username;
            //    调用查询用户信息
            allUrls.getUserInfo({
                username: _username
            }, 'post').then(res => {
                return res.json();
            }).then(data => {
                if (+data.status === 200) {
                    this.userInfo = data.data[0];
                } else {
                    this.$message.error("用户信息查询失败");
                }
            }).catch(err=>{
                console.log(err);
                this.$message.error("获取用户信息失败！");
            });
            this.getAppid();
        },
        //获取Appid
        getAppid(){
            allUrls.getAppid({
                username: this.$route.query.username,
            }, 'post').then(res => {
                return res.json();
            }).then(res => {
                if (+res.status === 200 || +res.status === 201) {
                    this.$set(this.userInfo, 'appid', res.data.appid);
                } else {
                    this.$message.error("获取appid失败！");
                }
            }).catch(err => {
                console.log(err);
                this.$message.error("获取appid出错！");
            })
        },
        //返回上一页
        goBack() {
            this.$router.push({path: '/personalCenter', query: {username: this.userInfo.username}})
        },
        //确认修改
        confirmEdit() {
            allUrls.editUserInfo({
                userSum: this.userInfo.userSum,
                address: this.userInfo.address,
                email: this.userInfo.email,
                appid: this.userInfo.appid,
                username: this.userInfo.username,
                picUrl:this.changeUrl || this.userInfo.picUrl,
            }, 'post').then(res => {
                return res.json();
            }).then(res => {
                if (+res.status === 200) {
                    this.$message.success("修改成功！需重新登录。");
                    this.userInfo.username = '';
                    this.$cookies.remove('userInfoCookies');
                    sessionStorage.clear();
                    this.$router.push('/login')
                } else {
                    this.$message.error("修改失败！请确认头像地址是否过长或其他原因。");
                }
            }).catch(err => {
                console.log(err);
                this.$message.error("接口错误！");
            })
        },
        //    次级选择器-存入数据
        handleChange(val) {
            this.userInfo.address = val[1];
        },
        //切换头像
        _openDialog() {
            this.dialogVisible = true;
        },
        //修改密码
        toChangePas(){
            this.$router.push('/resetPas')
        },
        //取消修改头像
        cancelChange(){
            this.changeUrl = '';
            this.dialogVisible = false;
        }
    },
    mounted() {
        this.isUser();
        // this.getUserInfo();

    },
    watch: {
        $route() {
            this.reloadView()
        }
    }
}
