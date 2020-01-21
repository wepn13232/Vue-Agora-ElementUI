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
                //加密密码
                let Base64 = require('js-base64').Base64;
                let _password = Base64.encode(this.form.password);
                //调取用户信息接口查询信息
                let userData = {
                    username: this.form.username,
                    password: _password, //加密后的密码
                };
                let _this = this;
                allUrls.doLogin('post', userData).then(res => {
                    return res.json();
                }).then(data => {
                    if (+data.status === 200) {
                        //sessionStroge中不能直接存进对象，需Stringfy进去，取出来在parse成对象
                        let _data = JSON.stringify(data.data)
                        this.$store.state.userData = data.data;
                        sessionStorage.setItem('userInfo', _data);
                        //保存至cookies-userInfo,先设置10分钟过期
                        this.$cookies.set('userInfoCookies', _data, 60 * 10);
                        this.$router.push('/')
                    } else {
                        console.log(data.desc)
                        this.$message.error(data.desc);
                        _this.$refs.loginRef.innerHTML = "账号密码错误，请重试";
                    }
                }).catch(err => {
                    console.log(err);
                    this.$message.error("登录请求错误！");
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
