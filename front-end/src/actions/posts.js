import {
  savePost,
  getPosts
} from '../utils/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'
export const RECEIVE_CATEGORY_POSTS = 'RECEIVE_CATEGORY_POSTS'


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

export function receiveCategoryPosts (posts) {
  return {
    type: RECEIVE_CATEGORY_POSTS,
    posts
  }
}

export function handlePostsByCategory (category) {
  return dispatch => {
    return getPosts(category)
      .then(posts => 
        dispatch(receiveCategoryPosts(posts)))
        .catch(e => console.warn('Error occured: ', e))
  }
}