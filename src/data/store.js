import { reactive } from "vue";

export const store = reactive({
  apiKey: "8c3144caf08ff7ccb880d95e80b23236",
  
  apiUrlSerie: "https://api.themoviedb.org/3/search/tv",
  apiResSerie: {},
  apiUrlFilm: "https://api.themoviedb.org/3/search/movie",
  apiResFilm: {},
  
  language: "it_IT",

  query:"one piece",
 
  
})