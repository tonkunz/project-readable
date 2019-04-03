import {
  POST_DETAILS,
  EDIT_POST,
  GET_COMMENTS,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
  DELETE_COMMENT
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
    case UP_VOTE_POST:
      return {
        ...state,
        voteScore: state.voteScore + 1
      }
    case DOWN_VOTE_POST:
      return {
        ...state,
        voteScore: state.voteScore - 1
      }
    case UP_VOTE_COMMENT:
    case DOWN_VOTE_COMMENT:
      const { comment } = action
      const updatedComments = state.comments.map(item => (
          item.id === comment.id ? comment : item
      ))
      // console.log('DEBBUG REDUCER COMMENT: ', updatedComments)
      return {
          ...state,
          comments: updatedComments,
      }
    case DELETE_COMMENT:
      const { id } = action.comment

      let newComments = state.comments.filter(comment =>
        comment.id !== id  
      )
      // console.warn('ESSE É O NEW COMMENTS EM POST REDUCER', newComments)
      return {
          ...state,
          commentCount: state.commentCount - 1,
          comments: newComments,
      }
    default:
      return state
  }
}