import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handlePostDetails, handleDeletePost } from '../actions/post'
import moment from 'moment'
import { FaChevronCircleLeft, FaExclamationTriangle } from 'react-icons/fa'
import { IoIosHeart, IoIosHeartDislike } from 'react-icons/io'
import { NavLink, Redirect } from 'react-router-dom'
import CommentsList from './CommentsList'
import { handleGetComments } from '../actions/post'
import { handleUpVotePost, handleDownVotePost } from '../actions/post'
import NewComment from './NewComment'

class SinglePostPage extends Component {
  state = {
    toHome: false,
    post: ''
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(handlePostDetails(this.props.match.params.id))
    dispatch(handleGetComments(this.props.match.params.id))
  }

  handleDelete = () => {
    const { dispatch } = this.props

    dispatch(handleDeletePost(this.props.match.params.id))

    this.setState({toHome: true})
  }

  handleVote = (id, type) => {
    const { dispatch } = this.props

    if (type === 'upVote') {
      dispatch(handleUpVotePost(id))
    } else {
      dispatch(handleDownVotePost(id))
    }
  }

  render () {
    const { post } = this.props
    const { toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/'/>
    }

    if (post.id === undefined ) {
      return (
        <div className='container my-sm-5 py-sm-5 text-center'>
          <FaExclamationTriangle color='#2193b0' size={50}/>
          <h3 className='display-4'>
            Error 404...
            <small class="text-muted">This page does not exist anymore :(</small>
          </h3>
        </div>
      )
    }

    return (
      <div className="container readable-postitem">
        <div className='row'>
          <div className='col-sm-10'>
            <div className="post-content">
              <h4 className='post-title'>
              <NavLink to='/'>
                <FaChevronCircleLeft color='#2193b0' size={18} />
              </NavLink>   {post.title}
              </h4>
              <div>
                <span className='post-span'>By: {post.author} </span>
                <span className='post-span text-muted'>When: {moment(post.timestamp).format('DD/MM/YYYY')}</span>
              </div>
              <div>
                <p className='post-body'>
                  {post.body}
                </p>
                <IoIosHeart color='red' onClick={() => this.handleVote(post.id, 'upVote')}/>
                <IoIosHeartDislike  onClick={() => this.handleVote(post.id, 'dowVote')}/> {post.voteScore}
                
              </div>
            </div>      
            <hr />
          </div>
          <div className='col-md-2'>
            <div>
              <div className='btn-group'>
                <NavLink
                  className='btn btn-primary'
                  to={`/${post.category}/${post.id}/edit-post`}
                > Edit </NavLink>
                <button
                  className='btn btn-primary'
                  onClick={() => this.handleDelete()}
                > Delete </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <NewComment parentId={post.id}/>
          <CommentsList />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ post }){
  return {
    post
  }
}

export default connect(mapStateToProps)(SinglePostPage)