<script>
import { store } from './data/store';
import axios from "../node_modules/axios";
import Header from './components/Header.vue'
import Main from './components/Main.vue'



export default {
  name: "App",
  components:{
    Header,
    Main
  },
  data() {
    return {
      store
    }
  },


  methods: {
    getApi(apiUrl){

      axios.get(apiUrl, {
        params:{
          query: store.query,
          api_key: store.apiKey,
          language: store.language,
          
        }
      })
      .then((res) => {
        
        if(apiUrl.includes("movie")){
          store.apiResFilm = res.data;
        }
        if(apiUrl.includes("tv")){
          store.apiResSerie = res.data;
        }
    
      })

      .catch((error) => {
        console.log(error);
      })
    }
  },
  mounted() {
    this.getApi(store.apiUrlFilm);
    this.getApi(store.apiUrlSerie);
  },
}
</script>

<template>
  <Header @startSearch="getApi(store.apiUrlFilm)" />
  <Main />
 
</template>

<style lang="scss">
@use "./scss/main.scss"
</style>
