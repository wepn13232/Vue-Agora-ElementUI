<template>
    <!--瀑布流卡片-->
    <div class="cardPic">
        <div class="cardBox">
            <!--卡片图片banner-->
            <div class="cardPic">
                <el-image fit="cover"
                          :src="cardSrc"></el-image>
            </div>
            <!--卡片内容-->
            <div class="cardContent">
                <!--用户头像-->
                <div class="topContent">
                    <el-avatar :src="userLogo"></el-avatar>
                    <span class="userName">{{cardUser}}</span>
                </div>
                <!--用户内容-->
                <div class="userContent">
                    <p>{{cardContent}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cardPic",
        props:['cardSrc','cardUser','cardContent','userLogo']
    }
</script>

<style lang="scss">
    .cardPic {
        .cardBox {
            background-color: #ffffff;
            box-shadow: 0 0 10px rgba(65, 66, 73, 0.31);
            border: rgba(51, 51, 51, 0.71) 1px dashed;

            .cardPic {
                width: 95%;
                margin: 5px auto;
            }

            .cardContent {
                padding: 0 5px 5px 5px;

                .topContent {
                    display: flex;
                    align-items: center;

                    .userName {
                        color: #333333;
                        padding-left: 5px;
                    }
                }

                .userContent {
                    width: 95%;
                    margin: 20px auto;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                }
            }
        }
    }
</style>
