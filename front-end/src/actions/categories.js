import { getCategories } from '../utils/api'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export function receiveCategories (categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  }
}

export function handleReceiveCategories () {
  return dispatch => {
    return getCategories()
      .then(categories => dispatch(receiveCategories(categories)))
      .catch(e => console.error('Error on receive categories: ', e))
  }
}