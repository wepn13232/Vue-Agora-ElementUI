import * as allUrls from '../../../utils/allUrls.js'

export default {
    name: "liveManage",
    data() {
        return {
            input: '',
            loadLiveForm: true,
            tableData: []
        }
    },
    methods: {
        //禁播
        deleteRow(val) {
            console.log(val.id);
            this.$confirm('是否删除该主播？', '提示', {
                type: 'warning',
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                center: true
            }).then(() => {
                this.$message.success("删除成功!");
            }).catch(() => {

            })
        },
        //获取主播信息
        getHostInfo() {
            allUrls.adminGetHost({}, 'post').then(res => {
                return res.json();
            }).then(data => {
                if (+data.status === 200) {
                    this.tableData = data.data;
                    this.loadLiveForm = false;
                } else {
                    this.$message.error("获取主播信息失败");
                }
            }).catch(err => {
                this.$message.error(err);
                console.log(err);
            })
        },
        //恢复直播
        reLive(val){

        },
    },
    mounted() {
        this.getHostInfo();
    },
}
