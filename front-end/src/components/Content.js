import React, { Component } from 'react'
import Menu from './Menu'
import PostList from './PostList'

class Content extends Component {
  render() {
    return (
      <div className='container readable-content'>
        <div className='row'>
          <Menu />
          <PostList />
        </div>
      </div> 
    )
  
  }
}

export default Content