const apiKey = "4fffe504459346578fa3ef8d6daa24ea"

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