import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handlePostDetails, handleDeletePost } from '../actions/post'
import moment from 'moment'
import { FaChevronCircleLeft, FaHeart, FaRegHeart, FaComments } from 'react-icons/fa'
import { NavLink, Redirect } from 'react-router-dom'

class SinglePostPage extends Component {
  state = {
    toHome: false,
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(handlePostDetails(this.props.match.params.id))
  }

  handleDelete = () => {
    const { dispatch } = this.props

    dispatch(handleDeletePost(this.props.match.params.id))

    this.setState({toHome: true})
  }

  render () {
    const { post } = this.props
    const { toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/'/>
    }

    return (
      <div className="container readable-postitem">
        <div className='row'>
          <div className='col-md-10'>
            <div className="post-content">
              <h4 className='post-title'>
              <NavLink to='/'>
                <FaChevronCircleLeft color='#2193b0' size={18} />
              </NavLink>
                {post.title}
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
          Comments Here
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