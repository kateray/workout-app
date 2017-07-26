import React from 'react'
import { connect } from 'react-redux'
import { addExercise } from '../actions'
import {StyleSheet, TextInput, View} from 'react-native'
import {baseStyles} from '../BaseStyles'

class AddExerciseInternal extends React.Component {
  constructor (props) {
    super(props)
    this.state = { text: '' }
  }

  submitExercise () {
    this.props.addExercise(this.props.categoryName, {name: this.state.text})
    this.setState({text: ''})
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize='words'
          style={styles.input}
          returnKeyType='done'
          enablesReturnKeyAutomatically={Boolean(true)}
          placeholder='Add an Exercise'
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={() => { this.submitExercise() }} value={this.state.text} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ...baseStyles,
  container: {
  },
  button: {
    ...baseStyles.button,
    backgroundColor: 'green'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
})

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    addExercise: (categoryName, exercise) => dispatch(addExercise(categoryName, exercise))
  }
}

export const AddExercise = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExerciseInternal)
