import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
      <div className='col-md-3 container'>
        <div>
          <div className='menu-title'>
            <span>Order by: </span>
          </div>
    
          <div className='btn-group'>
            <button className='btn btn-primary active'>
              Score
            </button>
            <button className='btn btn-primary'>
              Date
            </button>
          </div>
        </div>
        <hr />
        <div className='custom-b'>
          <button className='btn btn-primary btn-block'>
            NEW POST
          </button>
        </div>
      </div>
    )
  }
}

export default Menu