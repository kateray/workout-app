import { ADD_CATEGORY, ADD_EXERCISE, UPDATE_EXERCISE, DELETE_EXERCISE, DELETE_CATEGORY } from '../constants'

function guid () {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4()
}

function s4 () {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
}

export function addCategory (category) {
  category = Object.assign({id: guid()}, category)
  return {
    category,
    type: ADD_CATEGORY
  }
}

export function addExercise (categoryId, exercise) {
  exercise = Object.assign({id: guid()}, exercise)
  return {
    categoryId,
    exercise,
    type: ADD_EXERCISE
  }
}

export function updateExercise (categoryId, exercise) {
  return {
    categoryId,
    exercise,
    type: UPDATE_EXERCISE
  }
}

export function deleteExercise (categoryId, exerciseId) {
  return {
    categoryId,
    exerciseId,
    type: DELETE_EXERCISE
  }
}

export function deleteCategory (categoryId) {
  return {
    categoryId,
    type: DELETE_CATEGORY
  }
}
