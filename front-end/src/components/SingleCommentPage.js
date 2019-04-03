import React, { Component } from 'react'
import moment from 'moment'
import { IoIosHeart, IoIosHeartDislike } from 'react-icons/io'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

// Redux actions
import { handleUpVoteComment, handleDownVoteComment, handleDeleteComment } from '../actions/post'

class SingleCommentPage extends Component {
  handleLike = (type) => {
    const { dispatch } = this.props
    const { id } = this.props.data

    if (type === 'upVote'){
      dispatch(handleUpVoteComment(id))
    } else {
      dispatch(handleDownVoteComment(id))
    }
  }

  handleDelete = () => {
    const { dispatch } = this.props
    const { id } = this.props.data
    
    dispatch(handleDeleteComment(id))
  }

  render () {
    const { id, timestamp, body, author, voteScore } = this.props.data

    return (
      <div className='row'>
        <div className='col-sm-8'>
          <div>
            <h4>{author}  <span className='comment-span text-muted'>
                Commented at: {moment(timestamp).format('DD/MM/YYYY')}
              </span>
            </h4>
          </div>
          <p>{body}</p>
          <div>
            <IoIosHeart color={'red'} onClick={() => this.handleLike('upVote')}/>
            <IoIosHeartDislike onClick={() => this.handleLike('downVote')}/>  {voteScore}
          </div>

          <div className='btn-group-comment pb-4'>
            <div className='btn-group'>
              <NavLink
                to={`/edit-comment/${id}`}
                className='btn btn-primary btn-sm'
              > Edit </NavLink>
              <button
                className='btn btn-primary btn-sm'
                onClick={() => this.handleDelete()}
              > Delete </button>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default connect()(SingleCommentPage)