import React, { Component } from 'react';
import '../styles/MainPage.css';
import RecipeThumbnail from './RecipeThumbnail';
import RecipeDetails from './RecipeDetails';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let buffer = [];
    const data = this.props.data;

    // Making sure we have all data before we start working with it
    if (!data.length) {
      return null;
    }
      
    for (let i = 0; i < data.length; i += 3) {
      // If there will be 3 items in last row
      if (i+2<data.length) {
        buffer.push(
          <div className="row" key={i}>
            <div className="offset-lg-1 col-lg-4 col-md-4 col-12 recipe__left" onClick={ () => this.props.recipeThumbnailClick(i) }>
              <RecipeThumbnail 
                name = { data[i][0] } 
                time = { data[i][1] } 
                image = { data[i][2] }/>
            </div>
            <div className="col-lg-3 col-md-4 col-12 recipe__center" onClick={ () => this.props.recipeThumbnailClick(i+1) }>
              <RecipeThumbnail 
                name = { data[i+1][0] } 
                time = { data[i+1][1] } 
                image = { data[i+1][2] }/>
            </div>
            <div className="col-lg-3 col-md-4 col-12 recipe__right" onClick={ () => this.props.recipeThumbnailClick(i+2) }>
              <RecipeThumbnail 
                name = { data[i+2][0] } 
                time = { data[i+2][1] } 
                image = { data[i+2][2] }/>
            </div>
          </div>
        )
      } else {
        // If there will be 2 items in last row
        if (i+1<data.length) {
          buffer.push(
            <div className="row">
              <div className="offset-lg-1 col-lg-4 col-md-4 col-12 recipe__left" onClick={ () => this.props.recipeThumbnailClick(i) }>
                <RecipeThumbnail 
                  name = { data[i][0] } 
                  time = { data[i][1] } 
                  image = { data[i][2] }/>
              </div>
              <div className="col-lg-3 col-md-4 col-12 recipe__center" onClick={ () => this.props.recipeThumbnailClick(i+1) }>
                <RecipeThumbnail 
                  name = { data[i+1][0] } 
                  time = { data[i+1][1] } 
                  image = { data[i+1][2] }/>
              </div>
            </div>
          )
        } else {
          // If there will be 1 item in last row
          buffer.push(
            <div className="row">
              <div className="offset-lg-1 col-lg-4 col-md-4 col-12 recipe__left" onClick={ () => this.props.recipeThumbnailClick(i) }>
                <RecipeThumbnail 
                  name = { data[i][0] } 
                  time = { data[i][1] } 
                  image = { data[i][2] }/>
              </div>
            </div>
          )
        }
      }
    }

    return (
      <div className="container-fluid MainPage">
          <div className="RecipeThumbnails">
            <h3 className="latest-recipes-headline offset-lg-1">Latest recipes</h3>
            { buffer }
          </div>
      </div>
    );
  }
}

export default MainPage;