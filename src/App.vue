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
      store,
  
    }
  },


  methods: {
    getApi(type){

      axios.get(store.apiUrl + type, {
        params:{
          query: store.query,
          api_key: store.apiKey,
          language: store.language,
          
        }
      })
      .then((res) => {
        store[type] = res.data.results
    
      })

      .catch((err) => {
        console.log(err);
      })
    },

    startSearch () {
      this.getApi('movie'),
      this.getApi('tv')

    }
  },

}
</script>

<template>
  <Header @startSearch="startSearch" />
  <Main />
  
  
 
</template>

<style lang="scss">
@use "./scss/main.scss"
</style>
