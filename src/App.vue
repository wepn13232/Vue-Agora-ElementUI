<template>
  <div id="app">
    <header-s></header-s>
    <router-view/>
    <footer-s></footer-s>
  </div>
</template>

<script>
  import headerS from "@/components/headerS/headerS.vue";
  import footerS from "@/components/footerS/footerS.vue";

  export default {
    name:"App",
    components:{headerS,footerS}

  }
</script>

<style lang="scss">

</style>
