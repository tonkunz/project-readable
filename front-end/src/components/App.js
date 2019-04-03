import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { handlePostsByCategory } from '../actions/posts'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Componentents
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import PostList from './PostList'
import SinglePostPage from './SinglePostPage'
import NewPost from './NewPost'
import EditPost from './EditPost'
import EditComment from './EditComment'

class App extends Component {
  state = {
    categorySelected: 'all',
    sortOption: 'votescore',
  }

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  handleCategorySelected = (categorySelected) => {
    const { dispatch } = this.props
    
    console.warn('CATEGORIA SELECIONADA: ',this.state.categorySelected)

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
        <Route exact path='/:category/:id' component={SinglePostPage} />
        <Route path='/:category/:id/edit-post' component={EditPost} />
        <Route exact path='/edit-post/:id' component={EditComment}/>
        <Footer />
      </div>
      </Router>
    )
  }
}

export default connect()(App)