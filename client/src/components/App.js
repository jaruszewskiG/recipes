import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import Navbar from './Navbar';
import MainPage from './MainPage';
import RecipeDetails from './RecipeDetails';
import AddRecipe from './AddRecipe';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'RecipeThumbnails',
      item: '',
      data: []
    };
    this.item = null;
    this.recipeThumbnailClick = this.recipeThumbnailClick.bind(this);
    this.homeClick = this.homeClick.bind(this);
    this.addRecipeClick = this.addRecipeClick.bind(this);
  }

  homeClick() {
    this.setState({ active: 'RecipeThumbnails'});
  }

  recipeThumbnailClick(item) {
    this.setState({ active: 'RecipeDetails'});
    this.item = item;
  }

  addRecipeClick() {
    this.setState({ active: 'AddRecipe'});
  }

  // When component is mounted, call api for data and assign it to 'data' state
  componentDidMount() {
    let resArray = [];

    this.callApi()
      .then(res => {
        for (let i=0; i<res.express.length; i++) {
          resArray.push([ 
            res.express[i].name,
            res.express[i].time,
            res.express[i].image,
            res.express[i].description,
            res.express[i].ingredients,
            res.express[i].preparing
          ]);
        } 
        this.setState({ data: resArray})
      })
      .catch(err => console.log(err));
  }

  // Fetching recipes data from the database
  callApi = async () => {
    const response = await fetch('/recipes');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    let active = this.state.active;
    return (
      <div className="App">
        <Navbar 
          homeClick = { this.homeClick }
          addRecipeClick = { this.addRecipeClick }/>
        {
          active === 'RecipeThumbnails' ? (
            <MainPage 
              recipeThumbnailClick={ this.recipeThumbnailClick }
              data={ this.state.data }/>
          ) : active === 'RecipeDetails' ? (
            <RecipeDetails  
              name = { this.state.data[this.item][0] } 
              time = { this.state.data[this.item][1] } 
              image = { this.state.data[this.item][2] } 
              description = { this.state.data[this.item][3] }
              ingredients = { this.state.data[this.item][4] }
              preparing = { this.state.data[this.item][5] } />
          )  : active === 'AddRecipe' ? (
            <AddRecipe />
          ) : null
        }
      </div>
    );
  }
}

export default App;
