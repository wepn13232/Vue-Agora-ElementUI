<template>
    <div class="essayInfo">
        <!--文章卡片-->
        <div class="essayCard">
            <!--文章banner-->
            <div class="cardBanner">
                <!--黑色蒙版-->
                <div class="black">
                    <!--banner内内容-->
                    <div class="bannerContent">
                        <!--发布时间-->
                        <div class="essay-time">
                            <span class="fw">2019.10.17</span>
                        </div>
                        <!--标题-->
                        <div class="essay-title">
                            <h3 class="fw">{{essayInfo.essay.title}}</h3>
                        </div>
                        <div class="essayFooter">
                            <!--作者-->
                            <div class="author">
                                <span class="fw">作者：林启元</span>
                            </div>
                            <!--浏览量-->
                            <div class="checkNum">
                                <span class="fw">7777  浏览</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!--文章内容-->
            <div class="cardContent">
                <div class="essay container">
                    {{essayInfo.essay.content}}
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./essayInfo.js"></script>

<style scoped lang="scss">
    @import "essayInfo.scss";
</style>
