import React, { Component } from 'react';
import '../styles/RecipeThumbnail.css';
import '../styles/RecipeDetails.css';

class RecipeThumbnail extends Component {
  render() {
    const { name, time, image, description, ingredients, preparing } = this.props; 
    let ingredientsArray = [], preparingArray = [];

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
      preparing[i] = i + 1 + '. ' +  preparing[i];

      preparingArray.push(
        <p key={i}>
          { preparing[i] }
        </p>
      )
    }

    console.log(preparing);

    return (
      <div className="container-fluid">
        <div className="RecipeDetails">
          <div className="row">
            <div className="offset-md-1 col-6">
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
            <div className="col-4 ingredients">
              <h4>Ingredients</h4>
              <table>
                <tbody>
                  { ingredientsArray }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeThumbnail;