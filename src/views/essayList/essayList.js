import essayCard from "@/components/essayCard/essayCard.vue";


export default {
    name: "essayList",
    components: {essayCard},
    data(){
      return{
          listsNum:3,
          test:8,
          showMoreTitle:'点击加载更多'
      }
    },
    methods: {
        toEssay() {
            this.$router.push('/essayInfo')
        },
    //    加载更多
        loadMore(){
          this.listsNum+=3
            if(this.listsNum >= this.test){
                this.showMoreTitle = '已经没有更多了哦！'
            }
        },
    },
    mounted() {

    }
}
