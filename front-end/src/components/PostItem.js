import React, { Component } from 'react'
import moment from 'moment'

import { connect } from 'react-redux'

class PostItem extends Component {
  render() {
    const { post } = this.props

    return (
    <div className="readable-postitem">
      <div className="post-content">
        <h4 className='post-title'>{post.title}</h4>
        <div>
          <span className='post-span'>By: {post.author} </span>
          <span className='post-span text-muted'>When: {moment(post.timestamp).format('DD/MM/YYYY')}</span>
        </div>
        <div>
          <p className='post-body'>
            {post.body}
          </p>
          <div>
            Curtir/Descurtir: {post.voteScore}/ Comentários: {post.commentCount}
          </div>
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