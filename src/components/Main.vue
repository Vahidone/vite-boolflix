<script>

import CardWrapper from './partials/CardWrapper.vue';

export default {
  name: "Main",
  components:{
    CardWrapper
  }
}
</script>

<template>
  <main>
    <CardWrapper />
  </main>
</template>

<style lang="scss" scoped>
  main{
    overflow-y: auto;
    width: 100%;
    height: calc(100vh - 150px);
    background-color: #171717;
    color: white;
    
  }
</style>