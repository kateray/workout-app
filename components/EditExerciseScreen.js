import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TextInput, Text } from 'react-native'
import { updateExercise } from '../actions'

export class EditExerciseScreenInternal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.exercise.name
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Edit Exercise'
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize='words'
          returnKeyType='done'
          onChangeText={(text) => this.setState({text})}
          enablesReturnKeyAutomatically={true}
          placeholder='Add a Category'
          onSubmitEditing={() => { this.props.updateExercise(this.props.categoryName, {id: this.props.exercise.id, name: this.state.text})} }
          value={this.state.text} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
})

function mapStateToProps (state, ownProps) {
  const params = ownProps.navigation.state.params
  const category = state.categories.find(c => c.name === params.categoryName)
  const exercise = category.exercises.find(e => e.name === params.name)
  return {
    categoryName: params.categoryName,
    exercise
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateExercise: (categoryName, data) => dispatch(updateExercise(categoryName, data))
  }
}

export const EditExerciseScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExerciseScreenInternal)
