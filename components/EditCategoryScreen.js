import React from 'react'
import { View, Button } from 'react-native'
import { ExerciseList } from './ExerciseList'

export const EditCategoryScreen = ({navigation}) => {
  const { navigate, state } = navigation
  const openExerciseForm = (categoryId, exerciseName) => (
    navigate('EditExercise', {categoryId: categoryId, name: exerciseName})
  )
  return (
    <View>
      <Button title='Add Exercise' onPress={() => openExerciseForm(state.params.categoryId, false)} />
      <ExerciseList categoryId={state.params.categoryId} editExercise={openExerciseForm} />
    </View>
  )
}
