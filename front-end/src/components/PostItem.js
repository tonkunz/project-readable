import React, { Component } from 'react'

class PostItem extends Component {
  render() {
    return (
    <div className="readable-postitem">
      <div className="post-content">
        <h4 className='post-title'>Post Title</h4>
        <div>
          <span className='post-span'>By: Author </span>
          <span className='post-span'>When: 19/07/92 | 12:52 </span>
        </div>
        <div>
          <p>
            Texto da postagem, aqui va iter um texto topzera hehe!
          </p>
          <hr/>
          <div>
            Curtir / Descurtir / Comentários
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default PostItem