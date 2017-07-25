import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, TextInput } from 'react-native'

export class EditExerciseScreenInternal extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: `Exercise: ${navigation.state.params.name}`
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <TextInput
          autoCapitalize='words'
          returnKeyType='done'
          enablesReturnKeyAutomatically={true}
          placeholder='Add a Category'
          value={this.props.exercise.name} />
      </View>
    );
  }
}

function mapStateToProps (state, ownProps) {
  const params = ownProps.navigation.state.params
  const category = state.categories.find(c => c.name === params.categoryName)
  const exercise = category.exercises.find(e => e.name === params.name)
  return {exercise}
}

function mapDispatchToProps (dispatch) {
  return {
    editExercise: (payload) => dispatch(editExercise(payload))
  }
}

export const EditExerciseScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExerciseScreenInternal)
