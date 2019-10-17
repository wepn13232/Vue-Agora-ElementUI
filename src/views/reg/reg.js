export default {
    name: "reg",
    data() {
        return {
            form: {
                username: '',
                password: '',
                email: '',
                sex: '',
                address: '',
                roomNum: ''
            },
            //表单验证
            rules: {
                username: [
                    {required: true, message: '请输入用户名', trigger: 'blur'},
                    {min: 2, max: 5, message: '名字长度在2~5位', trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                    {min: 6, max: 11, message: '密码长度在6~11位', trigger: 'blur'}
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
            console.log(this.form.address[0])
        },
        //点击注册
        doReg(regForm) {
            this.$refs[regForm].validate((valid) => {
                if (valid) {
                    this.$message.success('注册成功')
                } else {
                    this.$message.error('注册失败');
                    return false;
                }
            })
        }
    }
}
