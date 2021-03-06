import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList } from 'react-native'

class DailyWorkoutScreenInternal extends PureComponent {
  _chooseExercises = () => {
    const exercises = []
    this.props.categories.forEach(c => {
      if (c.exercises.length > 0) {
        const randExerciseIndex = Math.floor(Math.random() * c.exercises.length)
        exercises.push(c.exercises[randExerciseIndex])
      }
    })
    return exercises
  }

  _keyExtractor = (item, index) => item.name

  render () {
    const exercises = this._chooseExercises()
    return (
      <View>
        <Text>Good morning, human!</Text>
        <FlatList
          data={exercises}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => <Text>{item.amount} {item.amountType} {item.name}</Text>}
        />
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    categories: state.categories
  }
}

export const DailyWorkoutScreen = connect(
  mapStateToProps
)(DailyWorkoutScreenInternal)
