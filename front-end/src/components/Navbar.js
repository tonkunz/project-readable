import React, { Component } from 'react'

class Navbar extends Component {
  render(){
    return(
      <ul className="readable-nav nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">React</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Redux</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Udacity</a>
        </li>
    </ul>
    )
  }
}

export default Navbar;