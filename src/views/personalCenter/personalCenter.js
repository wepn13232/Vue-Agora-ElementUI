export default {
    name: "personalCenter",
    inject: ['reload'],
    data() {
        return {
            userInfo: {
                username: ''
            }
        }
    },
    methods: {
        getUserInfo() {
            this.userInfo.username = sessionStorage.getItem('username')
        }
    },
    mounted() {
        this.getUserInfo();
        this.reload()
    }
}
