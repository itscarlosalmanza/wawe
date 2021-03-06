const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  this needs to be dynamically created for each user and attached to the user via email provided
const userRecipes = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }

});

const userRecipes = mongoose.model;('', userRecipesSchema);

module.exports = userRecipes;