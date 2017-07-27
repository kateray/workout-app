import React, { PureComponent } from 'react'
import { View, Button } from 'react-native'
import { EditExerciseScreen } from './components/EditExerciseScreen'
import { EditWorkoutScreen } from './components/EditWorkoutScreen'
import { EditCategoryScreen } from './components/EditCategoryScreen'
import { DailyWorkoutScreen } from './components/DailyWorkoutScreen'
import { Provider } from 'react-redux'
import { configureStore } from './configureStore'
import { TabNavigator, StackNavigator } from 'react-navigation'

const store = configureStore()

const EditWorkoutNavigator = StackNavigator({
  EditWorkout: {
    screen: EditWorkoutScreen,
    tabBarLabel: 'Edit',
    navigationOptions: ({navigation}) => ({
      headerRight: (
        <Button title='Edit' onPress={()=> {
          navigation.goBack()
        }} />
      )
    })
  },
  EditCategory: { screen: EditCategoryScreen },
  EditExercise: { screen: EditExerciseScreen }
})

const HomeNavigator = StackNavigator({
  DailyWorkout: {
    screen: DailyWorkoutScreen,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Today\'s Workout',
      title: 'Workout'
    })
  }
})

const AppNavigator = TabNavigator({
  Home: { screen: HomeNavigator },
  EditWorkout: { screen: EditWorkoutNavigator }
})

export default class App extends PureComponent {
  render () {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
