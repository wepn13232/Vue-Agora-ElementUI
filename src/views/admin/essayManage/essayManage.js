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
            console.log(val.id);
            this.$confirm('是否删除该文章？', '提示', {
                type: 'warning',
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                center: true
            }).then(() => {
                allUrls.deleteEssay({
                    id: val.id,
                }, 'post').then(res => {
                    return res.json();
                }).then(res => {
                    if (+res.status === 200) {
                        this.$message.success("删除成功！");
                        this.getEssayData();
                    } else {
                        this.$message.error("删除失败！");
                    }
                }).catch(err => {
                    console.log(err);
                    this.$message.error("删除出现错误！");
                })
            }).catch(() => {

            })
        },
        //获取文章列表
        getEssayData() {
            allUrls.getEssay({}, 'post').then(res => {
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
        },
        //搜索文章
        searchEssay() {
            this.loadEssayForm = true;
            allUrls.getEssay({
                title: this.input,
            }, 'post').then(res => {
                return res.json();
            }).then(res => {
                if (+res.status === 200) {
                    this.tableData = res.data;
                    this.loadEssayForm = false;
                } else {
                    this.$message.error("获取文章信息失败！");
                }
            }).catch(err => {
                console.log(err);
                this.$message.error("获取文章信息出错！");
            })
        },
    },
    mounted() {
        this.getEssayData()
    },
}
