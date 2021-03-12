const apiKey = "4fffe504459346578fa3ef8d6daa24ea";
// import axios from "axios";


function getRandomRecipe(x) {
    var requestURL = "https://api.spoonacular.com/recipes/random?number=1&apiKey=" + apiKey;

    $.ajax({
        url: requestURL,
        method: "GET",
        success: function (recipeJSON) {
            console.log(recipeJSON)
        }
    })      
}

//  might need to use axios instead, talk to team.
// export default {
//     // Gets all users
//     getUserRecipes: function() {
//       return axios.get("https://api.spoonacular.com/recipes/random?number=1&apiKey=4fffe504459346578fa3ef8d6daa24ea");
//     }
//   };