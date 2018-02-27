const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

var Recipe = require('./scripts/schemas/recipe.js');

mongoose.connect('mongodb://localhost/recipes-webApp');

app.get('/recipes', (req, res) => {
  Recipe.find({}, function(err, dbRecipe) {
    if(err) {
      console.log(err);
      return res.send("Sorry! There was an error, try again later.");
    }

    if(dbRecipe) {
      res.send({ express: dbRecipe });
    }
  });
  //console.log(mongoose.connection.readyState);
});

app.post('/addRecipe', (req, res) => {
  let recipeData = req.body.state,
      recipeDataLength = Object.keys(req.body.state).length,
      ingredients;

      var newRecipe = new Recipe();
      newRecipe.name = recipeData.name;
      newRecipe.time = recipeData.time;
      newRecipe.description = recipeData.description;
      newRecipe.image = recipeData.image;
      newRecipe.ingredients = [];
      newRecipe.preparing = [];
      newRecipe.ingredients.push({ "amount":recipeData["amount"], "product":recipeData["product"] });
      newRecipe.preparing.push( recipeData["preparing"] );

  console.log(recipeData);

  for (let i=0; i<recipeDataLength; i++) {
    if (recipeData.hasOwnProperty("amount"+i)) {
      newRecipe.ingredients.push({ "amount":recipeData["amount"+i], "product":recipeData["product"+i] });
    }

    if (recipeData.hasOwnProperty("preparing"+i)) {
      newRecipe.preparing.push( recipeData["preparing"+i] );
    }
  }
  

  newRecipe.save(function (err, savedRecipe){
    if(err){
      console.log(err);
      return res.send("Sorry! There was an error, try again later.");
    } else {
      console.log("Registration complete!");
    }
  });

  return res.redirect('../recipes');
});

app.listen(port, () => console.log(`Listening on port ${port}`));