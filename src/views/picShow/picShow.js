import cardPic from "../../components/cardPic/cardPic";
import * as requireUrls from '../../utils/allUrls'

export default {
    name: "picShow",
    components: {cardPic},
    inject: ['reload'],
    data() {
        return {
            userInfo: '', //用户信息
            showTips: true, //文字提示
            cardList: [],
            interval: '', //检测图片加载循环
            loading: true,
            loadMoreText: '<　加载更多　>',
            defaultLoadPic: 4, //默认加载图片数
            reloadMoreFresh: true,
            canLoad: true,
            dialogVisible: false, //dialog弹窗
            //弹窗data
            dialogData: {},
            postPicDialog: false, //post照片弹窗
            //添加照片表格
            postForm: {
                src: '', //照片
                content: '', //内容
            },
            rules: {
                src: {required: true, message: "请填写一张在线图片地址", trigger: 'blur'}
            }
        }
    },
    methods: {
        getPics() {
            requireUrls.getPicShows({}, 'post').then(res => {
                return res.json();
            }).then(res => {
                if (+res.status === 200) {
                    this.cardList = res.data;
                    this.getHeight();
                } else {
                    this.$message.error("获取图片出现错误");
                }
            }).catch(err => {
                console.log(err);
                this.$message.error("获取图片出现错误");
            })
        },
        //初始监听图片高度
        getHeight() {
            let isLoad = false;
            this.interval = setInterval(() => {
                if (!isLoad) {
                    let div = document.getElementsByClassName('grid')[0];
                    let img = div.getElementsByClassName('el-image');
                    for (let i in img) {
                        if (img[i].offsetHeight <= 0) {
                            isLoad = false;
                            return false;
                        } else {
                            isLoad = true;
                        }
                    }
                }
                if (isLoad) {
                    console.log('全部加载完');
                    clearInterval(this.interval);
                    this.resizeGrid();
                    this.loading = false;
                }
            }, 500)
        },
        //初始化瀑布流
        resizeGrid() {
            $('.grid').masonry({
                gutter: 22,
                itemSelector: '.grid-item'
            });
        },
        //加载更多图片
        loadMorePic() {
            this.loading = true;
            this.defaultLoadPic += 4;
            this.reloadMoreFresh = false;
            this.$nextTick(() => {
                this.reloadMoreFresh = true;
                this.getHeight();
            });
            if (this.defaultLoadPic == this.cardList.length) {
                this.loadMoreText = '<　没有更多了哦～　>';
                this.canLoad = false;
            }
            setTimeout(() => {
                document.body.scrollTop = document.documentElement.scrollTop = 200;
            }, 600)
        },
        handleClose() {
            this.dialogVisible = false;
        },
        openDialog(item) {
            this.dialogVisible = true;
            this.dialogData = item;
        },
        clickSub() {
            this.dialogData.isSub = true;
            console.log(this.dialogData.isSub);
            //    TODO 这里应该操作 执行接口 对具体的进行点赞
        },
        //打开Post照片弹窗
        openPostDialog() {
            if (this.userInfo) {
                this.postPicDialog = true;
            } else {
                this.$message.warning("请先登录再Post哦~！");
            }
        },
        getUserInfo() {
            let session = sessionStorage.getItem('userInfo');
            if (session) {
                this.userInfo = JSON.parse(session);
            }
        },
        //post照片
        _insertPic() {
            this.$refs['postForm'].validate(val => {
                if (val) {
                    requireUrls.insertPic({
                        src: this.postForm.src,
                        content: this.postForm.content,
                        username: this.userInfo.username,
                        name: this.userInfo.name
                    }, 'post').then(res => {
                        return res.json();
                    }).then(res => {
                        if (+res.status === 200) {
                            this.$message.success("Post成功！");
                            this.insertSpaceInfo();
                            this.postPicDialog = false;
                        } else {
                            this.$message.error("Post照片失败了~！");
                        }
                    }).catch(err => {
                        console.log(err);
                        this.$message.error("Post照片出错");
                    })
                } else {
                    this.$message.warning("请填写必要信息");
                }
            })
        },
        //添加空间动态信息
        insertSpaceInfo() {
            //获取时间
            let date = new Date();
            let y = date.getFullYear();
            let m = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            let d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            let time = y + "-" + m + "-" + d;
            requireUrls.insertSpaceInfo({
                username: this.userInfo.username,
                name: this.userInfo.name,
                date: time,
                content: "在照片墙上传了一张照片~",
            }, 'post').then(res => {
                return res.json();
            }).then(res => {
                if (+res.status === 200) {
                    console.log("添加照片空间动态成功")
                } else {
                    this.$message.error("添加照片空间动态出错！")
                }
            }).catch(err => {
                console.log(err);
                this.$message.error("添加照片空间动态出错！")
            })
        },
    },
    mounted() {
        this.getUserInfo();
        this.getPics();
        this.reload();
    },
}
