<script>
import Stars from './Stars.vue';
import StarsFull from './StarsFull.vue';
export default {
  components: {
    Stars,
    StarsFull
  },
  name: "Card",
  data() {
    return{
      flags: ['en', 'it']

    }
    
  },

  props:{
    card: Object,
  },

  methods: {
    getImagePath (img) {
      return new URL (`../../../public/${img}.png`, import.meta.url).href 
    }
  }
}

</script>

<template>
  <div class="my-card">
    <img v-if="card.poster_path" :src="`https://image.tmdb.org/t/p/w342${card.poster_path}`" alt="">
    <img v-else src="/No-Image-Placeholder.svg.webp" alt="">
    <div class="my-hover">
      <p class="mt-5">Nome	:	{{ card.title || card.name }}</p>
      <p>Titolo originale	:	{{ card.original_title || card.original_name }}</p>

      <img class="flag" v-if="flags.includes(card.original_language)" :src="getImagePath(card.original_language)" alt="">
      <p v-else>lingua	:	{{ card.original_language }}></p>

      
      <StarsFull :vote="card.vote_average"/>
  
      

    </div>
  </div>
</template>
<style lang="scss" scoped>
.my-card {
  position: relative;

  &:hover .my-hover {
    opacity: 1;
    transition: 1s;
    height: 100%;
  }

  .my-hover {
    width: 100%;
    height: 0px;
    position: absolute;
    font-size: 22px;
    text-align: center;
    opacity: 0;
    top: 0;
    left: 0;
    padding: 0 20px;
    background-color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    transition: height 1s, opacity 1s;
    
  }
  .poster {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .flag {
    width: 40px;
    height: 30px;
  }
}

.my-card:hover + .my-hover {
    opacity: 1;
    transition: 1s;
    height: 100%;
}
</style>