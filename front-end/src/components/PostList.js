import React, { Component } from 'react'
import PostItem from './PostItem'

import { connect } from 'react-redux'

class PostList extends Component {
  
  render() {
    const { sortOption, renderByVote, renderByTime} = this.props

    return (
      <ul className='list-unstyled'>
        {sortOption === 'votescore'
          ? renderByVote.map(id => (
            <li key={id}>
              <PostItem id={id}/>
            </li>
          ))
          : renderByTime.map(id => (
            <li key={id}>
              <PostItem id={id}/>
            </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = ({ posts, categories }, { categorySelected }) => {
  return {
    renderByVote: Object.keys(posts)
      .sort((a, b) => posts[b].voteScore - posts[a].voteScore),
    renderByTime: Object.keys(posts)
      .sort((a, b) => posts[b].timestamp - posts[a].timestamp),
    categories: categorySelected === 'all'
      ? categories
      : categories.filter(c => c.path === categorySelected)
  }
}

export default connect(mapStateToProps)(PostList)