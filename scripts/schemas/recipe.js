var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: Array,
    default: [],
    required: true
  },
  preparing: {
    type: Array,
    default: [],
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

var Recipe = mongoose.model('recipes', recipeSchema);

module.exports = Recipe;