import React, { PureComponent } from 'react'
import { EditWorkoutScreen } from './components/EditWorkoutScreen'
import { EditCategoryScreen } from './components/EditCategoryScreen'
import { Provider } from 'react-redux'
import { configureStore } from './configureStore'
import { StackNavigator } from 'react-navigation'

const store = configureStore()

const AppNavigator = StackNavigator({
  Home: { screen: EditWorkoutScreen },
  EditCategory: { screen: EditCategoryScreen }
})

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
