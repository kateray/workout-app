import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TextInput, Text, Button, Picker } from 'react-native'
import { updateExercise, deleteExercise } from '../actions'

export class EditExerciseScreenInternal extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      text: this.props.exercise.name,
      amount: this.props.exercise.amount,
      amountType: this.props.exercise.amountType
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Edit Exercise',
    headerLeft: (
      <Button title='Cancel' onPress={()=> {
        navigation.goBack()
      }} />
    ),
    headerRight: (
      <Button title='Save' onPress={()=> {
        navigation.state.params.saveChanges()
        navigation.goBack()
      }} />
    )
  })

  saveChanges() {
    this.props.updateExercise(this.props.categoryId, {id: this.props.exercise.id, name: this.state.text, amount: this.state.amount, amountType: this.state.amountType})
  }

  componentDidMount(){
    this.props.navigation.setParams({ saveChanges: this.saveChanges.bind(this) })
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
