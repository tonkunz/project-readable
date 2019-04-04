import {
  POST_DETAILS,
  EDIT_POST,
  GET_COMMENTS,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
  DELETE_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT
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
      return {
          ...state,
          comments: updatedComments,
      }
    case DELETE_COMMENT:
      const { id } = action.comment

      let newComments = state.comments.filter(comment =>
        comment.id !== id  
      )
      return {
          ...state,
          commentCount: state.commentCount - 1,
          comments: newComments,
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments: state.comments.concat(action.comment),
        commentCount: state.commentCount + 1
      }
    case EDIT_COMMENT:
      return {
        ...state,
        comments: formatEditedComments(state.comments,action.comment)
      }
    default:
      return state
  }
}

function formatEditedComments (comments, actionComment) {
  return comments.map(comment =>
    (comment.id === actionComment.id)
      ? comment = actionComment 
      : comment
  )
}