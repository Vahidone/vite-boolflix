<script>
import { store } from "../data/store";

import CardWrapper from './partials/CardWrapper.vue';


export default {
  name: "Main",
  components:{
    CardWrapper
  },
  data () {
    return {
      store
    }
  }
}
</script>

<template>
  <main>
    <CardWrapper title="Film" type="movie"/>
    <CardWrapper title="Serie Tv" type="tv" />
    
   
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