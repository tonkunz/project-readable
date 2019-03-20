import React, { Component } from 'react'
import PostItem from './PostItem'

class PostList extends Component {
  
  render() {
    return (
      <div className='col-md-9'>
        <h4>Current Category</h4>
        <PostItem />
        <PostItem />
      </div>
    )
  }
}

export default PostList