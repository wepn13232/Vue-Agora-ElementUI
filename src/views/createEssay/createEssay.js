import E from 'wangeditor'
import * as requireUrls from '../../utils/allUrls'
import fa from "element-ui/src/locale/lang/fa";

var content = '';
export default {
    name: "createEssay",
    data() {
        return {
            username: '',
            name: '',
            essayForm: {
                title: '',
                pic: '',
                essayType: '',
                OTitle:'',
            },
            contenText: '',
            options: [
                {
                    value: '1',
                    label: '旅游类'
                }, {
                    value: '2',
                    label: '攻略类'
                }, {
                    value: '3',
                    label: '地点分享类'
                }, {
                    value: '4',
                    label: '摄影分享类'
                }],
            rules: {
                pic: [{required: true, message: "请填写封面图片地址", trigger: 'blur'}],
                essayType: [{required: true, message: "请选择文章类型", trigger: 'change'}],
                title: [{required: true, message: "请填写文章标题", trigger: 'blur'},
                    {min: 4, max: 15, message: "标题限制在4~15个字", trigger: 'blur'}],

            },
        }
    },
    methods: {
        submitForm(val) {
            //获取时间
            let date = new Date();
            let y = date.getFullYear();
            let m = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            let d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            let time = y + "-" + m + "-" + d;
            this.$refs[val].validate((valid) => {
                if (valid) {
                    return new Promise((resolve, reject) => {
                        requireUrls.insertEssay({
                            title: this.essayForm.title,
                            username: this.username,
                            name: this.name,
                            date: time,
                            content: content,
                            essayType: this.essayForm.essayType,
                            url: this.essayForm.pic,
                            OTitle:this.essayForm.OTitle,
                        }, 'post').then(res => {
                            return res.json();
                        }).then(res => {
                            if (+res.status === 200) {
                                this.$message.success("发布成功！");
                                resolve();
                            } else {
                                this.$message.error("发布文章时发生错误！");
                                return false;
                            }
                        }).catch(err => {
                            console.log(err);
                            this.$message.error("发布文章时发生错误！");
                            return false;
                        });
                    }).then(() => {
                        requireUrls.insertSpaceInfo({
                            username: this.username,
                            name: this.name,
                            date: time,
                            content: '在本站发布了一篇文章~！---'+this.essayForm.title,
                        }, 'post').then(res => {
                            return res.json();
                        }).then(res => {
                            if (+res.status === 200) {
                                this.$router.push('/essayList');
                            } else {
                                this.$message.error("插入空间动态信息失败！");
                                return false;
                            }
                        }).catch(err => {
                            console.log(err);
                            this.$message.error("插入空间动态信息失败！");
                            return false;
                        })
                    });
                } else {
                    this.$message.error("请务必填写必填项!");
                    return false;
                }
            })
        },
        getUserInfo() {
            let _user = JSON.parse(sessionStorage.getItem('userInfo'));
            this.username = _user.username;
            this.name = _user.name;
        },
    },
    mounted() {
        let phoneEditor = new E('websiteEditorElem');
        // 富文本
        phoneEditor.onchange = function () {
            content = this.$txt.html();
        };
        phoneEditor.create();
        this.getUserInfo();
    }
    ,
}
