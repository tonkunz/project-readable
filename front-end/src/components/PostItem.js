import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { FaHeart, FaRegHeart, FaComments } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

class PostItem extends Component {
  render() {
    const { post } = this.props

    return (
    <div className="readable-postitem">
      <div className="post-content">
        <h4 className='post-title'>
          <NavLink to={`/posts/${post.id}`}>{post.title}</NavLink>
        </h4>
        <div>
          <span className='post-span'>By: {post.author} </span>
          <span className='post-span text-muted'>When: {moment(post.timestamp).format('DD/MM/YYYY')}</span>
        </div>
        <div>
          <p className='post-body'>
            {post.body}
          </p>
          <FaRegHeart color='red'/> {post.voteScore} <FaComments /> {post.commentCount}
        </div>
      </div>      
      <hr />
    </div>
    )
  }
}

function mapStateToProps ({ posts }, { id }) {
  const post = posts[id]

  return {
    post,
  }
}

export default connect(mapStateToProps)(PostItem)