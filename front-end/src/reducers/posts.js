import {
  RECEIVE_POSTS,
  ADD_POST,
  RECEIVE_CATEGORY_POSTS
} from '../actions/posts'
import {
  EDIT_POST
} from '../actions/post'

export default function posts (state = {}, action) {
  switch(action.type) {
    case RECEIVE_POSTS:
      const posts = action.posts.reduce((post, current) =>
        {post[current.id] = current; return post}, {})
      return {
        ...posts
      }
    case ADD_POST:
      return {
        ...state,
        [action.post.id]: action.post,
      }
    case EDIT_POST:
      return {
        ...state,
        [action.post.id]: action.post
      }
    case RECEIVE_CATEGORY_POSTS:
      const catPosts = action.posts.reduce((post, current) =>
        {post[current.id] = current; return post}, {})
      return {
        ...catPosts
      }
    default:
      return state
  }
}