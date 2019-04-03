import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class EditComment extends Component {
  state = {
    toPost: false,
  }

  handleSubmit = () => {
    alert('Você submitou o edit de comment')
    this.setState({toPost: true})
  }

  render () {
    //const { id, category } = this.props.match?

    //this.state.toPost && <Redirect to={`/${category}/${id}`}/>

    return (
      <div>
        Edit a comment here:
        <button onClick={()=> this.handleSubmit()}>
          Submit
        </button>
      </div>
    )
  }
}

export default connect()(EditComment)