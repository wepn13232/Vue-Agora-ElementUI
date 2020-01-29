import * as allUrls from '../../utils/allUrls.js'

export default {
    name: "essayInfo",
    data() {
        return {
            essayId: '',
            essayInfo: {},
            value: 0,  //打分文章推荐星级
            isRateValue: 0,  //文章等级分数
            dialogVisible: false,
        }
    },
    methods: {
        //获取用户评分等级
        getUserScore(val) {
            allUrls.getScore('post', {}).then(res => {
                return res.json();
            }).then(data => {
                if (+data.status === 200) {
                    let res = data.data.filter((res) => {
                        return res.user == val;
                    });
                    //获取有多少个评分
                    let scoreLength = res[0].score.length;
                    let sum = 0;
                    for (let i in res[0].score) {
                        sum = sum + (+res[0].score[i]);
                    }
                    this.isRateValue = sum / scoreLength;
                }
            }).catch(err => {
                console.log(err);
            })
        },
        //获取文章信息
        getEssayInfo(val) {
            return new Promise((resolve, reject) => {
                allUrls.getEssay({
                    id: val,
                }, 'post').then(res => {
                    return res.json();
                }).then(data => {
                    if (+data.status === 200) {
                        this.essayInfo = data.data[0];
                        resolve();
                    } else {
                        this.$message.error("获取文章信息失败");
                    }
                }).catch(err => {
                    console.log(err);
                    this.$message.error("获取文章信息出错！");
                })
            }).then(() => {
                //获取用户评分
                //this.getUserScore(this.essayInfo.user);
            })
        },
        //长时间浏览提示打分
        openDialog() {
            this.dialogVisible = true;
        },
        //确认打分
        confirmScore() {
            if (this.value !== 0) {
                this.$message.info(`打分为${this.value}`);
                this.dialogVisible = false;
            } else {
                this.$message.error("不可以打0分喔");
            }
        },
    },
    mounted() {
        this.essayId = this.$route.query.id;
        this.getEssayInfo(this.essayId);
        this.$toTop.toTop();
        //浏览一分钟后提示打分
        setTimeout(() => {
            this.openDialog()
        }, 60000);
    }
}
