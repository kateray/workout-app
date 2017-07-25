import { ADD_CATEGORY, ADD_EXERCISE } from '../constants'
import { combineReducers } from 'redux'

const category = (state = {}, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return Object.assign({}, {exercises: []}, action.payload);
    case ADD_EXERCISE:
      if (state.name !== action.payload.categoryName) {
        return state
      }
      return Object.assign({}, state, {
        exercises: [
          ...state.exercises,
          action.payload.exercise
        ]
      })
    default:
      return state
  }
}

const categories = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [
        ...state,
        category(undefined, action)
      ]
    case ADD_EXERCISE:
      return state.map(m =>
        category(m, action)
      )
    default:
      return state
  }
}

export const app = combineReducers({
  categories
})
