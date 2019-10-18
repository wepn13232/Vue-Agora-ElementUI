export default {
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.essayInfo = JSON.parse(to.query.item)
            console.log(vm.essayInfo)
        })
    },
    name: "essayInfo",
    data() {
        return {
            essayInfo: {
                essay: {
                    title: '',
                    content: ''
                }
            }
        }
    },
    methods: {},
    mounted() {
        this.$toTop.toTop()
    }
}
