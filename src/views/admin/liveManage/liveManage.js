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
			this.$confirm('是否禁播该主播？', '提示', {
				type: 'warning',
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				center: true
			}).then(() => {
				allUrls.banLive({
					liveStatus: '0',
					username: val.username,
				}, 'post').then(res => {
					return res.json();
				}).then(res => {
					if (+res.status === 200) {
						this.$message.info("已封禁该主播");
						this.getHostInfo();
					} else {
						this.$message.error("封禁失败");
					}
				}).catch(err => {
					console.log(err);
					this.$message.error("封禁出现错误！");
				})
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
		reLive(val) {
			allUrls.banLive({
				liveStatus: '1',
				username: val.username,
			}, 'post').then(res => {
				return res.json();
			}).then(res => {
				if (+res.status === 200) {
					this.$message.success("恢复成功");
					this.getHostInfo();
				} else {
					this.$message.error("恢复失败");
				}
			}).catch(err => {
				console.log(err);
				this.$message.error("恢复出现错误！");
			})
		},
		searchHost() {
			allUrls.getHostFuzzy({
				name: this.input
			}, 'post').then(res => {
				return res.json();
			}).then(res => {
				if (+res.status === 200) {
					this.tableData = res.data;
				} else {
					this.$message.error("获取用户信息失败！");
				}
			}).catch(err => {
				console.log(err);
				this.$message.error("获取用户信息出现错误！");
			})
		}
	},
	mounted() {
		this.getHostInfo();
	},
}
