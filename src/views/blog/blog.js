import * as requireUrls from '../../utils/allUrls'

export default {
    name: "blog",
    inject: ['reloadView'],
    data() {
        return {
            username: '',
            name: '',
            activities: [], //空间动态信息
        }
    },
    methods: {
        //获取用户控件动态信息
        getSpaceInfo() {
            this.username = this.$route.query.username;
            requireUrls.getSapceInfo({
                username:this.username,
            }, 'post').then(res => {
                return res.json();
            }).then(res => {
                if (+res.status === 200) {
                    this.activities = res.data;
                    this.name = res.data[0].name;
                } else {
                    console.log(res.desc);
                    this.$message.error("获取空间信息失败！");
                }
            }).catch(err => {
                console.log(err);
            })
        }
    },
    mounted() {
        this.getSpaceInfo()
    },
    watch: {
        $route() {
            this.reloadView();
        }
    }
}
