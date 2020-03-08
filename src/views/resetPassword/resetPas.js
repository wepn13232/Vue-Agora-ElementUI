import * as allUrls from '../../utils/allUrls'

export default {
	name: "resetPas",
	data() {
		//自定义二次密码校验规则
		var passwordValidate = (rule, value, callback) => {
			if (value === '') {
				callback(new Error("请填写密码"));
			} else if (value !== this.resetForm.password) {
				callback(new Error("两次密码不一致！"));
			} else {
				callback();
			}
		};

		return {
			//表格
			confirmForm: {
				username: '',
				name: '',
				email: '',
				questionTitle: '',
				questionContent: '',
			},
			resetForm: {
				password: '',
				pasAgain: ''
			},
			formRules: {
				username: {required: true, message: "请输入注册时用户名", trigger: 'blur'},
				name: {required: true, message: "请输入注册时昵称", trigger: 'blur'},
				email: [{required: true, message: "请输入注册时邮箱", trigger: 'blur'},
					{type: 'email', message: '请输入正确邮箱号', trigger: 'blur'}],
				questionTitle: {required: true, message: "请选择安全问题", trigger: 'change'},
				questionContent: {required: true, message: "请填写答案", trigger: 'blur'}
			},
			formRules2: {
				password: {required: true, message: "请填写密码", trigger: 'blur'},
				pasAgain: {required: true, validator: passwordValidate, trigger: 'blur'}
			},
			isConfirm: false
		}
	},
	methods: {
		//确认信息
		confirmAccount() {
			this.$refs['confirmForm'].validate(val => {
				if (val) {
					allUrls.userConfirm({
						username: this.confirmForm.username,
						name: this.confirmForm.name,
						email: this.confirmForm.email,
						questionT: +this.confirmForm.questionTitle,
						questionC: this.confirmForm.questionContent
					}, 'post').then(res => {
						return res.json();
					}).then(res => {
						if (+res.status === 200) {
							this.isConfirm = true;
							this.$notify({
								title: "已确认",
								message: "你可以重置你的密码了",
								type: "success",
								offset: 70
							})
						} else {
							this.$notify({
								title: "错误",
								message: "用户信息不正确，请确认是否为自己账户",
								type: "error",
								offset: 70
							})
						}
					}).catch(err => {
						console.log(err);
						this.$message.error("确认用户信息接口错误！");
					})
				} else {
					return false;
				}
			})
		},
		goBack() {
			this.$router.go(-1)
		},
		//确认修改密码
		confirmReset() {
			this.$refs['resetForm'].validate(val => {
				if (val) {
					allUrls.resetPassword({
						password: this.resetForm.password,
						username:this.confirmForm.username
					}, 'post').then(res => {
						return res.json();
					}).then(res => {
						if (+res.status === 200) {
							this.$message.success("修改成功");
							this.$router.push('/login')
						} else {
							this.$message.error("修改失败")
						}
					}).catch(err => {
						console.log(err);
						this.$message.error("修改出现错误");
					})
				} else {
					return false;
				}
			})
		}
	}
}
