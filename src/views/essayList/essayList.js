import essayCard from "@/components/essayCard/essayCard.vue";


export default {
    name: "essayList",
    components: {essayCard},
    data(){
      return{
          listsNum:'3'
      }
    },
    methods: {
        toEssay() {
            this.$router.push('/essayInfo')
        },
    //    加载更多
        loadMore(){
          this.listsNum+=3
        },
    },
    mounted() {

    }
}
