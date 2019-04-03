import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class EditComment extends Component {
  state = {
    toPost: false,
  }

  render () {
    return (
      <div>
        New Comment Component.
      </div>
    )
  }
}

export default connect()(EditComment)