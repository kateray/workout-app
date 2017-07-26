import { ADD_CATEGORY, ADD_EXERCISE, UPDATE_EXERCISE, DELETE_EXERCISE } from '../constants'

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

export function addExercise (categoryName, exercise) {
  exercise = Object.assign({id: guid()}, exercise)
  return {
    categoryName,
    exercise,
    type: ADD_EXERCISE
  }
}

export function updateExercise (categoryName, exercise) {
  return {
    categoryName,
    exercise,
    type: UPDATE_EXERCISE
  }
}

export function deleteExercise (categoryName, exerciseId) {
  return {
    categoryName,
    exerciseId,
    type: DELETE_EXERCISE
  }
}
