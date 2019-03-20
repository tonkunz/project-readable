import { getInitialData } from '../utils/api'
import { receivePosts } from './posts'
import { receiveCategories } from './categories'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({posts, categories}) => {
        dispatch(receivePosts(posts))
        dispatch(receiveCategories(categories))
      })
  }
}