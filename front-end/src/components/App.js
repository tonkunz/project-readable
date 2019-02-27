import React, { Component } from 'react'

import {
  getCategories,
  getPosts,
  getPost,
  getComments
} from '../utils/api'

class App extends Component {
  state = {
    categories: [],
    posts: [],
    post: '',
    comments: []
  }

  componentDidMount(){
    //Testing API
    getCategories()
      .then(categories => this.setState({ categories : categories}))

    getPosts()
      .then(posts => this.setState({ posts : posts}))

    getPost("8xf0y6ziyjabvozdd253nd")
      .then(data => this.setState({post : data}))

    getComments("8xf0y6ziyjabvozdd253nd")
      .then(data => this.setState({comments: data}))
  }

  render() {
    return (
      <div>
        Hello World!
        {
          this.state.categories.map(category => <p>{category.name}</p>)
        }
      </div>
    )
  }
}

export default App