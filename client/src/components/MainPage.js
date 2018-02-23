import React, { Component } from 'react';
import '../styles/MainPage.css';
import RecipeThumbnail from './RecipeThumbnail';
import RecipeDetails from './RecipeDetails';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      active: 'RecipeThumbnails'
    };
    this.recipeThumbnailClick = this.recipeThumbnailClick.bind(this);
    this.item;
  }

  recipeThumbnailClick(id) {
    this.item = id;
    this.setState({ active: 'RecipeDetails'});
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: [
        [res.express[0].name, res.express[0].time, res.express[0].image, res.express[0].description, res.express[0].ingredients, res.express[0].preparing],
        [res.express[1].name, res.express[1].time, res.express[1].image, res.express[1].description, res.express[1].ingredients, res.express[1].preparing],
        [res.express[2].name, res.express[2].time, res.express[2].image, res.express[2].description, res.express[2].ingredients, res.express[2].preparing]]
      }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/recipes');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    let active = this.state.active;
    if (!this.state.response.length) {
      return null;
    }
    console.log(this.state.active);

    return (
      <div className="container-fluid MainPage">
        {active === 'RecipeThumbnails' ? (
          <div className="RecipeThumbnails">
            <h1>Latest recipes</h1>
            <div className="row">
              <div className="col-4 offset-md-1 recipe" onClick={ () => this.recipeThumbnailClick(0) }>
                <RecipeThumbnail name = { this.state.response[0][0] } time = { this.state.response[0][1]} image = { this.state.response[0][2] }/>
              </div>
              <div className="col-3 recipe" onClick={ () => this.recipeThumbnailClick(1) }>
                <RecipeThumbnail name = { this.state.response[1][0] } time = { this.state.response[1][1]} image = { this.state.response[1][2] }/>
              </div>
              <div className="col-3 recipe" onClick={ () => this.recipeThumbnailClick(2) }>
                <RecipeThumbnail name = { this.state.response[2][0] } time = { this.state.response[2][1]} image = { this.state.response[2][2] }/>
              </div>
            </div>
          </div>
        ) : active === 'RecipeDetails' ? (
            <RecipeDetails  
              name = { this.state.response[this.item][0] } 
              time = { this.state.response[this.item][1]} 
              image = { this.state.response[this.item][2] } 
              description = { this.state.response[this.item][3] }
              ingredients = { this.state.response[this.item][4] }
              preparing = { this.state.response[this.item][5] } />
        )  : null}

      </div>
    );
  }
}

export default MainPage;