import React, { Component } from 'react'
import moment from 'moment'
import { IoIosHeart, IoIosHeartDislike } from 'react-icons/io'
import { connect } from 'react-redux'

// Redux actions
import {
  handleUpVoteComment,
  handleDownVoteComment,
  handleDeleteComment,
  handleEditComment
} from '../actions/post'

class SingleCommentPage extends Component {
  state = {
    edit: false,
    body: ''
  }
  
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

  handleEdit = () => {
    this.setState({
      edit: true
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { id } = this.props.data
    const { body } = this.state
    const editedComment = {
      id,
      body
    }
    dispatch(handleEditComment(editedComment))

    this.setState({
      edit: false
    })
  }

  handleChange = (e) => {
    this.setState({
      body: e.target.value
    })
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

          {this.state.edit
            ? <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                  <textarea
                    className='form-control mb-1'
                    placeholder={this.state.body}
                    id='body'
                    value={this.state.body}
                    onChange={this.handleChange}
                  />
                  <button
                    type="submit"
                    className="btn btn-sm btn-primary"
                  >Edit this comment</button>
                </div>
              </form>
          : <div>
               <p>{body}</p>
              <div>
                <IoIosHeart color={'red'} onClick={() => this.handleLike('upVote')}/>
                <IoIosHeartDislike onClick={() => this.handleLike('downVote')}/>  {voteScore}
              </div>

              <div className='btn-group-comment pb-4'>
                <div className='btn-group'>
                  <button
                    to={`/edit-comment/${id}`}
                    className='btn btn-primary btn-sm'
                    onClick={() => this.handleEdit()}
                  > Edit </button>
                  <button
                    className='btn btn-primary btn-sm'
                    onClick={() => this.handleDelete()}
                  > Delete </button>
                </div>
              </div>
            </div>}

        </div>
      </div>
    )
  }
}

export default connect()(SingleCommentPage)