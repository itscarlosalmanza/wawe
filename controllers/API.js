import axios from "axios";


export default {
    // Gets all users
    getUserRecipes: function() {
      return axios.get("https://api.spoonacular.com/recipes/random?number=1&apiKey=4fffe504459346578fa3ef8d6daa24ea");
    }
  };