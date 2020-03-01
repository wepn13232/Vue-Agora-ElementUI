<template>
    <div class="liveRoom">
        <div class="container-self">
            <!--房间头部-->
            <div class="roomHearder">
                <!--用户头像-->
                <div class="userAvatar">
                    <el-avatar @click.native="toPersonCenter" :size="70" style="cursor:pointer;"
                               src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                </div>
                <!--房间标题-->
                <div class="roomTitle">
                    <h4 class="room-title">{{hostInfo.title}}</h4>
                    <div class="room-user">
                        主播：{{hostInfo.name}}
                        <el-tag type="info" size="small" effect="dark" v-if="hostInfo.isLive === 0">未开播</el-tag>
                    </div>
                    <el-button v-if="userInfo.userType=='host'" type="danger" @click="cutLive" size="small"
                               class="float-right">下播
                    </el-button>
                </div>
                <div class="clearFix"></div>
            </div>
            <!--直播内容-->
            <div class="content">
                <!--直播屏幕-->
                <!--主播-->
                <div class="screenContent" v-if="userInfo.userType=='host'">
                    <!--弹幕-->
                    <div class="barrage">
                        <ul v-for="(item,index) in barrage" :key="index">
                            <li class="barrageLi" ref="barrageInfo">{{item}}</li>
                        </ul>
                    </div>
                    <div class="liveScreen" id="localStream"
                         v-loading="screenLoading"
                         element-loading-text="直播间创建中...">
                    </div>
                </div>
                <!--观众屏幕-->
                <div class="screenContent" v-else>
                    <!--弹幕-->
                    <div class="barrage">
                        <ul v-for="(item,index) in barrage" :key="index">
                            <li class="barrageLi" ref="barrageInfo">{{item}}</li>
                        </ul>
                    </div>
                    <div class="liveScreen" id="localStream2">

                    </div>
                </div>
                <!--聊天框-->
                <div class="chat">
                    <!--聊天屏幕-->
                    <div class="chatScreen" ref="chatScreen">
                        <ul v-for="(item,i) in chatScreenLive" :key="i">
                            <li ref="chatli">{{item}}</li>
                        </ul>
                    </div>
                    <!--聊天输入框-->
                    <div class="chatInput">
                        <el-input v-if="userInfo.username" placeholder="开始聊天吧~" maxlength="25" show-word-limit
                                  @keyup.enter.native="sendMsg" v-model="chatInfo" class="input-with-select" ref="input"
                                  :disabled="sendInterval">
                            <el-button slot="append" @click="sendMsg">发送</el-button>
                        </el-input>
                        <el-input v-else placeholder="请先登录噢~" class="input-with-select" disabled>
                        </el-input>
                    </div>
                </div>
                <div class="clearFix"></div>
            </div>
            <!--直播简介-->
            <div class="liveInfo">
                <room-tabs>
                    <div slot="channelSum" v-html="hostInfo.roomSum"></div>
                    <div slot="channelSum" v-if="!hostInfo.roomSum">这个主播太懒了，还没有写直播简介呢~(*╹▽╹*)</div>
                    <div slot="userSum">{{hostPersonalSum || '暂无简介，这个人很神秘呢~'}}</div>
                </room-tabs>
            </div>
        </div>
    </div>
</template>

<script src="./liveRoom.js"></script>

<style scoped lang="scss">
    @import "liveRoom";
</style>
