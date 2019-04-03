import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { FaComments } from 'react-icons/fa'
import { IoIosHeart, IoIosHeartDislike } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

// Redux
import { handleUpVotePost, handleDownVotePost } from '../actions/post'

class PostItem extends Component {
  
  handleLike = (id) => {
    this.props.dispatch(handleUpVotePost(id))
  }
  
  handleDislike = (id) => {
    this.props.dispatch(handleDownVotePost(id))
  }
  

  render() {
    const { post } = this.props

    return (
    <div className="readable-postitem">
      <div className="post-content">
        <h4 className='post-title'>
          <NavLink to={`/${post.category}/${post.id}`}>{post.title}</NavLink>
        </h4>
        <div>
          <span className='post-span'>By: {post.author} </span>
          <span className='post-span text-muted'>When: {moment(post.timestamp).format('DD/MM/YYYY')}</span>
        </div>
        <div>
          <p className='post-body'>
            {post.body}
          </p>
          <div className=''>
          <IoIosHeart color='red' onClick={() => this.handleLike(post.id)}/>
          <IoIosHeartDislike onClick={() => this.handleDislike(post.id)}/>  {post.voteScore} /  
          <FaComments size={15}/> {post.commentCount}
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