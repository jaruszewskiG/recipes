import React, { Component } from 'react';
import '../styles/RecipeThumbnail.css';

class RecipeThumbnail extends Component {
  render() {
    const { name, time, image } = this.props; 

    return (
      <div className="recipe-thumbnail">
        <img src={ image } className="rounded thumbnail" />
        <h6 className="time">{ time }</h6>
        <h2 className="name">{ name }</h2>
        <div className="info"></div>
      </div>
    );
  }
}

export default RecipeThumbnail;