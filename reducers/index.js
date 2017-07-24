import { ADD_CATEGORY } from '../constants'

const initialState = {
  categories: []
}

export const app = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [
          ...state.categories,
          action.payload
        ]
      }
    default:
      return state
  }
}
