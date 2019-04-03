import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleEditPost } from '../actions/post'

class EditPost extends Component {
  state = {
    title: '',
    body: '',
    toSinglePagePost: false
  }

  componentDidMount () {
    this.props.post && this.setState({
      title: this.props.post.title,
      body: this.props.post.body
    })
  }

  handleChange = (e) => (
    this.setState({
      [e.target.id]: e.target.value
    })
  )

  handleSubmit = (e) => {
    e.preventDefault()
    const { title, body } = this.state
    const { dispatch } = this.props
    const { id } = this.props.match.params
    const editedPost = {
      id,
      title,
      body
    }
    dispatch(handleEditPost(editedPost))
    alert('You save this changes for post.')
    this.setState({ toSinglePagePost: true })
  }
  
  render() {
    const { title, body, toSinglePagePost } = this.state
    const { category, id} = this.props.match.params

    if (toSinglePagePost === true) {
      return <Redirect to={`/${category}/${id}`}/>
    }

    return (
      <div className='container'>
        <h2 className='my-4'> Edit Post </h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              
              <label>Post Title</label>
              <input
                type='input'
                className='form-control mb-4'
                placeholder='Enter new title of post'
                id='title'
                value={title}
                onChange={this.handleChange}
              />

              <label>Post body</label>
              <textarea
                className='form-control  mb-4'
                placeholder='Enter a new content of post'
                id='body'
                value={body}
                onChange={this.handleChange}
              />

              <button type="submit" className="btn btn-primary">SUBMIT THE UPDATE</button>

            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ posts }, { match }) {
  const post = posts[match.params.id]
  return {
    post,
  }
}

export default connect(mapStateToProps)(EditPost)