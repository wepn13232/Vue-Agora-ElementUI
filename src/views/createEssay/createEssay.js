import E from 'wangeditor'

export default {
    name: "createEssay",
    data() {
        return {
            essayForm: {
                title: '',
                pic: '',
                essayType: '',
                content: ''
            },
            options: [
                {
                    value: 'lvyou',
                    label: '旅游类'
                }, {
                    value: 'gonglue',
                    label: '攻略类'
                }, {
                    value: 'didian',
                    label: '地点分享类'
                }, {
                    value: 'sheying',
                    label: '摄影分享类'
                }],
            rules: {
                pic: [{required: true, message: "请填写封面图片地址", trigger: 'blur'}],
                essayType: [{required: true, message: "请选择文章类型", trigger: 'change'}],
                title: [{required: true, message: "请填写文章标题", trigger: 'blur'},
                    {min: 4, max: 15, message: "标题限制在4~15个字", trigger: 'blur'}],

            }
        }
    },
    methods: {
        submitForm(val) {
            this.$refs[val].validate((valid) => {
                if (valid) {
                    //TODO 发布文章的时候还要获取本地时间，插入数据库（2019-XX-XX），执行空间动态添加接口（总共两个接口）
                    this.$message.success("发表成功！");
                } else {
                    this.$message.error("请务必填写必填项!");
                    return false;
                }
            })
        }
    },
    mounted() {
        let phoneEditor = new E('websiteEditorElem');
        // 富文本
        phoneEditor.onchange = function () {
            this.content = this.$txt.html();
        }
        phoneEditor.create()
    }
    ,
}
