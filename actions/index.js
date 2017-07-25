function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

import { ADD_CATEGORY } from '../constants'
import { AsyncStorage } from 'react-native'

export function addCategory(payload) {
  payload = Object.assign({id: guid()}, payload)
  return {
    payload,
    type: ADD_CATEGORY
  }
}
