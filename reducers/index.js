import { ADD_CATEGORY, ADD_EXERCISE, UPDATE_EXERCISE, DELETE_EXERCISE, DELETE_CATEGORY } from '../constants'
import { combineReducers } from 'redux'

const exercise = (state = {}, action) => {
  switch (action.type) {
    case ADD_EXERCISE:
      return Object.assign({}, {amount: '1', amountType: 'reps'}, action.exercise)
    case UPDATE_EXERCISE:
      if (state.id !== action.exercise.id) {
        return state
      }
      return Object.assign({}, state, action.exercise)
    default:
      return state
  }
}

const category = (state = {}, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return Object.assign({}, {exercises: []}, action.category)
    case UPDATE_EXERCISE:
      if (state.id !== action.categoryId) {
        return state
      }
      return Object.assign({}, state, {
        exercises: state.exercises.map(e =>
          exercise(e, action)
        )
      })
    case ADD_EXERCISE:
      if (state.id !== action.categoryId) {
        return state
      }
      return Object.assign({}, state, {
        exercises: [
          ...state.exercises,
          exercise(undefined, action)
        ]
      })
    case DELETE_EXERCISE:
      if (state.id !== action.categoryId) {
        return state
      }
      return Object.assign({}, state, {
        exercises: state.exercises.filter((i) => i.id !== action.exerciseId)
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
    case DELETE_CATEGORY:
      return state.filter((i) => i.id !== action.categoryId)
    case DELETE_EXERCISE:
    case ADD_EXERCISE:
    case UPDATE_EXERCISE:
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
