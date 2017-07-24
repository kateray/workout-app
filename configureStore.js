import { createStore } from 'redux'
import {app} from './reducers'

export const configureStore = () => {
  let store = createStore(app)
  return store
}
