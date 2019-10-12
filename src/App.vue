<template>
  <div id="app">
    <header-s></header-s>
    <router-view/>
  </div>
</template>

<script>
  import headerS from "@/components/headerS/headerS.vue";

  export default {
    name:"App",
    components:{headerS}

  }
</script>

<style lang="scss">

</style>
