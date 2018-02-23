import React, { Component } from 'react';
import '../styles/MainPage.css';
import RecipeThumbnail from './RecipeThumbnail';
import RecipeDetails from './RecipeDetails';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.response.length) {
      return null;
    }

    return (
      <div className="container-fluid MainPage">
          <div className="RecipeThumbnails">
            <h3 className="latest-recipes-headline offset-md-1">Latest recipes</h3>
            <div className="row">
              <div className="col-4 offset-md-1 recipe__left" onClick={ () => this.props.recipeThumbnailClick(0) }>
                <RecipeThumbnail name = { this.props.response[0][0] } time = { this.props.response[0][1]} image = { this.props.response[0][2] }/>
              </div>
              <div className="col-3 recipe__center" onClick={ () => this.props.recipeThumbnailClick(1) }>
                <RecipeThumbnail name = { this.props.response[1][0] } time = { this.props.response[1][1]} image = { this.props.response[1][2] }/>
              </div>
              <div className="col-3 recipe__right" onClick={ () => this.props.recipeThumbnailClick(2) }>
                <RecipeThumbnail name = { this.props.response[2][0] } time = { this.props.response[2][1]} image = { this.props.response[2][2] }/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default MainPage;