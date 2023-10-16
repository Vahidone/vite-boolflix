<script>
export default {
  name: "Card",
  props:{
    card: Object,
  }
}
</script>

<template>
  <div class="my-card">
    <img :src="`https://image.tmdb.org/t/p/w342${card.poster_path}`" alt="">
    <div class="my-hover">
      <p class="mt-5">Nome	:	{{ card.title }}</p>
      <p>Titolo originale	:	{{ card.original_title }}</p>
      <p>lingua	:	{{ card.original_language }}</p>
      <p>Voto	:	{{ card.vote_average }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-card{
  position: relative;
  .my-hover{
    position: absolute;
    font-size: 24px;
    text-align: center;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .6);
    cursor: pointer;
    padding: 16px;
    &:hover{
      opacity: 1;
    }
  }
}
</style>