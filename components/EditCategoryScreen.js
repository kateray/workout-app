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
    const { params } = this.props.navigation.state;
    return (
      <View>
        <AddExercise categoryName={params.name} />
        <ExerciseList categoryName={params.name} />
      </View>
    );
  }
}
