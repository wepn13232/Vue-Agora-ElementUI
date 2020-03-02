import * as requirUrls from '../../utils/allUrls'
import * as commonFunc from '../../utils/commonFunc'

export default {
    name: "reg",
    data() {
        //注册用户名自定义校验规则
        const usernameCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else {
                if (value.length < 4) {
                    callback(new Error('用户名长度不能小于4位'));
                } else {
                    this.checkSameUser(value, callback, []);
                }
            }
        };
        const nameCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error("请输入昵称"))
            } else if (value.length < 2 || value.length > 8) {
                callback(new Error("用户昵称长度只能在2~8位"));
            } else {
                this.checkSameName(value, callback, []);
            }
        };
        return {
            form: {
                username: '',
                password: '',
                name: '',
                email: '',
                sex: '',
                address: '',
                appid: '',
            },
            //表单验证
            rules: {
                username: [
                    {required:true},
                    //自定义表单验证规则
                    {validator: usernameCheck, trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                    {min: 6, max: 11, message: '密码长度在6~11位', trigger: 'blur'}
                ],
                name: [
                    {required:true},
                    {validator: nameCheck, trigger: 'blur'}
                ],
                email: [
                    {required: true, message: '请输入邮箱号', trigger: 'blur'},
                    {type: 'email', message: '请输入正确邮箱号', trigger: 'blur'}
                ],
                sex: [
                    {required: true, message: '请选择性别', trigger: 'change'}
                ],
                address: [
                    {required: true, message: '请选择地区', trigger: 'change'}
                ]
            },
            //    次级选择器
            options: [
                {
                    value: 'guangzhou',
                    label: '广州',
                    children: [
                        {
                            value: 'haizhu',
                            label: '海珠',
                        },
                        {
                            value: 'tianhe',
                            label: '天河',
                        },
                        {
                            value: 'yuexiu',
                            label: '越秀',
                        },
                        {
                            value: 'baiyun',
                            label: '白云',
                        },
                        {
                            value: 'panyu',
                            label: '番禺',
                        },
                        {
                            value: 'conghua',
                            label: '从化',
                        },
                        {
                            value: 'zengcheng',
                            label: '增城',
                        },
                    ]
                },
                {
                    value: 'zhanjiang',
                    label: '湛江',
                    children: [
                        {
                            value: 'xiashan',
                            label: '霞山'
                        },
                        {
                            value: 'kaifaqu',
                            label: '开发区'
                        },
                        {
                            value: 'chikan',
                            label: '赤坎'
                        },
                    ]
                },
            ],
        }

    },
    methods: {
        toHome() {
            this.$router.push('/')
        },
        //    次级选择器-存入数据
        handleChange(val) {
            this.form.address = val[1];
        },
        //检查是否有同个用户
        checkSameUser(value, callback, errors) {
            requirUrls.getUserInfo({
                username: this.form.username,
            }, 'post').then(res => {
                return res.json();
            }).then(res => {
                if (+res.status === 200 && res.data.length > 0) {
                    if (res.data[0].username == this.form.username) {
                        errors.push("已存在相同用户！");
                        callback(new Error(errors));
                    }
                } else {
                    callback();
                }
            })
        },
        //检查是否有相同用户昵称
        checkSameName(value, callback, errors) {
            requirUrls.getUserInfoByName({
                name:this.form.name
            }, 'post').then(res => {
                return res.json();
            }).then(res => {
                if (+res.status === 200) {
                    if (res.data.name === this.form.name) {
                        errors.push("已存在相同昵称！");
                        callback(new Error(errors));
                    }
                } else {
                    callback()
                }
            })
        },
        //点击注册
        doReg(regForm) {
            this.$refs[regForm].validate((valid) => {
                if (valid) {
                    requirUrls.doRegister({
                        username: this.form.username,
                        name: this.form.name,
                        password: this.form.password,
                        email: this.form.email,
                        sex: this.form.sex,
                        address: this.form.address
                    }, 'post').then(r => {
                        return r.json();
                    }).then(res => {
                        if (+res.status === 200) {
                            this.$message.success("注册成功！");
                            //执行空间信息动态插入注册信息
                            this._insertSpaceInfo();
                            setTimeout(() => {
                                this.$router.push('/login');
                            }, 800)
                        } else {
                            this.$message.error(res.desc);
                            console.log(res.desc);
                        }
                    }).catch(err => {
                        console.log(err);
                        this.$message.error("注册失败！");
                    });
                } else {
                    return false;
                }
            })
        },
        //注册动态信息
        _insertSpaceInfo() {
            let time = commonFunc.getTime();
            requirUrls.insertSpaceInfo({
                username: this.form.username,
                name: this.form.name,
                date: time,
                content: "在本站注册了账号！~",
            }, 'post').then(res => {
                return res.json();
            }).then(res => {
                if (+res.status === 200) {
                    console.log('注册动态信息插入成功！');
                } else {
                    this.$message.error("注册动态信息插入失败！");
                    console.log("注册动态信息插入失败！")
                }
            }).catch(err => {
                console.log(err);
            })
        },
        //替换空格
        replaceSpace(){
            this.form.name =  this.form.name.replace(/\s+/g,"");
        },
        //替换非法字符
        replaceIllegal(){
            this.form.password = this.form.password.replace(/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,'');
        }
    },
    mounted() {
    },
    watch: {
        username() {
            this.form.username = this.form.username.replace(/[\W]/g, '');
        }
    },
    computed: {
        username() {
            return this.form.username
        }
    }
}
