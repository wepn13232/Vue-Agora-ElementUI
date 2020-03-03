import fa from "element-ui/src/locale/lang/fa";

export default {
	name: "resetPas",
	data() {
		return {
			//表格
			confirmForm: {
				username: '',
				name: '',
				email: '',
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
				question: {required: true, message: "请输入答案", trigger: 'blur'}
			},
			formRules2: {
				password: {required: true, message: "请填写密码", trigger: 'blur'},
				pasAgain: {required: true, message: "请再次填写密码", trigger: 'blur'}
			},
			isConfirm: false
		}
	},
	methods: {
		//确认信息
		confirmAccount() {
			this.$refs['confirmForm'].validate(val => {
				if (val) {
					this.isConfirm = true;
					this.$notify({
						title: "已确认",
						message: "你可以重置你的密码了",
						type: "success",
						offset: 70
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

				} else {
					return false;
				}
			})
		}
	}
}
