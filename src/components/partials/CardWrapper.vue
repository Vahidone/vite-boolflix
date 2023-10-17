<script>
import { store } from '../../data/store';
import Cards from './Cards.vue';



export default {
  name: "CardWrapper",
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
    <h2>Film</h2>
    <div class="card-box">
      <Cards :card="card"  v-for="(card , index) in store.apiResFilm.results" :key="index"/>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.my-container {
  width: 70%;
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