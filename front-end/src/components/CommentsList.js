import React, { Component } from 'react'
import { connect } from 'react-redux'
import SingleCommentPage from './SingleCommentPage'

class CommentList extends Component {
  
  render () {
    return (
      <ul className='list-unstyled pt-sm-4'>
        <p className='h4 text-left' style={{color: '#2193b0'}}>Comments: </p>
        {this.props.comments && this.props.comments.map(comment =>
          <li key={comment.id}>
            <SingleCommentPage  data={comment}/>
          </li>)
        }
      </ul>
    )
  }
}

function mapStateToProps ({ post }) {
  const { comments } = post
  
  return {
    comments
  }
}

export default connect(mapStateToProps)(CommentList)