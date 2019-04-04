import React, { Component } from 'react'
import { connect } from 'react-redux'

// Action Requests
import { handleInitialData } from '../actions/shared'
import { handlePostsByCategory } from '../actions/posts'

// Components
import Menu from './Menu'
import PostList from './PostList'

class Dashboard extends Component {
  state = {
    categorySelected: 'all',
    sortOption: 'votescore',
  }

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  handleCategorySelected = (categorySelected) => {
    const { dispatch } = this.props

    if (categorySelected !== 'all') {
      dispatch(handlePostsByCategory(categorySelected))
    } else {
      dispatch(handleInitialData())
    }
    this.setState({ categorySelected })
  }

  handleSortChoice = (sortOption) => {
    this.setState({ sortOption })
  }

  render() {
    return (
      <div className='container readable-content'>
        <div className='row'>
          <div className='col-md-3 container'>
            <Menu
              handleCategory={this.handleCategorySelected}
              handleSort={this.handleSortChoice}
            />
          </div>
          <div className='col-md-9'>
            <div className='category-title text-center'>
              <small className='text-muted'>Category Selected: </small>
              <span>{this.state.categorySelected.toUpperCase()}</span>
            </div>
            <PostList
              categorySelected={this.state.categorySelected}
              sortOption={this.state.sortOption}
            />
          </div>            
        </div>
      </div>
    )
  }
}

export default connect()(Dashboard)