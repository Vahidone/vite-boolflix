<script>
import { store } from '../data/store';
export default {
  name: "Header",
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <header>
    <figure>
      <img src="/public/logo-boolflix copy.png" alt="logo">
    </figure>
    <div class="search-box">
      <input type="text" v-model="store.query" @keyup.enter="$emit('startSearch')"  class="form-control">
      <select class="form-select">
        <option selected>All</option>
        <option>Film</option>
        <option>Serie</option>
      </select>
    </div>  

  </header>
</template>

<style lang="scss" scoped>
  header{
    background-color: black;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
      figure {
        width: 200px;
        height: 40px;
         img {
          max-width: 100%;
          height: 100%;
          object-fit: cover;
         }
      }
      .search-box {
        width: 400px;
        display: flex;
        gap: 8px;
        input{
          width: 70%;
        }
        select{
          width: 30%;
        }
      }
  
  }
</style>