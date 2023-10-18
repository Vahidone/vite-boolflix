<script>
import { store } from '../../data/store';
import Cards from './Cards.vue';



export default {
  name: "CardWrapper",

  props: {
    title: String,
    type: String
  },
  components:{
    Cards
  },
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="my-container">
    <h2>{{ title }}</h2>
    <div class="card-box">
      <Cards :card="card"  v-for="(card , index) in store[type]" :key="index"/>
    </div>

  </div>
</template>


<style lang="scss" scoped>
.my-container {
  width: 80%;
  margin: 0 auto;
   h2 {
    text-align: center;
   margin: 70px 0;
   }
  .card-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

}
 

</style>