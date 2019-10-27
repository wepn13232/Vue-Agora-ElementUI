import * as allUrls from '@/utils/allUrls'

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
                //调取用户信息接口查询信息
                let userData = {
                    username: this.form.username,
                    password: this.form.password
                };
                let _this = this;
                allUrls.allUserInfo('post', userData).then(res => {
                    return res.json();
                }).then(data => {
                    if (+data.status === 200) {
                        for (let i = 0; i < data.data.length; i++) {
                            if (userData.username === data.data[i].username && userData.password === data.data[i].password) {
                                sessionStorage.setItem('username', data.data[i].username);
                                sessionStorage.setItem('email', data.data[i].email);
                                sessionStorage.setItem('sex', data.data[i].sex);
                                sessionStorage.setItem('address', data.data[i].address);
                                sessionStorage.setItem('appid', data.data[i].appid);
                                sessionStorage.setItem('userSum', data.data[i].userSum);
                                this.$router.push('/')
                                break;
                            } else {
                                _this.$refs.loginRef.innerHTML = "账号密码错误，请重试";
                            }
                        }
                    } else {
                        this.$message.error("查询用户信息失败");
                    }
                }).catch(err => {
                    console.log(err)
                })
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
