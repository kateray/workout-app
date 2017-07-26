import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {StyleSheet, FlatList} from 'react-native'
import {baseStyles} from '../BaseStyles'
import {ExerciseItem} from './ExerciseItem'

class ExerciseListInternal extends PureComponent {
  _keyExtractor = (item, index) => item.name

  _renderItem = ({item}) => (
    <ExerciseItem
      editExercise={this.props.editExercise}
      categoryId={this.props.categoryId}
      {...item}
    />
  )

  render () {
    return (
      <FlatList style={styles.container}
        data={this.props.exercises}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  ...baseStyles,
  container: {
    height: 1000,
    width: 250
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

function mapStateToProps (state, ownProps) {
  const category = state.categories.find(c => c.id === ownProps.categoryId)
  return {
    exercises: category.exercises
  }
}

export const ExerciseList = connect(
  mapStateToProps
)(ExerciseListInternal)
