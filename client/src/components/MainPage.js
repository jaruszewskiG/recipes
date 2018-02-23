import React, { Component } from 'react';
import '../styles/MainPage.css';
import RecipeThumbnail from './RecipeThumbnail';
import RecipeDetails from './RecipeDetails';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;

    // Making sure we have all data before we start working with it
    if (!data.length) {
      return null;
    }

    return (
      <div className="container-fluid MainPage">
          <div className="RecipeThumbnails">
            <h3 className="latest-recipes-headline offset-lg-1">Latest recipes</h3>
            <div className="row">
              <div className="offset-lg-1 col-lg-4 col-md-4 col-12 recipe__left" onClick={ () => this.props.recipeThumbnailClick(0) }>
                <RecipeThumbnail 
                  name = { data[0][0] } 
                  time = { data[0][1]} 
                  image = { data[0][2] }/>
              </div>
              <div className="col-lg-3 col-md-4 col-12 recipe__center" onClick={ () => this.props.recipeThumbnailClick(1) }>
                <RecipeThumbnail 
                  name = { data[1][0] } 
                  time = { data[1][1]} 
                  image = { data[1][2] }/>
              </div>
              <div className="col-lg-3 col-md-4 col-12 recipe__right" onClick={ () => this.props.recipeThumbnailClick(2) }>
                <RecipeThumbnail 
                  name = { data[2][0] } 
                  time = { data[2][1]} 
                  image = { data[2][2] }/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default MainPage;