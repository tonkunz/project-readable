import React, { Component } from 'react'
import { connect } from 'react-redux'

class Menu extends Component {
  state = {
    voteBtn: '',
    dateBtn: ''
  }

  // Visual feedback method for the selected button
  handleBtn = (event) => {
    const value = event.target.value
    this.props.handleSort(value)
    value === 'votescore'
      ? this.setState({ voteBtn: 'active', dateBtn: ''})
      : this.setState({ dateBtn: 'active', voteBtn: ''})
  }

  render() {
    return (
      <div>
        <div className='custom-b'>
          <button className='btn btn-primary btn-block'>
            NEW POST
          </button>
        </div>

        <div>
          <div className='menu-title'>
            <span>ORDER BY:</span>
          </div>
          <div className='btn-group'>
            <button
              className={`btn btn-primary ${this.state.voteBtn}`}
              value='votescore'
              onClick={e => this.handleBtn(e)}
            > Score </button>
            <button
              className={`btn btn-primary ${this.state.dateBtn}`}
              value='date'
              onClick={e => this.handleBtn(e)}
            > Date </button>
          </div>
        </div>

        <div>
          <div className='menu-title'>
            <span>CATEGORIES:</span>
          </div>
          <ul className="readable-categories">
            <li>
              <button
                value='all'
                onClick={e => this.props.handleCategory(e.target.value)}
              >ALL</button>
            </li>
            {this.props.categories.map(category =>
              <li key={category.path}>
                <button
                  value={category.path}
                  onClick={e => this.props.handleCategory(e.target.value)}
                >{category.name.toUpperCase()}</button>
              </li>
            )}
          </ul>
        </div>          
      </div>
    )
  }
}

const mapStateToProps = ({ categories }, { handleCategory, handleSort }) => ({
  categories: categories,
})

export default connect(mapStateToProps)(Menu)