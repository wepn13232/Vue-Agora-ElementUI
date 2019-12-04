import AgoraRTC from 'agora-rtc-sdk'
import AgoraRTM from 'agora-rtm-sdk'
import fa from "element-ui/src/locale/lang/fa";
import roomTabs from "@/components/roomTabs/roomTabs.vue";
import * as allUrls from '@/utils/allUrls'

//设置直播参数
var rtc = {
    client: null,
    joined: false,
    published: false,
    localStream: null,
    remoteStreams: [],
    params: {}
};
//设置个人参数(默认)
var option = {
    appID: "ec7820719525489e80fa257f7b4c1062",
    channel: "TextChannelName",
    uid: null,
    token: null
};
//聊天室配置
var rtm = {
    client: null,
    channel: null,
}


export default {
    name: "liveRoom",
    components: {roomTabs},
    data() {
        return {
            //发送的消息框内容
            chatInfo: '',
            //聊天内容总览
            chatScreenLive: [],
            screenLoading: true,
            sendInterval: false,
            //循环清弹幕
            displayInertval: '',
            //循环清除聊天池
            clearChatInfo: '',
            //弹幕
            barrage: [],
            //个人信息
            userInfo: {
                username: '',
                userType: '',
                liveNumber: '',
                userSum: '',
                name: ''
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
        //获取用户信息
        getUserInfo() {
            //正常情况是从直播信息表里面拿到用户名（或者从url中）
            this.userInfo.username = sessionStorage.getItem('username');
            this.userInfo.name = sessionStorage.getItem('name');
            this.userInfo.liveNumber = sessionStorage.getItem('liveNum');
            let _this = this;
            //拿到用户信息名之后，调用用户信息表接口，拿取用户信息（个人简介）
            this.$nextTick(() => {
                allUrls.allUserInfo('post', _this.userInfo.username).then(res => {
                    return res.json();
                }).then(data => {
                    if (+data.status === 200) {
                        for (let i = 0; i < data.data.length; i++) {
                            if (data.data[i].username === _this.userInfo.username) {
                                _this.userInfo.userSum = data.data[i].userSum;
                            }
                        }
                    }
                })
            });
            this.roomInfo.channelName = sessionStorage.getItem('channelName');
            this.roomInfo.channelSum = sessionStorage.getItem('channelSum');
        },
        //============主播创建直播客户端=============
        createHostLive() {
            let _this = this;
            //直播互动，建议模式为live,若为通信则为rtc
            rtc.client = AgoraRTC.createClient({mode: "live", codec: "h264"});
            //初始化
            rtc.client.init(this.userInfo.liveNumber, function () {
                console.log("客户端初始化完成");
                //设置角色=>"host"为主播,"audience"为观众
                rtc.client.setClientRole("host");
                //=======加入频道=======
                rtc.client.join(null, option.channel, _this.userInfo.username, function (uid) {
                    _this.$message.success("创建成功，欢迎您，" + _this.userInfo.name);
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
        createAudLive() {
            let _this = this;
            //直播互动，建议模式为live,若为通信则为rtc
            rtc.client = AgoraRTC.createClient({mode: "live", codec: "h264"});
            //初始化
            rtc.client.init(option.appID, function () {
                console.log("客户端初始化完成");
                //设置角色=>"host"为主播,"audience"为观众
                rtc.client.setClientRole("audience");
                //加入频道
                rtc.client.join(null, option.channel, option.uid ? _this.userInfo.username : null, function (uid) {
                    if (!_this.userInfo.username) {
                        _this.$message.success("加入频道成功，欢迎您，" + uid);
                    } else {
                        _this.$message.success("加入频道成功，欢迎您，" + _this.userInfo.name);
                    }
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
                _this.$router.push({path: '/personalCenter', query: {username: _this.userInfo.name}})
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
                    this.$router.go(-1);
                    return false;
                } else {
                    let channelTitle = sessionStorage.getItem('channelName');
                    if (!channelTitle) {
                        this.$message.warning("你还没填写直播间信息，请填写再开播哦");
                        this.$router.go(-1)
                    } else {
                        // 主播创建直播间
                        this.createHostLive();
                        this.loginInChat();

                    }
                }
            } else {
                this.userInfo.userType = 'audience';
                //    观众方式加入直播间
                this.createAudLive();
                this.loginInChat()

            }
        },
        //登录聊天频道
        loginInChat() {
            rtm.client = AgoraRTM.createInstance(option.appID);
            //监听状态
            rtm.client.on('ConnectionStateChanged', (newState, reason) => {
                console.log('on connection state changed to ' + newState + ' reason: ' + reason);
            });
            //登录聊天频道
            rtm.client.login({token: null, uid: this.userInfo.username}).then(() => {
                rtm.channel = rtm.client.createChannel(option.appID);
                rtm.channel.join().then(() => {
                    /* 加入频道成功的处理逻辑 */
                    this.$message.success("成功加入聊天室");
                    //监听聊天室
                    rtm.channel.on('ChannelMessage', ({text}, senderId) => { // text 为收到的频道消息文本，senderId 为发送方的 User ID
                        /* 收到频道消息的处理逻辑 */
                        console.log("接收到远程发送的消息");
                        this.chatScreenLive.push(senderId + '：' + text);
                        this.barrage.push(text);
                    });
                }).catch(error => {
                    /* 加入频道失败的处理逻辑 */
                    this.$message.error("加入聊天室失败")
                });

            }).catch(err => {
                console.log('登录至聊天室失败', err);
            });
        },
        //发送聊天信息
        sendMsg() {
            if (this.chatInfo == '') {
                this.$message.warning("不可发送空消息哦~");
                return false;
            } else {
                rtm.channel.sendMessage({text: this.chatInfo}).then(() => {
                    /* 频道消息发送成功的处理逻辑 */
                    this.chatInfo = '';
                    //限制发送间隔时间
                    this.sendInterval = true;
                    this.$nextTick(() => {
                        setTimeout(() => {
                            this.sendInterval = false;
                        }, 1000);
                    });

                }).catch(error => {
                    /* 频道消息发送失败的处理逻辑 */
                    console.log("发送消息失败" + error)
                });
                this.chatScreenLive.push(this.userInfo.username + '：' + this.chatInfo);
                this.barrage.push(this.chatInfo);
            }
        },
        //点击头像进入个人信息中心
        toPersonCenter() {
            this.$router.push({path: '/personalCenter', query: {username: this.userInfo.username}})
        },
        //定时给弹幕去掉占位
        addDisplay() {
            let a = document.getElementsByClassName('barrageLi');
            for (let i = 0; i < a.length - 1; i++) {
                a[i].classList.add("addDisplay")
            }
        },
        //定时清除聊天池
        clearChatinfo() {
            this.chatScreenLive.clean();
        },

    },
    beforeDestroy() {
        this.leaveLive();
        clearInterval(this.displayInertval);
        clearInterval(this.clearChatInfo);
    },
    mounted() {
        this.getUserInfo();
        this.getUserType();
        this.displayInertval = setInterval(() => {
            this.addDisplay();
        }, 10000);
        this.clearChatInfo = setInterval(() => {
            this.clearChatinfo();
        }, 300000)
    },
    watch: {
        //对自己发送的聊天内容作重点
        chatScreenLive() {
            //显示至聊天屏幕上
            this.$nextTick(() => {
                let user = this.userInfo.username;
                for (let i = 0; i < this.chatScreenLive.length; i++) {
                    let check = this.chatScreenLive[i].indexOf(user)
                    if (check === 0) {
                        this.$refs.chatli[i].className = 'rainbowFont';
                    }
                }
                //使元素滚动至最底部
                this.$refs.chatScreen.scrollTop = this.$refs.chatScreen.scrollHeight
            });
        },
        //发送间隔后，聚焦输入框
        sendInterval() {
            this.$nextTick(() => {
                this.$refs.input.$el.querySelector("input").focus()
            })
        },
        //弹幕发送监听
        barrage() {
            this.$nextTick(() => {
                let a = document.getElementsByClassName('barrageLi');
                for (let i = 0; i < a.length; a++) {
                    let c = a[a.length - 1].innerHTML;   //获取发送弹幕的内容长度
                    console.log(c.length);
                    a[a.length - 1].classList.add("barrageAnimate");
                    //若弹幕过长，增加显示的秒数
                    if (c.length > 5) {
                        a[a.length - 1].style.animationDuration = 9 + (c.length - 5) * 0.3 + "s";
                    }
                }
            });
        }
    },
}
