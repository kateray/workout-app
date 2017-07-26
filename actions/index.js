import { ADD_CATEGORY, ADD_EXERCISE, UPDATE_EXERCISE, DELETE_EXERCISE } from '../constants'
import { AsyncStorage } from 'react-native'

function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

export function addCategory(payload) {
  payload = Object.assign({id: guid()}, payload)
  return {
    payload,
    type: ADD_CATEGORY
  }
}

export function addExercise(categoryName, payload) {
  payload = Object.assign({id: guid()}, payload)
  return {
    categoryName,
    payload,
    type: ADD_EXERCISE
  }
}

export function updateExercise(categoryName, payload) {
  return {
    categoryName,
    payload,
    type: UPDATE_EXERCISE
  }
}

export function deleteExercise(categoryName, exerciseId) {
  return {
    categoryName,
    exerciseId,
    type: DELETE_EXERCISE
  }
}
