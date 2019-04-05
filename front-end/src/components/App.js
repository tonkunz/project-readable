import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Componentents
import Header from './Header'
import Footer from './Footer'
import SinglePostPage from './SinglePostPage'
import NewPost from './NewPost'
import EditPost from './EditPost'
import Dashboard from './Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Route exact path='/' component={Dashboard}/>
          <Route exact path='/new' component={NewPost}/>
          <Route exact path='/:category' component={Dashboard}/>
          <Route exact path='/:category/:id' component={SinglePostPage} />
          <Route path='/:category/:id/edit-post' component={EditPost} />
          <Footer />
        </Fragment>
      </Router>
    )
  }
}

export default App