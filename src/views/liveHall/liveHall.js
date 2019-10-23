export default {
    name: "liveHall",
    data() {
        return {
            //默认显示12个主播
            personNum: 6,
            test: 20,
            showMoreTitle: '点击加载更多'
        }
    },
    methods: {
        //点击查看更多，一次性加6个
        morePerson() {
            this.personNum += 6;
            if (this.personNum >= this.test) {
                this.showMoreTitle = '已经没有更多啦！'
            }
        },
        toLive() {
            let liveNumber = sessionStorage.getItem('liveNum');
            if (!liveNumber) {
                this.$message.warning("请先去个人中心申请授权码才可以进入直播间哦~")
            } else {
                this.$router.push('/liveRoom')
            }
        }
    }
}
