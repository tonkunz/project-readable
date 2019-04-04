import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Componentents
import Header from './Header'
import Footer from './Footer'
import SinglePostPage from './SinglePostPage'
import NewPost from './NewPost'
import EditPost from './EditPost'
import EditComment from './EditComment'
import Dashboard from './Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Header />
        <Route exact path='/' component={Dashboard}/>
        <Route path='/new' component={NewPost}/>
        <Route exact path='/:category/:id' component={SinglePostPage} />
        <Route path='/:category/:id/edit-post' component={EditPost} />
        <Route path='/edit-post/:id' component={EditComment}/>
        <Footer />
      </div>
      </Router>
    )
  }
}

export default App