import {
  POST_DETAILS,
  EDIT_POST,
  GET_COMMENTS
} from '../actions/post'

export default function post (state = {}, action) {
  switch(action.type) {
    case POST_DETAILS:
      return {
        ...state,
        ...action.post
      }
    case EDIT_POST:
      return {
        ...state,
        ...action.post
      }
    case GET_COMMENTS:
      // console.log('Comment: ', action.comments)
      const comments = action.comments.sort((comment, current) => {
        return current.voteScore - comment.voteScore
      })
      return {
        ...state,
        comments: [...comments]
      }
    default:
      return state
  }
}