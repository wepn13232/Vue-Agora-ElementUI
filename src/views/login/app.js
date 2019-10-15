export default {
    name: "login",
    data(){
        return{
            form:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        doLogin(){
            this.$message.success("登录")
        },
        toHome(){
            this.$router.push("/")
        }
    }
}
