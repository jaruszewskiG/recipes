import React, { Component } from 'react';
import '../styles/Navbar.css';
import homeIcon from '../images/Home-icon.svg'

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark navbar-main">
        <a className="offset-lg-1">
          <img className="homeIcon" src= { homeIcon } onClick={ this.props.homeClick }></img>
        </a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navb">
          <ul className="navbar-nav ml-auto navbar-right">
            <li className="nav-item" onClick={ this.props.addRecipeClick }>
              <a className="nav-link" href="#">Add recipe</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sample 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sample 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sample 3</a>
            </li>
          </ul>
        </div>
      </nav>

    );
  }
}

export default Navbar;