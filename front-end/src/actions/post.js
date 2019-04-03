import {
  getPost,
  updatePost,
  deletePost
} from '../utils/api'

export const POST_DETAILS = 'POST_DETAILS'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export function receivePostDetails (post) {
  return {
    type: POST_DETAILS,
    post
  }
}

export function handlePostDetails (id) {
  return dispatch => {
    return getPost(id)
      .then(post => {
        dispatch(receivePostDetails(post))
      })
  }
}

export function editPost (post) {
  return {
    type: EDIT_POST,
    post
  }
}

export function handleEditPost (post) {
  return dispatch => {
    return updatePost(post)
      .then((post) => {
        dispatch(editPost(post))
      })
     .catch(e => console.warn('Error on edit: ',e))
  }
}

export function deletePostAction (id) {
  return {
    type: DELETE_POST,
    id
  }
}

export function handleDeletePost (id) {
  return dispatch => {
    return deletePost(id)
      .then(post => dispatch(deletePostAction(post.id)))
  }
}