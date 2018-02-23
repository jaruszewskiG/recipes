import React, { Component } from 'react';
import '../styles/RecipeThumbnail.css';
import '../styles/RecipeDetails.css';

class RecipeDetails extends Component {
  render() {
    const { name, time, image, description, ingredients, preparing } = this.props; 
    let ingredientsArray = [], preparingArray = [];
    let preparingNumbered = [];

    for (let i = 0; i < ingredients.length; i++) {
      let line = ingredients[i];

      if(!line.amount) { 
        line.amount = line.product 
      }

      ingredientsArray.push(
        <tr key={i}>
          <td className="ingredient-cell">{ line.amount }</td>
          <td className="ingredient-cell">{ line.product }</td>
        </tr>
      )
    }

    for (let i = 0; i < preparing.length; i++) {
      preparingNumbered[i] = i + 1 + '. ' +  preparing[i];

      preparingArray.push(
        <p key={i}>
          { preparingNumbered[i] }
        </p>
      )
    }

    return (
        <div className="container-fluid RecipeDetails">
          <div className="row">
            <div className="offset-md-1 col-lg-6 col-md-10 col-sm-12">
              <div className="recipe-thumbnail">
                <img src={ image } className="rounded thumbnail" />
                <h6 className="time">{ time }</h6>
                <h2 className="name">{ name }</h2>
                <div className="info"></div>
              </div>
              <p className="description">{ description }</p>
              <div className="preparing">
                <h4>Preparing</h4>
                { preparingArray }
              </div>
            </div>
            <div className="col-lg-4 offset-lg-0 offset-md-1 col-md-10 col-sm-12 ingredients">
              <h4>Ingredients</h4>
              <table>
                <tbody>
                  { ingredientsArray }
                </tbody>
              </table>
            </div>
          </div>
        </div>
    );
  }
}

export default RecipeDetails;