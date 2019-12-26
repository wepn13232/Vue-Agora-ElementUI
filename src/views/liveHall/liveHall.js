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
    inject:['reload'],
    methods: {
        //点击查看更多，一次性加6个
        morePerson() {
            this.personNum += 6;
            if (this.personNum >= this.test) {
                this.showMoreTitle = '已经没有更多啦！'
            }
        },
        toLive() {
            this.$router.push({path: '/liveRoom', query: {userType: 'audience'}})
        }
    },
    mounted(){
        this.reload();
    }
}
