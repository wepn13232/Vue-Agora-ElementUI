import * as allUrls from '../../utils/allUrls'

export default {
    name: "liveHall",
    data() {
        return {
            //默认显示12个主播
            personNum: 6,
            test: 0,
            showMoreTitle: '点击加载更多',
            hostInfo: '', //直播大厅主播信息
        }
    },
    inject: ['reload'],
    methods: {
        //点击查看更多，一次性加6个
        morePerson() {
            this.personNum += 6;
            if (this.personNum >= this.test) {
                this.showMoreTitle = '已经没有更多啦！'
            }
        },
        toLive(val) {
            this.$router.push({path: '/liveRoom', query: {userType: 'audience',hostName:val}})
        },
        //获取主播信息
        getHostInfo() {
            allUrls.getHostInfo({}, 'post').then(res => {
                return res.json();
            }).then(res => {
                if (+res.status === 200) {
                    this.hostInfo = res.data;
                    this.test = res.data.length;
                    if (this.personNum >= this.test){
                        this.showMoreTitle = '已经没有更多啦！'
                    }
                } else {
                    this.$message.error("获取主播信息失败！");
                }
            }).catch(err => {
                console.log(err);
                this.$message.error("获取主播信息出错！");
            })
        },
    },
    mounted() {
        this.getHostInfo();
    }
}
