import * as requirUrls from '../../utils/allUrls'
import da from "element-ui/src/locale/lang/da";

export default {
    name: "reg",
    data() {
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
                    {required: true, message: '请输入用户名', trigger: 'blur'},
                    {min: 4, max: 10, message: '名字长度在4~10位', trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                    {min: 6, max: 11, message: '密码长度在6~11位', trigger: 'blur'}
                ],
                name: [
                    {required: true, message: '请输入昵称', trigger: 'blur'},
                    {min: 2, max: 8, message: '昵称长度在2~8位', trigger: 'blur'}
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
        //TODO 在执行注册之前，异步执行检测是否用户名重复，必须保证用户名唯一
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
                    //执行空间信息动态插入注册信息
                    this._insertSpaceInfo();
                } else {
                    return false;
                }
            })
        },
        //注册动态信息
        _insertSpaceInfo() {
            //获取时间
            let date = new Date();
            let y = date.getFullYear();
            let m = date.getMonth()+1 < 10 ? "0" + (date.getMonth()+1) : date.getMonth()+1;
            let d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            let time = y + "-" + m + "-" + d;
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
        }
    },
    mounted(){},
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
