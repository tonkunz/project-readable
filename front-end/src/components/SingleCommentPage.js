import React, { Component } from 'react'
import moment from 'moment'
import { IoIosHeart, IoIosHeartDislike } from 'react-icons/io'
import { connect } from 'react-redux'

// Redux actions
import { handleUpVoteComment, handleDownVoteComment } from '../actions/post'

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

  render () {
    const { timestamp, body, author, voteScore } = this.props.data

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
              <button
                className='btn btn-primary btn-sm'
              > Edit </button>
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