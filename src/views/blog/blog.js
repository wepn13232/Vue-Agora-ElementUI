export default {
    name: "blog",
    data() {
        return {
            username: '',
            activities: [{
                content: '活动按期开始',
                timestamp: '2018-04-15'
            }, {
                content: '通过审核',
                timestamp: '2018-04-13'
            }, {
                content: '创建成功',
                timestamp: '2018-04-11'
            }]
        }
    },
    methods: {
        getUsername() {
            this.username = sessionStorage.getItem('username');
        }
    },
    mounted() {
        this.getUsername()
    }
}
