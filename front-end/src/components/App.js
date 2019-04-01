import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import PostList from './PostList'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  state = {
    categorySelected: 'all',
    sortOption: 'votescore',
  }

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  handleCategorySelected = (categorySelected) => {
    this.setState({ categorySelected })
  }

  handleSortChoice = (sortOption) => {
    this.setState({ sortOption })
  }
  render() {
    return (
      <div>
        <Header />
        <div className='container readable-content'>
          <div className='row'>
            <div className='col-md-3 container'>
              <Menu
                handleCategory={this.handleCategorySelected}
                handleSort={this.handleSortChoice}
              />
            </div>
            <div className='col-md-9'>
              <PostList
                categorySelected={this.state.categorySelected}
                sortOption={this.state.sortOption}
              />
            </div>            
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default connect()(App)