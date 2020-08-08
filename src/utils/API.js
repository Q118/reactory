import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=8356777e";

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
};