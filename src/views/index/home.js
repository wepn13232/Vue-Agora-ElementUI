import essayCard from "@/components/essayCard/essayCard.vue";
import personCard from "@/components/personCard/personCard.vue";
import * as allUrls from '../../utils/allUrls.js'


export default {
    name: 'home',
    components: {essayCard, personCard},
    data() {
        return {
            indexPic: {},
            personInfo: {},
            essayInfo: {},
            loding: true
        }
    },
    methods: {
        //获取首页推荐（图片）
        getIndexPic() {
            //加载动画
            const loading = this.$loading({
                lock: true,
                text: "首页推荐加载中，请稍后...",
                spinner: 'el-icon-loading',
                background: 'rgba(0,0,0,0.41)',
                // //自定义加载区域
                // target: document.querySelector('.container-self')
            })
            allUrls.getIndexPicRec('post').then(res => {
                return res.json()
            }).then(data => {
                if (+data.status === 200) {
                    //    请求成功回调
                    this.indexPic = data.data;
                    loading.close();
                } else {
                    //    请求失败回调
                    this.$message.error("获取推荐图片失败");
                    loading.close();
                }
            }).catch(err => {
                console.log(err)
                loading.close();
            })
        },
        //获取首页文章推荐
        getIndexEssay() {
            const loading = this.$loading({
                lock: true,
                text: "文章推荐加载中，请稍后...",
                spinner: 'el-icon-loading',
                background: 'rgba(0,0,0,0.41)',
                // //自定义加载区域
                // target: document.querySelector('.container-self')
            })

            allUrls.getIndexEssay('post').then(res => {
                return res.json();
            }).then(data => {
                if (+data.status === 200) {
                    this.essayInfo = data.data
                    loading.close()
                } else {
                    this.$message.error("获取文章数据失败")
                    loading.close()
                }
            }).catch(err => {
                console.log(err)
                loading.close()
            })
        },
        //获取人物卡片信息
        getTopListPerson() {
            const loading = this.$loading({
                lock: true,
                text: "推荐人物加载中，请稍后...",
                spinner: 'el-icon-loading',
                background: 'rgba(0,0,0,0.41)',
                // //自定义加载区域
                // target: document.querySelector('.container-self')
            })

            allUrls.getToplistPerson("post").then(res => {
                return res.json()
            }).then(data => {
                this.personInfo = data.personInfo
                loading.close()
            }).catch(err => {
                console.log(err)
                loading.close()
            })
        },
        // 跳转至注册页
        toReg() {
            this.$router.push('/register')
        },
        // 跳转至文章内容页
        toEssay(item) {
            this.$router.push({path: '/essayInfo', query: {item: JSON.stringify(item)}})
        },
    },
    mounted() {
        this.getIndexPic();
        this.getIndexEssay();
        this.getTopListPerson();
    }
}
