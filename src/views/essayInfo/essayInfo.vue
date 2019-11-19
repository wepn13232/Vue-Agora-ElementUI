<template>
    <div class="essayInfo">
        <!--文章卡片-->
        <div class="essayCard">
            <!--文章banner-->
            <div class="cardBanner" :style="{backgroundImage:'url('+essayInfo.url+')'}">
                <!--黑色蒙版-->
                <div class="black">
                    <!--banner内内容-->
                    <div class="bannerContent">
                        <!--发布时间-->
                        <div class="essay-time">
                            <span class="fw">{{essayInfo.date}}</span>
                        </div>
                        <!--标题-->
                        <div class="essay-title">
                            <h3 class="fw">{{essayInfo.title}}</h3>
                        </div>
                        <div class="essayFooter">
                            <!--作者-->
                            <div class="author">
                                <span class="fw">作者：{{essayInfo.user}}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!--文章内容-->
            <div class="cardContent">
                <div class="essay container" v-html="essayInfo.content"></div>
            </div>
        </div>
    </div>
</template>

<script src="./essayInfo.js"></script>

<style scoped lang="scss">
    @import "essayInfo.scss";
</style>
