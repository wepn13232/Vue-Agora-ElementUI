<template>
  <div class="essayList">
    <!--  推荐文章-->
    <div class="recEssay">
      <Divider class="recDivider">推荐文章</Divider>
      <div class="container">
        <div v-for="lists in 3" class="pb2 pt2">
          <essay-card>
            <div slot="title">标题</div>
            <div slot="desc">内容</div>
          </essay-card>
        </div>
      </div>
    </div>
  <!--  往期文章-->
    <div class="essayBefore">
      <Divider class="recDivider">往期文章</Divider>
      <div class="container pb2 pt2" v-for="lists in 6">
        <essay-card>
          <div slot="title">标题</div>
          <div slot="desc">内容</div>
        </essay-card>
      </div>
    </div>
  </div>
</template>

<script src="./essayList.js"></script>

<style scoped lang="scss">
    @import "essayList";
</style>
