import essayCard from "@/components/essayCard/essayCard.vue";
import * as allUrls from '../../utils/allUrls.js'


export default {
    name: "essayList",
    components: {essayCard},
    inject: ['reloadView', 'reload'],
    data() {
        return {
            loadingEssay: true,
            essayName: '',
            listsNum: 3,
            test: 8,
            showMoreTitle: '点击加载更多',
            recEssayInfo: '',
            essayInfo: '',
        }
    },
    methods: {
        //点击文章
        toEssay(val) {
            this.$router.push({path: '/essayInfo', query: {id: val}})
        },
        //新建文章
        toAddEssay() {
            this.$router.push('/addEssay')
        },
        // 加载更多
        loadMore() {
            this.listsNum += 3
            if (this.listsNum >= this.test) {
                this.showMoreTitle = '已经没有更多了哦！'
            }
        },
        //随机文章推荐
        randomEssay(a, b) {
            return Math.random() > .5 ? -1 : 1;
        },
        //获取文章信息
        getEssay(val) {
            allUrls.getEssay({
                title: val,
            }, 'post').then(res => {
                return res.json();
            }).then(data => {
                if (+data.status === 200) {
                    //往期文章
                    this.essayInfo = data.data;
                    this.loadingEssay = false;
                } else {
                    this.$message.error("获取文章信息错误！");
                    return false;
                }
            }).catch(err => {
                console.log(err);
                this.$message.error("获取文章信息错误！");
                return false;
            });
        },
    },
    mounted() {
        //this.reload();
        this.essayName = this.$route.query.essayName;
        if (this.essayName) {
            this.getEssay(this.essayName);
        } else {
            this.getEssay();
        }
    },
    watch: {
        $route() {
            this.reloadView();
        }
    }
}
