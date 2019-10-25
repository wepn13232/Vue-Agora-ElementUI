import AgoraRTC from 'agora-rtc-sdk'
import fa from "element-ui/src/locale/lang/fa";
import roomTabs from "@/components/roomTabs/roomTabs.vue";

//设置直播参数
var rtc = {
    client: null,
    joined: false,
    published: false,
    localStream: null,
    remoteStreams: [],
    params: {}
};
//设置个人参数
var option = {
    appID: "ec7820719525489e80fa257f7b4c1062",
    channel: "TextChannelName",
    uid: null,
    token: null
}

export default {
    name: "liveRoom",
    components: {roomTabs},
    data() {
        return {
            screenLoading: true,
            userInfo: {
                username: '',
                userType: '',
                liveNumber: '',
                userSum: '你知道的'
            },
            //房间信息
            roomInfo: {
                channelName: '',
                channelSum: '',
                username: ''
            }
        }
    },
    methods: {
        getUserInfo() {
            this.userInfo.username = sessionStorage.getItem('username');
            this.userInfo.liveNumber = sessionStorage.getItem('liveNum');
            this.roomInfo.channelName = sessionStorage.getItem('channelName');
            this.roomInfo.channelSum = sessionStorage.getItem('channelSum');
        },
        //============主播创建直播客户端=============
        createHostLive() {
            let _this = this;
            //直播互动，建议模式为live,若为通信则为rtc
            rtc.client = AgoraRTC.createClient({mode: "live", codec: "h264"});
            //初始化
            rtc.client.init(option.appID, function () {
                console.log("客户端初始化完成");
                //设置角色=>"host"为主播,"audience"为观众
                rtc.client.setClientRole("host");
                //加入频道
                rtc.client.join(option.token ? option.token : null, option.channel, _this.userInfo.username, function (uid) {
                    _this.$message.success("创建成功，欢迎您，" + uid);
                    rtc.params.uid = uid;
                    //角色为主播，发布本地流
                    rtc.localStream = AgoraRTC.createStream({
                        streamID: rtc.params.uid,
                        audio: true,
                        video: true,
                        screen: false,
                    });
                    //角色为主播，初始化本地流
                    rtc.localStream.init(function () {
                        rtc.localStream.play('localStream');
                        console.log("初始化本地流成功！");
                        _this.screenLoading = false;
                        //发布
                        rtc.client.publish(rtc.localStream, function (err) {
                            _this.$message.error("发布本地流失败！");
                            console.error(err);
                        })
                    }, function (err) {
                        //检查是否有摄像头、麦
                        _this.$message.error("初始化本地流失败，请检查摄像头和麦是否正常！")
                        console.error("init local stream failed ", err);
                    })
                }, function (err) {
                    _this.$message.error("加入频道失败" + err);
                    console.log(err)
                })
            }, (err) => {
                this.$message.error("直播间初始化失败，请检查授权码是否正确");
                console.error(err);
            });
        },
        //============观众加入直播间=================
        creatAudLive() {
            let _this = this;
            //直播互动，建议模式为live,若为通信则为rtc
            rtc.client = AgoraRTC.createClient({mode: "live", codec: "h264"});
            //初始化
            rtc.client.init(option.appID, function () {
                console.log("客户端初始化完成");
                //设置角色=>"host"为主播,"audience"为观众
                rtc.client.setClientRole("audience");
                //加入频道
                rtc.client.join(option.token ? option.token : null, option.channel, _this.userInfo.username, function (uid) {
                    _this.$message.success("加入频道成功，欢迎您，" + uid);
                    rtc.params.uid = uid;
                    //监听远程流
                    rtc.client.on("stream-added", function (evt) {
                        console.log("++++++++++监听到主播流")
                        var remoteStream = evt.stream;
                        var id = remoteStream.getId();
                        if (id !== rtc.params.uid) {
                            rtc.client.subscribe(remoteStream, function (err) {
                                _this.$message.error("监听远程流失败" + err)
                            })
                        }
                    });
                    //监听远程订阅流
                    rtc.client.on("stream-subscribed", function (evt) {
                        console.log("++++++++++订阅主播流")
                        var remoteStream = evt.stream;
                        var id = remoteStream.getId();
                        // Add a view for the remote stream.
                        // addView(id);
                        // Play the remote stream.
                        remoteStream.play('localStream2');
                    })
                }, function (err) {
                    _this.$message.error("加入频道失败" + err);
                    console.log(err)
                })
            }, (err) => {
                this.$message.error(err);
                console.error(err);
            });

        },
        //离开直播间
        leaveLive() {
            rtc.client.leave(function () {
                rtc.localStream.stop();
                rtc.localStream.close();
                while (rtc.remoteStreams.length > 0) {
                    var stream = rtc.remoteStreams.shift();
                    var id = stream.getId();
                    stream.stop();
                    removeView(id);
                }
                console.log("离开频道成功");
            }, function (err) {
                console.log("离开频道失败" + err);
            })
        },
        //下播
        cutLive() {
            let _this = this;
            rtc.client.leave(function () {
                rtc.localStream.stop();
                rtc.localStream.close();
                while (rtc.remoteStreams.length > 0) {
                    var stream = rtc.remoteStreams.shift();
                    var id = stream.getId();
                    stream.stop();
                    removeView(id);
                }
                console.log("离开频道成功");
                _this.$message.info('下播成功~');
                _this.$router.push('/personalCenter')
            }, function (err) {
                console.log("离开频道失败" + err);
            })
        },
        //获取用户类型，判断开播设置
        getUserType() {
            let _userType = this.$route.query.userType;
            if (_userType == 'host') {
                this.userInfo.userType = 'host';
                if (!this.userInfo.liveNumber) {
                    this.$message.warning("你暂未申请直播授权码，还不可以直播哦");
                    this.$router.push('/personalCenter');
                    return false;
                } else {
                    let channelTitle = sessionStorage.getItem('channelName');
                    if (!channelTitle) {
                        this.$message.warning("你还没填写直播间信息，请填写再开播哦");
                        this.$router.push('/personalCenter')
                    } else {
                        // 主播创建直播间
                        this.createHostLive()
                    }
                }
            } else {
                this.userInfo.userType = 'audience';
                //    观众方式加入直播间
                this.creatAudLive()
            }
        },
        //点击头像进入个人信息中心
        toPersonCenter(){
            this.$router.push({path:'/personalCenter',query:{username:this.userInfo.username}})
        }
    },
    beforeDestroy() {
        this.leaveLive()
    },
    mounted() {
        this.getUserInfo();
        this.getUserType();
    }
}
