import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { AddExercise } from './AddExercise'
import { ExerciseList } from './ExerciseList'

export class EditCategoryScreen extends PureComponent {
  render () {
    // The screen's current route is passed in to `props.navigation.state`:
    const { state, navigate } = this.props.navigation
    function editExercise (categoryId, exerciseName) {
      navigate('EditExercise', {categoryId: categoryId, name: exerciseName})
    }
    return (
      <View>
        <AddExercise categoryId={state.params.categoryId} />
        <ExerciseList categoryId={state.params.categoryId} editExercise={editExercise} />
      </View>
    )
  }
}
