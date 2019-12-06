import * as allUrls from '../../utils/allUrls.js'

export default {
    name: "essayInfo",
    data() {
        return {
            essayId: '',
            essayInfo: {},
            value: '',  //打分文章推荐星级
            isRateValue: 4,  //文章等级分数
            dialogVisible: false,
        }
    },
    methods: {
        getEssayInfo(val) {
            allUrls.getIndexEssay('post', val).then(res => {
                return res.json();
            }).then(data => {
                if (+data.status === 200) {
                    let res = data.data.filter((res) => {
                        return res.id == val;
                    });
                    this.essayInfo = res[0];
                } else {
                    this.$message.error("获取文章信息失败");
                }
            }).catch(err => {
                this.$message.error(err);
                console.log(err)
            })
        },
        //长时间浏览提示打分
        openDialog() {
            this.dialogVisible = true;
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
