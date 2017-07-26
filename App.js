import React, { PureComponent } from 'react'
import { View, Button } from 'react-native'
import { EditExerciseScreen } from './components/EditExerciseScreen'
import { EditWorkoutScreen } from './components/EditWorkoutScreen'
import { EditCategoryScreen } from './components/EditCategoryScreen'
import { DailyWorkoutScreen } from './components/DailyWorkoutScreen'
import { Provider } from 'react-redux'
import { configureStore } from './configureStore'
import { DrawerNavigator, StackNavigator } from 'react-navigation'

const store = configureStore()

const EditWorkoutNavigator = StackNavigator({
  EditWorkout: {
    screen: EditWorkoutScreen,
    navigationOptions: ({navigation}) => ({
      headerLeft: (
        <Button title='##' onPress={()=> {
          navigation.navigate('DrawerOpen')
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
      drawerLabel: 'Today\'s Workout',
      title: 'Workout',
      headerLeft: (
        <Button title='##' onPress={()=> {
          navigation.navigate('DrawerOpen')
        }} />
      )
    })
  }
})

const AppNavigator = DrawerNavigator({
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
