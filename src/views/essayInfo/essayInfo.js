import * as allUrls from '../../utils/allUrls.js'

export default {
    name: "essayInfo",
    data() {
        return {
            essayId: '',
            essayInfo: {}
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
        }
    },
    mounted() {
        this.essayId = this.$route.query.id;
        this.getEssayInfo(this.essayId);
        this.$toTop.toTop()
    }
}
