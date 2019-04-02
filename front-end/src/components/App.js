import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import PostList from './PostList'
import SinglePostPage from './SinglePostPage'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Testing new post
import NewPost from './NewPost'

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
      <Router>
        <div>
        <Header />
        <Route exact path='/' render={() => (
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
        )}/>
        <Route path='/new' component={NewPost}/>
        <Route path='/posts/:id' component={SinglePostPage} />
       <Footer />
      </div>
      </Router>
    )
  }
}

export default connect()(App)