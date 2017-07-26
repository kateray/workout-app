import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TextInput, Text, Button } from 'react-native'
import { updateExercise, deleteExercise } from '../actions'

export class EditExerciseScreenInternal extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      text: this.props.exercise.name
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Edit Exercise'
  })
  render () {
    return (
      <View>
        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize='words'
          returnKeyType='done'
          onChangeText={(text) => this.setState({text})}
          enablesReturnKeyAutomatically={Boolean(true)}
          onSubmitEditing={() => { this.props.updateExercise(this.props.categoryId, {id: this.props.exercise.id, name: this.state.text}) }}
          value={this.state.text} />
        <Button title='Delete Exercise' onPress={() => this.props.deleteExercise(this.props.categoryId, this.props.exercise.id)} />
      </View>
    )
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
  const category = state.categories.find(c => c.id === params.categoryId)
  const exercise = category.exercises.find(e => e.name === params.name)
  return {
    categoryId: params.categoryId,
    exercise
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateExercise: (categoryId, data) => dispatch(updateExercise(categoryId, data)),
    deleteExercise: (categoryId, exerciseId) => dispatch(deleteExercise(categoryId, exerciseId))
  }
}

export const EditExerciseScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExerciseScreenInternal)
