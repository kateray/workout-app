import React, { PureComponent } from 'react'
import { View, Button } from 'react-native'
import { ExerciseList } from './ExerciseList'

export class EditCategoryScreen extends PureComponent {
  _openExerciseForm = (categoryId, exerciseName) => (
    this.props.navigation.navigate('EditExercise', {categoryId: categoryId, name: exerciseName})
  )

  render () {
    // The screen's current route is passed in to `props.navigation.state`:
    const { state } = this.props.navigation
    return (
      <View>
        <Button title='Add Exercise' onPress={() => this._openExerciseForm(state.params.categoryId, false)} />
        <ExerciseList categoryId={state.params.categoryId} editExercise={this._openExerciseForm} />
      </View>
    )
  }
}
