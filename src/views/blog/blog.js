import * as requireUrls from '../../utils/allUrls'

export default {
	name: "blog",
	inject: ['reloadView'],
	data() {
		return {
			activities: [], //空间动态信息
			userInfo: '', //用户信息
		}
	},
	methods: {
		//获取用户空间动态信息
		getSpaceInfo() {
			let username = this.$route.query.username;
			requireUrls.getSapceInfo({
				username: username,
			}, 'post').then(res => {
				return res.json();
			}).then(res => {
				if (+res.status === 200) {
					this.activities = res.data;
					this.name = res.data[0].name;
				} else {
					console.log(res.desc);
					this.$message.error("获取空间信息失败！");
				}
			}).catch(err => {
				console.log(err);
			})
		},
		//获取用户资料
		getUserInfo() {
			let username = this.$route.query.username;
			requireUrls.getUserInfo({
				username: username,
			}, 'post').then(res => {
				return res.json();
			}).then(res => {
				if (+res.status === 200) {
					this.userInfo = res.data[0];
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
		this.getUserInfo();
		this.getSpaceInfo();
	},
	watch: {
		$route() {
			this.reloadView();
		}
	}
}
