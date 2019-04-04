import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleAddComment } from '../actions/post'

class NewComment extends Component {
  state = {
    author: '',
    body: '',
  }

  handleChange = (e) => (
    this.setState({
      [e.target.id]: e.target.value
    })
  )

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props

    const comment = {
      id: (Math.random().toString(36).substr(-8)),
      author: this.state.author,
      body: this.state.body,
      parentId: this.props.parentId,
      timestamp: Date.now(),
    }

    dispatch(handleAddComment(comment))

    this.setState({
      author: '',
      body: '',
    })
  }

  render () {
    const { author, body } = this.state

    return (
      <div className='row mt-3'>
        <div className='col-md-6'>
          <h5 className=''> Make a comment </h5>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <input
                  type='input'
                  className='form-control mb-1'
                  placeholder='Name of Author'
                  id='author'
                  value={author}
                  onChange={this.handleChange}
                />
                <textarea
                  className='form-control mb-1'
                  placeholder='Comment body'
                  id='body'
                  value={body}
                  onChange={this.handleChange}
                />
                <button type="submit" className="btn btn-sm btn-primary">Comment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(NewComment)