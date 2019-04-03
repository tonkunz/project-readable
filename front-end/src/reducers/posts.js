import {
  RECEIVE_POSTS,
  ADD_POST,
  RECEIVE_CATEGORY_POSTS,
} from '../actions/posts'
import {
  EDIT_POST,
  DELETE_POST,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  DELETE_COMMENT
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
    case DELETE_POST:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          deleted: true
        }
      }
    case UP_VOTE_POST:
    case DOWN_VOTE_POST:
      return {
        ...state,
        [action.post.id]: { ...action.post }
      }
    case DELETE_COMMENT:
      const { parentId } = action.comment
      // console.warn('ParentID em posts reducer: ', parentId)

      return {
        ...state,
        [parentId]: {
          ...state[parentId],
          commentCount: state[parentId].commentCount - 1
        }
      }
    default:
      return state
  }
}