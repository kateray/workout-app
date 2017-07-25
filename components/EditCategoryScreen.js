import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { AddExercise } from './AddExercise'
import { ExerciseList } from './ExerciseList'

export class EditCategoryScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: `Category: ${navigation.state.params.name}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { state, navigate } = this.props.navigation;
    function editExercise(categoryName, exerciseName) {
      navigate('EditExercise', {categoryName: categoryName, name: exerciseName})
    }
    return (
      <View>
        <AddExercise categoryName={state.params.name} />
        <ExerciseList categoryName={state.params.name} editExercise={editExercise} />
      </View>
    );
  }
}
