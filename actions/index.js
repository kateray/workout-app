import { ADD_CATEGORY } from '../constants'

export function addCategory(payload) {
  return {
    payload,
    type: ADD_CATEGORY
  }
}
