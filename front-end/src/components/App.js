import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import Content from './Content'

import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <hr className='app-hr'/>
        <Content />
        <Footer />
      </div>
    )
  }
}

export default connect()(App)