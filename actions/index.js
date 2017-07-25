import { ADD_CATEGORY, ADD_EXERCISE } from '../constants'
import { AsyncStorage } from 'react-native'

export function addCategory(payload) {
  return {
    payload,
    type: ADD_CATEGORY
  }
}

export function addExercise(payload) {
  return {
    payload,
    type: ADD_EXERCISE
  }
}
