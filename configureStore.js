import { compose, createStore } from 'redux'
import {app} from './reducers'
import {persistStore, autoRehydrate} from 'redux-persist'
import {AsyncStorage} from 'react-native'

export const configureStore = () => {
  let store = createStore(
    app,
    undefined,
      compose(
        autoRehydrate()
      )
  )
  persistStore(store, {storage: AsyncStorage})
  return store
}
