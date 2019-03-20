import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import Content from './Content'

import {
  getCategories,
  getPosts,
  getComments
} from '../utils/api'

class App extends Component {
  state = {
    categories: [],
    posts: [],
    comments: []
  }

  componentDidMount(){
    //Testing API
    getCategories()
      .then(categories => this.setState({ categories : categories}))

    getPosts()
      .then(posts => this.setState({ posts : posts}))

    getComments("8xf0y6ziyjabvozdd253nd")
      .then(data => this.setState({comments: data}))
  }

  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <hr className='app-hr'/>
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App