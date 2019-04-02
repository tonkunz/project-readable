import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handlePostDetails } from '../actions/post'
import moment from 'moment'
import { FaHeart, FaRegHeart, FaComments } from 'react-icons/fa'

class SinglePostPage extends Component {
  state = {
    toHome: false,
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(handlePostDetails(this.props.match.params.id))
  }

  handleDelete = () => {
    alert('Clicou para deletar')
  }
  handleEdit = () => {
    alert('Clicou para editar')
  }

  render () {
    const { post } = this.props

    return (
      <div className="container readable-postitem">
        <div className='row'>
          <div className='col-md-10'>
            <div className="post-content">
              <h4 className='post-title'>
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
                <button
                  className='btn btn-primary'
                  value='edit'
                  onClick={() => this.handleEdit()}
                > Edit </button>
                <button
                  className='btn btn-primary'
                  value='delete'
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