import essayCard from "@/components/essayCard/essayCard.vue";
import personCard from "@/components/personCard/personCard.vue";
import * as allUrls from '../../utils/allUrls.js'


export default {
    name: 'home',
    inject: ['reload'],
    components: {essayCard, personCard},
    data() {
        return {
            indexPic: {},
            personInfo: [],
            essayInfo: {},
            loading1: false
        }
    },
    methods: {
        //获取首页推荐（图片）、
        getIndexPic() {
            this.loading1 = true
            allUrls.getIndexPicRec('post').then(res => {
                return res.json()
            }).then(data => {
                if (+data.status === 200) {
                    //    请求成功回调
                    this.indexPic = data.data;
                    this.loading1 = false;
                } else {
                    //    请求失败回调
                    this.$message.error("获取推荐图片失败");
                }
            }).catch(err => {
                console.log(err)
            })
        },
        //获取首页文章推荐
        getIndexEssay() {
            allUrls.getIndexEssay('post').then(res => {
                return res.json();
            }).then(data => {
                if (+data.status === 200) {
                    this.essayInfo = data.data
                } else {
                    this.$message.error("获取文章数据失败")
                }
            }).catch(err => {
                console.log(err)
            })
        },
        //获取人物卡片信息
        getTopListPerson() {
            allUrls.allUserInfo("post").then(res => {
                return res.json();
            }).then(data => {
                this.personInfo = data.data;
            }).catch(err => {
                console.log(err);
            })
        },
        //点击推荐人物
        toPersonalCenter(val) {
            this.$router.push({path: '/personalCenter', query: {username: val}})
        },
        // 跳转至注册页
        toReg() {
            this.$router.push('/register')
        },
        // 跳转至文章内容页
        toEssay(val) {
            this.$router.push({path: '/essayInfo', query: {id: val}})
        },
        //跳转至“更多文章”
        toMoreEssay() {
            this.$router.push('/essayList')
        },
    },
    mounted() {
        this.reload();
        this.getIndexPic();
        this.getIndexEssay();
        this.getTopListPerson();
    }
}
