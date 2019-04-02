import { getPost } from '../utils/api'

export const POST_DETAILS = 'POST_DETAILS'

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