import essayCard from "@/components/essayCard/essayCard.vue";

export default {
    name: "essayList",
    components: {essayCard},
    methods: {
        toEssay() {
            this.$router.push('/essayInfo')
        },
    },
    mounted() {
    }
}
