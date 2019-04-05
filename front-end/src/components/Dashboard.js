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
    console.log("Dashboard | DidMount")
    console.log(this.props)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Dashboard | DidUpdate')
    console.log(prevProps, prevState)
    console.log(this.props, this.state)
    if (this.props.match.params) {
      if (this.state.categorySelected !== this.props.match.params.category) {
        this.handleCategorySelected(this.props.match.params.category);
      }
    }
  }

  handleCategorySelected = (categorySelected) => {
    const { dispatch } = this.props

    if (categorySelected !== 'all') {
      dispatch(handlePostsByCategory(categorySelected))
    } else {
      dispatch(handleInitialData())
    }
    console.log(categorySelected);
    this.props.history.push('/' + categorySelected)
    this.setState({ categorySelected })
  }

  handleSortChoice = (sortOption) => {
    this.setState({ sortOption })
  }
  render() {

    if (this.state.categorySelected === 'new') {
      return <div></div>
    }

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