import {
  getPost,
  updatePost,
  deletePost,
  getComments,
  addComment,
  upVotePost,
  downVotePost,
  upVoteComment,
  downVoteComment,
  deleteComment,
  editComment
} from '../utils/api'

export const POST_DETAILS = 'POST_DETAILS'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UP_VOTE_POST = 'UP_VOTE_POST'
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST'
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'

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

export function deletePostAction (post) {
  return {
    type: DELETE_POST,
    post
  }
}

export function handleDeletePost (id) {
  return dispatch => {
    return deletePost(id)
      .then(post => dispatch(deletePostAction(post)))
  }
}

export function getCommentsAction (comments) {
  return {
    type: GET_COMMENTS,
    comments
  }
}

export function handleGetComments (id) {
  return dispatch => {
    return getComments(id)
     .then(comments => dispatch(getCommentsAction(comments)))
     .catch(e => console.warn('Error on get comments: ',e))
  }
}

export function upVotePostAction (post) {
  return {
    type: UP_VOTE_POST,
    post
  }
}

export function downVotePostAction (post) {
  return {
    type: DOWN_VOTE_POST,
    post
  }
}

export function handleUpVotePost (id) {
  return dispatch => {
    return upVotePost(id)
      .then(post => dispatch(upVotePostAction(post)))
      .catch(e => console.warn('An error on vote post: ',e))
  }
}

export function handleDownVotePost (id) {
  return dispatch => {
    return downVotePost(id)
      .then(post => dispatch(downVotePostAction(post)))
      .catch(e => console.warn('An error on vote post: ',e))
  }
}

export function addCommentAction (comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function handleAddComment (comment) {
  return dispatch => {
    return addComment(comment)
      .then(comment => dispatch(addCommentAction(comment)))
      .catch(e => console.log('Error on add new comment: ',e))
  }
}

export function upVoteCommentAction (comment) {
  return {
    type: UP_VOTE_COMMENT,
    comment
  }
}

export function downVoteCommentAction (comment) {
  return {
    type: DOWN_VOTE_COMMENT,
    comment
  }
}

export function handleUpVoteComment (id) {
  return dispatch => {
    return upVoteComment(id)
      .then(comment => dispatch(upVoteCommentAction(comment)))
  }
}

export function handleDownVoteComment (id) {
  return dispatch => {
    return downVoteComment(id)
      .then(comment => dispatch(downVoteCommentAction(comment)))
  }
}

export function deleteCommentAction (comment) {
  return {
    type: DELETE_COMMENT,
    comment
  }
}

export function handleDeleteComment (id) {
  return dispatch => {
    return deleteComment(id)
      .then(comment => dispatch(deleteCommentAction(comment)))
      .catch(e => console.warn('Error on delete: ',e))
  }
}

export function editCommentAction (comment) {
  return {
    type: EDIT_COMMENT,
    comment
  }
}

export function handleEditComment (comment) {
  return dispatch => {
    return editComment(comment)
      .then(comment => dispatch(editCommentAction(comment)))
      .catch(e => console.error('Error on edit comment: ', e))
  }
}