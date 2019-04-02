import { POST_DETAILS } from '../actions/post'

export default function post (state = {}, action) {
  switch(action.type) {
    case POST_DETAILS:
     return {
       ...state,
       ...action.post
     }
    default:
     return state
  }
}