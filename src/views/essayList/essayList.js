import essayCard from "@/components/essayCard/essayCard.vue";
import * as allUrls from '../../utils/allUrls.js'
import da from "element-ui/src/locale/lang/da";


export default {
    name: "essayList",
    components: {essayCard},
    inject: ['reloadView','reload'],
    data() {
        return {
            loadingEssay: true,
            essayName: '',
            listsNum: 3,
            test: 8,
            showMoreTitle: '点击加载更多',
            recEssayInfo: [],
            essayInfo: []
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
        //获取文章信息(推荐、往期)
        getEssay() {
            allUrls.getIndexEssay('post').then(res => {
                return res.json();
            }).then(data => {
                if (+data.status === 200) {
                    //往期文章
                    this.essayInfo = data.data;
                    //打乱顺序(推荐文章)
                    this.recEssayInfo = data.data.sort(this.randomEssay);
                    this.loadingEssay = false;
                } else {
                    this.$message.error("获取文章信息错误！");
                }
            }).catch(err => {
                this.$message.error(err);
                console.log(err);
            })
        },
    },
    mounted() {
        this.reload();
        this.essayName = this.$route.query.essayName;
        this.getEssay();
    },
    watch: {
        $route() {
            this.reloadView();
        }
    }
}
