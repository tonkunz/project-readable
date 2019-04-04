import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPost } from '../actions/posts'
import { Redirect } from 'react-router-dom'
import { handleReceiveCategories } from '../actions/categories'

class NewPost extends Component {
  state = {
    title: '',
    category: 'react',
    author: '',
    body: '',
    toHome: false,
  }

  componentDidMount () {
    this.props.dispatch(handleReceiveCategories())
  }

  handleChange = (e) => (
    this.setState({
      [e.target.id]: e.target.value
    })
  )
  handleSubmit = (e) => {
    e.preventDefault()

    const { title, category, author, body } = this.state

    const post = {
      id: (Math.random().toString(36).substr(-8)),
      title,
      category,
      author,
      body,
      timestamp: Date.now(),
    }
    console.log('NOVO POST A SER INSERIDO: ', post)

    this.props.dispatch(handleAddPost(post))

    this.setState({
      title: '',
      category: '',
      author: '',
      body: '',
      toHome: true,
    })
  }

  render () {
    const { title, author, body, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/'/>
    }

    return (
      <div className='container'>
        <h2 className='my-4'> New Post </h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label>Post Title</label>
              <input
                type='input'
                className='form-control mb-4'
                placeholder='Enter title of post'
                id='title'
                value={title}
                onChange={this.handleChange}
              />
              <label>Author name</label>
              <input
                type='input'
                className='form-control  mb-4'
                placeholder='Enter author name'
                id='author'
                value={author}
                onChange={this.handleChange}
              />
              <label>Select Category</label>
              <select className="form-control  mb-4" id='category' onChange={this.handleChange}>
                {this.props.categories.map(category => 
                  <option value={category.name} key={category.path}> {category.name.toUpperCase()} </option>
                )}
              </select>
              <label>Post body</label>
              <textarea
                className='form-control  mb-4'
                placeholder='Enter a content of post'
                id='body'
                value={body}
                onChange={this.handleChange}
              />
              <button type="submit" className="btn btn-primary">PUBLISH THIS POST!</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ categories } ) {
  return {
    categories
  }
}

export default connect(mapStateToProps)(NewPost)