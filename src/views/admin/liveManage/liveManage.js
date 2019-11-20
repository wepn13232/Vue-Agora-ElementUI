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
        deleteRow(val) {
            console.log(val.id)
        },
        //获取主播信息
        getHostInfo() {
            allUrls.getHostInfo('post').then(res => {
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
        }
    },
    mounted() {
        this.getHostInfo();
    },
}
