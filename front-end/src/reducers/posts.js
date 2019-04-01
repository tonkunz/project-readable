import { RECEIVE_POSTS } from '../actions/posts'

export default function posts (state = {}, action) {
  switch(action.type) {
    case RECEIVE_POSTS:
      const posts = action.posts.reduce((post, current) =>
        {post[current.id] = current; return post}, {})
      return {
        ...state,
        ...posts
      }
    default:
      return state
  }
}