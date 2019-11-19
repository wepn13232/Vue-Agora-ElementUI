import * as allUrls from '../../../utils/allUrls.js'

export default {
    name: "essayManager",
    data() {
        return {
            input: '',
            loadEssayForm: true,
            tableData: []
        }
    },
    methods: {
        deleteRow(val) {
            console.log(val.id)
        },
        getEssayData() {
            allUrls.getIndexEssay('post').then(res => {
                return res.json();
            }).then(data => {
                if (+data.status === 200) {
                    this.tableData = data.data;
                    this.loadEssayForm = false;
                } else {
                    this.$message.error("获取文章列表失败");
                }
            }).catch(err => {
                this.$message.error(err);
                console.log(err);
            })
        }
    },
    mounted() {
        this.getEssayData()
    },
}
