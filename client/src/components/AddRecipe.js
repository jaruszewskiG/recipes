import React, { Component } from 'react';
import '../styles/AddRecipe.css';
import homeIcon from '../images/Home-icon.svg'

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientsNumber: 1,
      ingredientsArray: [],
      instructionsArray: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addIngredientClick = this.addIngredientClick.bind(this);
    this.addInstructionClick = this.addInstructionClick.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert("Recipe has been added.")
    event.preventDefault();

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var options = {
      method: 'POST',
      headers: headers,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({ 'state': this.state })
    }

    var request = new Request('/addRecipe', options);

    fetch(request).then(function(response) {
      console.log("success");
      return response;
    }).then(function(json) {
      console.log(json.errors);
    }).catch(function(err) {
      console.log("Error " + err);
    });
  }

  addIngredientClick() {
    this.setState({ ingredientsNumber: this.state.ingredientsNumber + 1 });
    let ingredientNumber = 'ingredient' + this.state.ingredientsArray.length;
        
    this.setState({ ingredientsArray: this.state.ingredientsArray.concat([ingredientNumber]) 
    });
  }

  addInstructionClick() {
    let instructionNumber = 'instruction' + this.state.instructionsArray.length;
        
    this.setState({ instructionsArray: this.state.instructionsArray.concat([instructionNumber]) 
    });
  }

  render() {
    let amount = 'amount' + this.state.ingredientsArray.length, 
    product = 'product' + this.state.ingredientsArray.length,
    preparing = 'preparing' + this.state.instructionsArray.length;

    const ingredientAmount = this.state.ingredientsArray.length;
    const ingredientProduct = this.state.ingredientsArray.length;
    const instructionProduct = this.state.instructionsArray.length;

    return (
      <div className="container-fluid AddRecipe">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="row">
              <div className="offset-md-1 col-md-2 col-6">
                <label htmlFor="name">Title: </label>
                <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} required/>
              </div>
              <div className="col-md-2 col-6">
                <label htmlFor="time">Preparation time: </label>
                <input type="text" className="form-control" id="time" name="time" value={this.state.time} onChange={this.handleInputChange} required/>
              </div>
              <div className="col-md-6 col-12">
                <label htmlFor="image">Image URL: </label>
                <input type="text" className="form-control" id="image" name="image" value={this.state.image} onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="row">
              <div className="offset-md-1 col-md-6 col-12">
                <label htmlFor="description">Description: </label>
                <textarea className="form-control" rows="5" id="description" name="description" value={this.state.description} onChange={this.handleInputChange} required/>
              </div>
              <div className="col-md-4 col-12">
                <label htmlFor="name">Ingredients: </label>
                <table>
                  <tbody>
                    <tr key="1">
                      <td><input type="text" className="form-control" id="amount1" name="amount" placeholder="amount" value={this.state.amount} onChange={this.handleInputChange} /></td>
                      <td><input type="text" className="form-control" id="product1" name="product" placeholder="product" value={this.state.product} onChange={this.handleInputChange} /></td>
                    </tr>
                    {this.state.ingredientsArray.map(ingredient =>      
                      <tr key={ingredient}>
                        <td><input type="text" className="form-control" id="amount" name={amount} placeholder="amount" value={this.state[ingredientAmount]} onChange={this.handleInputChange} /></td>
                        <td><input type="text" class="form-control" id="product" name={product} placeholder="product" value={this.state[ingredientProduct]} onChange={this.handleInputChange} /></td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <button type="button" className="btn btn-info" onClick={this.addIngredientClick}>Add ingredient</button>
              </div>
            </div>
            <div className="row">
              <div className="offset-md-1 col-md-6 col-12">
                <label htmlFor="preparing">Preparing: </label>
                <textarea className="form-control" rows="2" id="preparing" name="preparing" value={this.state.preparing} onChange={this.handleInputChange} required/>
                {this.state.instructionsArray.map(instruction =>      
                    <textarea key={instruction} className="form-control" rows="2" id="preparing" name={preparing} value={this.state[instructionProduct]} onChange={this.handleInputChange} required/>
                )}
                <button type="button" className="btn btn-info" onClick={this.addInstructionClick}>Add instruction</button>
              </div>
            </div>
            <input type="submit" className="btn btn-success" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddRecipe;