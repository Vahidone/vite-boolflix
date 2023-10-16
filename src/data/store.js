import { reactive } from "vue";

export const store = reactive({
  apiKey: "9d2fe7e840b69f999f50c8cb4c989a01",


  apiUrlSerie: "https://api.themoviedb.org/3/search/tv",
  apiResSerie: {},

  
  apiUrlFilm: "https://api.themoviedb.org/3/search/movie",
  apiResFilm: {},
  
  language: "it_IT",

  query:"Blue",
 
  
})