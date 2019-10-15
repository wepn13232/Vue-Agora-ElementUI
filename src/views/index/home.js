import essayCard from "@/components/essayCard/essayCard.vue";
import personCard from "@/components/personCard/personCard.vue";
import * as allUrls from '../../utils/allUrls.js'


export default {
    name: 'home',
    components: {essayCard, personCard},
    data() {
        return {
            personInfo: {}
        }
    },
    methods: {
        //获取人物卡片信息
        getTopListPerson() {
            allUrls.getToplistPerson("post").then(res => {
                return res.json()
            }).then(data => {
                this.personInfo = data.personInfo
            }).catch(err => {
                console.log(err)
            })
        },
        //    跳转至登录页
        toLogin() {
            this.$router.push('/login')
        }
    },
    mounted() {
        this.getTopListPerson();
    }
}
