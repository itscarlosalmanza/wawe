const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userRecipesSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }

});

const userRecipes = mongoose.model('userRecipes', userRecipesSchema);

module.exports = userRecipes;