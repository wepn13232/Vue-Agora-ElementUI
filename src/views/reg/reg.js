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
                    {required: true, message: '请选择性别', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        toHome() {
            this.$router.push('/')
        },
        //    注册
        doReg() {

        }
    }
}
