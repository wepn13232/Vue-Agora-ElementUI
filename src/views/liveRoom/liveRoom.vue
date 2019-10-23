<template>
 <div class="liveRoom">
     <div class="container">
         <!--房间头部-->
         <div class="roomHearder">
             <!--用户头像-->
             <div class="userAvatar">
                 <el-avatar :size="70" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
             </div>
             <!--房间标题-->
             <div class="roomTitle">
                 <h4 class="room-title">房间标题</h4>
                 <span class="room-user">作者：{{userInfo.username}}</span>
             </div>
             <div class="clearFix"></div>
         </div>
         <!--直播内容-->
         <div class="content">
             <!--直播屏幕-->
             <div class="liveScreen" id="localStream">

             </div>
         </div>
     </div>
 </div>
</template>

<script src="./liveRoom.js"></script>

<style scoped lang="scss">
    @import "liveRoom";
</style>
