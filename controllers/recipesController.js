const model = require("./models");

module.exports = {
  findRandomRecipe: function (req, res) {
    model.userRecipes
      .find(req.query)
      .then((userRecipes) => res.json(userRecipes))
      .catch((err) => res.status(422).json(err));
  },
};
