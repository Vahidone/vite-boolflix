
<script>
export default {
  name: 'StarsFull',
  props: {
    vote: Number
  },
  computed: {
    rating() {
      return this.vote * 10;
    }
  }
}
</script>

<template>
  <div class="stars-container mt-5 ">

    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>

    <div class="fill" :style="`width: ${rating}%`">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    </div>

  </div>
  
</template>


<style lang="scss" scoped>

.stars-container {

  position: relative;
  display: block;
  width: 200px;
  margin: auto;
  
  .fill {
    display: block;
    display: flex;
    position: absolute;
    left:38px;
    top: 6px;
    overflow: hidden;
  }
  
}

</style>