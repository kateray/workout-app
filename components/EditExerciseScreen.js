import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TextInput, Text, Button, Picker } from 'react-native'
import { addExercise, updateExercise, deleteExercise } from '../actions'

export class EditExerciseScreenInternal extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      text: this.props.exercise.name || '',
      amount: this.props.exercise.amount || '1',
      amountType: this.props.exercise.amountType || 'reps'
    }
  }

  _saveChanges = () => {
    if (this.props.exercise) {
      this.props.updateExercise(this.props.categoryId, {id: this.props.exercise.id, name: this.state.text, amount: this.state.amount, amountType: this.state.amountType})
    } else {
      this.props.addExercise(this.props.categoryId, {name: this.state.text, amount: this.state.amount, amountType: this.state.amountType})
    }
  }

  componentDidMount(){
    this.props.navigation.setParams({ saveChanges: this._saveChanges })
  }

  _delete = () => {
    this.props.deleteExercise(this.props.categoryId, this.props.exercise.id)
    this.props.navigation.goBack()
  }

  render () {
    const amountOptions = [...Array(60).keys()].map( num => {
      num = (num+1).toString()
      return <Picker.Item label={num} value={num} key={num} />
    })
    return (
      <View>
        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize='words'
          returnKeyType='done'
          onChangeText={(text) => this.setState({text})}
          enablesReturnKeyAutomatically={Boolean(true)}
          value={this.state.text} />
        <Text>Reps:</Text>
        <TextInput
          style={styles.input}
          value={this.state.amount}
          enablesReturnKeyAutomatically={Boolean(true)}
          keyboardType='numeric'
          onChangeText={(i) => this.setState({amount: i})} />
        <Picker
          selectedValue={this.state.amountType}
          onValueChange={(i) => this.setState({amountType: i})}>
          <Picker.Item label='reps' value='reps' key='reps' />
          <Picker.Item label='seconds' value='seconds' key='seconds' />
          <Picker.Item label='minutes' value='minutes' key='minutes' />
        </Picker>
        {this.props.exercise &&
          <Button title='Delete Exercise' onPress={this._delete} />
        }
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
  const exercise = params.name ? category.exercises.find(e => e.name === params.name) : params.name
  return {
    categoryId: params.categoryId,
    exercise
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addExercise: (categoryId, exercise) => dispatch(addExercise(categoryId, exercise)),
    updateExercise: (categoryId, exercise) => dispatch(updateExercise(categoryId, exercise)),
    deleteExercise: (categoryId, exerciseId) => dispatch(deleteExercise(categoryId, exerciseId))
  }
}

export const EditExerciseScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExerciseScreenInternal)
