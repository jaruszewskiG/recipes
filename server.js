const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

var Recipe = require('./scripts/schemas/recipe.js');

mongoose.connect('mongodb://localhost/recipes-webApp');

app.get('/recipes', (req, res) => {
  Recipe.find({}, function(err, dbRecipe) {
    if(err) {
      console.log(err);
      return res.send("Sorry! There was an error, try again later.");
    }

    if(dbRecipe) {
      console.log(dbRecipe);
      res.send({ express: dbRecipe });
    }
  });
  //console.log(mongoose.connection.readyState);
});

app.listen(port, () => console.log(`Listening on port ${port}`));