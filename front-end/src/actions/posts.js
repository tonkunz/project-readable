import { savePost } from '../utils/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'


export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function addPost (post) {
  return {
    type: ADD_POST,
    post
  }
}
export function handleAddPost (post) {
  return (dispatch) => {
    return savePost(post)
      .then(p => dispatch(addPost(p)))
      .catch(e => console.warn('error on save this post: ', e))
  }
}