import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=8356777e";

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
};

// https://www.omdbapi.com/?t=&apikey=8356777e&s=momento

// https://www.healthline.com/health/most-powerful-medicinal-plants