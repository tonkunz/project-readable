import React, { Component } from 'react'
import moment from 'moment'
import { IoIosHeart, IoIosHeartDislike } from 'react-icons/io'

class SingleCommentPage extends Component {
  

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
            <IoIosHeart color={'red'}/>
            <IoIosHeartDislike />  {voteScore}
          </div>

          <div className='btn-group-comment'>
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

export default SingleCommentPage