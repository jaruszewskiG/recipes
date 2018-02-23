import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import Navbar from './Navbar';
import MainPage from './MainPage';
import RecipeDetails from './RecipeDetails'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'RecipeThumbnails',
      item: '',
      response: []
    };

    this.item;
    this.recipeThumbnailClick = this.recipeThumbnailClick.bind(this);
    this.homeClick = this.homeClick.bind(this);
  }

  homeClick() {
    this.setState({ active: 'RecipeThumbnails'});
    console.log(this.state.active);
  }

  recipeThumbnailClick(item) {
    this.setState({ active: 'RecipeDetails'});
    this.item = item;
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
    console.log(this.state.active);
    return (
      <div className="App">
        <Navbar 
          active={this.state.active}
          homeClick = {this.homeClick}/>
        {active === 'RecipeThumbnails' ? (
          <MainPage 
            recipeThumbnailClick={this.recipeThumbnailClick}
            response={this.state.response}/>
        ) : active === 'RecipeDetails' ? (
          <RecipeDetails  
            name = { this.state.response[this.item][0] } 
            time = { this.state.response[this.item][1] } 
            image = { this.state.response[this.item][2] } 
            description = { this.state.response[this.item][3] }
            ingredients = { this.state.response[this.item][4] }
            preparing = { this.state.response[this.item][5] } />
        )  : null}
      </div>
    );
  }
}

export default App;
