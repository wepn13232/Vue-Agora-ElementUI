export default {
    name: "login",
    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    inject: ['reload'],
    methods: {
        doLogin() {
            if (this.form.username == '' || this.form.password == '') {
                this.$message.error('账号或密码不能为空！')
            } else {
                sessionStorage.setItem('username', this.form.username)
                this.reload();
                this.$router.go(-1)
            }
        },
        //正则替换空格
        replaceSpace() {
            this.form.username = this.form.username.replace(/\s+/g, "");
            this.form.password = this.form.password.replace(/\s+/g, "");
        },
        toHome() {
            this.$router.push("/")
        }
    }
}
